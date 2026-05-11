/*
  Warnings:

  - You are about to drop the column `serviceLevelZ` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "serviceLevelZ",
ALTER COLUMN "leadTimeDays" SET DEFAULT 14;
