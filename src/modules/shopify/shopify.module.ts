import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { HttpModule } from '@nestjs/axios';
import { ShopifyAuthController } from './shopify-auth.controller';
import { ShopifyAuthService } from './shopify-auth.service';
import { ShopifyWebhookController } from './shopify-webhook.controller';
import { ShopsController } from './shops.controller';
import { ShopifyApiService } from './shopify-api.service';
import { forwardRef } from '@nestjs/common';
import { SyncModule } from '../sync/sync.module';

@Module({
  imports: [
    HttpModule,
    BullModule.registerQueue({ name: 'order-sync' }),
    forwardRef(() => SyncModule),
  ],
  controllers: [
    ShopifyAuthController,
    ShopifyWebhookController,
    ShopsController,
  ],
  providers: [ShopifyAuthService, ShopifyApiService],
  exports: [ShopifyApiService],
})
export class ShopifyModule {}
