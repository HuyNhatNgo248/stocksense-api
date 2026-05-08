import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac } from 'crypto';
import { RawBodyRequest } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ShopifyHmacGuard implements CanActivate {
  constructor(private config: ConfigService) {}

  canActivate(ctx: ExecutionContext): boolean {
    const req = ctx.switchToHttp().getRequest<RawBodyRequest<Request>>();
    const hmac = req.headers['x-shopify-hmac-sha256'] as string;

    if (!hmac) throw new UnauthorizedException('Missing HMAC header');
    if (!req.rawBody) throw new UnauthorizedException('Missing raw body');

    const digest = createHmac(
      'sha256',
      this.config.getOrThrow('SHOPIFY_APP_CLIENT_SECRET'),
    )
      .update(req.rawBody)
      .digest('base64');

    if (digest !== hmac)
      throw new UnauthorizedException('Invalid HMAC signature');

    return true;
  }
}
