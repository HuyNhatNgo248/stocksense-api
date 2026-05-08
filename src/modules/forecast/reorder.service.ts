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

  calculateReorderPoint(
    velocity: number,
    leadTimeDays: number,
    safetyStock: number,
  ): number {
    return Math.round((velocity * leadTimeDays + safetyStock) * 100) / 100;
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
}
