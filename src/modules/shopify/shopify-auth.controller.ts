import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { IsString } from 'class-validator';
import { ShopifyAuthService } from './shopify-auth.service';

import type { Request, Response } from 'express';

class InstallQueryDto {
  @IsString()
  shop!: string;
}

export class CallbackQueryDto {
  @IsString()
  shop!: string;

  @IsString()
  hmac!: string;

  @IsString()
  code!: string;

  @IsString()
  state!: string;

  @IsString()
  timestamp!: string;

  @IsString()
  host!: string;
}

@Controller('auth')
export class ShopifyAuthController {
  constructor(private readonly authService: ShopifyAuthService) {}

  @Get('install')
  async install(
    @Query() query: InstallQueryDto,
    @Res() res: Response,
  ): Promise<void> {
    const installed = await this.authService.isInstalled(query.shop);

    if (installed) {
      res.sendStatus(200);
      return;
    }

    res.redirect(this.authService.buildInstallUrl(query.shop));
  }

  @Get('callback')
  async callback(
    @Query() query: CallbackQueryDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const redirectUrl = await this.authService.handleCallback(
      query,
      req.query as Record<string, string>,
    );
    res.redirect(redirectUrl);
  }
}
