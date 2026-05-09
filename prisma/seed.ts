import axios from 'axios';
import { subDays, startOfDay } from 'date-fns';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const SHOP_DOMAIN = 'stocksense-dev-chm95wjf.myshopify.com';
const API_VERSION = '2024-01';
const DAYS = 90;

interface ShopifyVariant {
  id: number;
  title: string;
  sku: string;
  inventory_quantity: number;
}

interface ShopifyProduct {
  id: number;
  title: string;
  variants: ShopifyVariant[];
}

type SalesProfile = 'steady' | 'growing' | 'volatile' | 'slow';

function generateSales(profile: SalesProfile): number[] {
  const days = Array.from({ length: DAYS }, (_, i) => i);

  switch (profile) {
    case 'steady': {
      const base = 3 + Math.random() * 5;
      return days.map(() =>
        Math.max(0, Math.round(base + (Math.random() - 0.5) * base * 0.4)),
      );
    }
    case 'growing': {
      const start = 1 + Math.random() * 3;
      return days.map((i) => {
        const trend = start + (i / DAYS) * start * 2;
        return Math.max(
          0,
          Math.round(trend + (Math.random() - 0.5) * trend * 0.5),
        );
      });
    }
    case 'volatile': {
      const base = 4 + Math.random() * 4;
      return days.map(() => {
        const spike = Math.random() < 0.15 ? base * 3 : 0;
        return Math.max(
          0,
          Math.round(base + spike + (Math.random() - 0.5) * base),
        );
      });
    }
    case 'slow': {
      return days.map(() =>
        Math.random() < 0.3 ? Math.ceil(Math.random() * 2) : 0,
      );
    }
  }
}

async function fetchProducts(token: string): Promise<ShopifyProduct[]> {
  const url = `https://${SHOP_DOMAIN}/admin/api/${API_VERSION}/products.json`;
  const { data } = await axios.get<{ products: ShopifyProduct[] }>(url, {
    headers: { 'X-Shopify-Access-Token': token },
    params: { limit: 250, fields: 'id,title,variants' },
  });
  return data.products;
}

async function main(): Promise<void> {
  const shop = await prisma.shop.findUnique({ where: { domain: SHOP_DOMAIN } });

  const token = shop?.accessToken ?? process.env.SHOPIFY_DEV_TOKEN;
  if (!token) {
    console.error(
      `No access token found for ${SHOP_DOMAIN}.\n` +
        `Either install the app on the dev store, or set SHOPIFY_DEV_TOKEN=<token> and re-run.`,
    );
    process.exit(1);
  }

  const seededShop = await prisma.shop.upsert({
    where: { domain: SHOP_DOMAIN },
    update: {},
    create: {
      domain: SHOP_DOMAIN,
      accessToken: token,
      timezone: 'UTC',
      alertEmail: 'dev@test.com',
    },
  });

  console.log(`Fetching products from ${SHOP_DOMAIN}...`);
  const products = await fetchProducts(token);
  console.log(
    `Found ${products.length} product(s) with ${products.reduce((n, p) => n + p.variants.length, 0)} variant(s)`,
  );

  const profiles: SalesProfile[] = ['steady', 'growing', 'volatile', 'slow'];
  let variantCount = 0;

  for (const product of products) {
    for (const variant of product.variants) {
      const profile = profiles[variantCount % profiles.length];

      const seededProduct = await prisma.product.upsert({
        where: {
          shopId_shopifyVariantId: {
            shopId: seededShop.id,
            shopifyVariantId: String(variant.id),
          },
        },
        update: {
          title:
            variant.title !== 'Default Title'
              ? `${product.title} — ${variant.title}`
              : product.title,
          sku: variant.sku || `SKU-${variant.id}`,
          currentStock: Math.max(0, variant.inventory_quantity),
        },
        create: {
          shopId: seededShop.id,
          shopifyProductId: String(product.id),
          shopifyVariantId: String(variant.id),
          title:
            variant.title !== 'Default Title'
              ? `${product.title} — ${variant.title}`
              : product.title,
          sku: variant.sku || `SKU-${variant.id}`,
          currentStock: Math.max(0, variant.inventory_quantity),
          leadTimeDays: 7,
        },
      });

      const salesData = generateSales(profile);
      const rows = salesData.map((unitsSold, i) => ({
        productId: seededProduct.id,
        date: startOfDay(subDays(new Date(), DAYS - 1 - i)),
        unitsSold,
      }));

      await prisma.dailySale.createMany({ data: rows, skipDuplicates: true });

      console.log(
        `  [${profile}] ${seededProduct.title} — ${DAYS} days seeded`,
      );
      variantCount++;
    }
  }

  console.log(
    `\nDone. ${variantCount} variant(s) seeded with ${DAYS} days of sales data.`,
  );
}

main()
  .catch((err: unknown) => {
    const e = err as { response?: { data?: unknown }; message?: string };
    console.error(e?.response?.data ?? e?.message ?? err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
