import { Injectable } from '@nestjs/common';
import { ForecastStatus } from '@prisma/client';

@Injectable()
export class ReorderService {
  calculateSafetyStock(
    stddev: number,
    leadTimeDays: number,
    z: number,
  ): number {
    return Math.round(z * stddev * Math.sqrt(leadTimeDays) * 100) / 100;
  }

  // When dowMultipliers are provided, sums DOW-adjusted daily demand over
  // the lead time window instead of using a flat velocity * days estimate.
  calculateReorderPoint(
    velocity: number,
    leadTimeDays: number,
    safetyStock: number,
    dowMultipliers?: number[],
  ): number {
    const leadTimeDemand = dowMultipliers
      ? this.calculateLeadTimeDemand(velocity, leadTimeDays, dowMultipliers)
      : velocity * leadTimeDays;

    return Math.round((leadTimeDemand + safetyStock) * 100) / 100;
  }

  calculateSuggestedOrderQty(
    velocity: number,
    leadTimeDays: number,
    safetyStock: number,
    currentStock: number,
    reviewPeriodDays: number,
  ): number {
    const target = velocity * (leadTimeDays + reviewPeriodDays) + safetyStock;
    return Math.max(0, Math.ceil(target - currentStock));
  }

  calculateDaysRemaining(
    currentStock: number,
    velocity: number,
  ): number | null {
    if (velocity <= 0) return null;
    return Math.floor(currentStock / velocity);
  }

  deriveStatus(
    currentStock: number,
    safetyStock: number,
    reorderPoint: number,
  ): ForecastStatus {
    if (currentStock <= safetyStock) return ForecastStatus.CRITICAL;
    if (currentStock <= reorderPoint) return ForecastStatus.REORDER;
    return ForecastStatus.OK;
  }

  private calculateLeadTimeDemand(
    velocity: number,
    leadTimeDays: number,
    dowMultipliers: number[],
  ): number {
    const start = new Date();
    let demand = 0;
    for (let i = 1; i <= leadTimeDays; i++) {
      const d = new Date(start);
      d.setUTCDate(d.getUTCDate() + i);
      demand += velocity * dowMultipliers[d.getUTCDay()];
    }
    return Math.round(demand * 100) / 100;
  }
}
