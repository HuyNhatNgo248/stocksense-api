import { Module } from '@nestjs/common';
import { VelocityService } from './velocity.service';
import { ReorderService } from './reorder.service';
import { ForecastService } from './forecast.service';
import { ForecastCronService } from './forecast-cron.service';
import { ForecastController } from './forecast.controller';
import { SessionGuard } from '../../common/guards/session.guard';
import { SettingsModule } from '../settings/settings.module';

@Module({
  imports: [SettingsModule],
  controllers: [ForecastController],
  providers: [
    VelocityService,
    ReorderService,
    ForecastService,
    ForecastCronService,
    SessionGuard,
  ],
  exports: [ForecastService, ForecastCronService],
})
export class ForecastModule {}
