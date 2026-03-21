import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Request } from 'express';

import type { Shop } from '@prisma/client';

interface ShopRequest extends Request {
  shop?: Shop;
}

const prisma = new PrismaClient();

@Injectable()
export class SessionGuard implements CanActivate {
  constructor() {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest<Request>();
    const shopDomain = req.headers['x-shopify-shop-domain'] as string;

    if (!shopDomain)
      throw new UnauthorizedException('Missing shop domain header');

    const shop = await prisma.shop.findUnique({
      where: { domain: shopDomain },
    });

    if (!shop) throw new UnauthorizedException('Shop not found');

    (req as ShopRequest).shop = shop;

    return true;
  }
}
