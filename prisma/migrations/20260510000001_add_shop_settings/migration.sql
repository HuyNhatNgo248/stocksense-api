CREATE TABLE "shop_settings" (
    "id" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "ewmaAlpha" DOUBLE PRECISION NOT NULL DEFAULT 0.3,
    "defaultLeadTimeDays" DOUBLE PRECISION NOT NULL DEFAULT 14,
    "defaultServiceLevelZ" DOUBLE PRECISION NOT NULL DEFAULT 1.645,
    "syncFrequencyHours" INTEGER NOT NULL DEFAULT 12,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shop_settings_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "shop_settings_shopId_key" ON "shop_settings"("shopId");

ALTER TABLE "shop_settings" ADD CONSTRAINT "shop_settings_shopId_fkey"
    FOREIGN KEY ("shopId") REFERENCES "shops"("id") ON DELETE CASCADE ON UPDATE CASCADE;
