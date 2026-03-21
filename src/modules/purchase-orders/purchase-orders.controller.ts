import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import {
  IsString,
  IsOptional,
  IsArray,
  IsNumber,
  IsEnum,
  ValidateNested,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PoStatus } from '@prisma/client';
import { SessionGuard } from '../../common/guards/session.guard';
import {
  PurchaseOrdersService,
  PurchaseOrderWithLineItems,
  SuggestedPoLine,
} from './purchase-orders.service';

import type { AuthenticatedRequest } from '../../common/types/authenticated-request.interface';

export class PoLineItemDto {
  @IsString()
  productId!: string;

  @IsNumber()
  @Min(1)
  @Type(() => Number)
  quantity!: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  unitCost?: number;
}

export class CreatePoDto {
  @IsOptional()
  @IsString()
  notes?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PoLineItemDto)
  lineItems!: PoLineItemDto[];
}

export class UpdatePoStatusDto {
  @IsEnum(PoStatus)
  status!: PoStatus;
}

@Controller('purchase-orders')
@UseGuards(SessionGuard)
export class PurchaseOrdersController {
  constructor(private readonly poService: PurchaseOrdersService) {}

  // GET /api/purchase-orders
  @Get()
  async getAll(
    @Req() req: AuthenticatedRequest,
  ): Promise<PurchaseOrderWithLineItems[]> {
    return this.poService.getAllForShop(req.shop.domain);
  }

  // GET /api/purchase-orders/suggested
  @Get('suggested')
  async getSuggested(
    @Req() req: AuthenticatedRequest,
  ): Promise<SuggestedPoLine[]> {
    return this.poService.generateSuggestedPo(req.shop.domain);
  }

  // GET /api/purchase-orders/:id
  @Get(':id')
  async getOne(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
  ): Promise<PurchaseOrderWithLineItems> {
    return this.poService.getOne(req.shop.domain, id);
  }

  // POST /api/purchase-orders
  @Post()
  async create(
    @Req() req: AuthenticatedRequest,
    @Body() body: CreatePoDto,
  ): Promise<PurchaseOrderWithLineItems> {
    return this.poService.create(req.shop.domain, body);
  }

  // PATCH /api/purchase-orders/:id/status
  @Patch(':id/status')
  async updateStatus(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
    @Body() body: UpdatePoStatusDto,
  ): Promise<PurchaseOrderWithLineItems> {
    return this.poService.updateStatus(req.shop.domain, id, body.status);
  }
}
