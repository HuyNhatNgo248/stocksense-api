import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Controller('shops')
export class ShopsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get(':shop/installed')
  async isInstalled(
    @Param('shop') shop: string,
  ): Promise<{ installed: boolean }> {
    const existing = await this.prisma.shop.findUnique({
      where: { domain: shop },
    });
    return { installed: !!existing };
  }
}
