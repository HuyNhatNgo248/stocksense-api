import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { subDays, format } from 'date-fns';
import { SentryCapture } from '../../common/sentry/capture';
import { PrismaService } from '../../database/prisma.service';
import {
  ShopifyApiService,
  ShopifyOrder,
  ShopifyProduct,
} from '../shopify/shopify-api.service';
import { ForecastCronService } from '../forecast/forecast-cron.service';
import { ShopCacheService } from '../../cache/shop-cache.service';

import type { Job } from 'bull';

interface BackfillJobData {
  shop: string;
  daysBack: number;
}

interface DailySaleAccumulator {
  productId: string;
  date: Date;
  units: number;
}

@Processor('order-sync')
export class OrderSyncProcessor {
  private readonly logger = new Logger(OrderSyncProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly shopifyApi: ShopifyApiService,
    private readonly forecastCron: ForecastCronService,
    private readonly shopCache: ShopCacheService,
  ) {}

  @Process('backfill')
  @SentryCapture({ queue: 'order-sync', job: 'backfill' })
  async handleBackfill(job: Job<BackfillJobData>): Promise<void> {
    const { shop, daysBack } = job.data;
    this.logger.log(`Starting backfill for ${shop} — ${daysBack} days`);

    const dbShop = await this.prisma.shop.findUnique({
      where: { domain: shop },
    });
    if (!dbShop) {
      this.logger.warn(`Shop not found: ${shop}`);
      return;
    }

    await this.syncProducts(shop, dbShop.id, dbShop.accessToken);

    let pageInfo: string | null = null;
    let totalOrders = 0;

    do {
      const { orders, nextPageInfo } = await this.shopifyApi.getOrders(
        shop,
        dbShop.accessToken,
        {
          createdAtMin: subDays(new Date(), daysBack),
          pageInfo,
          limit: 250,
        },
      );

      await this.upsertDailySales(dbShop.id, orders);
      totalOrders += orders.length;
      pageInfo = nextPageInfo;

      await job.progress(pageInfo ? 50 : 100);
    } while (pageInfo);

    this.logger.log(`Backfill complete for ${shop}: ${totalOrders} orders`);

    await this.forecastCron.runForecastsForShop(dbShop.id, shop);
    await this.shopCache.invalidateShop(shop);
    this.logger.log(`Initial forecasts calculated for ${shop}`);
  }

  private async syncProducts(
    shop: string,
    shopId: string,
    token: string,
  ): Promise<void> {
    const products: ShopifyProduct[] = await this.shopifyApi.getProducts(
      shop,
      token,
    );

    for (const product of products) {
      for (const variant of product.variants) {
        const title =
          variant.title !== 'Default Title'
            ? `${product.title} — ${variant.title}`
            : product.title;

        await this.prisma.product.upsert({
          where: {
            shopId_shopifyVariantId: {
              shopId,
              shopifyVariantId: String(variant.id),
            },
          },
          create: {
            shopId,
            shopifyProductId: String(product.id),
            shopifyVariantId: String(variant.id),
            shopifyInventoryItemId: String(variant.inventory_item_id),
            title,
            sku: variant.sku ?? '',
            currentStock: variant.inventory_quantity ?? 0,
          },
          update: {
            shopifyInventoryItemId: String(variant.inventory_item_id),
            title,
            sku: variant.sku ?? '',
            currentStock: variant.inventory_quantity ?? 0,
          },
        });
      }
    }
  }

  private async upsertDailySales(
    shopId: string,
    orders: ShopifyOrder[],
  ): Promise<void> {
    const salesMap = new Map<string, DailySaleAccumulator>();

    for (const order of orders) {
      const orderDate = format(new Date(order.created_at), 'yyyy-MM-dd');

      for (const item of order.line_items) {
        const product = await this.prisma.product.findUnique({
          where: {
            shopId_shopifyVariantId: {
              shopId,
              shopifyVariantId: String(item.variant_id),
            },
          },
          select: { id: true },
        });

        if (!product) continue;

        const key = `${product.id}::${orderDate}`;
        const existing = salesMap.get(key);

        if (existing) {
          existing.units += item.quantity;
        } else {
          salesMap.set(key, {
            productId: product.id,
            date: new Date(orderDate),
            units: item.quantity,
          });
        }
      }
    }

    for (const sale of salesMap.values()) {
      await this.prisma.dailySale.upsert({
        where: {
          productId_date: { productId: sale.productId, date: sale.date },
        },
        create: {
          productId: sale.productId,
          date: sale.date,
          unitsSold: sale.units,
        },
        update: { unitsSold: sale.units },
      });
    }
  }
}
