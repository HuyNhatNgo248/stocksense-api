import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { subDays } from 'date-fns';
import { PrismaService } from '../../database/prisma.service';
import { VelocityService } from './velocity.service';
import { ReorderService } from './reorder.service';
import { ForecastService, UpsertForecastData } from './forecast.service';

@Injectable()
export class ForecastCronService {
  private readonly logger = new Logger(ForecastCronService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly velocityService: VelocityService,
    private readonly reorderService: ReorderService,
    private readonly forecastService: ForecastService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_2AM)
  async runNightlyForecasts(): Promise<void> {
    this.logger.log('Nightly forecast run started');

    const shops = await this.prisma.shop.findMany({
      select: { id: true, domain: true },
    });

    for (const shop of shops) {
      await this.runForecastsForShop(shop.id, shop.domain);
    }

    this.logger.log('Nightly forecast run complete');
  }

  async runForecastsForShop(shopId: string, shopDomain: string): Promise<void> {
    const products = await this.prisma.product.findMany({
      where: { shopId },
      include: {
        dailySales: {
          where: { date: { gte: subDays(new Date(), 90) } },
        },
      },
    });

    const upserts: UpsertForecastData[] = products.map((product) => {
      const velocity = this.velocityService.calculateEWMA(product.dailySales);
      const stddev = this.velocityService.calculateStddev(product.dailySales);
      const safetyStock = this.reorderService.calculateSafetyStock(
        stddev,
        product.leadTimeDays,
        product.serviceLevelZ,
      );
      const reorderPoint = this.reorderService.calculateReorderPoint(
        velocity,
        product.leadTimeDays,
        safetyStock,
      );
      const daysOfStockRemaining = this.reorderService.calculateDaysRemaining(
        product.currentStock,
        velocity,
      );
      const status = this.reorderService.deriveStatus(
        product.currentStock,
        reorderPoint,
        daysOfStockRemaining,
      );

      return {
        productId: product.id,
        velocityPerDay: velocity,
        stddevDemand: stddev,
        safetyStock,
        reorderPoint,
        daysOfStockRemaining,
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

    this.logger.log(
      `Forecasts updated for shop ${shopDomain}: ${products.length} products`,
    );
  }
}
