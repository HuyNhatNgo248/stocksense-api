import { Injectable } from '@nestjs/common';
import { Forecast, ForecastStatus, Prisma } from '@prisma/client';
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

export interface MetricSummary {
  total: number;
  critical: number;
  reorder: number;
  ok: number;
}

export interface UpsertForecastData {
  productId: string;
  velocityPerDay: number;
  stddevDemand: number;
  safetyStock: number;
  reorderPoint: number;
  daysOfStockRemaining: number | null;
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
    const counts = await this.prisma.forecast.groupBy({
      by: ['status'],
      where: {
        product: { shop: { domain: shopDomain } },
      },
      _count: { status: true },
    });

    const result: MetricSummary = { total: 0, critical: 0, reorder: 0, ok: 0 };

    for (const row of counts) {
      const key = row.status.toLowerCase() as keyof Omit<
        MetricSummary,
        'total'
      >;
      result[key] = row._count.status;
      result.total += row._count.status;
    }

    return result;
  }

  async upsertForecast(data: UpsertForecastData): Promise<Forecast> {
    return this.prisma.forecast.upsert({
      where: { productId: data.productId },
      create: data,
      update: { ...data, calculatedAt: new Date() },
    });
  }
}
