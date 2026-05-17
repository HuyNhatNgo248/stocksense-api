import { Controller, Get, Body, UseGuards, Req, Put } from '@nestjs/common';
import {
  IsNumber,
  IsOptional,
  IsBoolean,
  IsEmail,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';
import {
  SettingsService,
  ShopSettingsData,
  AlertPreferences,
  ShopDefaultSettingsData,
} from './settings.service';
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

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(365)
  @Type(() => Number)
  reviewPeriodDays?: number;
}

export class UpdateAlertPreferencesDto {
  @IsOptional()
  @IsBoolean()
  alertsEnabled?: boolean;

  @IsOptional()
  @IsEmail()
  alertEmail?: string;
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

  @Get('default')
  getDefaultSettings(): ShopDefaultSettingsData {
    return this.settingsService.getDefaultSettings();
  }

  // PUT /api/settings
  @Put()
  async updateSettings(
    @Req() req: AuthenticatedRequest,
    @Body() body: UpdateSettingsDto,
  ): Promise<ShopSettingsData> {
    return this.settingsService.updateSettings(req.shop.domain, body);
  }

  // GET /api/settings/alerts
  @Get('alerts')
  async getAlertPreferences(
    @Req() req: AuthenticatedRequest,
  ): Promise<AlertPreferences> {
    return this.settingsService.getAlertPreferences(req.shop.domain);
  }

  // PUT /api/settings/alerts
  @Put('alerts')
  async updateAlertPreferences(
    @Req() req: AuthenticatedRequest,
    @Body() body: UpdateAlertPreferencesDto,
  ): Promise<AlertPreferences> {
    return this.settingsService.updateAlertPreferences(req.shop.domain, body);
  }
}
