import {
  Controller,
  Get,
  Post,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import * as Sentry from '@sentry/nestjs';
import { DevService } from './dev.service';

@Controller('dev')
export class DevController {
  constructor(private readonly devService: DevService) {}

  // GET /api/dev/sentry-test  — direct Sentry capture, bypasses decorators
  @Get('sentry-test')
  sentryTest(): { ok: boolean } {
    Sentry.captureException(new Error('Direct Sentry test from StockSense'));
    return { ok: true };
  }

  // GET /api/dev/sentry-throw  — unhandled throw, tests SentryGlobalFilter
  @Get('sentry-throw')
  sentryThrow(): void {
    throw new Error('Unhandled throw test from StockSense');
  }

  // POST /api/dev/run-simulation  — invokes the @Cron method directly, tests @SentryCapture decorator
  @Post('run-simulation')
  runSimulation(): Promise<void> {
    return this.devService.runDailySimulation();
  }

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
