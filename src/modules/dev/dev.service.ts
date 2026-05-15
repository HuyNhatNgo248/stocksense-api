import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { startOfDay, subDays } from 'date-fns';
import { PrismaService } from '../../database/prisma.service';
import { ForecastCronService } from '../forecast/forecast-cron.service';

type SalesProfile = 'steady' | 'growing' | 'volatile' | 'slow';

const PROFILES: SalesProfile[] = ['steady', 'growing', 'volatile', 'slow'];

function fakeDailySales(profile: SalesProfile): number {
  switch (profile) {
    case 'steady': {
      const base = 3 + Math.random() * 5;
      return Math.max(0, Math.round(base + (Math.random() - 0.5) * base * 0.4));
    }
    case 'growing': {
      const val = 4 + Math.random() * 4;
      return Math.max(0, Math.round(val + (Math.random() - 0.5) * val * 0.5));
    }
    case 'volatile': {
      const base = 4 + Math.random() * 4;
      const spike = Math.random() < 0.15 ? base * 3 : 0;
      return Math.max(
        0,
        Math.round(base + spike + (Math.random() - 0.5) * base),
      );
    }
    case 'slow':
      return Math.random() < 0.3 ? Math.ceil(Math.random() * 2) : 0;
  }
}

const DEV_SHOP_DOMAIN = 'stocksense-dev-chm95wjf.myshopify.com';

@Injectable()
export class DevService {
  private readonly logger = new Logger(DevService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly forecastCron: ForecastCronService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async runDailySimulation(): Promise<void> {
    await this.simulateDay();
  }

  async simulateDay(): Promise<{ productsUpdated: number }> {
    const today = startOfDay(new Date());

    const shop = await this.prisma.shop.findUnique({
      where: { domain: DEV_SHOP_DOMAIN },
      select: { id: true, domain: true },
    });
    if (!shop) return { productsUpdated: 0 };

    const products = await this.prisma.product.findMany({
      where: { shopId: shop.id },
      select: { id: true },
      orderBy: { createdAt: 'asc' },
    });

    for (let i = 0; i < products.length; i++) {
      const profile = PROFILES[i % PROFILES.length];
      const unitsSold = fakeDailySales(profile);

      await this.prisma.dailySale.upsert({
        where: { productId_date: { productId: products[i].id, date: today } },
        create: { productId: products[i].id, date: today, unitsSold },
        update: { unitsSold },
      });
    }

    await this.forecastCron.runForecastsForShop(shop.id, shop.domain);
    this.logger.log(
      `[DEV] Simulated day for ${shop.domain}: ${products.length} products updated`,
    );

    return { productsUpdated: products.length };
  }

  async seedHistoricalSales(days = 90): Promise<{ productsSeeded: number }> {
    const shop = await this.prisma.shop.findUnique({
      where: { domain: DEV_SHOP_DOMAIN },
      select: { id: true, domain: true },
    });
    if (!shop) return { productsSeeded: 0 };

    const products = await this.prisma.product.findMany({
      where: { shopId: shop.id },
      select: { id: true },
      orderBy: { createdAt: 'asc' },
    });

    for (let i = 0; i < products.length; i++) {
      const profile = PROFILES[i % PROFILES.length];
      const rows = Array.from({ length: days }, (_, d) => ({
        productId: products[i].id,
        date: startOfDay(subDays(new Date(), days - 1 - d)),
        unitsSold: fakeDailySales(profile),
      }));

      await this.prisma.dailySale.createMany({
        data: rows,
        skipDuplicates: true,
      });
    }

    await this.forecastCron.runForecastsForShop(shop.id, shop.domain);
    this.logger.log(
      `[DEV] Seeded ${days} days for ${shop.domain}: ${products.length} products`,
    );

    return { productsSeeded: products.length };
  }
}
