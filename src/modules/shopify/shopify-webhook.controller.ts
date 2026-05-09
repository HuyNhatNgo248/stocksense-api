import {
  Controller,
  Post,
  Body,
  Headers,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { ShopifyHmacGuard } from '../../common/guards/shopify-hmac.guard';
import { SyncService } from '../sync/sync.service';

import type {
  ShopifyOrder,
  ShopifyInventoryLevel,
} from './shopify-api.service';

@Controller('webhooks')
@UseGuards(ShopifyHmacGuard)
export class ShopifyWebhookController {
  constructor(private readonly syncService: SyncService) {}

  @Post('orders/paid')
  @HttpCode(200)
  async handleOrderPaid(
    @Body() body: ShopifyOrder,
    @Headers('x-shopify-shop-domain') shop: string,
  ): Promise<{ received: boolean }> {
    await this.syncService.processNewOrder(shop, body);
    return { received: true };
  }

  @Post('inventoryLevels/update')
  @HttpCode(200)
  async handleInventoryUpdate(
    @Body() body: ShopifyInventoryLevel,
    @Headers('x-shopify-shop-domain') shop: string,
  ): Promise<{ received: boolean }> {
    await this.syncService.processInventoryUpdate(shop, body);
    return { received: true };
  }

  @Post('app/uninstalled')
  @HttpCode(200)
  async handleUninstall(
    @Headers('x-shopify-shop-domain') shop: string,
  ): Promise<{ received: boolean }> {
    await this.syncService.handleUninstall(shop);
    return { received: true };
  }
}
