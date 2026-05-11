import { Controller, Get, Body, UseGuards, Req, Put } from '@nestjs/common';
import { IsNumber, IsOptional, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { SettingsService, ShopSettingsData } from './settings.service';
import { SessionGuard } from '../../common/guards/session.guard';

import type { AuthenticatedRequest } from '../../common/types/authenticated-request.interface';

export class UpdateSettingsDto {
  @IsOptional()
  @IsNumber()
  @Min(0.01)
  @Max(1)
  @Type(() => Number)
  ewmaAlpha?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  defaultLeadTimeDays?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  defaultServiceLevelZ?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(168)
  @Type(() => Number)
  syncFrequencyHours?: number;
}

@Controller('settings')
@UseGuards(SessionGuard)
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  // GET /api/settings
  @Get()
  async getSettings(
    @Req() req: AuthenticatedRequest,
  ): Promise<ShopSettingsData> {
    return this.settingsService.getSettings(req.shop.domain);
  }

  // PATCH /api/settings
  @Put()
  async updateSettings(
    @Req() req: AuthenticatedRequest,
    @Body() body: UpdateSettingsDto,
  ): Promise<ShopSettingsData> {
    return this.settingsService.updateSettings(req.shop.domain, body);
  }
}
