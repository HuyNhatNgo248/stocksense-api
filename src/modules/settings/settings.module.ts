import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { SessionGuard } from '../../common/guards/session.guard';

@Module({
  controllers: [SettingsController],
  providers: [SettingsService, SessionGuard],
  exports: [SettingsService],
})
export class SettingsModule {}
