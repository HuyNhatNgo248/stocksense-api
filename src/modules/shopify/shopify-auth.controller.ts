import { Controller, Get, Query, Res } from '@nestjs/common';
import { IsString } from 'class-validator';
import { ShopifyAuthService } from './shopify-auth.service';

import type { Response } from 'express';

class InstallQueryDto {
  @IsString()
  shop!: string;
}

export class CallbackQueryDto {
  @IsString()
  shop!: string;

  @IsString()
  code!: string;

  @IsString()
  hmac!: string;

  @IsString()
  state!: string;
}

@Controller('auth')
export class ShopifyAuthController {
  constructor(private readonly authService: ShopifyAuthService) {}

  // GET /api/auth/install?shop=my-store.myshopify.com
  @Get('install')
  install(@Query() query: InstallQueryDto, @Res() res: Response) {
    const url = this.authService.buildInstallUrl(query.shop);
    res.redirect(url);
  }

  // GET /api/auth/callback — Shopify redirects here after merchant approves
  @Get('callback')
  async callback(@Query() query: CallbackQueryDto, @Res() res: Response) {
    const redirectUrl = await this.authService.handleCallback(query);
    res.redirect(redirectUrl);
  }
}
