import { Injectable, Logger } from '@nestjs/common';
import { Prisma, ForecastStatus } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { MailerService } from './mailer.service';

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
        product: { shop: { domain: shopDomain } },
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

    const criticalItems = alertItems.filter(
      (i) => i.status === ForecastStatus.CRITICAL,
    );
    const reorderItems = alertItems.filter(
      (i) => i.status === ForecastStatus.REORDER,
    );

    const html = this.buildDigestHtml(shopDomain, criticalItems, reorderItems);

    await this.mailer.send({
      to: shop.alertEmail,
      subject: `StockSense: ${criticalItems.length} critical, ${reorderItems.length} reorder alerts`,
      html,
    });

    this.logger.log(
      `Daily digest sent to ${shop.alertEmail} for ${shopDomain}`,
    );
  }

  private buildDigestHtml(
    shopDomain: string,
    criticalItems: AlertItem[],
    reorderItems: AlertItem[],
  ): string {
    const buildRows = (items: AlertItem[], badgeColor: string): string =>
      items
        .map(
          (item) => `
          <tr>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${item.product.title}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${item.product.sku}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${item.product.currentStock}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${item.daysOfStockRemaining ?? '—'}d</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">
              <span style="background:${badgeColor};padding:2px 8px;border-radius:4px;font-size:12px">
                ${item.status}
              </span>
            </td>
          </tr>`,
        )
        .join('');

    const tableHeader = `
      <thead><tr style="background:#fafafa">
        <th style="padding:8px 12px;text-align:left">Product</th>
        <th style="padding:8px 12px;text-align:left">SKU</th>
        <th style="padding:8px 12px;text-align:left">Stock</th>
        <th style="padding:8px 12px;text-align:left">Days left</th>
        <th style="padding:8px 12px;text-align:left">Status</th>
      </tr></thead>`;

    const criticalSection = criticalItems.length
      ? `<h3 style="color:#A32D2D">Critical (${criticalItems.length})</h3>
         <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:8px">
           ${tableHeader}
           <tbody>${buildRows(criticalItems, '#FCEBEB')}</tbody>
         </table>`
      : '';

    const reorderSection = reorderItems.length
      ? `<h3 style="color:#854F0B;margin-top:24px">Reorder (${reorderItems.length})</h3>
         <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:8px">
           ${tableHeader}
           <tbody>${buildRows(reorderItems, '#FAEEDA')}</tbody>
         </table>`
      : '';

    return `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#111">StockSense Daily Digest</h2>
        <p style="color:#666">${shopDomain} — ${new Date().toDateString()}</p>
        ${criticalSection}
        ${reorderSection}
        <p style="color:#999;font-size:12px;margin-top:32px">
          Manage alert preferences in your StockSense settings.
        </p>
      </div>
    `;
  }
}
