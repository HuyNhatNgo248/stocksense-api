import { createElement } from 'react';
import { Injectable, Logger } from '@nestjs/common';
import { Prisma, ForecastStatus } from '@prisma/client';
import { render } from '@react-email/render';
import { PrismaService } from '../../database/prisma.service';
import { MailerService } from './mailer.service';
import { DailyDigestEmail, DigestRow } from './emails/daily-digest';

type AlertItem = Prisma.ForecastGetPayload<{
  include: {
    product: {
      select: {
        title: true;
        sku: true;
        currentStock: true;
      };
    };
  };
}>;

@Injectable()
export class AlertService {
  private readonly logger = new Logger(AlertService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mailer: MailerService,
  ) {}

  async sendDailyDigest(shopDomain: string): Promise<void> {
    const shop = await this.prisma.shop.findUnique({
      where: { domain: shopDomain },
    });

    if (!shop?.alertsEnabled || !shop?.alertEmail) return;

    const alertItems = await this.prisma.forecast.findMany({
      where: {
        product: {
          shop: { domain: shopDomain },
          OR: [
            { snooze: null },
            { snooze: { expectedArrivalDate: { lt: new Date() } } },
          ],
        },
        status: { in: [ForecastStatus.CRITICAL, ForecastStatus.REORDER] },
      },
      include: {
        product: {
          select: { title: true, sku: true, currentStock: true },
        },
      },
      orderBy: { status: 'asc' },
    });

    if (alertItems.length === 0) {
      this.logger.log(`No alerts for ${shopDomain} — skipping digest`);
      return;
    }

    const criticalItems = alertItems
      .filter((i) => i.status === ForecastStatus.CRITICAL)
      .map(toDigestRow);
    const reorderItems = alertItems
      .filter((i) => i.status === ForecastStatus.REORDER)
      .map(toDigestRow);

    const html = await render(
      createElement(DailyDigestEmail, {
        shopDomain,
        criticalItems,
        reorderItems,
      }),
    );

    await this.mailer.send({
      to: shop.alertEmail,
      subject: `StockSense: ${criticalItems.length} critical, ${reorderItems.length} reorder alerts`,
      html,
    });

    this.logger.log(
      `Daily digest sent to ${shop.alertEmail} for ${shopDomain}`,
    );
  }
}

function toDigestRow(item: AlertItem): DigestRow {
  return {
    title: item.product.title,
    sku: item.product.sku,
    currentStock: item.product.currentStock,
    daysOfStockRemaining: item.daysOfStockRemaining,
    status: item.status,
  };
}
