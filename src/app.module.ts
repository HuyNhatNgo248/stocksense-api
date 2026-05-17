import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { SentryModule, SentryGlobalFilter } from '@sentry/nestjs/setup';
import { DevModule } from './modules/dev/dev.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bull';
import { HttpModule } from '@nestjs/axios';

import { AppCacheModule } from './cache/cache.module';
import { DatabaseModule } from './database/database.module';
import { ShopifyModule } from './modules/shopify/shopify.module';
import { SyncModule } from './modules/sync/sync.module';
import { ForecastModule } from './modules/forecast/forecast.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { AlertModule } from './modules/alert/alert.module';
import { PurchaseOrdersModule } from './modules/purchase-orders/purchase-orders.module';
import { SettingsModule } from './modules/settings/settings.module';

@Module({
  imports: [
    SentryModule.forRoot(),

    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      cache: true,
    }),

    ScheduleModule.forRoot(),

    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        redis: {
          host: new URL(config.getOrThrow<string>('REDIS_URL')).hostname,
          port:
            Number(new URL(config.getOrThrow<string>('REDIS_URL')).port) ||
            6379,
          password:
            new URL(config.getOrThrow<string>('REDIS_URL')).password ||
            undefined,
        },
        defaultJobOptions: {
          attempts: 3,
          backoff: { type: 'exponential', delay: 5000 },
          removeOnComplete: 100,
          removeOnFail: 200,
        },
      }),
    }),

    HttpModule.register({
      timeout: 10_000,
      maxRedirects: 3,
    }),

    AppCacheModule,
    DatabaseModule,
    ShopifyModule,
    SyncModule,
    ForecastModule,
    InventoryModule,
    AlertModule,
    PurchaseOrdersModule,
    SettingsModule,
    ...(process.env.NODE_ENV !== 'production' ? [DevModule] : []),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: SentryGlobalFilter,
    },
  ],
})
export class AppModule {}
