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
  private readonly ALPHA_CANDIDATES = [
    0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5,
  ];

  /** Grid-searches the alpha that minimises MAPE over the product's sales history. */
  findBestAlpha(
    dailySales: DailySale[],
    fallback = this.DEFAULT_ALPHA,
  ): number {
    if (dailySales.length < 28) return fallback;

    const sorted = this.sortByDate(dailySales);
    let bestAlpha = fallback;
    let bestMAPE = Infinity;

    for (const alpha of this.ALPHA_CANDIDATES) {
      const mape = this.computeMAPE(sorted, alpha);
      if (mape < bestMAPE) {
        bestMAPE = mape;
        bestAlpha = alpha;
      }
    }

    return bestAlpha;
  }

  /** Computes the current EWMA velocity (units/day) from daily sales history. */
  calculateEWMA(dailySales: DailySale[], alpha = this.DEFAULT_ALPHA): number {
    if (!dailySales.length) return 0;

    const sorted = this.sortByDate(dailySales);
    const seedWindow = sorted.slice(0, 14);
    let velocity =
      seedWindow.reduce((sum, d) => sum + d.unitsSold, 0) / seedWindow.length;

    for (let i = seedWindow.length; i < sorted.length; i++) {
      velocity = alpha * sorted[i].unitsSold + (1 - alpha) * velocity;
    }

    return Math.round(velocity * 100) / 100;
  }

  /** Computes exponentially weighted demand stddev, ignoring zero-sale days. */
  calculateStddev(dailySales: DailySale[], alpha = this.DEFAULT_ALPHA): number {
    const nonZero = dailySales.filter((d) => d.unitsSold > 0);
    if (nonZero.length < 2) return 0;

    const sorted = this.sortByDate(nonZero);
    let mean = sorted[0].unitsSold;
    let variance = 0;

    for (let i = 1; i < sorted.length; i++) {
      const diff = sorted[i].unitsSold - mean;
      mean = alpha * sorted[i].unitsSold + (1 - alpha) * mean;
      variance = (1 - alpha) * (variance + alpha * diff * diff);
    }

    return Math.round(Math.sqrt(variance) * 100) / 100;
  }

  /** Returns a 0–100 forecast accuracy score derived from MAPE over the sales history. */
  calculateAccuracy(
    dailySales: DailySale[],
    alpha = this.DEFAULT_ALPHA,
  ): number {
    if (dailySales.length < 15) return 0;
    const sorted = this.sortByDate(dailySales);
    const mape = this.computeMAPE(sorted, alpha);
    if (!isFinite(mape)) return 0;
    return Math.round(Math.max(0, (1 - mape) * 100) * 10) / 10;
  }

  /** Returns 7 multipliers (index = getUTCDay()) representing each weekday's demand relative to the daily average. */
  calculateDayOfWeekMultipliers(dailySales: DailySale[]): number[] {
    const sums = new Array(7).fill(0);
    const counts = new Array(7).fill(0);

    for (const sale of dailySales) {
      const dow = new Date(sale.date).getUTCDay();
      sums[dow] += sale.unitsSold;
      counts[dow]++;
    }

    const avgs = sums.map((s, i) => (counts[i] > 0 ? s / counts[i] : 0));
    const overall = avgs.reduce((a, b) => a + b, 0) / 7;

    if (overall === 0) return new Array<number>(7).fill(1);
    return avgs.map((a) => a / overall);
  }

  /** Returns the last 30 days of EWMA velocity history plus a 7-day flat projection. */
  calculateEWMASeries(
    dailySales: DailySale[],
    projectionDays = 7,
    alpha = this.DEFAULT_ALPHA,
  ): VelocityPoint[] {
    const SEED_DAYS = 14;
    const DISPLAY_DAYS = 30;

    const sorted = this.sortByDate(dailySales);
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

  private computeMAPE(sorted: DailySale[], alpha: number): number {
    if (sorted.length < 15) return Infinity;

    const seedWindow = sorted.slice(0, 14);
    let velocity =
      seedWindow.reduce((s, d) => s + d.unitsSold, 0) / seedWindow.length;

    let totalPct = 0;
    let count = 0;

    for (let i = 14; i < sorted.length; i++) {
      const actual = sorted[i].unitsSold;
      if (actual > 0) {
        totalPct += Math.abs(actual - velocity) / actual;
        count++;
      }
      velocity = alpha * actual + (1 - alpha) * velocity;
    }

    return count > 0 ? totalPct / count : Infinity;
  }

  private sortByDate(sales: DailySale[]): DailySale[] {
    return [...sales].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
  }
}
