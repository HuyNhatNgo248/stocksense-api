import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { format } from 'date-fns';
import { PrismaService } from '../../database/prisma.service';
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
    @InjectQueue('order-sync') private readonly syncQueue: Queue,
  ) {}

  async triggerBackfill(shop: string, daysBack = 90): Promise<void> {
    await this.syncQueue.add(
      'backfill',
      { shop, daysBack },
      { attempts: 3, backoff: { type: 'exponential', delay: 5000 } },
    );
    this.logger.log(`Backfill queued for ${shop}`);
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

    await this.prisma.product.updateMany({
      where: {
        shopId: dbShop.id,
        shopifyVariantId: String(payload.inventory_item_id),
      },
      data: {
        currentStock: Math.max(0, payload.available ?? 0),
        stockUpdatedAt: new Date(),
      },
    });
  }

  async handleUninstall(shop: string): Promise<void> {
    this.logger.log(`Shop uninstalled: ${shop}`);
    await this.prisma.shop.delete({ where: { domain: shop } });
  }
}
