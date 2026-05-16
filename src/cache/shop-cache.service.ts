import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

export const TTL = {
  METRICS: 15 * 60 * 1000,
  FORECAST_LIST: 5 * 60 * 1000,
  VELOCITY_HISTORY: 10 * 60 * 1000,
  SUGGESTED_PO: 15 * 60 * 1000,
} as const;

@Injectable()
export class ShopCacheService {
  // Tracks which keys belong to each shop so we can bulk-invalidate
  private readonly keysByShop = new Map<string, Set<string>>();

  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  /** Retrieves a cached value by key. */
  async get<T>(key: string): Promise<T | undefined> {
    return this.cache.get<T>(key);
  }

  /** Stores a value in cache and registers the key under the shop domain for bulk invalidation. */
  async set(
    shopDomain: string,
    key: string,
    value: unknown,
    ttl: number,
  ): Promise<void> {
    await this.cache.set(key, value, ttl);
    let keys = this.keysByShop.get(shopDomain);
    if (!keys) {
      keys = new Set();
      this.keysByShop.set(shopDomain, keys);
    }
    keys.add(key);
  }

  /** Deletes all cached keys associated with the given shop domain. */
  async invalidateShop(shopDomain: string): Promise<void> {
    const keys = this.keysByShop.get(shopDomain);
    if (!keys?.size) return;
    await Promise.all([...keys].map((k) => this.cache.del(k)));
    this.keysByShop.delete(shopDomain);
  }
}
