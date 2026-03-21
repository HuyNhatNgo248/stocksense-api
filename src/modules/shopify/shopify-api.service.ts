import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

export interface ShopifyLineItem {
  id: number;
  product_id: number;
  variant_id: number;
  quantity: number;
  sku: string;
  title: string;
  variant_title: string;
}

export interface ShopifyOrder {
  id: number;
  created_at: string;
  line_items: ShopifyLineItem[];
}

export interface ShopifyVariant {
  id: number;
  title: string;
  sku: string;
  inventory_quantity: number;
  inventory_item_id: number;
}

export interface ShopifyProduct {
  id: number;
  title: string;
  variants: ShopifyVariant[];
}

export interface ShopifyInventoryLevel {
  inventory_item_id: number;
  location_id: number;
  available: number;
}

interface ShopifyOrdersResponse {
  orders: ShopifyOrder[];
}

interface ShopifyProductsResponse {
  products: ShopifyProduct[];
}

interface ShopifyInventoryResponse {
  inventory_levels: ShopifyInventoryLevel[];
}

interface GetOrdersOptions {
  createdAtMin?: Date;
  pageInfo?: string | null;
  limit?: number;
}

interface OrdersResult {
  orders: ShopifyOrder[];
  nextPageInfo: string | null;
}

@Injectable()
export class ShopifyApiService {
  private readonly logger = new Logger(ShopifyApiService.name);

  constructor(private readonly http: HttpService) {}

  async getOrders(
    shop: string,
    token: string,
    options: GetOrdersOptions = {},
  ): Promise<OrdersResult> {
    const { createdAtMin, pageInfo, limit = 250 } = options;

    const params: Record<string, string> = {
      status: 'any',
      limit: String(limit),
      fields: 'id,created_at,line_items',
    };

    if (pageInfo) {
      params.page_info = pageInfo;
    } else if (createdAtMin) {
      params.created_at_min = createdAtMin.toISOString();
    }

    const url = `https://${shop}/admin/api/2024-01/orders.json`;
    const response = await this.getWithRetry<ShopifyOrdersResponse>(
      url,
      token,
      params,
    );
    const nextPageInfo = this.parseNextPageInfo(
      response.headers['link'] as string | undefined,
    );

    return { orders: response.data.orders, nextPageInfo };
  }

  async getProducts(shop: string, token: string): Promise<ShopifyProduct[]> {
    const url = `https://${shop}/admin/api/2024-01/products.json`;
    const response = await this.getWithRetry<ShopifyProductsResponse>(
      url,
      token,
      {
        limit: '250',
        fields: 'id,title,variants',
      },
    );
    return response.data.products;
  }

  async getInventoryLevels(
    shop: string,
    token: string,
  ): Promise<ShopifyInventoryLevel[]> {
    const url = `https://${shop}/admin/api/2024-01/inventory_levels.json`;
    const response = await this.getWithRetry<ShopifyInventoryResponse>(
      url,
      token,
      {
        limit: '250',
      },
    );
    return response.data.inventory_levels;
  }

  async registerWebhook(
    shop: string,
    token: string,
    topic: string,
    address: string,
  ): Promise<void> {
    const url = `https://${shop}/admin/api/2024-01/webhooks.json`;
    await firstValueFrom(
      this.http.post(
        url,
        { webhook: { topic, address, format: 'json' } },
        { headers: { 'X-Shopify-Access-Token': token } },
      ),
    );
  }

  private async getWithRetry<T>(
    url: string,
    token: string,
    params: Record<string, string> = {},
    retries = 5,
  ): Promise<{
    data: T;
    headers: Record<string, string | string[] | undefined>;
  }> {
    try {
      const response = await firstValueFrom(
        this.http.get<T>(url, {
          headers: { 'X-Shopify-Access-Token': token },
          params,
        }),
      );
      return {
        data: response.data,
        headers: response.headers as Record<
          string,
          string | string[] | undefined
        >,
      };
    } catch (err: unknown) {
      const httpErr = err as {
        response?: { status: number; headers: Record<string, string> };
      };
      const status = httpErr?.response?.status;

      if (status === 429 && retries > 0) {
        const retryAfter =
          parseFloat(httpErr.response?.headers['retry-after'] ?? '2') * 1000;
        this.logger.warn(
          `Rate limited by Shopify. Retrying in ${retryAfter}ms`,
        );
        await this.sleep(retryAfter);
        return this.getWithRetry<T>(url, token, params, retries - 1);
      }

      if (status !== undefined && status >= 500 && retries > 0) {
        this.logger.warn(`Shopify 5xx error (${status}). Retrying in 3s`);
        await this.sleep(3000);
        return this.getWithRetry<T>(url, token, params, retries - 1);
      }

      throw err;
    }
  }

  private parseNextPageInfo(linkHeader?: string): string | null {
    if (!linkHeader) return null;
    const match = linkHeader.match(
      /<[^>]*page_info=([^&>]+)[^>]*>;\s*rel="next"/,
    );
    return match ? match[1] : null;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
