# StockSense API

Shopify inventory forecasting backend. Tracks daily sales per product, computes demand velocity using EWMA, calculates reorder points and safety stock, and sends daily digest alerts when stock is low.

Built with NestJS, Prisma, PostgreSQL, BullMQ (Redis), and the Shopify OAuth + REST APIs.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Full Application Flow](#full-application-flow)
- [Module Breakdown](#module-breakdown)
  - [Shopify (Auth + API)](#shopify-auth--api)
  - [Sync](#sync)
  - [Forecast](#forecast)
  - [Inventory](#inventory)
  - [Alerts](#alerts)
  - [Purchase Orders](#purchase-orders)
- [Database Schema](#database-schema)
- [Forecasting Logic](#forecasting-logic)
- [Setup](#setup)

---

## Architecture Overview

```text
Shopify  ──OAuth──►  ShopifyAuthService  ──►  BullMQ Queue  ──►  OrderSyncProcessor
                        │
                       DailySale rows in DB
                        │
                 Nightly Cron (2am) ──►  ForecastCronService
                        │
                       Forecast rows in DB
                        │
                 Daily Cron (8am)  ──►  AlertCronService
                        │
                      Email digest to merchant
```

---

## Full Application Flow

### 1. Shop Installation (one-time)

1. Merchant visits `/api/auth/install?shop=mystore.myshopify.com`
2. `ShopifyAuthService.buildInstallUrl()` redirects to Shopify OAuth consent screen requesting scopes: `read_orders`, `read_products`, `read_inventory`
3. Shopify redirects back to `/api/auth/callback` with an authorization code
4. `handleCallback()` verifies the HMAC signature, exchanges the code for a permanent access token, and upserts the `Shop` record
5. If the shop is **new**, a `backfill` job is queued immediately with `daysBack: 90`

### 2. Historical Data Backfill (background job, runs once)

Triggered automatically on first install. Runs in BullMQ as the `backfill` job on the `order-sync` queue.

#### Phase 1 — Sync Products

- Fetches all products and variants from Shopify
- Upserts each variant into the `Product` table keyed by `(shopId, shopifyVariantId)`
- Sets initial `currentStock` from Shopify's `inventory_quantity`

#### Phase 2 — Paginate Orders

- Fetches all orders from `now - 90 days` in pages of 250 (Shopify max)
- For each page, calls `upsertDailySales()`
- Continues until Shopify returns no `nextPageInfo` cursor

#### Phase 3 — Aggregate Daily Sales

- For each order, iterates line items
- Groups sales by `productId + date` in an in-memory map, summing quantities for the same product/day
- Upserts each aggregated entry into `DailySale` — one row per product per day
- Idempotent: re-running the backfill overwrites with the same values

### 3. Real-time Webhook Updates

Shopify sends webhooks to keep data current after the initial backfill:

- `orders/create` → `SyncService.processNewOrder()` — increments `DailySale.unitsSold` for today
- `inventory_levels/update` → `SyncService.processInventoryUpdate()` — updates `Product.currentStock`
- `app/uninstalled` → `SyncService.handleUninstall()` — cascade-deletes the shop and all its data

### 4. Nightly Forecast Run (2am daily)

`ForecastCronService.runNightlyForecasts()` runs for every shop:

1. Loads all products with their last 90 days of `DailySale` rows
2. For each product, computes:
   - `velocityPerDay` — EWMA of daily units sold
   - `stddevDemand` — standard deviation of daily units sold
   - `safetyStock` — buffer stock for demand variability
   - `reorderPoint` — stock level at which to trigger a reorder
   - `daysOfStockRemaining` — current stock divided by velocity
   - `status` — `OK`, `REORDER`, or `CRITICAL`
3. Upserts all results into the `Forecast` table in a single transaction

### 5. Daily Alert Digest (8am daily)

`AlertCronService.sendDailyDigests()` runs after the forecast cron:

1. Finds all shops with `alertsEnabled = true` and a configured `alertEmail`
2. For each shop, queries forecasts with status `CRITICAL` or `REORDER`
3. Builds an HTML email table grouped by severity and sends it via `MailerService`
4. Skips silently if no alerts exist for that shop

### 6. Merchant Actions (on-demand via API)

- **View inventory** — `GET /inventory` returns all products with their latest forecast
- **Update product settings** — `PATCH /inventory/:variantId` lets the merchant set `leadTimeDays` and `serviceLevelZ` per product
- **View forecasts** — `GET /forecast` returns current forecast data
- **Generate suggested PO** — `GET /purchase-orders/suggested` returns all CRITICAL/REORDER products with a suggested order quantity
- **Create PO** — `POST /purchase-orders` creates a draft purchase order
- **Mark PO received** — `PATCH /purchase-orders/:id/status` with `{ status: "RECEIVED" }` auto-updates `leadTimeDays` for each product based on actual delivery time (blended 30/70 with prior value)

---

## Module Breakdown

### Shopify (Auth + API)

| File | Purpose |
| --- | --- |
| `shopify-auth.controller.ts` | `/install` and `/callback` OAuth endpoints |
| `shopify-auth.service.ts` | HMAC verification, token exchange, shop upsert, backfill trigger |
| `shopify-api.service.ts` | HTTP wrapper for Shopify REST API (orders, products, inventory) |
| `shopify-webhook.controller.ts` | Receives and routes Shopify webhook events |

### Sync

| File | Purpose |
| --- | --- |
| `sync.service.ts` | Handles real-time webhook payloads; updates `DailySale` and `currentStock` |
| `order-sync.processor.ts` | BullMQ processor for the `backfill` job; full historical import |

### Forecast

| File | Purpose |
| --- | --- |
| `velocity.service.ts` | `calculateEWMA()` and `calculateStddev()` |
| `reorder.service.ts` | `calculateSafetyStock()`, `calculateReorderPoint()`, `deriveStatus()` |
| `forecast.service.ts` | Upsert logic for `Forecast` records |
| `forecast-cron.service.ts` | Nightly cron job orchestrating the full forecast pipeline |
| `forecast.controller.ts` | API endpoints to read forecast data |

### Inventory

| File | Purpose |
| --- | --- |
| `inventory.service.ts` | List products, get single product with sales history, update `leadTimeDays`/`serviceLevelZ` |
| `inventory.controller.ts` | REST endpoints for merchant product management |

### Alerts

| File | Purpose |
| --- | --- |
| `alert.service.ts` | Queries CRITICAL/REORDER forecasts and builds digest HTML |
| `alert-cron.service.ts` | Daily 8am cron that sends digests to all opted-in shops |
| `mailer.service.ts` | Thin email sending wrapper |

### Purchase Orders

| File | Purpose |
| --- | --- |
| `purchase-orders.service.ts` | CRUD for POs, suggested PO generation, lead time auto-update on receipt |
| `purchase-orders.controller.ts` | REST endpoints for PO management |

---

## Database Schema

```text
Shop
├── id, domain (unique), accessToken
├── plan (FREE / GROWTH / PRO)
├── alertsEnabled, alertEmail
└── products[]

Product
├── id, shopId, shopifyProductId, shopifyVariantId
├── title, sku, currentStock
├── leadTimeDays (default: 7)     ← merchant-configured, auto-updated on PO receipt
├── serviceLevelZ (default: 1.65) ← 95% service level; merchant-configurable
├── dailySales[]
└── forecast?

DailySale
├── productId, date (yyyy-MM-dd)
└── unitsSold                     ← sum of all orders for this product on this day

Forecast
├── productId (unique)
├── velocityPerDay, stddevDemand
├── safetyStock, reorderPoint
├── daysOfStockRemaining
├── status (OK / REORDER / CRITICAL)
└── calculatedAt

PurchaseOrder
├── shopId, reference (e.g. PO-20260405-AB3X)
├── status (DRAFT / SENT / RECEIVED)
└── lineItems[]

PoLineItem
└── purchaseOrderId, productId, quantity, unitCost?
```

---

## Forecasting Logic

### Sales Velocity (EWMA)

Exponentially Weighted Moving Average over the last 90 days of `DailySale` rows, sorted oldest to newest:

```text
velocity₀ = unitsSold on day 1
velocityₙ = 0.3 × unitsSoldₙ + 0.7 × velocityₙ₋₁
```

- `α = 0.3` — moderately reactive; recent days carry more weight, old data fades gradually
- Result: daily units sold estimate biased toward recent demand trends

### Demand Standard Deviation

Population standard deviation of `unitsSold` across the same 90-day window:

```text
mean     = average(unitsSold)
stddev   = sqrt( mean( (unitsSold - mean)² ) )
```

Measures how erratic demand is. High stddev = unpredictable demand = needs more safety stock.

### Safety Stock

```text
safetyStock = Z × stddev × sqrt(leadTimeDays)
```

- `Z` = service level Z-score (default `1.65` = 95% in-stock probability)
- `sqrt(leadTimeDays)` = demand variability compounds over the lead time window
- Merchant can raise/lower `serviceLevelZ` per product to trade off stock cost vs. stockout risk

### Reorder Point

```text
reorderPoint = (velocityPerDay × leadTimeDays) + safetyStock
```

The stock level at which an order must be placed to avoid stockout, accounting for:

- Expected demand during lead time (`velocity × leadTime`)
- Buffer for demand spikes (`safetyStock`)

### Status Thresholds

| Status | Condition |
| --- | --- |
| `CRITICAL` | `daysOfStockRemaining <= 7` |
| `REORDER` | `currentStock <= reorderPoint` |
| `OK` | Neither of the above |

### Lead Time Auto-Learning

When a PO is marked `RECEIVED`, the actual elapsed days (PO created → received) are blended into `leadTimeDays`:

```text
newLeadTime = 0.7 × storedLeadTime + 0.3 × actualDays
```

Same EWMA principle as velocity — gradually converges toward the supplier's real lead time without overreacting to a single outlier delivery.

### Suggested Order Quantity

```text
suggestedQuantity = max(0, ceil(reorderPoint × 2 - currentStock))
```

Targets bringing stock to 2× the reorder point — enough to cover one full lead time cycle plus safety stock after the order arrives.

---

## Setup

```bash
pnpm install
```

Copy `.env.example` to `.env` and fill in:

```env
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
SHOPIFY_APP_CLIENT_ID=...
SHOPIFY_APP_CLIENT_SECRET=...
APP_URL=https://your-app-url.com
```

```bash
# Run migrations
pnpm prisma migrate dev
 
# Seed database
pnpm db:seed
 
# Start in dev mode
pnpm dev
```
