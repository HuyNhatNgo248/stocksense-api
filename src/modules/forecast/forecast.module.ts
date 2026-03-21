import { Module } from '@nestjs/common';
import { VelocityService } from './velocity.service';
import { ReorderService } from './reorder.service';
import { ForecastService } from './forecast.service';
import { ForecastCronService } from './forecast-cron.service';
import { ForecastController } from './forecast.controller';

@Module({
  controllers: [ForecastController],
  providers: [
    VelocityService,
    ReorderService,
    ForecastService,
    ForecastCronService,
  ],
  exports: [ForecastService],
})
export class ForecastModule {}
