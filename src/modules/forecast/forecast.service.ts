import { Injectable, NotFoundException } from '@nestjs/common';
import { Forecast, ForecastStatus, Prisma } from '@prisma/client';
import { startOfDay, subDays, startOfMonth } from 'date-fns';
import { PrismaService } from '../../database/prisma.service';
import { VelocityService, VelocityPoint } from './velocity.service';
import { ReorderService } from './reorder.service';
import { SettingsService } from '../settings/settings.service';

export type ForecastWithProduct = Prisma.ForecastGetPayload<{
  include: {
    product: {
      select: {
        id: true;
        title: true;
        sku: true;
        currentStock: true;
        leadTimeDays: true;
        shopifyVariantId: true;
        snooze: {
          select: {
            expectedArrivalDate: true;
            snoozedAt: true;
          };
        };
      };
    };
  };
}>;

export type ForecastRow = Omit<ForecastWithProduct, 'product'> & {
  product: Omit<ForecastWithProduct['product'], 'snooze'>;
  markOrdered: { expectedArrivalDate: string; snoozedAt: Date } | null;
  suggestedOrderQty: number;
};

export interface MetricDelta {
  criticalSinceYesterday: number | null;
  reorderSinceLastWeek: number | null;
  skusAddedThisMonth: number | null;
  accuracyVsLastMonth: number | null;
}

export interface MetricSummary {
  total: number;
  critical: number;
  reorder: number;
  ok: number;
  forecastAccuracy: number | null;
  delta: MetricDelta;
}

export interface PaginatedForecasts {
  data: ForecastRow[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface UpsertForecastData {
  productId: string;
  velocityPerDay: number;
  stddevDemand: number;
  safetyStock: number;
  reorderPoint: number;
  daysOfStockRemaining: number | null;
  forecastAccuracy: number;
  status: ForecastStatus;
}

function toForecastRow(
  raw: ForecastWithProduct,
  reviewPeriodDays: number,
): ForecastRow {
  const { snooze, ...product } = raw.product;
  const target =
    raw.velocityPerDay * (product.leadTimeDays + reviewPeriodDays) +
    raw.safetyStock;
  const suggestedOrderQty = Math.max(
    0,
    Math.ceil(target - product.currentStock),
  );

  return {
    ...raw,
    product,
    markOrdered: snooze
      ? {
          expectedArrivalDate: snooze.expectedArrivalDate
            .toISOString()
            .split('T')[0],
          snoozedAt: snooze.snoozedAt,
        }
      : null,
    suggestedOrderQty,
  };
}

@Injectable()
export class ForecastService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly velocityService: VelocityService,
    private readonly reorderService: ReorderService,
    private readonly settingsService: SettingsService,
  ) {}

  /** Returns a paginated list of forecast rows for a shop, including suggested order qty. */
  async getForecastsForShop(
    shopDomain: string,
    page: number,
    limit: number,
    status?: ForecastStatus,
    search?: string,
  ): Promise<PaginatedForecasts> {
    const where: Prisma.ForecastWhereInput = {
      product: {
        shop: { domain: shopDomain },
        ...(search && {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { sku: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      ...(status && { status }),
    };
    const [data, total] = await Promise.all([
      this.prisma.forecast.findMany({
        where,
        include: {
          product: {
            select: {
              id: true,
              title: true,
              sku: true,
              currentStock: true,
              leadTimeDays: true,
              shopifyProductId: true,
              shopifyVariantId: true,
              snooze: {
                select: { expectedArrivalDate: true, snoozedAt: true },
              },
            },
          },
        },
        orderBy: [{ status: 'asc' }, { daysOfStockRemaining: 'asc' }],
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.forecast.count({ where }),
    ]);

    const { reviewPeriodDays } =
      await this.settingsService.getSettings(shopDomain);

    return {
      data: data.map((row) => toForecastRow(row, reviewPeriodDays)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  /** Returns the forecast row for a specific Shopify variant, or null if not found. */
  async getForecastByVariant(
    shopDomain: string,
    variantId: string,
  ): Promise<ForecastRow | null> {
    const row = await this.prisma.forecast.findFirst({
      where: {
        product: {
          shopifyVariantId: variantId,
          shop: { domain: shopDomain },
        },
      },
      include: {
        product: {
          select: {
            id: true,
            title: true,
            sku: true,
            currentStock: true,
            leadTimeDays: true,
            shopifyVariantId: true,
            snooze: {
              select: { expectedArrivalDate: true, snoozedAt: true },
            },
          },
        },
      },
    });
    const { reviewPeriodDays } =
      await this.settingsService.getSettings(shopDomain);
    return row ? toForecastRow(row, reviewPeriodDays) : null;
  }

  /** Returns aggregated forecast counts, accuracy, and deltas vs. historical snapshots, excluding snoozed products. */
  async getMetricSummary(shopDomain: string): Promise<MetricSummary> {
    const shop = await this.prisma.shop.findUniqueOrThrow({
      where: { domain: shopDomain },
      select: { id: true },
    });

    const forecastWhere = { product: { shop: { domain: shopDomain } } };
    const now = new Date();

    const [counts, agg, yesterday, lastWeek, lastMonth, skusThisMonth] =
      await Promise.all([
        this.prisma.forecast.groupBy({
          by: ['status'],
          where: forecastWhere,
          _count: { status: true },
        }),
        this.prisma.forecast.aggregate({
          where: forecastWhere,
          _avg: { forecastAccuracy: true },
        }),
        this.prisma.metricsSnapshot.findUnique({
          where: {
            shopId_snapshotDate: {
              shopId: shop.id,
              snapshotDate: startOfDay(subDays(now, 1)),
            },
          },
        }),
        this.prisma.metricsSnapshot.findUnique({
          where: {
            shopId_snapshotDate: {
              shopId: shop.id,
              snapshotDate: startOfDay(subDays(now, 7)),
            },
          },
        }),
        this.prisma.metricsSnapshot.findFirst({
          where: {
            shopId: shop.id,
            snapshotDate: { lte: startOfDay(subDays(now, 30)) },
          },
          orderBy: { snapshotDate: 'desc' },
        }),
        this.prisma.product.count({
          where: {
            shopId: shop.id,
            createdAt: { gte: startOfMonth(now) },
          },
        }),
      ]);

    const result: MetricSummary = {
      total: 0,
      critical: 0,
      reorder: 0,
      ok: 0,
      forecastAccuracy: agg._avg.forecastAccuracy,
      delta: {
        criticalSinceYesterday: null,
        reorderSinceLastWeek: null,
        skusAddedThisMonth: skusThisMonth,
        accuracyVsLastMonth: null,
      },
    };

    for (const row of counts) {
      const key = row.status.toLowerCase() as keyof Omit<
        MetricSummary,
        'total' | 'forecastAccuracy' | 'delta'
      >;
      result[key] = row._count.status;
      result.total += row._count.status;
    }

    result.delta.criticalSinceYesterday = yesterday
      ? result.critical - yesterday.critical
      : null;

    result.delta.reorderSinceLastWeek = lastWeek
      ? result.reorder - lastWeek.reorder
      : null;

    result.delta.accuracyVsLastMonth =
      lastMonth?.forecastAccuracy != null && result.forecastAccuracy != null
        ? Math.round(
            (result.forecastAccuracy - lastMonth.forecastAccuracy) * 10,
          ) / 10
        : null;

    return result;
  }

  /** Upserts today's metric snapshot for the given shop. */
  async saveSnapshot(
    shopId: string,
    summary: Omit<MetricSummary, 'delta'>,
  ): Promise<void> {
    await this.prisma.metricsSnapshot.upsert({
      where: {
        shopId_snapshotDate: {
          shopId,
          snapshotDate: startOfDay(new Date()),
        },
      },
      create: {
        shopId,
        snapshotDate: startOfDay(new Date()),
        critical: summary.critical,
        reorder: summary.reorder,
        ok: summary.ok,
        total: summary.total,
        forecastAccuracy: summary.forecastAccuracy,
      },
      update: {
        critical: summary.critical,
        reorder: summary.reorder,
        ok: summary.ok,
        total: summary.total,
        forecastAccuracy: summary.forecastAccuracy,
      },
    });
  }

  /** Returns the EWMA velocity series for a specific variant over the last 44 days. */
  async getVelocityHistory(
    shopDomain: string,
    variantId: string,
  ): Promise<VelocityPoint[]> {
    const product = await this.prisma.product.findFirst({
      where: {
        shopifyVariantId: variantId,
        shop: { domain: shopDomain },
      },
      include: {
        dailySales: {
          where: { date: { gte: subDays(new Date(), 44) } },
          orderBy: { date: 'asc' },
        },
      },
    });

    if (!product) return [];

    return this.velocityService.calculateEWMASeries(product.dailySales);
  }

  /** Creates or updates an alert snooze for a variant, recording the expected stock arrival date. */
  async markOrdered(
    shopDomain: string,
    variantId: string,
    expectedArrivalDate: Date,
  ): Promise<void> {
    const product = await this.prisma.product.findFirst({
      where: { shopifyVariantId: variantId, shop: { domain: shopDomain } },
      select: { id: true, shopId: true },
    });
    if (!product) throw new NotFoundException('Product not found');

    await this.prisma.alertSnooze.upsert({
      where: { productId: product.id },
      create: {
        productId: product.id,
        shopId: product.shopId,
        expectedArrivalDate,
        snoozedAt: new Date(),
      },
      update: { expectedArrivalDate, snoozedAt: new Date() },
    });
  }

  /** Removes the alert snooze for a variant. */
  async unmarkOrdered(shopDomain: string, variantId: string): Promise<void> {
    const product = await this.prisma.product.findFirst({
      where: { shopifyVariantId: variantId, shop: { domain: shopDomain } },
      select: { id: true },
    });
    if (!product) throw new NotFoundException('Product not found');

    await this.prisma.alertSnooze.deleteMany({
      where: { productId: product.id },
    });
  }

  /** Re-derives and persists forecast status and days-remaining after a real-time inventory change. */
  async refreshProductStatus(
    productId: string,
    newStock: number,
  ): Promise<void> {
    const forecast = await this.prisma.forecast.findUnique({
      where: { productId },
      select: { safetyStock: true, reorderPoint: true, velocityPerDay: true },
    });
    if (!forecast) return;

    const status = this.reorderService.deriveStatus(
      newStock,
      forecast.safetyStock,
      forecast.reorderPoint,
    );
    const daysOfStockRemaining = this.reorderService.calculateDaysRemaining(
      newStock,
      forecast.velocityPerDay,
    );

    await this.prisma.forecast.update({
      where: { productId },
      data: { status, daysOfStockRemaining },
    });
  }

  /** Returns the mean forecast accuracy across a set of upsert payloads, or null if empty. */
  averageAccuracy(upserts: UpsertForecastData[]): number | null {
    if (upserts.length === 0) return null;
    return (
      upserts.reduce((sum, u) => sum + u.forecastAccuracy, 0) / upserts.length
    );
  }

  /** Creates or updates a forecast record for a product. */
  async upsertForecast(data: UpsertForecastData): Promise<Forecast> {
    return this.prisma.forecast.upsert({
      where: { productId: data.productId },
      create: data,
      update: { ...data, calculatedAt: new Date() },
    });
  }
}
