import { Injectable } from '@nestjs/common';
import { Forecast, ForecastStatus, Prisma } from '@prisma/client';
import { startOfDay, subDays, startOfMonth } from 'date-fns';
import { PrismaService } from '../../database/prisma.service';

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
      };
    };
  };
}>;

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

@Injectable()
export class ForecastService {
  constructor(private readonly prisma: PrismaService) {}

  async getForecastsForShop(
    shopDomain: string,
  ): Promise<ForecastWithProduct[]> {
    return this.prisma.forecast.findMany({
      where: {
        product: { shop: { domain: shopDomain } },
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
          },
        },
      },
      orderBy: [{ status: 'asc' }, { daysOfStockRemaining: 'asc' }],
    });
  }

  async getForecastByVariant(
    shopDomain: string,
    variantId: string,
  ): Promise<ForecastWithProduct | null> {
    return this.prisma.forecast.findFirst({
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
          },
        },
      },
    });
  }

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

  async upsertForecast(data: UpsertForecastData): Promise<Forecast> {
    return this.prisma.forecast.upsert({
      where: { productId: data.productId },
      create: data,
      update: { ...data, calculatedAt: new Date() },
    });
  }
}
