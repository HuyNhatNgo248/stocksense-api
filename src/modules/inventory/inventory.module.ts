import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { SessionGuard } from '../../common/guards/session.guard';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService, SessionGuard],
  exports: [InventoryService],
})
export class InventoryModule {}
