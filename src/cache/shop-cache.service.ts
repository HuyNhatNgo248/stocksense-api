import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

export const TTL = {
  METRICS: 15 * 60,
  FORECAST_LIST: 5 * 60,
  VELOCITY_HISTORY: 10 * 60,
  SUGGESTED_PO: 15 * 60,
} as const;

@Injectable()
export class ShopCacheService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cache: Cache,
  ) {}

  async get<T>(key: string): Promise<T | undefined> {
    return this.cache.get<T>(key);
  }

  async set(
    shopDomain: string,
    key: string,
    value: unknown,
    ttl: number,
  ): Promise<void> {
    await this.cache.set(key, value, ttl);

    const registryKey = this.getRegistryKey(shopDomain);

    const existing = (await this.cache.get<string[]>(registryKey)) ?? [];

    if (!existing.includes(key)) {
      existing.push(key);

      await this.cache.set(registryKey, existing, ttl);
    }
  }

  async clear() {
    return this.cache.clear();
  }

  async invalidateShop(shopDomain: string): Promise<void> {
    const registryKey = this.getRegistryKey(shopDomain);

    const keys = (await this.cache.get<string[]>(registryKey)) ?? [];

    await Promise.all(keys.map((k) => this.cache.del(k)));

    await this.cache.del(registryKey);
  }

  private getRegistryKey(shopDomain: string): string {
    return `shop:${shopDomain}:keys`;
  }
}
