import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { subDays } from 'date-fns';
import { SentryCapture } from '../../common/sentry/capture';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class SyncCronService {
  private readonly logger = new Logger(SyncCronService.name);

  constructor(private readonly prisma: PrismaService) {}

  /** Purges daily sale records older than 90 days to keep the table lean. */
  @Cron(CronExpression.EVERY_DAY_AT_3AM)
  @SentryCapture({ cron: 'purge-daily-sales' })
  async purgeOldDailySales(): Promise<void> {
    const cutoff = subDays(new Date(), 90);
    const { count } = await this.prisma.dailySale.deleteMany({
      where: { date: { lt: cutoff } },
    });
    this.logger.log(`Purged ${count} daily sales older than 90 days`);
  }
}
