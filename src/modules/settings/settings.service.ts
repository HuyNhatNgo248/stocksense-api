import { Injectable } from '@nestjs/common';
import { ShopSettings } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';

export const SETTINGS_DEFAULTS = {
  ewmaAlpha: 0.3,
  defaultLeadTimeDays: 14,
  defaultServiceLevelZ: 1.645,
  syncFrequencyHours: 12,
} as const;

export type ShopSettingsData = Omit<
  ShopSettings,
  'id' | 'shopId' | 'updatedAt'
>;

@Injectable()
export class SettingsService {
  constructor(private readonly prisma: PrismaService) {}

  async getSettings(shopDomain: string): Promise<ShopSettingsData> {
    const shop = await this.prisma.shop.findUniqueOrThrow({
      where: { domain: shopDomain },
      include: { settings: true },
    });

    return shop.settings ?? SETTINGS_DEFAULTS;
  }

  async updateSettings(
    shopDomain: string,
    data: Partial<ShopSettingsData>,
  ): Promise<ShopSettingsData> {
    const shop = await this.prisma.shop.findUniqueOrThrow({
      where: { domain: shopDomain },
      select: { id: true },
    });

    const settings = await this.prisma.shopSettings.upsert({
      where: { shopId: shop.id },
      create: { shopId: shop.id, ...SETTINGS_DEFAULTS, ...data },
      update: data,
    });

    return settings;
  }
}
