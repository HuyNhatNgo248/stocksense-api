import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, PoStatus } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';

export type PurchaseOrderWithLineItems = Prisma.PurchaseOrderGetPayload<{
  include: { lineItems: true };
}>;

export interface CreatePoLineItemData {
  productId: string;
  quantity: number;
  unitCost?: number;
}

export interface CreatePoData {
  notes?: string;
  lineItems: CreatePoLineItemData[];
}

export interface SuggestedPoLine {
  productId: string;
  title: string;
  sku: string;
  currentStock: number;
  suggestedQuantity: number;
  reorderPoint: number;
  status: string;
}

@Injectable()
export class PurchaseOrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllForShop(
    shopDomain: string,
  ): Promise<PurchaseOrderWithLineItems[]> {
    const shopId = await this.getShopId(shopDomain);

    return this.prisma.purchaseOrder.findMany({
      where: { shopId },
      include: { lineItems: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getOne(
    shopDomain: string,
    poId: string,
  ): Promise<PurchaseOrderWithLineItems> {
    const shopId = await this.getShopId(shopDomain);

    const po = await this.prisma.purchaseOrder.findFirst({
      where: { id: poId, shopId },
      include: { lineItems: true },
    });

    if (!po) throw new NotFoundException(`Purchase order not found: ${poId}`);
    return po;
  }

  async create(
    shopDomain: string,
    dto: CreatePoData,
  ): Promise<PurchaseOrderWithLineItems> {
    const shopId = await this.getShopId(shopDomain);
    const reference = this.generateReference();

    return this.prisma.purchaseOrder.create({
      data: {
        shopId,
        reference,
        notes: dto.notes,
        lineItems: {
          create: dto.lineItems.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            unitCost: item.unitCost,
          })),
        },
      },
      include: { lineItems: true },
    });
  }

  async updateStatus(
    shopDomain: string,
    poId: string,
    status: PoStatus,
  ): Promise<PurchaseOrderWithLineItems> {
    const shopId = await this.getShopId(shopDomain);

    const po = await this.prisma.purchaseOrder.findFirst({
      where: { id: poId, shopId },
    });

    if (!po) throw new NotFoundException(`Purchase order not found: ${poId}`);

    const updated = await this.prisma.purchaseOrder.update({
      where: { id: poId },
      data: { status },
      include: { lineItems: true },
    });

    if (status === PoStatus.RECEIVED) {
      await this.updateLeadTimesFromPo(updated);
    }

    return updated;
  }

  async generateSuggestedPo(shopDomain: string): Promise<SuggestedPoLine[]> {
    const shopId = await this.getShopId(shopDomain);

    const alertedForecasts = await this.prisma.forecast.findMany({
      where: {
        status: { in: ['CRITICAL', 'REORDER'] },
        product: { shopId },
      },
      include: {
        product: {
          select: {
            id: true,
            title: true,
            sku: true,
            currentStock: true,
            leadTimeDays: true,
          },
        },
      },
    });

    return alertedForecasts.map((f) => ({
      productId: f.product.id,
      title: f.product.title,
      sku: f.product.sku,
      currentStock: f.product.currentStock,
      suggestedQuantity: Math.max(
        0,
        Math.ceil(f.reorderPoint * 2 - f.product.currentStock),
      ),
      reorderPoint: f.reorderPoint,
      status: f.status,
    }));
  }

  private async updateLeadTimesFromPo(
    po: PurchaseOrderWithLineItems,
  ): Promise<void> {
    const daysDiff = Math.round(
      (Date.now() - new Date(po.createdAt).getTime()) / 86_400_000,
    );

    for (const item of po.lineItems) {
      const product = await this.prisma.product.findUnique({
        where: { id: item.productId },
        select: { leadTimeDays: true },
      });

      if (!product) continue;

      // Blend actual lead time 30% into stored value
      const updatedLeadTime =
        Math.round((0.7 * product.leadTimeDays + 0.3 * daysDiff) * 10) / 10;

      await this.prisma.product.update({
        where: { id: item.productId },
        data: { leadTimeDays: updatedLeadTime },
      });
    }
  }

  private async getShopId(shopDomain: string): Promise<string> {
    const shop = await this.prisma.shop.findUnique({
      where: { domain: shopDomain },
      select: { id: true },
    });

    if (!shop) throw new NotFoundException(`Shop not found: ${shopDomain}`);
    return shop.id;
  }

  private generateReference(): string {
    const now = new Date();
    const stamp = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, '0'),
      String(now.getDate()).padStart(2, '0'),
    ].join('');
    const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `PO-${stamp}-${rand}`;
  }
}
