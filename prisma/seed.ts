import { PrismaService } from '../src/database/prisma.service';
import { subDays } from 'date-fns';

const prisma = new PrismaService();

interface VariantSeed {
  shopifyProductId: string;
  shopifyVariantId: string;
  title: string;
  sku: string;
  currentStock: number;
  leadTimeDays: number;
}

async function main(): Promise<void> {
  const shop = await prisma.shop.upsert({
    where: { domain: 'dev-store.myshopify.com' },
    update: {},
    create: {
      domain: 'dev-store.myshopify.com',
      accessToken: 'dev-token',
      timezone: 'Asia/Tokyo',
      alertEmail: 'dev@test.com',
    },
  });

  const variants: VariantSeed[] = [
    {
      shopifyProductId: 'prod_001',
      shopifyVariantId: 'var_001',
      title: 'Reef Fins — S',
      sku: 'RFIN-S-001',
      currentStock: 12,
      leadTimeDays: 7,
    },
    {
      shopifyProductId: 'prod_001',
      shopifyVariantId: 'var_002',
      title: 'Reef Fins — M',
      sku: 'RFIN-M-002',
      currentStock: 34,
      leadTimeDays: 7,
    },
    {
      shopifyProductId: 'prod_002',
      shopifyVariantId: 'var_003',
      title: 'Neoprene Gloves — M',
      sku: 'NGLO-M-003',
      currentStock: 8,
      leadTimeDays: 10,
    },
    {
      shopifyProductId: 'prod_003',
      shopifyVariantId: 'var_004',
      title: 'Surf Wax — Tropical',
      sku: 'SWAX-TR-004',
      currentStock: 45,
      leadTimeDays: 5,
    },
    {
      shopifyProductId: 'prod_004',
      shopifyVariantId: 'var_005',
      title: 'Boardshorts — L',
      sku: 'BSHRT-L-005',
      currentStock: 92,
      leadTimeDays: 12,
    },
  ];

  for (const v of variants) {
    const product = await prisma.product.upsert({
      where: {
        shopId_shopifyVariantId: {
          shopId: shop.id,
          shopifyVariantId: v.shopifyVariantId,
        },
      },
      update: {},
      create: { shopId: shop.id, ...v },
    });

    const sales = Array.from({ length: 90 }, (_, i) => ({
      productId: product.id,
      date: subDays(new Date(), i),
      unitsSold: Math.max(0, Math.floor(Math.random() * 8)),
    }));

    await prisma.dailySale.createMany({ data: sales, skipDuplicates: true });
  }

  console.log('Seed complete');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
