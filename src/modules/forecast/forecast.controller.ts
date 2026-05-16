import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  BadRequestException,
  UseGuards,
  Req,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ForecastStatus } from '@prisma/client';
import {
  ForecastService,
  ForecastRow,
  MetricSummary,
  PaginatedForecasts,
} from './forecast.service';
import { VelocityPoint } from './velocity.service';
import { ForecastCronService } from './forecast-cron.service';
import { SessionGuard } from '../../common/guards/session.guard';
import { ShopCacheService, TTL } from '../../cache/shop-cache.service';

import type { AuthenticatedRequest } from '../../common/types/authenticated-request.interface';

@Controller('forecasts')
@UseGuards(SessionGuard)
export class ForecastController {
  constructor(
    private readonly forecastService: ForecastService,
    private readonly forecastCronService: ForecastCronService,
    private readonly shopCache: ShopCacheService,
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

    const trimmedSearch = search?.trim() || undefined;
    const cacheKey = `${req.shop.domain}:forecasts:list:p${page}:l${limit}:s${parsedStatus ?? ''}:q${trimmedSearch ?? ''}`;

    const cached = await this.shopCache.get<PaginatedForecasts>(cacheKey);
    if (cached) return cached;

    const result = await this.forecastService.getForecastsForShop(
      req.shop.domain,
      page,
      limit,
      parsedStatus,
      trimmedSearch,
    );

    await this.shopCache.set(
      req.shop.domain,
      cacheKey,
      result,
      TTL.FORECAST_LIST,
    );

    return result;
  }

  // GET /api/forecasts/metrics
  @Get('metrics')
  async getMetrics(@Req() req: AuthenticatedRequest): Promise<MetricSummary> {
    const cacheKey = `${req.shop.domain}:forecasts:metrics`;

    const cached = await this.shopCache.get<MetricSummary>(cacheKey);
    console.log(cached);
    if (cached) return cached;

    const result = await this.forecastService.getMetricSummary(req.shop.domain);
    await this.shopCache.set(req.shop.domain, cacheKey, result, TTL.METRICS);

    return result;
  }

  // GET /api/forecasts/run
  @Get('run')
  async runNow(
    @Req() req: AuthenticatedRequest,
  ): Promise<{ success: boolean }> {
    await this.forecastCronService.runForecastsForShop(
      req.shop.id,
      req.shop.domain,
    );
    await this.shopCache.invalidateShop(req.shop.domain);
    return { success: true };
  }

  // GET /api/forecasts/:variantId/velocity-history
  @Get(':variantId/velocity-history')
  async getVelocityHistory(
    @Req() req: AuthenticatedRequest,
    @Param('variantId') variantId: string,
  ): Promise<VelocityPoint[]> {
    const cacheKey = `${req.shop.domain}:forecasts:velocity:${variantId}`;

    const cached = await this.shopCache.get<VelocityPoint[]>(cacheKey);
    if (cached) return cached;

    const result = await this.forecastService.getVelocityHistory(
      req.shop.domain,
      variantId,
    );

    await this.shopCache.set(
      req.shop.domain,
      cacheKey,
      result,
      TTL.VELOCITY_HISTORY,
    );

    return result;
  }

  // PUT /api/forecasts/:variantId/mark-ordered
  @Put(':variantId/mark-ordered')
  @HttpCode(HttpStatus.NO_CONTENT)
  async markOrdered(
    @Req() req: AuthenticatedRequest,
    @Param('variantId') variantId: string,
    @Body() body: { expectedArrivalDate: string },
  ): Promise<void> {
    if (!body.expectedArrivalDate) {
      throw new BadRequestException('expectedArrivalDate is required');
    }
    const date = new Date(body.expectedArrivalDate);
    if (isNaN(date.getTime())) {
      throw new BadRequestException('expectedArrivalDate must be a valid date');
    }
    await this.forecastService.markOrdered(req.shop.domain, variantId, date);
    await this.shopCache.invalidateShop(req.shop.domain);
  }

  // DELETE /api/forecasts/:variantId/mark-ordered
  @Delete(':variantId/mark-ordered')
  @HttpCode(HttpStatus.NO_CONTENT)
  async unmarkOrdered(
    @Req() req: AuthenticatedRequest,
    @Param('variantId') variantId: string,
  ): Promise<void> {
    await this.forecastService.unmarkOrdered(req.shop.domain, variantId);
    await this.shopCache.invalidateShop(req.shop.domain);
  }

  // GET /api/forecasts/:variantId
  @Get(':variantId')
  async getOne(
    @Req() req: AuthenticatedRequest,
    @Param('variantId') variantId: string,
  ): Promise<ForecastRow | null> {
    return this.forecastService.getForecastByVariant(
      req.shop.domain,
      variantId,
    );
  }
}
