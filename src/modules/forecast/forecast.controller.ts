import { Controller, Get, Param, UseGuards, Req } from '@nestjs/common';
import {
  ForecastService,
  ForecastWithProduct,
  MetricSummary,
} from './forecast.service';
import { ForecastCronService } from './forecast-cron.service';
import { SessionGuard } from '../../common/guards/session.guard';

import type { AuthenticatedRequest } from '../../common/types/authenticated-request.interface';

@Controller('forecasts')
@UseGuards(SessionGuard)
export class ForecastController {
  constructor(
    private readonly forecastService: ForecastService,
    private readonly forecastCronService: ForecastCronService,
  ) {}

  // GET /api/forecasts
  @Get()
  async getAll(
    @Req() req: AuthenticatedRequest,
  ): Promise<ForecastWithProduct[]> {
    return this.forecastService.getForecastsForShop(req.shop.domain);
  }

  // GET /api/forecasts/metrics
  @Get('metrics')
  async getMetrics(@Req() req: AuthenticatedRequest): Promise<MetricSummary> {
    return this.forecastService.getMetricSummary(req.shop.domain);
  }

  // GET /api/forecasts/run
  // Manually trigger forecast recalculation for this shop
  @Get('run')
  async runNow(
    @Req() req: AuthenticatedRequest,
  ): Promise<{ success: boolean }> {
    await this.forecastCronService.runForecastsForShop(
      req.shop.id,
      req.shop.domain,
    );
    return { success: true };
  }

  // GET /api/forecasts/:variantId
  @Get(':variantId')
  async getOne(
    @Req() req: AuthenticatedRequest,
    @Param('variantId') variantId: string,
  ): Promise<ForecastWithProduct | null> {
    return this.forecastService.getForecastByVariant(
      req.shop.domain,
      variantId,
    );
  }
}
