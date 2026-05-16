import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { timingSafeEqual } from 'crypto';
import { InjectQueue } from '@nestjs/bull';
import { format } from 'date-fns';
import { PrismaService } from '../../database/prisma.service';
import { ShopCacheService } from '../../cache/shop-cache.service';
import { ForecastService } from '../forecast/forecast.service';
import {
  ShopifyOrder,
  ShopifyInventoryLevel,
} from '../shopify/shopify-api.service';

import type { Queue } from 'bull';

@Injectable()
export class SyncService {
  private readonly logger = new Logger(SyncService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly forecastService: ForecastService,
    private readonly shopCache: ShopCacheService,
    @InjectQueue('order-sync') private readonly syncQueue: Queue,
  ) {}

  /** Enqueues a historical order backfill job for the given shop. */
  async triggerBackfill(shop: string, daysBack = 90): Promise<void> {
    await this.syncQueue.add(
      'backfill',
      { shop, daysBack },
      {
        jobId: `backfill-${shop}`,
        attempts: 3,
        backoff: { type: 'exponential', delay: 5000 },
      },
    );
    this.logger.log(`Backfill queued for ${shop}`);
  }

  /** Verifies the provided Shopify access token matches the stored token for the shop. Throws 401 on mismatch. */
  async verifyShopToken(shop: string, token: string): Promise<void> {
    const dbShop = await this.prisma.shop.findUnique({
      where: { domain: shop },
      select: { accessToken: true },
    });

    if (!dbShop) throw new UnauthorizedException();

    const stored = Buffer.from(dbShop.accessToken);
    const provided = Buffer.from(token);
    if (
      stored.length !== provided.length ||
      !timingSafeEqual(stored, provided)
    ) {
      throw new UnauthorizedException();
    }
  }

  /** Returns the current state of the initial backfill job for a shop. */
  async getBackfillStatus(shop: string): Promise<{
    status: 'pending' | 'running' | 'done' | 'failed' | 'not_started';
  }> {
    const job = await this.syncQueue.getJob(`backfill-${shop}`);

    if (!job) return { status: 'not_started' };

    const state = await job.getState();
    const statusMap: Record<string, 'pending' | 'running' | 'done' | 'failed'> =
      {
        waiting: 'pending',
        delayed: 'pending',
        active: 'running',
        completed: 'done',
        failed: 'failed',
      };
    return { status: statusMap[state] ?? 'pending' };
  }

  async processNewOrder(shop: string, order: ShopifyOrder): Promise<void> {
    const dbShop = await this.prisma.shop.findUnique({
      where: { domain: shop },
    });
    if (!dbShop) return;

    const alreadyProcessed = await this.prisma.processedOrder.findUnique({
      where: {
        shopId_shopifyOrderId: {
          shopId: dbShop.id,
          shopifyOrderId: String(order.id),
        },
      },
    });

    if (alreadyProcessed) {
      this.logger.warn(`Duplicate webhook for order ${order.id} — skipping`);
      return;
    }

    const orderDate = format(new Date(order.created_at), 'yyyy-MM-dd');

    for (const item of order.line_items) {
      const product = await this.prisma.product.findUnique({
        where: {
          shopId_shopifyVariantId: {
            shopId: dbShop.id,
            shopifyVariantId: String(item.variant_id),
          },
        },
      });

      if (!product) continue;

      await this.prisma.dailySale.upsert({
        where: {
          productId_date: {
            productId: product.id,
            date: new Date(orderDate),
          },
        },
        create: {
          productId: product.id,
          date: new Date(orderDate),
          unitsSold: item.quantity,
        },
        update: {
          unitsSold: { increment: item.quantity },
        },
      });
    }

    await this.prisma.processedOrder.create({
      data: { shopId: dbShop.id, shopifyOrderId: String(order.id) },
    });
  }

  async processInventoryUpdate(
    shop: string,
    payload: ShopifyInventoryLevel,
  ): Promise<void> {
    const dbShop = await this.prisma.shop.findUnique({
      where: { domain: shop },
    });
    if (!dbShop) return;

    const newStock = Math.max(0, payload.available ?? 0);

    const product = await this.prisma.product.findFirst({
      where: {
        shopId: dbShop.id,
        shopifyInventoryItemId: String(payload.inventory_item_id),
      },
      select: { id: true },
    });
    if (!product) return;

    await this.prisma.product.update({
      where: { id: product.id },
      data: { currentStock: newStock, stockUpdatedAt: new Date() },
    });

    await this.forecastService.refreshProductStatus(product.id, newStock);
    await this.shopCache.invalidateShop(shop);
  }

  async handleUninstall(shop: string): Promise<void> {
    this.logger.log(`Shop uninstalled: ${shop}`);
    await this.prisma.shop.delete({ where: { domain: shop } });
  }
}
