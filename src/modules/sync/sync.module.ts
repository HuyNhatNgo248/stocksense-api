import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { SyncService } from './sync.service';
import { OrderSyncProcessor } from './order-sync.processor';
import { forwardRef } from '@nestjs/common';
import { ShopifyModule } from '../shopify/shopify.module';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'order-sync' }),
    forwardRef(() => ShopifyModule),
  ],
  providers: [SyncService, OrderSyncProcessor],
  exports: [SyncService],
})
export class SyncModule {}
