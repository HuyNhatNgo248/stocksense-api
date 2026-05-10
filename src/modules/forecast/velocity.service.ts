import { Injectable } from '@nestjs/common';
import { DailySale } from '@prisma/client';

export interface VelocityPoint {
  date: string;
  unitsSold: number | null;
  ewmaVelocity: number;
}

@Injectable()
export class VelocityService {
  private readonly DEFAULT_ALPHA = 0.3;

  calculateEWMA(dailySales: DailySale[], alpha = this.DEFAULT_ALPHA): number {
    if (!dailySales.length) return 0;

    const sorted = [...dailySales].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    const seedWindow = sorted.slice(0, 14);
    let velocity =
      seedWindow.reduce((sum, d) => sum + d.unitsSold, 0) / seedWindow.length;

    for (let i = seedWindow.length; i < sorted.length; i++) {
      velocity = alpha * sorted[i].unitsSold + (1 - alpha) * velocity;
    }

    return Math.round(velocity * 100) / 100;
  }

  calculateAccuracy(
    dailySales: DailySale[],
    alpha = this.DEFAULT_ALPHA,
  ): number {
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
      velocity = alpha * actual + (1 - alpha) * velocity;
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

  calculateEWMASeries(
    dailySales: DailySale[],
    projectionDays = 7,
    alpha = this.DEFAULT_ALPHA,
  ): VelocityPoint[] {
    const SEED_DAYS = 14;
    const DISPLAY_DAYS = 30;

    const sorted = [...dailySales].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    if (sorted.length === 0) return [];

    const seedEnd = Math.min(SEED_DAYS, sorted.length);
    let velocity =
      sorted.slice(0, seedEnd).reduce((s, d) => s + d.unitsSold, 0) / seedEnd;

    const series: VelocityPoint[] = [];
    for (let i = 0; i < sorted.length; i++) {
      if (i >= SEED_DAYS) {
        velocity = alpha * sorted[i].unitsSold + (1 - alpha) * velocity;
      }
      series.push({
        date: sorted[i].date.toISOString().slice(0, 10),
        unitsSold: sorted[i].unitsSold,
        ewmaVelocity: Math.round(velocity * 100) / 100,
      });
    }

    const displayed = series.slice(-DISPLAY_DAYS);
    const finalVelocity = displayed[displayed.length - 1].ewmaVelocity;
    const lastDate = new Date(sorted[sorted.length - 1].date);

    for (let i = 1; i <= projectionDays; i++) {
      const d = new Date(lastDate);
      d.setUTCDate(d.getUTCDate() + i);
      displayed.push({
        date: d.toISOString().slice(0, 10),
        unitsSold: null,
        ewmaVelocity: finalVelocity,
      });
    }

    return displayed;
  }
}
