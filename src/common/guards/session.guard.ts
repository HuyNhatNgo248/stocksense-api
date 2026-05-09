import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Request } from 'express';

import type { Shop } from '@prisma/client';

export interface ShopRequest extends Request {
  shop?: Shop;
  accessToken?: string;
}

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest<ShopRequest>();

    const authHeader = req.headers['authorization'];
    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing access token');
    }

    const shopDomain = req.headers['x-shopify-shop-domain'] as string;
    if (!shopDomain) {
      throw new UnauthorizedException('Missing shop domain header');
    }

    const shop = await this.prisma.shop.findUnique({
      where: { domain: shopDomain },
    });

    if (!shop) throw new UnauthorizedException('Shop not found');

    req.shop = shop;
    req.accessToken = authHeader.slice(7);
    return true;
  }
}
