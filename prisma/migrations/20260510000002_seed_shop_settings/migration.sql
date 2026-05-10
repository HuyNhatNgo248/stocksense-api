INSERT INTO "shop_settings" ("id", "shopId", "ewmaAlpha", "defaultLeadTimeDays", "defaultServiceLevelZ", "syncFrequencyHours", "updatedAt")
SELECT
    gen_random_uuid(),
    "id",
    0.3,
    14,
    1.645,
    12,
    NOW()
FROM "shops"
WHERE "id" NOT IN (SELECT "shopId" FROM "shop_settings");
