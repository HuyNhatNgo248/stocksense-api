import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { InjectQueue } from '@nestjs/bull';
import { createHmac } from 'crypto';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from '../../database/prisma.service';
import { SETTINGS_DEFAULTS } from '../settings/settings.service';

import type { Queue } from 'bull';
import type { CallbackQueryDto } from './shopify-auth.controller';

interface ShopifyTokenResponse {
  access_token: string;
  scope: string;
}

@Injectable()
export class ShopifyAuthService {
  constructor(
    private readonly config: ConfigService,
    private readonly http: HttpService,
    private readonly prisma: PrismaService,
    @InjectQueue('order-sync') private readonly syncQueue: Queue,
  ) {}

  async isInstalled(shop: string): Promise<boolean> {
    const existing = await this.prisma.shop.findUnique({
      where: { domain: shop },
    });
    return !!existing;
  }

  buildInstallUrl(shop: string): string {
    const redirectUri = `${this.config.getOrThrow<string>('FRONTEND_URL')}/api/auth/callback`;
    const apiKey = this.config.getOrThrow<string>('SHOPIFY_APP_CLIENT_ID');
    const nonce = Math.random().toString(36).substring(2);

    return (
      `https://${shop}/admin/oauth/authorize` +
      `?client_id=${apiKey}` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&state=${nonce}`
    );
  }

  async handleCallback(
    query: CallbackQueryDto,
    rawQuery: Record<string, string>,
  ): Promise<string> {
    this.verifyCallbackHmac(rawQuery);

    const accessToken = await this.exchangeToken(query.shop, query.code);
    const isNew = await this.saveShop(query.shop, accessToken);

    if (isNew) {
      const existingJob = await this.syncQueue.getJob(`backfill-${query.shop}`);
      if (existingJob) await existingJob.remove();

      await this.syncQueue.add(
        'backfill',
        { shop: query.shop, daysBack: 90 },
        {
          jobId: `backfill-${query.shop}`,
          attempts: 3,
          backoff: { type: 'exponential', delay: 5000 },
        },
      );
    }

    const apiKey = this.config.getOrThrow<string>('SHOPIFY_APP_CLIENT_ID');
    return `https://${query.shop}/admin/apps/${apiKey}`;
  }

  private verifyCallbackHmac(rawQuery: Record<string, string>): void {
    const { hmac, ...rest } = rawQuery;

    const message = Object.entries(rest)
      .filter(([, v]) => v !== undefined)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${k}=${v}`)
      .join('&');

    const secret = this.config.getOrThrow<string>('SHOPIFY_APP_CLIENT_SECRET');
    const digest = createHmac('sha256', secret).update(message).digest('hex');

    console.log('HMAC debug', {
      message,
      digest,
      expected: hmac,
      rawKeys: Object.keys(rawQuery),
    });

    if (digest !== hmac) {
      throw new UnauthorizedException('Invalid OAuth HMAC');
    }
  }

  private async exchangeToken(shop: string, code: string): Promise<string> {
    const { data } = await firstValueFrom(
      this.http.post<ShopifyTokenResponse>(
        `https://${shop}/admin/oauth/access_token`,
        {
          client_id: this.config.getOrThrow<string>('SHOPIFY_APP_CLIENT_ID'),
          client_secret: this.config.getOrThrow<string>(
            'SHOPIFY_APP_CLIENT_SECRET',
          ),
          code,
        },
      ),
    );
    return data.access_token;
  }

  private async saveShop(
    domain: string,
    accessToken: string,
  ): Promise<boolean> {
    const existing = await this.prisma.shop.findUnique({ where: { domain } });

    const shop = await this.prisma.shop.upsert({
      where: { domain },
      create: { domain, accessToken },
      update: { accessToken },
    });

    if (!existing) {
      await this.prisma.shopSettings.create({
        data: { shopId: shop.id, ...SETTINGS_DEFAULTS },
      });
    }

    return !existing;
  }
}
