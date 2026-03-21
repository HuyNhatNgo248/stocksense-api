import { Injectable } from '@nestjs/common';
import { DailySale } from '@prisma/client';

@Injectable()
export class VelocityService {
  private readonly ALPHA = 0.3;

  calculateEWMA(dailySales: DailySale[]): number {
    if (!dailySales.length) return 0;

    const sorted = [...dailySales].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    let velocity = sorted[0].unitsSold;

    for (let i = 1; i < sorted.length; i++) {
      velocity = this.ALPHA * sorted[i].unitsSold + (1 - this.ALPHA) * velocity;
    }

    return Math.round(velocity * 100) / 100;
  }

  calculateStddev(dailySales: DailySale[]): number {
    if (dailySales.length < 2) return 0;

    const units = dailySales.map((d) => d.unitsSold);
    const mean = units.reduce((a, b) => a + b, 0) / units.length;
    const variance =
      units.reduce((sum, u) => sum + Math.pow(u - mean, 2), 0) / units.length;

    return Math.round(Math.sqrt(variance) * 100) / 100;
  }
}
