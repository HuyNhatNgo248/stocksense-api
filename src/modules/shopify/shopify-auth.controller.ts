import { Controller, Get, Query, Res } from '@nestjs/common';
import { IsString } from 'class-validator';
import { ShopifyAuthService } from './shopify-auth.service';

import type { Response } from 'express';

export class CallbackQueryDto {
  @IsString()
  shop!: string;

  @IsString()
  hmac!: string;

  @IsString()
  code!: string;
}

@Controller('auth')
export class ShopifyAuthController {
  constructor(private readonly authService: ShopifyAuthService) {}

  @Get('callback')
  async callback(@Query() query: CallbackQueryDto, @Res() res: Response) {
    const redirectUrl = await this.authService.handleCallback(query);
    res.redirect(redirectUrl);
  }
}
