-- CreateTable
CREATE TABLE "alert_snoozes" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "expectedArrivalDate" DATE NOT NULL,
    "snoozedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alert_snoozes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alert_snoozes_productId_key" ON "alert_snoozes"("productId");

-- AddForeignKey
ALTER TABLE "alert_snoozes" ADD CONSTRAINT "alert_snoozes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alert_snoozes" ADD CONSTRAINT "alert_snoozes_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shops"("id") ON DELETE CASCADE ON UPDATE CASCADE;
