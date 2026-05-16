import { Module, forwardRef } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { SyncService } from './sync.service';
import { SyncController } from './sync.controller';
import { SyncCronService } from './sync-cron.service';
import { OrderSyncProcessor } from './order-sync.processor';
import { ShopifyModule } from '../shopify/shopify.module';
import { ForecastModule } from '../forecast/forecast.module';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'order-sync' }),
    forwardRef(() => ShopifyModule),
    ForecastModule,
  ],
  controllers: [SyncController],
  providers: [SyncService, SyncCronService, OrderSyncProcessor],
  exports: [SyncService],
})
export class SyncModule {}
