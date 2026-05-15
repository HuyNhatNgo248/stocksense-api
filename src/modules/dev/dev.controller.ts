import {
  Controller,
  Post,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { DevService } from './dev.service';

@Controller('dev')
export class DevController {
  constructor(private readonly devService: DevService) {}

  // POST /api/dev/simulate-day  — add today's fake sales + re-run forecasts
  @Post('simulate-day')
  simulateDay(): Promise<{ productsUpdated: number }> {
    return this.devService.simulateDay();
  }

  // POST /api/dev/seed?days=90  — backfill N days of historical sales + run forecasts
  @Post('seed')
  seed(
    @Query('days', new DefaultValuePipe(90), ParseIntPipe) days: number,
  ): Promise<{ productsSeeded: number }> {
    return this.devService.seedHistoricalSales(days);
  }
}
