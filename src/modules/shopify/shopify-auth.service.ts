import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { InjectQueue } from '@nestjs/bull';
import { createHmac } from 'crypto';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from '../../database/prisma.service';

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

  buildInstallUrl(shop: string): string {
    const redirectUri = `${this.config.getOrThrow<string>('APP_URL')}/api/auth/callback`;
    const apiKey = this.config.getOrThrow<string>('SHOPIFY_APP_CLIENT_ID');
    const nonce = Math.random().toString(36).substring(2);

    return (
      `https://${shop}/admin/oauth/authorize` +
      `?client_id=${apiKey}` +
      `&redirect_uri=${redirectUri}` +
      `&state=${nonce}`
    );
  }

  async handleCallback(query: CallbackQueryDto): Promise<string> {
    this.verifyCallbackHmac(query);

    const accessToken = await this.exchangeToken(query.shop, query.code);
    const isNew = await this.saveShop(query.shop, accessToken);

    if (isNew) {
      await this.syncQueue.add(
        'backfill',
        { shop: query.shop, daysBack: 90 },
        { attempts: 3, backoff: { type: 'exponential', delay: 5000 } },
      );
    }

    const apiKey = this.config.getOrThrow<string>('SHOPIFY_APP_CLIENT_ID');
    return `https://${query.shop}/admin/apps/${apiKey}`;
  }

  private verifyCallbackHmac(query: CallbackQueryDto): void {
    const { hmac, ...rest } = query;

    const message = Object.entries(rest)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${k}=${v}`)
      .join('&');

    const digest = createHmac(
      'sha256',
      this.config.getOrThrow<string>('SHOPIFY_APP_CLIENT_SECRET'),
    )
      .update(message)
      .digest('hex');

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

    await this.prisma.shop.upsert({
      where: { domain },
      create: { domain, accessToken },
      update: { accessToken },
    });

    return !existing;
  }
}
