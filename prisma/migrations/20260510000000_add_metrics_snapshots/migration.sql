-- CreateTable
CREATE TABLE "metrics_snapshots" (
    "id" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "snapshotDate" DATE NOT NULL,
    "critical" INTEGER NOT NULL,
    "reorder" INTEGER NOT NULL,
    "ok" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "forecastAccuracy" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "metrics_snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "metrics_snapshots_shopId_snapshotDate_key" ON "metrics_snapshots"("shopId", "snapshotDate");

-- AddForeignKey
ALTER TABLE "metrics_snapshots" ADD CONSTRAINT "metrics_snapshots_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shops"("id") ON DELETE CASCADE ON UPDATE CASCADE;
