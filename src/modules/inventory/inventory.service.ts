import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';

export type ProductWithForecast = Prisma.ProductGetPayload<{
  include: { forecast: true };
}>;

export type ProductWithForecastAndSales = Prisma.ProductGetPayload<{
  include: {
    forecast: true;
    dailySales: true;
  };
}>;

export interface UpdateProductSettingsData {
  leadTimeDays?: number;
  serviceLevelZ?: number;
}

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getProductsForShop(shopDomain: string): Promise<ProductWithForecast[]> {
    return this.prisma.product.findMany({
      where: { shop: { domain: shopDomain } },
      include: { forecast: true },
      orderBy: { title: 'asc' },
    });
  }

  async getProductByVariantId(
    shopDomain: string,
    variantId: string,
  ): Promise<ProductWithForecastAndSales> {
    const product = await this.prisma.product.findFirst({
      where: {
        shopifyVariantId: variantId,
        shop: { domain: shopDomain },
      },
      include: {
        forecast: true,
        dailySales: {
          orderBy: { date: 'desc' },
          take: 90,
        },
      },
    });

    if (!product) {
      throw new NotFoundException(`Product not found: ${variantId}`);
    }

    return product;
  }

  async updateProductSettings(
    shopDomain: string,
    variantId: string,
    data: UpdateProductSettingsData,
  ): Promise<ProductWithForecast> {
    const product = await this.prisma.product.findFirst({
      where: {
        shopifyVariantId: variantId,
        shop: { domain: shopDomain },
      },
    });

    if (!product) {
      throw new NotFoundException(`Product not found: ${variantId}`);
    }

    return this.prisma.product.update({
      where: { id: product.id },
      data,
      include: { forecast: true },
    });
  }
}
