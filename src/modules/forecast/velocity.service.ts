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

    const seedWindow = sorted.slice(0, 14);
    let velocity =
      seedWindow.reduce((sum, d) => sum + d.unitsSold, 0) / seedWindow.length;

    for (let i = seedWindow.length; i < sorted.length; i++) {
      velocity = this.ALPHA * sorted[i].unitsSold + (1 - this.ALPHA) * velocity;
    }

    return Math.round(velocity * 100) / 100;
  }

  calculateAccuracy(dailySales: DailySale[]): number {
    if (dailySales.length < 15) return 0;

    const sorted = [...dailySales].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    const seedWindow = sorted.slice(0, 14);
    let velocity =
      seedWindow.reduce((sum, d) => sum + d.unitsSold, 0) / seedWindow.length;

    let totalPct = 0;
    let count = 0;

    for (let i = seedWindow.length; i < sorted.length; i++) {
      const actual = sorted[i].unitsSold;
      if (actual > 0) {
        totalPct += Math.abs(actual - velocity) / actual;
        count++;
      }
      velocity = this.ALPHA * actual + (1 - this.ALPHA) * velocity;
    }

    if (count === 0) return 0;
    const mape = totalPct / count;
    return Math.round(Math.max(0, (1 - mape) * 100) * 10) / 10;
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
