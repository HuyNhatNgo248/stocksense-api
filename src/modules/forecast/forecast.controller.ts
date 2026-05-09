import {
  Controller,
  Get,
  Param,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  BadRequestException,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ForecastStatus } from '@prisma/client';
import {
  ForecastService,
  ForecastWithProduct,
  MetricSummary,
  PaginatedForecasts,
} from './forecast.service';
import { VelocityPoint } from './velocity.service';
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

  // GET /api/forecasts?page=1&limit=20&status=CRITICAL&search=eva
  @Get()
  async getAll(
    @Req() req: AuthenticatedRequest,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
    @Query('status') status?: string,
    @Query('search') search?: string,
  ): Promise<PaginatedForecasts> {
    let parsedStatus: ForecastStatus | undefined;
    if (status !== undefined) {
      const upper = status.toUpperCase();
      if (!Object.values(ForecastStatus).includes(upper as ForecastStatus)) {
        throw new BadRequestException(
          `Invalid status. Must be one of: ${Object.values(ForecastStatus).join(', ')}`,
        );
      }
      parsedStatus = upper as ForecastStatus;
    }

    return this.forecastService.getForecastsForShop(
      req.shop.domain,
      page,
      limit,
      parsedStatus,
      search?.trim() || undefined,
    );
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

  // GET /api/forecasts/:variantId/velocity-history
  @Get(':variantId/velocity-history')
  async getVelocityHistory(
    @Req() req: AuthenticatedRequest,
    @Param('variantId') variantId: string,
  ): Promise<VelocityPoint[]> {
    return this.forecastService.getVelocityHistory(req.shop.domain, variantId);
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
