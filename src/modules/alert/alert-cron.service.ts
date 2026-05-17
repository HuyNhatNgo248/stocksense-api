import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../../database/prisma.service';
import { AlertService } from './alert.service';
import { SentryCapture, captureAndContinue } from '../../common/sentry/capture';

@Injectable()
export class AlertCronService {
  private readonly logger = new Logger(AlertCronService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly alertService: AlertService,
  ) {}

  // Run at 8am every day — after the 2am nightly forecast run
  @Cron('0 8 * * *')
  @SentryCapture({ cron: 'daily-digest' })
  async sendDailyDigests(): Promise<void> {
    this.logger.log('Daily digest run started');

    const shops = await this.prisma.shop.findMany({
      where: {
        alertsEnabled: true,
        alertEmail: { not: null },
      },
      select: { domain: true },
    });

    for (const shop of shops) {
      await captureAndContinue(
        () => this.alertService.sendDailyDigest(shop.domain),
        { cron: 'daily-digest', shop: shop.domain },
      );
    }

    this.logger.log(`Daily digests sent for ${shops.length} shops`);
  }
}
