import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { IsNumber, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';
import {
  InventoryService,
  ProductWithForecast,
  ProductWithForecastAndSales,
} from './inventory.service';
import { SessionGuard } from '../../common/guards/session.guard';

import type { AuthenticatedRequest } from '../../common/types/authenticated-request.interface';

export class UpdateProductSettingsDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  leadTimeDays?: number;
}

@Controller('inventory')
@UseGuards(SessionGuard)
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  // GET /api/inventory
  @Get()
  async getAll(
    @Req() req: AuthenticatedRequest,
  ): Promise<ProductWithForecast[]> {
    return this.inventoryService.getProductsForShop(req.shop.domain);
  }

  // GET /api/inventory/:variantId
  @Get(':variantId')
  async getOne(
    @Req() req: AuthenticatedRequest,
    @Param('variantId') variantId: string,
  ): Promise<ProductWithForecastAndSales> {
    return this.inventoryService.getProductByVariantId(
      req.shop.domain,
      variantId,
    );
  }

  // PATCH /api/inventory/:variantId/settings
  @Patch(':variantId/settings')
  async updateSettings(
    @Req() req: AuthenticatedRequest,
    @Param('variantId') variantId: string,
    @Body() body: UpdateProductSettingsDto,
  ): Promise<ProductWithForecast> {
    return this.inventoryService.updateProductSettings(
      req.shop.domain,
      variantId,
      body,
    );
  }
}
