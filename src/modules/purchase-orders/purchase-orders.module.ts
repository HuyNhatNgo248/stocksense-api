import { Module } from '@nestjs/common';
import { PurchaseOrdersService } from './purchase-orders.service';
import { PurchaseOrdersController } from './purchase-orders.controller';
import { SessionGuard } from '../../common/guards/session.guard';

@Module({
  controllers: [PurchaseOrdersController],
  providers: [PurchaseOrdersService, SessionGuard],
  exports: [PurchaseOrdersService],
})
export class PurchaseOrdersModule {}
