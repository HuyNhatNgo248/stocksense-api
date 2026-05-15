import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { subDays } from 'date-fns';
import { PrismaService } from '../../database/prisma.service';
import { VelocityService } from './velocity.service';
import { ReorderService } from './reorder.service';
import { ForecastService, UpsertForecastData } from './forecast.service';
import { SettingsService } from '../settings/settings.service';

@Injectable()
export class ForecastCronService {
  private readonly logger = new Logger(ForecastCronService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly velocityService: VelocityService,
    private readonly reorderService: ReorderService,
    private readonly forecastService: ForecastService,
    private readonly settingsService: SettingsService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_2AM)
  async runNightlyForecasts(): Promise<void> {
    this.logger.log('Nightly forecast run started');

    const shops = await this.prisma.shop.findMany({
      select: { id: true, domain: true },
    });

    await Promise.all(
      shops.map((shop) => this.runForecastsForShop(shop.id, shop.domain)),
    );

    this.logger.log('Nightly forecast run complete');
  }

  async runForecastsForShop(shopId: string, shopDomain: string): Promise<void> {
    const settings = await this.settingsService.getSettings(shopDomain);

    const products = await this.prisma.product.findMany({
      where: { shopId },
      include: {
        dailySales: {
          where: { date: { gte: subDays(new Date(), 180) } },
        },
      },
    });

    const upserts: UpsertForecastData[] = products.map((product) => {
      const leadTimeDays = product.leadTimeDays ?? settings.defaultLeadTimeDays;
      const serviceLevelZ = settings.defaultServiceLevelZ;

      const alpha = this.velocityService.findBestAlpha(
        product.dailySales,
        settings.ewmaAlpha,
      );
      const dowMultipliers = this.velocityService.calculateDayOfWeekMultipliers(
        product.dailySales,
      );

      const velocity = this.velocityService.calculateEWMA(
        product.dailySales,
        alpha,
      );
      const stddev = this.velocityService.calculateStddev(
        product.dailySales,
        alpha,
      );
      const safetyStock = this.reorderService.calculateSafetyStock(
        stddev,
        leadTimeDays,
        serviceLevelZ,
      );
      const reorderPoint = this.reorderService.calculateReorderPoint(
        velocity,
        leadTimeDays,
        safetyStock,
        dowMultipliers,
      );
      const daysOfStockRemaining = this.reorderService.calculateDaysRemaining(
        product.currentStock,
        velocity,
      );
      const status = this.reorderService.deriveStatus(
        product.currentStock,
        safetyStock,
        reorderPoint,
      );
      const forecastAccuracy = this.velocityService.calculateAccuracy(
        product.dailySales,
        alpha,
      );

      return {
        productId: product.id,
        velocityPerDay: velocity,
        stddevDemand: stddev,
        safetyStock,
        reorderPoint,
        daysOfStockRemaining,
        forecastAccuracy,
        status,
      };
    });

    await this.prisma.$transaction(
      upserts.map((data) =>
        this.prisma.forecast.upsert({
          where: { productId: data.productId },
          create: data,
          update: { ...data, calculatedAt: new Date() },
        }),
      ),
    );

    const statusCounts = upserts.reduce(
      (acc, u) => {
        const key = u.status.toLowerCase() as 'ok' | 'reorder' | 'critical';
        acc[key]++;
        acc.total++;
        return acc;
      },
      { ok: 0, reorder: 0, critical: 0, total: 0 },
    );
    const avgAccuracy =
      upserts.length > 0
        ? upserts.reduce((sum, u) => sum + u.forecastAccuracy, 0) /
          upserts.length
        : null;

    await this.forecastService.saveSnapshot(shopId, {
      ...statusCounts,
      forecastAccuracy: avgAccuracy,
    });

    this.logger.log(
      `Forecasts updated for shop ${shopDomain}: ${products.length} products`,
    );
  }
}
