
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model DailySale
 * 
 */
export type DailySale = $Result.DefaultSelection<Prisma.$DailySalePayload>
/**
 * Model Forecast
 * 
 */
export type Forecast = $Result.DefaultSelection<Prisma.$ForecastPayload>
/**
 * Model PurchaseOrder
 * 
 */
export type PurchaseOrder = $Result.DefaultSelection<Prisma.$PurchaseOrderPayload>
/**
 * Model PoLineItem
 * 
 */
export type PoLineItem = $Result.DefaultSelection<Prisma.$PoLineItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Plan: {
  FREE: 'FREE',
  GROWTH: 'GROWTH',
  PRO: 'PRO'
};

export type Plan = (typeof Plan)[keyof typeof Plan]


export const ForecastStatus: {
  OK: 'OK',
  REORDER: 'REORDER',
  CRITICAL: 'CRITICAL'
};

export type ForecastStatus = (typeof ForecastStatus)[keyof typeof ForecastStatus]


export const PoStatus: {
  DRAFT: 'DRAFT',
  SENT: 'SENT',
  RECEIVED: 'RECEIVED'
};

export type PoStatus = (typeof PoStatus)[keyof typeof PoStatus]

}

export type Plan = $Enums.Plan

export const Plan: typeof $Enums.Plan

export type ForecastStatus = $Enums.ForecastStatus

export const ForecastStatus: typeof $Enums.ForecastStatus

export type PoStatus = $Enums.PoStatus

export const PoStatus: typeof $Enums.PoStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Shops
 * const shops = await prisma.shop.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Shops
   * const shops = await prisma.shop.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailySale`: Exposes CRUD operations for the **DailySale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailySales
    * const dailySales = await prisma.dailySale.findMany()
    * ```
    */
  get dailySale(): Prisma.DailySaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forecast`: Exposes CRUD operations for the **Forecast** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forecasts
    * const forecasts = await prisma.forecast.findMany()
    * ```
    */
  get forecast(): Prisma.ForecastDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseOrder`: Exposes CRUD operations for the **PurchaseOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrders
    * const purchaseOrders = await prisma.purchaseOrder.findMany()
    * ```
    */
  get purchaseOrder(): Prisma.PurchaseOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poLineItem`: Exposes CRUD operations for the **PoLineItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PoLineItems
    * const poLineItems = await prisma.poLineItem.findMany()
    * ```
    */
  get poLineItem(): Prisma.PoLineItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Shop: 'Shop',
    Product: 'Product',
    DailySale: 'DailySale',
    Forecast: 'Forecast',
    PurchaseOrder: 'PurchaseOrder',
    PoLineItem: 'PoLineItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "shop" | "product" | "dailySale" | "forecast" | "purchaseOrder" | "poLineItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      DailySale: {
        payload: Prisma.$DailySalePayload<ExtArgs>
        fields: Prisma.DailySaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailySaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailySaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>
          }
          findFirst: {
            args: Prisma.DailySaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailySaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>
          }
          findMany: {
            args: Prisma.DailySaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>[]
          }
          create: {
            args: Prisma.DailySaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>
          }
          createMany: {
            args: Prisma.DailySaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailySaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>[]
          }
          delete: {
            args: Prisma.DailySaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>
          }
          update: {
            args: Prisma.DailySaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>
          }
          deleteMany: {
            args: Prisma.DailySaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailySaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailySaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>[]
          }
          upsert: {
            args: Prisma.DailySaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>
          }
          aggregate: {
            args: Prisma.DailySaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailySale>
          }
          groupBy: {
            args: Prisma.DailySaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailySaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailySaleCountArgs<ExtArgs>
            result: $Utils.Optional<DailySaleCountAggregateOutputType> | number
          }
        }
      }
      Forecast: {
        payload: Prisma.$ForecastPayload<ExtArgs>
        fields: Prisma.ForecastFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForecastFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForecastFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>
          }
          findFirst: {
            args: Prisma.ForecastFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForecastFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>
          }
          findMany: {
            args: Prisma.ForecastFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>[]
          }
          create: {
            args: Prisma.ForecastCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>
          }
          createMany: {
            args: Prisma.ForecastCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForecastCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>[]
          }
          delete: {
            args: Prisma.ForecastDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>
          }
          update: {
            args: Prisma.ForecastUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>
          }
          deleteMany: {
            args: Prisma.ForecastDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForecastUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForecastUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>[]
          }
          upsert: {
            args: Prisma.ForecastUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>
          }
          aggregate: {
            args: Prisma.ForecastAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForecast>
          }
          groupBy: {
            args: Prisma.ForecastGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForecastGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForecastCountArgs<ExtArgs>
            result: $Utils.Optional<ForecastCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrder: {
        payload: Prisma.$PurchaseOrderPayload<ExtArgs>
        fields: Prisma.PurchaseOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          delete: {
            args: Prisma.PurchaseOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          update: {
            args: Prisma.PurchaseOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseOrder>
          }
          groupBy: {
            args: Prisma.PurchaseOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrderCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderCountAggregateOutputType> | number
          }
        }
      }
      PoLineItem: {
        payload: Prisma.$PoLineItemPayload<ExtArgs>
        fields: Prisma.PoLineItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoLineItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoLineItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoLineItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoLineItemPayload>
          }
          findFirst: {
            args: Prisma.PoLineItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoLineItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoLineItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoLineItemPayload>
          }
          findMany: {
            args: Prisma.PoLineItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoLineItemPayload>[]
          }
          create: {
            args: Prisma.PoLineItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoLineItemPayload>
          }
          createMany: {
            args: Prisma.PoLineItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoLineItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoLineItemPayload>[]
          }
          delete: {
            args: Prisma.PoLineItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoLineItemPayload>
          }
          update: {
            args: Prisma.PoLineItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoLineItemPayload>
          }
          deleteMany: {
            args: Prisma.PoLineItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoLineItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoLineItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoLineItemPayload>[]
          }
          upsert: {
            args: Prisma.PoLineItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoLineItemPayload>
          }
          aggregate: {
            args: Prisma.PoLineItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoLineItem>
          }
          groupBy: {
            args: Prisma.PoLineItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoLineItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoLineItemCountArgs<ExtArgs>
            result: $Utils.Optional<PoLineItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    shop?: ShopOmit
    product?: ProductOmit
    dailySale?: DailySaleOmit
    forecast?: ForecastOmit
    purchaseOrder?: PurchaseOrderOmit
    poLineItem?: PoLineItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    products: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ShopCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    dailySales: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailySales?: boolean | ProductCountOutputTypeCountDailySalesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDailySalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailySaleWhereInput
  }


  /**
   * Count Type PurchaseOrderCountOutputType
   */

  export type PurchaseOrderCountOutputType = {
    lineItems: number
  }

  export type PurchaseOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lineItems?: boolean | PurchaseOrderCountOutputTypeCountLineItemsArgs
  }

  // Custom InputTypes
  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderCountOutputType
     */
    select?: PurchaseOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeCountLineItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoLineItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopMinAggregateOutputType = {
    id: string | null
    domain: string | null
    accessToken: string | null
    plan: $Enums.Plan | null
    timezone: string | null
    alertsEnabled: boolean | null
    alertEmail: string | null
    installedAt: Date | null
    updatedAt: Date | null
  }

  export type ShopMaxAggregateOutputType = {
    id: string | null
    domain: string | null
    accessToken: string | null
    plan: $Enums.Plan | null
    timezone: string | null
    alertsEnabled: boolean | null
    alertEmail: string | null
    installedAt: Date | null
    updatedAt: Date | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    domain: number
    accessToken: number
    plan: number
    timezone: number
    alertsEnabled: number
    alertEmail: number
    installedAt: number
    updatedAt: number
    _all: number
  }


  export type ShopMinAggregateInputType = {
    id?: true
    domain?: true
    accessToken?: true
    plan?: true
    timezone?: true
    alertsEnabled?: true
    alertEmail?: true
    installedAt?: true
    updatedAt?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    domain?: true
    accessToken?: true
    plan?: true
    timezone?: true
    alertsEnabled?: true
    alertEmail?: true
    installedAt?: true
    updatedAt?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    domain?: true
    accessToken?: true
    plan?: true
    timezone?: true
    alertsEnabled?: true
    alertEmail?: true
    installedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: string
    domain: string
    accessToken: string
    plan: $Enums.Plan
    timezone: string | null
    alertsEnabled: boolean
    alertEmail: string | null
    installedAt: Date
    updatedAt: Date
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    accessToken?: boolean
    plan?: boolean
    timezone?: boolean
    alertsEnabled?: boolean
    alertEmail?: boolean
    installedAt?: boolean
    updatedAt?: boolean
    products?: boolean | Shop$productsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    accessToken?: boolean
    plan?: boolean
    timezone?: boolean
    alertsEnabled?: boolean
    alertEmail?: boolean
    installedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    accessToken?: boolean
    plan?: boolean
    timezone?: boolean
    alertsEnabled?: boolean
    alertEmail?: boolean
    installedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    id?: boolean
    domain?: boolean
    accessToken?: boolean
    plan?: boolean
    timezone?: boolean
    alertsEnabled?: boolean
    alertEmail?: boolean
    installedAt?: boolean
    updatedAt?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "domain" | "accessToken" | "plan" | "timezone" | "alertsEnabled" | "alertEmail" | "installedAt" | "updatedAt", ExtArgs["result"]["shop"]>
  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Shop$productsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      domain: string
      accessToken: string
      plan: $Enums.Plan
      timezone: string | null
      alertsEnabled: boolean
      alertEmail: string | null
      installedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shops and returns the data saved in the database.
     * @param {ShopCreateManyAndReturnArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops and returns the data updated in the database.
     * @param {ShopUpdateManyAndReturnArgs} args - Arguments to update many Shops.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShopUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Shop$productsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shop model
   */
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'String'>
    readonly domain: FieldRef<"Shop", 'String'>
    readonly accessToken: FieldRef<"Shop", 'String'>
    readonly plan: FieldRef<"Shop", 'Plan'>
    readonly timezone: FieldRef<"Shop", 'String'>
    readonly alertsEnabled: FieldRef<"Shop", 'Boolean'>
    readonly alertEmail: FieldRef<"Shop", 'String'>
    readonly installedAt: FieldRef<"Shop", 'DateTime'>
    readonly updatedAt: FieldRef<"Shop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop createManyAndReturn
   */
  export type ShopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop updateManyAndReturn
   */
  export type ShopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop.products
   */
  export type Shop$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    currentStock: number | null
    leadTimeDays: number | null
    serviceLevelZ: number | null
  }

  export type ProductSumAggregateOutputType = {
    currentStock: number | null
    leadTimeDays: number | null
    serviceLevelZ: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    shopifyProductId: string | null
    shopifyVariantId: string | null
    title: string | null
    sku: string | null
    currentStock: number | null
    leadTimeDays: number | null
    serviceLevelZ: number | null
    stockUpdatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    shopifyProductId: string | null
    shopifyVariantId: string | null
    title: string | null
    sku: string | null
    currentStock: number | null
    leadTimeDays: number | null
    serviceLevelZ: number | null
    stockUpdatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    shopId: number
    shopifyProductId: number
    shopifyVariantId: number
    title: number
    sku: number
    currentStock: number
    leadTimeDays: number
    serviceLevelZ: number
    stockUpdatedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    currentStock?: true
    leadTimeDays?: true
    serviceLevelZ?: true
  }

  export type ProductSumAggregateInputType = {
    currentStock?: true
    leadTimeDays?: true
    serviceLevelZ?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    shopId?: true
    shopifyProductId?: true
    shopifyVariantId?: true
    title?: true
    sku?: true
    currentStock?: true
    leadTimeDays?: true
    serviceLevelZ?: true
    stockUpdatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    shopId?: true
    shopifyProductId?: true
    shopifyVariantId?: true
    title?: true
    sku?: true
    currentStock?: true
    leadTimeDays?: true
    serviceLevelZ?: true
    stockUpdatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    shopId?: true
    shopifyProductId?: true
    shopifyVariantId?: true
    title?: true
    sku?: true
    currentStock?: true
    leadTimeDays?: true
    serviceLevelZ?: true
    stockUpdatedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    shopId: string
    shopifyProductId: string
    shopifyVariantId: string
    title: string
    sku: string
    currentStock: number
    leadTimeDays: number
    serviceLevelZ: number
    stockUpdatedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    shopifyProductId?: boolean
    shopifyVariantId?: boolean
    title?: boolean
    sku?: boolean
    currentStock?: boolean
    leadTimeDays?: boolean
    serviceLevelZ?: boolean
    stockUpdatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dailySales?: boolean | Product$dailySalesArgs<ExtArgs>
    forecast?: boolean | Product$forecastArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    shopifyProductId?: boolean
    shopifyVariantId?: boolean
    title?: boolean
    sku?: boolean
    currentStock?: boolean
    leadTimeDays?: boolean
    serviceLevelZ?: boolean
    stockUpdatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    shopifyProductId?: boolean
    shopifyVariantId?: boolean
    title?: boolean
    sku?: boolean
    currentStock?: boolean
    leadTimeDays?: boolean
    serviceLevelZ?: boolean
    stockUpdatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    shopId?: boolean
    shopifyProductId?: boolean
    shopifyVariantId?: boolean
    title?: boolean
    sku?: boolean
    currentStock?: boolean
    leadTimeDays?: boolean
    serviceLevelZ?: boolean
    stockUpdatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "shopifyProductId" | "shopifyVariantId" | "title" | "sku" | "currentStock" | "leadTimeDays" | "serviceLevelZ" | "stockUpdatedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailySales?: boolean | Product$dailySalesArgs<ExtArgs>
    forecast?: boolean | Product$forecastArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      dailySales: Prisma.$DailySalePayload<ExtArgs>[]
      forecast: Prisma.$ForecastPayload<ExtArgs> | null
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      shopifyProductId: string
      shopifyVariantId: string
      title: string
      sku: string
      currentStock: number
      leadTimeDays: number
      serviceLevelZ: number
      stockUpdatedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailySales<T extends Product$dailySalesArgs<ExtArgs> = {}>(args?: Subset<T, Product$dailySalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    forecast<T extends Product$forecastArgs<ExtArgs> = {}>(args?: Subset<T, Product$forecastArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly shopId: FieldRef<"Product", 'String'>
    readonly shopifyProductId: FieldRef<"Product", 'String'>
    readonly shopifyVariantId: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly currentStock: FieldRef<"Product", 'Int'>
    readonly leadTimeDays: FieldRef<"Product", 'Float'>
    readonly serviceLevelZ: FieldRef<"Product", 'Float'>
    readonly stockUpdatedAt: FieldRef<"Product", 'DateTime'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.dailySales
   */
  export type Product$dailySalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    where?: DailySaleWhereInput
    orderBy?: DailySaleOrderByWithRelationInput | DailySaleOrderByWithRelationInput[]
    cursor?: DailySaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailySaleScalarFieldEnum | DailySaleScalarFieldEnum[]
  }

  /**
   * Product.forecast
   */
  export type Product$forecastArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    where?: ForecastWhereInput
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model DailySale
   */

  export type AggregateDailySale = {
    _count: DailySaleCountAggregateOutputType | null
    _avg: DailySaleAvgAggregateOutputType | null
    _sum: DailySaleSumAggregateOutputType | null
    _min: DailySaleMinAggregateOutputType | null
    _max: DailySaleMaxAggregateOutputType | null
  }

  export type DailySaleAvgAggregateOutputType = {
    unitsSold: number | null
  }

  export type DailySaleSumAggregateOutputType = {
    unitsSold: number | null
  }

  export type DailySaleMinAggregateOutputType = {
    id: string | null
    productId: string | null
    date: Date | null
    unitsSold: number | null
    createdAt: Date | null
  }

  export type DailySaleMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    date: Date | null
    unitsSold: number | null
    createdAt: Date | null
  }

  export type DailySaleCountAggregateOutputType = {
    id: number
    productId: number
    date: number
    unitsSold: number
    createdAt: number
    _all: number
  }


  export type DailySaleAvgAggregateInputType = {
    unitsSold?: true
  }

  export type DailySaleSumAggregateInputType = {
    unitsSold?: true
  }

  export type DailySaleMinAggregateInputType = {
    id?: true
    productId?: true
    date?: true
    unitsSold?: true
    createdAt?: true
  }

  export type DailySaleMaxAggregateInputType = {
    id?: true
    productId?: true
    date?: true
    unitsSold?: true
    createdAt?: true
  }

  export type DailySaleCountAggregateInputType = {
    id?: true
    productId?: true
    date?: true
    unitsSold?: true
    createdAt?: true
    _all?: true
  }

  export type DailySaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailySale to aggregate.
     */
    where?: DailySaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySales to fetch.
     */
    orderBy?: DailySaleOrderByWithRelationInput | DailySaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailySaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailySales
    **/
    _count?: true | DailySaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailySaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailySaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailySaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailySaleMaxAggregateInputType
  }

  export type GetDailySaleAggregateType<T extends DailySaleAggregateArgs> = {
        [P in keyof T & keyof AggregateDailySale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailySale[P]>
      : GetScalarType<T[P], AggregateDailySale[P]>
  }




  export type DailySaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailySaleWhereInput
    orderBy?: DailySaleOrderByWithAggregationInput | DailySaleOrderByWithAggregationInput[]
    by: DailySaleScalarFieldEnum[] | DailySaleScalarFieldEnum
    having?: DailySaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailySaleCountAggregateInputType | true
    _avg?: DailySaleAvgAggregateInputType
    _sum?: DailySaleSumAggregateInputType
    _min?: DailySaleMinAggregateInputType
    _max?: DailySaleMaxAggregateInputType
  }

  export type DailySaleGroupByOutputType = {
    id: string
    productId: string
    date: Date
    unitsSold: number
    createdAt: Date
    _count: DailySaleCountAggregateOutputType | null
    _avg: DailySaleAvgAggregateOutputType | null
    _sum: DailySaleSumAggregateOutputType | null
    _min: DailySaleMinAggregateOutputType | null
    _max: DailySaleMaxAggregateOutputType | null
  }

  type GetDailySaleGroupByPayload<T extends DailySaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailySaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailySaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailySaleGroupByOutputType[P]>
            : GetScalarType<T[P], DailySaleGroupByOutputType[P]>
        }
      >
    >


  export type DailySaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    date?: boolean
    unitsSold?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailySale"]>

  export type DailySaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    date?: boolean
    unitsSold?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailySale"]>

  export type DailySaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    date?: boolean
    unitsSold?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailySale"]>

  export type DailySaleSelectScalar = {
    id?: boolean
    productId?: boolean
    date?: boolean
    unitsSold?: boolean
    createdAt?: boolean
  }

  export type DailySaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "date" | "unitsSold" | "createdAt", ExtArgs["result"]["dailySale"]>
  export type DailySaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DailySaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DailySaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $DailySalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailySale"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      date: Date
      unitsSold: number
      createdAt: Date
    }, ExtArgs["result"]["dailySale"]>
    composites: {}
  }

  type DailySaleGetPayload<S extends boolean | null | undefined | DailySaleDefaultArgs> = $Result.GetResult<Prisma.$DailySalePayload, S>

  type DailySaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailySaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailySaleCountAggregateInputType | true
    }

  export interface DailySaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailySale'], meta: { name: 'DailySale' } }
    /**
     * Find zero or one DailySale that matches the filter.
     * @param {DailySaleFindUniqueArgs} args - Arguments to find a DailySale
     * @example
     * // Get one DailySale
     * const dailySale = await prisma.dailySale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailySaleFindUniqueArgs>(args: SelectSubset<T, DailySaleFindUniqueArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailySale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailySaleFindUniqueOrThrowArgs} args - Arguments to find a DailySale
     * @example
     * // Get one DailySale
     * const dailySale = await prisma.dailySale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailySaleFindUniqueOrThrowArgs>(args: SelectSubset<T, DailySaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailySale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySaleFindFirstArgs} args - Arguments to find a DailySale
     * @example
     * // Get one DailySale
     * const dailySale = await prisma.dailySale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailySaleFindFirstArgs>(args?: SelectSubset<T, DailySaleFindFirstArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailySale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySaleFindFirstOrThrowArgs} args - Arguments to find a DailySale
     * @example
     * // Get one DailySale
     * const dailySale = await prisma.dailySale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailySaleFindFirstOrThrowArgs>(args?: SelectSubset<T, DailySaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailySales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailySales
     * const dailySales = await prisma.dailySale.findMany()
     * 
     * // Get first 10 DailySales
     * const dailySales = await prisma.dailySale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailySaleWithIdOnly = await prisma.dailySale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailySaleFindManyArgs>(args?: SelectSubset<T, DailySaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailySale.
     * @param {DailySaleCreateArgs} args - Arguments to create a DailySale.
     * @example
     * // Create one DailySale
     * const DailySale = await prisma.dailySale.create({
     *   data: {
     *     // ... data to create a DailySale
     *   }
     * })
     * 
     */
    create<T extends DailySaleCreateArgs>(args: SelectSubset<T, DailySaleCreateArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailySales.
     * @param {DailySaleCreateManyArgs} args - Arguments to create many DailySales.
     * @example
     * // Create many DailySales
     * const dailySale = await prisma.dailySale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailySaleCreateManyArgs>(args?: SelectSubset<T, DailySaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailySales and returns the data saved in the database.
     * @param {DailySaleCreateManyAndReturnArgs} args - Arguments to create many DailySales.
     * @example
     * // Create many DailySales
     * const dailySale = await prisma.dailySale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailySales and only return the `id`
     * const dailySaleWithIdOnly = await prisma.dailySale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailySaleCreateManyAndReturnArgs>(args?: SelectSubset<T, DailySaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailySale.
     * @param {DailySaleDeleteArgs} args - Arguments to delete one DailySale.
     * @example
     * // Delete one DailySale
     * const DailySale = await prisma.dailySale.delete({
     *   where: {
     *     // ... filter to delete one DailySale
     *   }
     * })
     * 
     */
    delete<T extends DailySaleDeleteArgs>(args: SelectSubset<T, DailySaleDeleteArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailySale.
     * @param {DailySaleUpdateArgs} args - Arguments to update one DailySale.
     * @example
     * // Update one DailySale
     * const dailySale = await prisma.dailySale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailySaleUpdateArgs>(args: SelectSubset<T, DailySaleUpdateArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailySales.
     * @param {DailySaleDeleteManyArgs} args - Arguments to filter DailySales to delete.
     * @example
     * // Delete a few DailySales
     * const { count } = await prisma.dailySale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailySaleDeleteManyArgs>(args?: SelectSubset<T, DailySaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailySales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailySales
     * const dailySale = await prisma.dailySale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailySaleUpdateManyArgs>(args: SelectSubset<T, DailySaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailySales and returns the data updated in the database.
     * @param {DailySaleUpdateManyAndReturnArgs} args - Arguments to update many DailySales.
     * @example
     * // Update many DailySales
     * const dailySale = await prisma.dailySale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailySales and only return the `id`
     * const dailySaleWithIdOnly = await prisma.dailySale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailySaleUpdateManyAndReturnArgs>(args: SelectSubset<T, DailySaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailySale.
     * @param {DailySaleUpsertArgs} args - Arguments to update or create a DailySale.
     * @example
     * // Update or create a DailySale
     * const dailySale = await prisma.dailySale.upsert({
     *   create: {
     *     // ... data to create a DailySale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailySale we want to update
     *   }
     * })
     */
    upsert<T extends DailySaleUpsertArgs>(args: SelectSubset<T, DailySaleUpsertArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailySales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySaleCountArgs} args - Arguments to filter DailySales to count.
     * @example
     * // Count the number of DailySales
     * const count = await prisma.dailySale.count({
     *   where: {
     *     // ... the filter for the DailySales we want to count
     *   }
     * })
    **/
    count<T extends DailySaleCountArgs>(
      args?: Subset<T, DailySaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailySaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailySale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailySaleAggregateArgs>(args: Subset<T, DailySaleAggregateArgs>): Prisma.PrismaPromise<GetDailySaleAggregateType<T>>

    /**
     * Group by DailySale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailySaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailySaleGroupByArgs['orderBy'] }
        : { orderBy?: DailySaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailySaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailySaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailySale model
   */
  readonly fields: DailySaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailySale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailySaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailySale model
   */
  interface DailySaleFieldRefs {
    readonly id: FieldRef<"DailySale", 'String'>
    readonly productId: FieldRef<"DailySale", 'String'>
    readonly date: FieldRef<"DailySale", 'DateTime'>
    readonly unitsSold: FieldRef<"DailySale", 'Int'>
    readonly createdAt: FieldRef<"DailySale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailySale findUnique
   */
  export type DailySaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * Filter, which DailySale to fetch.
     */
    where: DailySaleWhereUniqueInput
  }

  /**
   * DailySale findUniqueOrThrow
   */
  export type DailySaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * Filter, which DailySale to fetch.
     */
    where: DailySaleWhereUniqueInput
  }

  /**
   * DailySale findFirst
   */
  export type DailySaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * Filter, which DailySale to fetch.
     */
    where?: DailySaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySales to fetch.
     */
    orderBy?: DailySaleOrderByWithRelationInput | DailySaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailySales.
     */
    cursor?: DailySaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailySales.
     */
    distinct?: DailySaleScalarFieldEnum | DailySaleScalarFieldEnum[]
  }

  /**
   * DailySale findFirstOrThrow
   */
  export type DailySaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * Filter, which DailySale to fetch.
     */
    where?: DailySaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySales to fetch.
     */
    orderBy?: DailySaleOrderByWithRelationInput | DailySaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailySales.
     */
    cursor?: DailySaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailySales.
     */
    distinct?: DailySaleScalarFieldEnum | DailySaleScalarFieldEnum[]
  }

  /**
   * DailySale findMany
   */
  export type DailySaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * Filter, which DailySales to fetch.
     */
    where?: DailySaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySales to fetch.
     */
    orderBy?: DailySaleOrderByWithRelationInput | DailySaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailySales.
     */
    cursor?: DailySaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailySales.
     */
    distinct?: DailySaleScalarFieldEnum | DailySaleScalarFieldEnum[]
  }

  /**
   * DailySale create
   */
  export type DailySaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * The data needed to create a DailySale.
     */
    data: XOR<DailySaleCreateInput, DailySaleUncheckedCreateInput>
  }

  /**
   * DailySale createMany
   */
  export type DailySaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailySales.
     */
    data: DailySaleCreateManyInput | DailySaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailySale createManyAndReturn
   */
  export type DailySaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * The data used to create many DailySales.
     */
    data: DailySaleCreateManyInput | DailySaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailySale update
   */
  export type DailySaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * The data needed to update a DailySale.
     */
    data: XOR<DailySaleUpdateInput, DailySaleUncheckedUpdateInput>
    /**
     * Choose, which DailySale to update.
     */
    where: DailySaleWhereUniqueInput
  }

  /**
   * DailySale updateMany
   */
  export type DailySaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailySales.
     */
    data: XOR<DailySaleUpdateManyMutationInput, DailySaleUncheckedUpdateManyInput>
    /**
     * Filter which DailySales to update
     */
    where?: DailySaleWhereInput
    /**
     * Limit how many DailySales to update.
     */
    limit?: number
  }

  /**
   * DailySale updateManyAndReturn
   */
  export type DailySaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * The data used to update DailySales.
     */
    data: XOR<DailySaleUpdateManyMutationInput, DailySaleUncheckedUpdateManyInput>
    /**
     * Filter which DailySales to update
     */
    where?: DailySaleWhereInput
    /**
     * Limit how many DailySales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailySale upsert
   */
  export type DailySaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * The filter to search for the DailySale to update in case it exists.
     */
    where: DailySaleWhereUniqueInput
    /**
     * In case the DailySale found by the `where` argument doesn't exist, create a new DailySale with this data.
     */
    create: XOR<DailySaleCreateInput, DailySaleUncheckedCreateInput>
    /**
     * In case the DailySale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailySaleUpdateInput, DailySaleUncheckedUpdateInput>
  }

  /**
   * DailySale delete
   */
  export type DailySaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * Filter which DailySale to delete.
     */
    where: DailySaleWhereUniqueInput
  }

  /**
   * DailySale deleteMany
   */
  export type DailySaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailySales to delete
     */
    where?: DailySaleWhereInput
    /**
     * Limit how many DailySales to delete.
     */
    limit?: number
  }

  /**
   * DailySale without action
   */
  export type DailySaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
  }


  /**
   * Model Forecast
   */

  export type AggregateForecast = {
    _count: ForecastCountAggregateOutputType | null
    _avg: ForecastAvgAggregateOutputType | null
    _sum: ForecastSumAggregateOutputType | null
    _min: ForecastMinAggregateOutputType | null
    _max: ForecastMaxAggregateOutputType | null
  }

  export type ForecastAvgAggregateOutputType = {
    velocityPerDay: number | null
    stddevDemand: number | null
    safetyStock: number | null
    reorderPoint: number | null
    daysOfStockRemaining: number | null
  }

  export type ForecastSumAggregateOutputType = {
    velocityPerDay: number | null
    stddevDemand: number | null
    safetyStock: number | null
    reorderPoint: number | null
    daysOfStockRemaining: number | null
  }

  export type ForecastMinAggregateOutputType = {
    id: string | null
    productId: string | null
    velocityPerDay: number | null
    stddevDemand: number | null
    safetyStock: number | null
    reorderPoint: number | null
    daysOfStockRemaining: number | null
    status: $Enums.ForecastStatus | null
    calculatedAt: Date | null
    updatedAt: Date | null
  }

  export type ForecastMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    velocityPerDay: number | null
    stddevDemand: number | null
    safetyStock: number | null
    reorderPoint: number | null
    daysOfStockRemaining: number | null
    status: $Enums.ForecastStatus | null
    calculatedAt: Date | null
    updatedAt: Date | null
  }

  export type ForecastCountAggregateOutputType = {
    id: number
    productId: number
    velocityPerDay: number
    stddevDemand: number
    safetyStock: number
    reorderPoint: number
    daysOfStockRemaining: number
    status: number
    calculatedAt: number
    updatedAt: number
    _all: number
  }


  export type ForecastAvgAggregateInputType = {
    velocityPerDay?: true
    stddevDemand?: true
    safetyStock?: true
    reorderPoint?: true
    daysOfStockRemaining?: true
  }

  export type ForecastSumAggregateInputType = {
    velocityPerDay?: true
    stddevDemand?: true
    safetyStock?: true
    reorderPoint?: true
    daysOfStockRemaining?: true
  }

  export type ForecastMinAggregateInputType = {
    id?: true
    productId?: true
    velocityPerDay?: true
    stddevDemand?: true
    safetyStock?: true
    reorderPoint?: true
    daysOfStockRemaining?: true
    status?: true
    calculatedAt?: true
    updatedAt?: true
  }

  export type ForecastMaxAggregateInputType = {
    id?: true
    productId?: true
    velocityPerDay?: true
    stddevDemand?: true
    safetyStock?: true
    reorderPoint?: true
    daysOfStockRemaining?: true
    status?: true
    calculatedAt?: true
    updatedAt?: true
  }

  export type ForecastCountAggregateInputType = {
    id?: true
    productId?: true
    velocityPerDay?: true
    stddevDemand?: true
    safetyStock?: true
    reorderPoint?: true
    daysOfStockRemaining?: true
    status?: true
    calculatedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ForecastAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forecast to aggregate.
     */
    where?: ForecastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forecasts to fetch.
     */
    orderBy?: ForecastOrderByWithRelationInput | ForecastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForecastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forecasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forecasts
    **/
    _count?: true | ForecastCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForecastAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForecastSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForecastMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForecastMaxAggregateInputType
  }

  export type GetForecastAggregateType<T extends ForecastAggregateArgs> = {
        [P in keyof T & keyof AggregateForecast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForecast[P]>
      : GetScalarType<T[P], AggregateForecast[P]>
  }




  export type ForecastGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForecastWhereInput
    orderBy?: ForecastOrderByWithAggregationInput | ForecastOrderByWithAggregationInput[]
    by: ForecastScalarFieldEnum[] | ForecastScalarFieldEnum
    having?: ForecastScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForecastCountAggregateInputType | true
    _avg?: ForecastAvgAggregateInputType
    _sum?: ForecastSumAggregateInputType
    _min?: ForecastMinAggregateInputType
    _max?: ForecastMaxAggregateInputType
  }

  export type ForecastGroupByOutputType = {
    id: string
    productId: string
    velocityPerDay: number
    stddevDemand: number
    safetyStock: number
    reorderPoint: number
    daysOfStockRemaining: number | null
    status: $Enums.ForecastStatus
    calculatedAt: Date
    updatedAt: Date
    _count: ForecastCountAggregateOutputType | null
    _avg: ForecastAvgAggregateOutputType | null
    _sum: ForecastSumAggregateOutputType | null
    _min: ForecastMinAggregateOutputType | null
    _max: ForecastMaxAggregateOutputType | null
  }

  type GetForecastGroupByPayload<T extends ForecastGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForecastGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForecastGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForecastGroupByOutputType[P]>
            : GetScalarType<T[P], ForecastGroupByOutputType[P]>
        }
      >
    >


  export type ForecastSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    velocityPerDay?: boolean
    stddevDemand?: boolean
    safetyStock?: boolean
    reorderPoint?: boolean
    daysOfStockRemaining?: boolean
    status?: boolean
    calculatedAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecast"]>

  export type ForecastSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    velocityPerDay?: boolean
    stddevDemand?: boolean
    safetyStock?: boolean
    reorderPoint?: boolean
    daysOfStockRemaining?: boolean
    status?: boolean
    calculatedAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecast"]>

  export type ForecastSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    velocityPerDay?: boolean
    stddevDemand?: boolean
    safetyStock?: boolean
    reorderPoint?: boolean
    daysOfStockRemaining?: boolean
    status?: boolean
    calculatedAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecast"]>

  export type ForecastSelectScalar = {
    id?: boolean
    productId?: boolean
    velocityPerDay?: boolean
    stddevDemand?: boolean
    safetyStock?: boolean
    reorderPoint?: boolean
    daysOfStockRemaining?: boolean
    status?: boolean
    calculatedAt?: boolean
    updatedAt?: boolean
  }

  export type ForecastOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "velocityPerDay" | "stddevDemand" | "safetyStock" | "reorderPoint" | "daysOfStockRemaining" | "status" | "calculatedAt" | "updatedAt", ExtArgs["result"]["forecast"]>
  export type ForecastInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ForecastIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ForecastIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ForecastPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Forecast"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      velocityPerDay: number
      stddevDemand: number
      safetyStock: number
      reorderPoint: number
      daysOfStockRemaining: number | null
      status: $Enums.ForecastStatus
      calculatedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["forecast"]>
    composites: {}
  }

  type ForecastGetPayload<S extends boolean | null | undefined | ForecastDefaultArgs> = $Result.GetResult<Prisma.$ForecastPayload, S>

  type ForecastCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForecastFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForecastCountAggregateInputType | true
    }

  export interface ForecastDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Forecast'], meta: { name: 'Forecast' } }
    /**
     * Find zero or one Forecast that matches the filter.
     * @param {ForecastFindUniqueArgs} args - Arguments to find a Forecast
     * @example
     * // Get one Forecast
     * const forecast = await prisma.forecast.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForecastFindUniqueArgs>(args: SelectSubset<T, ForecastFindUniqueArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Forecast that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForecastFindUniqueOrThrowArgs} args - Arguments to find a Forecast
     * @example
     * // Get one Forecast
     * const forecast = await prisma.forecast.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForecastFindUniqueOrThrowArgs>(args: SelectSubset<T, ForecastFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forecast that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastFindFirstArgs} args - Arguments to find a Forecast
     * @example
     * // Get one Forecast
     * const forecast = await prisma.forecast.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForecastFindFirstArgs>(args?: SelectSubset<T, ForecastFindFirstArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forecast that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastFindFirstOrThrowArgs} args - Arguments to find a Forecast
     * @example
     * // Get one Forecast
     * const forecast = await prisma.forecast.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForecastFindFirstOrThrowArgs>(args?: SelectSubset<T, ForecastFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forecasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forecasts
     * const forecasts = await prisma.forecast.findMany()
     * 
     * // Get first 10 Forecasts
     * const forecasts = await prisma.forecast.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forecastWithIdOnly = await prisma.forecast.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForecastFindManyArgs>(args?: SelectSubset<T, ForecastFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Forecast.
     * @param {ForecastCreateArgs} args - Arguments to create a Forecast.
     * @example
     * // Create one Forecast
     * const Forecast = await prisma.forecast.create({
     *   data: {
     *     // ... data to create a Forecast
     *   }
     * })
     * 
     */
    create<T extends ForecastCreateArgs>(args: SelectSubset<T, ForecastCreateArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forecasts.
     * @param {ForecastCreateManyArgs} args - Arguments to create many Forecasts.
     * @example
     * // Create many Forecasts
     * const forecast = await prisma.forecast.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForecastCreateManyArgs>(args?: SelectSubset<T, ForecastCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forecasts and returns the data saved in the database.
     * @param {ForecastCreateManyAndReturnArgs} args - Arguments to create many Forecasts.
     * @example
     * // Create many Forecasts
     * const forecast = await prisma.forecast.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forecasts and only return the `id`
     * const forecastWithIdOnly = await prisma.forecast.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForecastCreateManyAndReturnArgs>(args?: SelectSubset<T, ForecastCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Forecast.
     * @param {ForecastDeleteArgs} args - Arguments to delete one Forecast.
     * @example
     * // Delete one Forecast
     * const Forecast = await prisma.forecast.delete({
     *   where: {
     *     // ... filter to delete one Forecast
     *   }
     * })
     * 
     */
    delete<T extends ForecastDeleteArgs>(args: SelectSubset<T, ForecastDeleteArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Forecast.
     * @param {ForecastUpdateArgs} args - Arguments to update one Forecast.
     * @example
     * // Update one Forecast
     * const forecast = await prisma.forecast.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForecastUpdateArgs>(args: SelectSubset<T, ForecastUpdateArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forecasts.
     * @param {ForecastDeleteManyArgs} args - Arguments to filter Forecasts to delete.
     * @example
     * // Delete a few Forecasts
     * const { count } = await prisma.forecast.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForecastDeleteManyArgs>(args?: SelectSubset<T, ForecastDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forecasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forecasts
     * const forecast = await prisma.forecast.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForecastUpdateManyArgs>(args: SelectSubset<T, ForecastUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forecasts and returns the data updated in the database.
     * @param {ForecastUpdateManyAndReturnArgs} args - Arguments to update many Forecasts.
     * @example
     * // Update many Forecasts
     * const forecast = await prisma.forecast.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forecasts and only return the `id`
     * const forecastWithIdOnly = await prisma.forecast.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForecastUpdateManyAndReturnArgs>(args: SelectSubset<T, ForecastUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Forecast.
     * @param {ForecastUpsertArgs} args - Arguments to update or create a Forecast.
     * @example
     * // Update or create a Forecast
     * const forecast = await prisma.forecast.upsert({
     *   create: {
     *     // ... data to create a Forecast
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Forecast we want to update
     *   }
     * })
     */
    upsert<T extends ForecastUpsertArgs>(args: SelectSubset<T, ForecastUpsertArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forecasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastCountArgs} args - Arguments to filter Forecasts to count.
     * @example
     * // Count the number of Forecasts
     * const count = await prisma.forecast.count({
     *   where: {
     *     // ... the filter for the Forecasts we want to count
     *   }
     * })
    **/
    count<T extends ForecastCountArgs>(
      args?: Subset<T, ForecastCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForecastCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Forecast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForecastAggregateArgs>(args: Subset<T, ForecastAggregateArgs>): Prisma.PrismaPromise<GetForecastAggregateType<T>>

    /**
     * Group by Forecast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForecastGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForecastGroupByArgs['orderBy'] }
        : { orderBy?: ForecastGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForecastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForecastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Forecast model
   */
  readonly fields: ForecastFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Forecast.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForecastClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Forecast model
   */
  interface ForecastFieldRefs {
    readonly id: FieldRef<"Forecast", 'String'>
    readonly productId: FieldRef<"Forecast", 'String'>
    readonly velocityPerDay: FieldRef<"Forecast", 'Float'>
    readonly stddevDemand: FieldRef<"Forecast", 'Float'>
    readonly safetyStock: FieldRef<"Forecast", 'Float'>
    readonly reorderPoint: FieldRef<"Forecast", 'Float'>
    readonly daysOfStockRemaining: FieldRef<"Forecast", 'Int'>
    readonly status: FieldRef<"Forecast", 'ForecastStatus'>
    readonly calculatedAt: FieldRef<"Forecast", 'DateTime'>
    readonly updatedAt: FieldRef<"Forecast", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Forecast findUnique
   */
  export type ForecastFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * Filter, which Forecast to fetch.
     */
    where: ForecastWhereUniqueInput
  }

  /**
   * Forecast findUniqueOrThrow
   */
  export type ForecastFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * Filter, which Forecast to fetch.
     */
    where: ForecastWhereUniqueInput
  }

  /**
   * Forecast findFirst
   */
  export type ForecastFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * Filter, which Forecast to fetch.
     */
    where?: ForecastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forecasts to fetch.
     */
    orderBy?: ForecastOrderByWithRelationInput | ForecastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forecasts.
     */
    cursor?: ForecastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forecasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forecasts.
     */
    distinct?: ForecastScalarFieldEnum | ForecastScalarFieldEnum[]
  }

  /**
   * Forecast findFirstOrThrow
   */
  export type ForecastFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * Filter, which Forecast to fetch.
     */
    where?: ForecastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forecasts to fetch.
     */
    orderBy?: ForecastOrderByWithRelationInput | ForecastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forecasts.
     */
    cursor?: ForecastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forecasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forecasts.
     */
    distinct?: ForecastScalarFieldEnum | ForecastScalarFieldEnum[]
  }

  /**
   * Forecast findMany
   */
  export type ForecastFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * Filter, which Forecasts to fetch.
     */
    where?: ForecastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forecasts to fetch.
     */
    orderBy?: ForecastOrderByWithRelationInput | ForecastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forecasts.
     */
    cursor?: ForecastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forecasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forecasts.
     */
    distinct?: ForecastScalarFieldEnum | ForecastScalarFieldEnum[]
  }

  /**
   * Forecast create
   */
  export type ForecastCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * The data needed to create a Forecast.
     */
    data: XOR<ForecastCreateInput, ForecastUncheckedCreateInput>
  }

  /**
   * Forecast createMany
   */
  export type ForecastCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forecasts.
     */
    data: ForecastCreateManyInput | ForecastCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Forecast createManyAndReturn
   */
  export type ForecastCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * The data used to create many Forecasts.
     */
    data: ForecastCreateManyInput | ForecastCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Forecast update
   */
  export type ForecastUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * The data needed to update a Forecast.
     */
    data: XOR<ForecastUpdateInput, ForecastUncheckedUpdateInput>
    /**
     * Choose, which Forecast to update.
     */
    where: ForecastWhereUniqueInput
  }

  /**
   * Forecast updateMany
   */
  export type ForecastUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forecasts.
     */
    data: XOR<ForecastUpdateManyMutationInput, ForecastUncheckedUpdateManyInput>
    /**
     * Filter which Forecasts to update
     */
    where?: ForecastWhereInput
    /**
     * Limit how many Forecasts to update.
     */
    limit?: number
  }

  /**
   * Forecast updateManyAndReturn
   */
  export type ForecastUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * The data used to update Forecasts.
     */
    data: XOR<ForecastUpdateManyMutationInput, ForecastUncheckedUpdateManyInput>
    /**
     * Filter which Forecasts to update
     */
    where?: ForecastWhereInput
    /**
     * Limit how many Forecasts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Forecast upsert
   */
  export type ForecastUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * The filter to search for the Forecast to update in case it exists.
     */
    where: ForecastWhereUniqueInput
    /**
     * In case the Forecast found by the `where` argument doesn't exist, create a new Forecast with this data.
     */
    create: XOR<ForecastCreateInput, ForecastUncheckedCreateInput>
    /**
     * In case the Forecast was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForecastUpdateInput, ForecastUncheckedUpdateInput>
  }

  /**
   * Forecast delete
   */
  export type ForecastDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * Filter which Forecast to delete.
     */
    where: ForecastWhereUniqueInput
  }

  /**
   * Forecast deleteMany
   */
  export type ForecastDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forecasts to delete
     */
    where?: ForecastWhereInput
    /**
     * Limit how many Forecasts to delete.
     */
    limit?: number
  }

  /**
   * Forecast without action
   */
  export type ForecastDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseOrder
   */

  export type AggregatePurchaseOrder = {
    _count: PurchaseOrderCountAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  export type PurchaseOrderMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    reference: string | null
    status: $Enums.PoStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseOrderMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    reference: string | null
    status: $Enums.PoStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseOrderCountAggregateOutputType = {
    id: number
    shopId: number
    reference: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchaseOrderMinAggregateInputType = {
    id?: true
    shopId?: true
    reference?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseOrderMaxAggregateInputType = {
    id?: true
    shopId?: true
    reference?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseOrderCountAggregateInputType = {
    id?: true
    shopId?: true
    reference?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurchaseOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrder to aggregate.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrders
    **/
    _count?: true | PurchaseOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type GetPurchaseOrderAggregateType<T extends PurchaseOrderAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrder[P]>
      : GetScalarType<T[P], AggregatePurchaseOrder[P]>
  }




  export type PurchaseOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithAggregationInput | PurchaseOrderOrderByWithAggregationInput[]
    by: PurchaseOrderScalarFieldEnum[] | PurchaseOrderScalarFieldEnum
    having?: PurchaseOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrderCountAggregateInputType | true
    _min?: PurchaseOrderMinAggregateInputType
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type PurchaseOrderGroupByOutputType = {
    id: string
    shopId: string
    reference: string
    status: $Enums.PoStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PurchaseOrderCountAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  type GetPurchaseOrderGroupByPayload<T extends PurchaseOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    reference?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lineItems?: boolean | PurchaseOrder$lineItemsArgs<ExtArgs>
    _count?: boolean | PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    reference?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    reference?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectScalar = {
    id?: boolean
    shopId?: boolean
    reference?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurchaseOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "reference" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["purchaseOrder"]>
  export type PurchaseOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lineItems?: boolean | PurchaseOrder$lineItemsArgs<ExtArgs>
    _count?: boolean | PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PurchaseOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrder"
    objects: {
      lineItems: Prisma.$PoLineItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      reference: string
      status: $Enums.PoStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["purchaseOrder"]>
    composites: {}
  }

  type PurchaseOrderGetPayload<S extends boolean | null | undefined | PurchaseOrderDefaultArgs> = $Result.GetResult<Prisma.$PurchaseOrderPayload, S>

  type PurchaseOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseOrderCountAggregateInputType | true
    }

  export interface PurchaseOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrder'], meta: { name: 'PurchaseOrder' } }
    /**
     * Find zero or one PurchaseOrder that matches the filter.
     * @param {PurchaseOrderFindUniqueArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseOrderFindUniqueArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseOrderFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseOrderFindFirstArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany()
     * 
     * // Get first 10 PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseOrderFindManyArgs>(args?: SelectSubset<T, PurchaseOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseOrder.
     * @param {PurchaseOrderCreateArgs} args - Arguments to create a PurchaseOrder.
     * @example
     * // Create one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.create({
     *   data: {
     *     // ... data to create a PurchaseOrder
     *   }
     * })
     * 
     */
    create<T extends PurchaseOrderCreateArgs>(args: SelectSubset<T, PurchaseOrderCreateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseOrders.
     * @param {PurchaseOrderCreateManyArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseOrderCreateManyArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseOrders and returns the data saved in the database.
     * @param {PurchaseOrderCreateManyAndReturnArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseOrder.
     * @param {PurchaseOrderDeleteArgs} args - Arguments to delete one PurchaseOrder.
     * @example
     * // Delete one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrder
     *   }
     * })
     * 
     */
    delete<T extends PurchaseOrderDeleteArgs>(args: SelectSubset<T, PurchaseOrderDeleteArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseOrder.
     * @param {PurchaseOrderUpdateArgs} args - Arguments to update one PurchaseOrder.
     * @example
     * // Update one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseOrderUpdateArgs>(args: SelectSubset<T, PurchaseOrderUpdateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseOrders.
     * @param {PurchaseOrderDeleteManyArgs} args - Arguments to filter PurchaseOrders to delete.
     * @example
     * // Delete a few PurchaseOrders
     * const { count } = await prisma.purchaseOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseOrderDeleteManyArgs>(args?: SelectSubset<T, PurchaseOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseOrderUpdateManyArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders and returns the data updated in the database.
     * @param {PurchaseOrderUpdateManyAndReturnArgs} args - Arguments to update many PurchaseOrders.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseOrder.
     * @param {PurchaseOrderUpsertArgs} args - Arguments to update or create a PurchaseOrder.
     * @example
     * // Update or create a PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrder we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseOrderUpsertArgs>(args: SelectSubset<T, PurchaseOrderUpsertArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderCountArgs} args - Arguments to filter PurchaseOrders to count.
     * @example
     * // Count the number of PurchaseOrders
     * const count = await prisma.purchaseOrder.count({
     *   where: {
     *     // ... the filter for the PurchaseOrders we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrderCountArgs>(
      args?: Subset<T, PurchaseOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseOrderAggregateArgs>(args: Subset<T, PurchaseOrderAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderAggregateType<T>>

    /**
     * Group by PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrderGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseOrder model
   */
  readonly fields: PurchaseOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lineItems<T extends PurchaseOrder$lineItemsArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrder$lineItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseOrder model
   */
  interface PurchaseOrderFieldRefs {
    readonly id: FieldRef<"PurchaseOrder", 'String'>
    readonly shopId: FieldRef<"PurchaseOrder", 'String'>
    readonly reference: FieldRef<"PurchaseOrder", 'String'>
    readonly status: FieldRef<"PurchaseOrder", 'PoStatus'>
    readonly notes: FieldRef<"PurchaseOrder", 'String'>
    readonly createdAt: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"PurchaseOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseOrder findUnique
   */
  export type PurchaseOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findUniqueOrThrow
   */
  export type PurchaseOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findFirst
   */
  export type PurchaseOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findFirstOrThrow
   */
  export type PurchaseOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findMany
   */
  export type PurchaseOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrders to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder create
   */
  export type PurchaseOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrder.
     */
    data: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
  }

  /**
   * PurchaseOrder createMany
   */
  export type PurchaseOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrder createManyAndReturn
   */
  export type PurchaseOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrder update
   */
  export type PurchaseOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrder.
     */
    data: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrder to update.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder updateMany
   */
  export type PurchaseOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrder updateManyAndReturn
   */
  export type PurchaseOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrder upsert
   */
  export type PurchaseOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrder to update in case it exists.
     */
    where: PurchaseOrderWhereUniqueInput
    /**
     * In case the PurchaseOrder found by the `where` argument doesn't exist, create a new PurchaseOrder with this data.
     */
    create: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
    /**
     * In case the PurchaseOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
  }

  /**
   * PurchaseOrder delete
   */
  export type PurchaseOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter which PurchaseOrder to delete.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder deleteMany
   */
  export type PurchaseOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrders to delete
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to delete.
     */
    limit?: number
  }

  /**
   * PurchaseOrder.lineItems
   */
  export type PurchaseOrder$lineItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: PoLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: PoLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoLineItemInclude<ExtArgs> | null
    where?: PoLineItemWhereInput
    orderBy?: PoLineItemOrderByWithRelationInput | PoLineItemOrderByWithRelationInput[]
    cursor?: PoLineItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoLineItemScalarFieldEnum | PoLineItemScalarFieldEnum[]
  }

  /**
   * PurchaseOrder without action
   */
  export type PurchaseOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
  }


  /**
   * Model PoLineItem
   */

  export type AggregatePoLineItem = {
    _count: PoLineItemCountAggregateOutputType | null
    _avg: PoLineItemAvgAggregateOutputType | null
    _sum: PoLineItemSumAggregateOutputType | null
    _min: PoLineItemMinAggregateOutputType | null
    _max: PoLineItemMaxAggregateOutputType | null
  }

  export type PoLineItemAvgAggregateOutputType = {
    quantity: number | null
    unitCost: number | null
  }

  export type PoLineItemSumAggregateOutputType = {
    quantity: number | null
    unitCost: number | null
  }

  export type PoLineItemMinAggregateOutputType = {
    id: string | null
    purchaseOrderId: string | null
    productId: string | null
    quantity: number | null
    unitCost: number | null
  }

  export type PoLineItemMaxAggregateOutputType = {
    id: string | null
    purchaseOrderId: string | null
    productId: string | null
    quantity: number | null
    unitCost: number | null
  }

  export type PoLineItemCountAggregateOutputType = {
    id: number
    purchaseOrderId: number
    productId: number
    quantity: number
    unitCost: number
    _all: number
  }


  export type PoLineItemAvgAggregateInputType = {
    quantity?: true
    unitCost?: true
  }

  export type PoLineItemSumAggregateInputType = {
    quantity?: true
    unitCost?: true
  }

  export type PoLineItemMinAggregateInputType = {
    id?: true
    purchaseOrderId?: true
    productId?: true
    quantity?: true
    unitCost?: true
  }

  export type PoLineItemMaxAggregateInputType = {
    id?: true
    purchaseOrderId?: true
    productId?: true
    quantity?: true
    unitCost?: true
  }

  export type PoLineItemCountAggregateInputType = {
    id?: true
    purchaseOrderId?: true
    productId?: true
    quantity?: true
    unitCost?: true
    _all?: true
  }

  export type PoLineItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoLineItem to aggregate.
     */
    where?: PoLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoLineItems to fetch.
     */
    orderBy?: PoLineItemOrderByWithRelationInput | PoLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PoLineItems
    **/
    _count?: true | PoLineItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoLineItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoLineItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoLineItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoLineItemMaxAggregateInputType
  }

  export type GetPoLineItemAggregateType<T extends PoLineItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePoLineItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoLineItem[P]>
      : GetScalarType<T[P], AggregatePoLineItem[P]>
  }




  export type PoLineItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoLineItemWhereInput
    orderBy?: PoLineItemOrderByWithAggregationInput | PoLineItemOrderByWithAggregationInput[]
    by: PoLineItemScalarFieldEnum[] | PoLineItemScalarFieldEnum
    having?: PoLineItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoLineItemCountAggregateInputType | true
    _avg?: PoLineItemAvgAggregateInputType
    _sum?: PoLineItemSumAggregateInputType
    _min?: PoLineItemMinAggregateInputType
    _max?: PoLineItemMaxAggregateInputType
  }

  export type PoLineItemGroupByOutputType = {
    id: string
    purchaseOrderId: string
    productId: string
    quantity: number
    unitCost: number | null
    _count: PoLineItemCountAggregateOutputType | null
    _avg: PoLineItemAvgAggregateOutputType | null
    _sum: PoLineItemSumAggregateOutputType | null
    _min: PoLineItemMinAggregateOutputType | null
    _max: PoLineItemMaxAggregateOutputType | null
  }

  type GetPoLineItemGroupByPayload<T extends PoLineItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoLineItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoLineItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoLineItemGroupByOutputType[P]>
            : GetScalarType<T[P], PoLineItemGroupByOutputType[P]>
        }
      >
    >


  export type PoLineItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseOrderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitCost?: boolean
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poLineItem"]>

  export type PoLineItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseOrderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitCost?: boolean
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poLineItem"]>

  export type PoLineItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseOrderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitCost?: boolean
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poLineItem"]>

  export type PoLineItemSelectScalar = {
    id?: boolean
    purchaseOrderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitCost?: boolean
  }

  export type PoLineItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "purchaseOrderId" | "productId" | "quantity" | "unitCost", ExtArgs["result"]["poLineItem"]>
  export type PoLineItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }
  export type PoLineItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }
  export type PoLineItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }

  export type $PoLineItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PoLineItem"
    objects: {
      purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchaseOrderId: string
      productId: string
      quantity: number
      unitCost: number | null
    }, ExtArgs["result"]["poLineItem"]>
    composites: {}
  }

  type PoLineItemGetPayload<S extends boolean | null | undefined | PoLineItemDefaultArgs> = $Result.GetResult<Prisma.$PoLineItemPayload, S>

  type PoLineItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoLineItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoLineItemCountAggregateInputType | true
    }

  export interface PoLineItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PoLineItem'], meta: { name: 'PoLineItem' } }
    /**
     * Find zero or one PoLineItem that matches the filter.
     * @param {PoLineItemFindUniqueArgs} args - Arguments to find a PoLineItem
     * @example
     * // Get one PoLineItem
     * const poLineItem = await prisma.poLineItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoLineItemFindUniqueArgs>(args: SelectSubset<T, PoLineItemFindUniqueArgs<ExtArgs>>): Prisma__PoLineItemClient<$Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PoLineItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoLineItemFindUniqueOrThrowArgs} args - Arguments to find a PoLineItem
     * @example
     * // Get one PoLineItem
     * const poLineItem = await prisma.poLineItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoLineItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PoLineItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoLineItemClient<$Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoLineItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoLineItemFindFirstArgs} args - Arguments to find a PoLineItem
     * @example
     * // Get one PoLineItem
     * const poLineItem = await prisma.poLineItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoLineItemFindFirstArgs>(args?: SelectSubset<T, PoLineItemFindFirstArgs<ExtArgs>>): Prisma__PoLineItemClient<$Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoLineItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoLineItemFindFirstOrThrowArgs} args - Arguments to find a PoLineItem
     * @example
     * // Get one PoLineItem
     * const poLineItem = await prisma.poLineItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoLineItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PoLineItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoLineItemClient<$Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PoLineItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoLineItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PoLineItems
     * const poLineItems = await prisma.poLineItem.findMany()
     * 
     * // Get first 10 PoLineItems
     * const poLineItems = await prisma.poLineItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poLineItemWithIdOnly = await prisma.poLineItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoLineItemFindManyArgs>(args?: SelectSubset<T, PoLineItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PoLineItem.
     * @param {PoLineItemCreateArgs} args - Arguments to create a PoLineItem.
     * @example
     * // Create one PoLineItem
     * const PoLineItem = await prisma.poLineItem.create({
     *   data: {
     *     // ... data to create a PoLineItem
     *   }
     * })
     * 
     */
    create<T extends PoLineItemCreateArgs>(args: SelectSubset<T, PoLineItemCreateArgs<ExtArgs>>): Prisma__PoLineItemClient<$Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PoLineItems.
     * @param {PoLineItemCreateManyArgs} args - Arguments to create many PoLineItems.
     * @example
     * // Create many PoLineItems
     * const poLineItem = await prisma.poLineItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoLineItemCreateManyArgs>(args?: SelectSubset<T, PoLineItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PoLineItems and returns the data saved in the database.
     * @param {PoLineItemCreateManyAndReturnArgs} args - Arguments to create many PoLineItems.
     * @example
     * // Create many PoLineItems
     * const poLineItem = await prisma.poLineItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PoLineItems and only return the `id`
     * const poLineItemWithIdOnly = await prisma.poLineItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoLineItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PoLineItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PoLineItem.
     * @param {PoLineItemDeleteArgs} args - Arguments to delete one PoLineItem.
     * @example
     * // Delete one PoLineItem
     * const PoLineItem = await prisma.poLineItem.delete({
     *   where: {
     *     // ... filter to delete one PoLineItem
     *   }
     * })
     * 
     */
    delete<T extends PoLineItemDeleteArgs>(args: SelectSubset<T, PoLineItemDeleteArgs<ExtArgs>>): Prisma__PoLineItemClient<$Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PoLineItem.
     * @param {PoLineItemUpdateArgs} args - Arguments to update one PoLineItem.
     * @example
     * // Update one PoLineItem
     * const poLineItem = await prisma.poLineItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoLineItemUpdateArgs>(args: SelectSubset<T, PoLineItemUpdateArgs<ExtArgs>>): Prisma__PoLineItemClient<$Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PoLineItems.
     * @param {PoLineItemDeleteManyArgs} args - Arguments to filter PoLineItems to delete.
     * @example
     * // Delete a few PoLineItems
     * const { count } = await prisma.poLineItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoLineItemDeleteManyArgs>(args?: SelectSubset<T, PoLineItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoLineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoLineItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PoLineItems
     * const poLineItem = await prisma.poLineItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoLineItemUpdateManyArgs>(args: SelectSubset<T, PoLineItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoLineItems and returns the data updated in the database.
     * @param {PoLineItemUpdateManyAndReturnArgs} args - Arguments to update many PoLineItems.
     * @example
     * // Update many PoLineItems
     * const poLineItem = await prisma.poLineItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PoLineItems and only return the `id`
     * const poLineItemWithIdOnly = await prisma.poLineItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoLineItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PoLineItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PoLineItem.
     * @param {PoLineItemUpsertArgs} args - Arguments to update or create a PoLineItem.
     * @example
     * // Update or create a PoLineItem
     * const poLineItem = await prisma.poLineItem.upsert({
     *   create: {
     *     // ... data to create a PoLineItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PoLineItem we want to update
     *   }
     * })
     */
    upsert<T extends PoLineItemUpsertArgs>(args: SelectSubset<T, PoLineItemUpsertArgs<ExtArgs>>): Prisma__PoLineItemClient<$Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PoLineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoLineItemCountArgs} args - Arguments to filter PoLineItems to count.
     * @example
     * // Count the number of PoLineItems
     * const count = await prisma.poLineItem.count({
     *   where: {
     *     // ... the filter for the PoLineItems we want to count
     *   }
     * })
    **/
    count<T extends PoLineItemCountArgs>(
      args?: Subset<T, PoLineItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoLineItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PoLineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoLineItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoLineItemAggregateArgs>(args: Subset<T, PoLineItemAggregateArgs>): Prisma.PrismaPromise<GetPoLineItemAggregateType<T>>

    /**
     * Group by PoLineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoLineItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoLineItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoLineItemGroupByArgs['orderBy'] }
        : { orderBy?: PoLineItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoLineItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoLineItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PoLineItem model
   */
  readonly fields: PoLineItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PoLineItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoLineItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchaseOrder<T extends PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrderDefaultArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PoLineItem model
   */
  interface PoLineItemFieldRefs {
    readonly id: FieldRef<"PoLineItem", 'String'>
    readonly purchaseOrderId: FieldRef<"PoLineItem", 'String'>
    readonly productId: FieldRef<"PoLineItem", 'String'>
    readonly quantity: FieldRef<"PoLineItem", 'Int'>
    readonly unitCost: FieldRef<"PoLineItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * PoLineItem findUnique
   */
  export type PoLineItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: PoLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: PoLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoLineItemInclude<ExtArgs> | null
    /**
     * Filter, which PoLineItem to fetch.
     */
    where: PoLineItemWhereUniqueInput
  }

  /**
   * PoLineItem findUniqueOrThrow
   */
  export type PoLineItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: PoLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: PoLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoLineItemInclude<ExtArgs> | null
    /**
     * Filter, which PoLineItem to fetch.
     */
    where: PoLineItemWhereUniqueInput
  }

  /**
   * PoLineItem findFirst
   */
  export type PoLineItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: PoLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: PoLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoLineItemInclude<ExtArgs> | null
    /**
     * Filter, which PoLineItem to fetch.
     */
    where?: PoLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoLineItems to fetch.
     */
    orderBy?: PoLineItemOrderByWithRelationInput | PoLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoLineItems.
     */
    cursor?: PoLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoLineItems.
     */
    distinct?: PoLineItemScalarFieldEnum | PoLineItemScalarFieldEnum[]
  }

  /**
   * PoLineItem findFirstOrThrow
   */
  export type PoLineItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: PoLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: PoLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoLineItemInclude<ExtArgs> | null
    /**
     * Filter, which PoLineItem to fetch.
     */
    where?: PoLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoLineItems to fetch.
     */
    orderBy?: PoLineItemOrderByWithRelationInput | PoLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoLineItems.
     */
    cursor?: PoLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoLineItems.
     */
    distinct?: PoLineItemScalarFieldEnum | PoLineItemScalarFieldEnum[]
  }

  /**
   * PoLineItem findMany
   */
  export type PoLineItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: PoLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: PoLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoLineItemInclude<ExtArgs> | null
    /**
     * Filter, which PoLineItems to fetch.
     */
    where?: PoLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoLineItems to fetch.
     */
    orderBy?: PoLineItemOrderByWithRelationInput | PoLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PoLineItems.
     */
    cursor?: PoLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoLineItems.
     */
    distinct?: PoLineItemScalarFieldEnum | PoLineItemScalarFieldEnum[]
  }

  /**
   * PoLineItem create
   */
  export type PoLineItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: PoLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: PoLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoLineItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PoLineItem.
     */
    data: XOR<PoLineItemCreateInput, PoLineItemUncheckedCreateInput>
  }

  /**
   * PoLineItem createMany
   */
  export type PoLineItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PoLineItems.
     */
    data: PoLineItemCreateManyInput | PoLineItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PoLineItem createManyAndReturn
   */
  export type PoLineItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: PoLineItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: PoLineItemOmit<ExtArgs> | null
    /**
     * The data used to create many PoLineItems.
     */
    data: PoLineItemCreateManyInput | PoLineItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoLineItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PoLineItem update
   */
  export type PoLineItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: PoLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: PoLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoLineItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PoLineItem.
     */
    data: XOR<PoLineItemUpdateInput, PoLineItemUncheckedUpdateInput>
    /**
     * Choose, which PoLineItem to update.
     */
    where: PoLineItemWhereUniqueInput
  }

  /**
   * PoLineItem updateMany
   */
  export type PoLineItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PoLineItems.
     */
    data: XOR<PoLineItemUpdateManyMutationInput, PoLineItemUncheckedUpdateManyInput>
    /**
     * Filter which PoLineItems to update
     */
    where?: PoLineItemWhereInput
    /**
     * Limit how many PoLineItems to update.
     */
    limit?: number
  }

  /**
   * PoLineItem updateManyAndReturn
   */
  export type PoLineItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: PoLineItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: PoLineItemOmit<ExtArgs> | null
    /**
     * The data used to update PoLineItems.
     */
    data: XOR<PoLineItemUpdateManyMutationInput, PoLineItemUncheckedUpdateManyInput>
    /**
     * Filter which PoLineItems to update
     */
    where?: PoLineItemWhereInput
    /**
     * Limit how many PoLineItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoLineItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PoLineItem upsert
   */
  export type PoLineItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: PoLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: PoLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoLineItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PoLineItem to update in case it exists.
     */
    where: PoLineItemWhereUniqueInput
    /**
     * In case the PoLineItem found by the `where` argument doesn't exist, create a new PoLineItem with this data.
     */
    create: XOR<PoLineItemCreateInput, PoLineItemUncheckedCreateInput>
    /**
     * In case the PoLineItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoLineItemUpdateInput, PoLineItemUncheckedUpdateInput>
  }

  /**
   * PoLineItem delete
   */
  export type PoLineItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: PoLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: PoLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoLineItemInclude<ExtArgs> | null
    /**
     * Filter which PoLineItem to delete.
     */
    where: PoLineItemWhereUniqueInput
  }

  /**
   * PoLineItem deleteMany
   */
  export type PoLineItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoLineItems to delete
     */
    where?: PoLineItemWhereInput
    /**
     * Limit how many PoLineItems to delete.
     */
    limit?: number
  }

  /**
   * PoLineItem without action
   */
  export type PoLineItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: PoLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: PoLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoLineItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ShopScalarFieldEnum: {
    id: 'id',
    domain: 'domain',
    accessToken: 'accessToken',
    plan: 'plan',
    timezone: 'timezone',
    alertsEnabled: 'alertsEnabled',
    alertEmail: 'alertEmail',
    installedAt: 'installedAt',
    updatedAt: 'updatedAt'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    shopifyProductId: 'shopifyProductId',
    shopifyVariantId: 'shopifyVariantId',
    title: 'title',
    sku: 'sku',
    currentStock: 'currentStock',
    leadTimeDays: 'leadTimeDays',
    serviceLevelZ: 'serviceLevelZ',
    stockUpdatedAt: 'stockUpdatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const DailySaleScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    date: 'date',
    unitsSold: 'unitsSold',
    createdAt: 'createdAt'
  };

  export type DailySaleScalarFieldEnum = (typeof DailySaleScalarFieldEnum)[keyof typeof DailySaleScalarFieldEnum]


  export const ForecastScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    velocityPerDay: 'velocityPerDay',
    stddevDemand: 'stddevDemand',
    safetyStock: 'safetyStock',
    reorderPoint: 'reorderPoint',
    daysOfStockRemaining: 'daysOfStockRemaining',
    status: 'status',
    calculatedAt: 'calculatedAt',
    updatedAt: 'updatedAt'
  };

  export type ForecastScalarFieldEnum = (typeof ForecastScalarFieldEnum)[keyof typeof ForecastScalarFieldEnum]


  export const PurchaseOrderScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    reference: 'reference',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PurchaseOrderScalarFieldEnum = (typeof PurchaseOrderScalarFieldEnum)[keyof typeof PurchaseOrderScalarFieldEnum]


  export const PoLineItemScalarFieldEnum: {
    id: 'id',
    purchaseOrderId: 'purchaseOrderId',
    productId: 'productId',
    quantity: 'quantity',
    unitCost: 'unitCost'
  };

  export type PoLineItemScalarFieldEnum = (typeof PoLineItemScalarFieldEnum)[keyof typeof PoLineItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Plan'
   */
  export type EnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan'>
    


  /**
   * Reference to a field of type 'Plan[]'
   */
  export type ListEnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ForecastStatus'
   */
  export type EnumForecastStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ForecastStatus'>
    


  /**
   * Reference to a field of type 'ForecastStatus[]'
   */
  export type ListEnumForecastStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ForecastStatus[]'>
    


  /**
   * Reference to a field of type 'PoStatus'
   */
  export type EnumPoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PoStatus'>
    


  /**
   * Reference to a field of type 'PoStatus[]'
   */
  export type ListEnumPoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PoStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: StringFilter<"Shop"> | string
    domain?: StringFilter<"Shop"> | string
    accessToken?: StringFilter<"Shop"> | string
    plan?: EnumPlanFilter<"Shop"> | $Enums.Plan
    timezone?: StringNullableFilter<"Shop"> | string | null
    alertsEnabled?: BoolFilter<"Shop"> | boolean
    alertEmail?: StringNullableFilter<"Shop"> | string | null
    installedAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    products?: ProductListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    accessToken?: SortOrder
    plan?: SortOrder
    timezone?: SortOrderInput | SortOrder
    alertsEnabled?: SortOrder
    alertEmail?: SortOrderInput | SortOrder
    installedAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    domain?: string
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    accessToken?: StringFilter<"Shop"> | string
    plan?: EnumPlanFilter<"Shop"> | $Enums.Plan
    timezone?: StringNullableFilter<"Shop"> | string | null
    alertsEnabled?: BoolFilter<"Shop"> | boolean
    alertEmail?: StringNullableFilter<"Shop"> | string | null
    installedAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "domain">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    accessToken?: SortOrder
    plan?: SortOrder
    timezone?: SortOrderInput | SortOrder
    alertsEnabled?: SortOrder
    alertEmail?: SortOrderInput | SortOrder
    installedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shop"> | string
    domain?: StringWithAggregatesFilter<"Shop"> | string
    accessToken?: StringWithAggregatesFilter<"Shop"> | string
    plan?: EnumPlanWithAggregatesFilter<"Shop"> | $Enums.Plan
    timezone?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    alertsEnabled?: BoolWithAggregatesFilter<"Shop"> | boolean
    alertEmail?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    installedAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    shopId?: StringFilter<"Product"> | string
    shopifyProductId?: StringFilter<"Product"> | string
    shopifyVariantId?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    currentStock?: IntFilter<"Product"> | number
    leadTimeDays?: FloatFilter<"Product"> | number
    serviceLevelZ?: FloatFilter<"Product"> | number
    stockUpdatedAt?: DateTimeFilter<"Product"> | Date | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    dailySales?: DailySaleListRelationFilter
    forecast?: XOR<ForecastNullableScalarRelationFilter, ForecastWhereInput> | null
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    shopifyProductId?: SortOrder
    shopifyVariantId?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    currentStock?: SortOrder
    leadTimeDays?: SortOrder
    serviceLevelZ?: SortOrder
    stockUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dailySales?: DailySaleOrderByRelationAggregateInput
    forecast?: ForecastOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopId_shopifyVariantId?: ProductShopIdShopifyVariantIdCompoundUniqueInput
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    shopId?: StringFilter<"Product"> | string
    shopifyProductId?: StringFilter<"Product"> | string
    shopifyVariantId?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    currentStock?: IntFilter<"Product"> | number
    leadTimeDays?: FloatFilter<"Product"> | number
    serviceLevelZ?: FloatFilter<"Product"> | number
    stockUpdatedAt?: DateTimeFilter<"Product"> | Date | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    dailySales?: DailySaleListRelationFilter
    forecast?: XOR<ForecastNullableScalarRelationFilter, ForecastWhereInput> | null
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id" | "shopId_shopifyVariantId">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    shopifyProductId?: SortOrder
    shopifyVariantId?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    currentStock?: SortOrder
    leadTimeDays?: SortOrder
    serviceLevelZ?: SortOrder
    stockUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    shopId?: StringWithAggregatesFilter<"Product"> | string
    shopifyProductId?: StringWithAggregatesFilter<"Product"> | string
    shopifyVariantId?: StringWithAggregatesFilter<"Product"> | string
    title?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringWithAggregatesFilter<"Product"> | string
    currentStock?: IntWithAggregatesFilter<"Product"> | number
    leadTimeDays?: FloatWithAggregatesFilter<"Product"> | number
    serviceLevelZ?: FloatWithAggregatesFilter<"Product"> | number
    stockUpdatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type DailySaleWhereInput = {
    AND?: DailySaleWhereInput | DailySaleWhereInput[]
    OR?: DailySaleWhereInput[]
    NOT?: DailySaleWhereInput | DailySaleWhereInput[]
    id?: StringFilter<"DailySale"> | string
    productId?: StringFilter<"DailySale"> | string
    date?: DateTimeFilter<"DailySale"> | Date | string
    unitsSold?: IntFilter<"DailySale"> | number
    createdAt?: DateTimeFilter<"DailySale"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type DailySaleOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    unitsSold?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type DailySaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId_date?: DailySaleProductIdDateCompoundUniqueInput
    AND?: DailySaleWhereInput | DailySaleWhereInput[]
    OR?: DailySaleWhereInput[]
    NOT?: DailySaleWhereInput | DailySaleWhereInput[]
    productId?: StringFilter<"DailySale"> | string
    date?: DateTimeFilter<"DailySale"> | Date | string
    unitsSold?: IntFilter<"DailySale"> | number
    createdAt?: DateTimeFilter<"DailySale"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "productId_date">

  export type DailySaleOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    unitsSold?: SortOrder
    createdAt?: SortOrder
    _count?: DailySaleCountOrderByAggregateInput
    _avg?: DailySaleAvgOrderByAggregateInput
    _max?: DailySaleMaxOrderByAggregateInput
    _min?: DailySaleMinOrderByAggregateInput
    _sum?: DailySaleSumOrderByAggregateInput
  }

  export type DailySaleScalarWhereWithAggregatesInput = {
    AND?: DailySaleScalarWhereWithAggregatesInput | DailySaleScalarWhereWithAggregatesInput[]
    OR?: DailySaleScalarWhereWithAggregatesInput[]
    NOT?: DailySaleScalarWhereWithAggregatesInput | DailySaleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailySale"> | string
    productId?: StringWithAggregatesFilter<"DailySale"> | string
    date?: DateTimeWithAggregatesFilter<"DailySale"> | Date | string
    unitsSold?: IntWithAggregatesFilter<"DailySale"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DailySale"> | Date | string
  }

  export type ForecastWhereInput = {
    AND?: ForecastWhereInput | ForecastWhereInput[]
    OR?: ForecastWhereInput[]
    NOT?: ForecastWhereInput | ForecastWhereInput[]
    id?: StringFilter<"Forecast"> | string
    productId?: StringFilter<"Forecast"> | string
    velocityPerDay?: FloatFilter<"Forecast"> | number
    stddevDemand?: FloatFilter<"Forecast"> | number
    safetyStock?: FloatFilter<"Forecast"> | number
    reorderPoint?: FloatFilter<"Forecast"> | number
    daysOfStockRemaining?: IntNullableFilter<"Forecast"> | number | null
    status?: EnumForecastStatusFilter<"Forecast"> | $Enums.ForecastStatus
    calculatedAt?: DateTimeFilter<"Forecast"> | Date | string
    updatedAt?: DateTimeFilter<"Forecast"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ForecastOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    velocityPerDay?: SortOrder
    stddevDemand?: SortOrder
    safetyStock?: SortOrder
    reorderPoint?: SortOrder
    daysOfStockRemaining?: SortOrderInput | SortOrder
    status?: SortOrder
    calculatedAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ForecastWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId?: string
    AND?: ForecastWhereInput | ForecastWhereInput[]
    OR?: ForecastWhereInput[]
    NOT?: ForecastWhereInput | ForecastWhereInput[]
    velocityPerDay?: FloatFilter<"Forecast"> | number
    stddevDemand?: FloatFilter<"Forecast"> | number
    safetyStock?: FloatFilter<"Forecast"> | number
    reorderPoint?: FloatFilter<"Forecast"> | number
    daysOfStockRemaining?: IntNullableFilter<"Forecast"> | number | null
    status?: EnumForecastStatusFilter<"Forecast"> | $Enums.ForecastStatus
    calculatedAt?: DateTimeFilter<"Forecast"> | Date | string
    updatedAt?: DateTimeFilter<"Forecast"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "productId">

  export type ForecastOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    velocityPerDay?: SortOrder
    stddevDemand?: SortOrder
    safetyStock?: SortOrder
    reorderPoint?: SortOrder
    daysOfStockRemaining?: SortOrderInput | SortOrder
    status?: SortOrder
    calculatedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ForecastCountOrderByAggregateInput
    _avg?: ForecastAvgOrderByAggregateInput
    _max?: ForecastMaxOrderByAggregateInput
    _min?: ForecastMinOrderByAggregateInput
    _sum?: ForecastSumOrderByAggregateInput
  }

  export type ForecastScalarWhereWithAggregatesInput = {
    AND?: ForecastScalarWhereWithAggregatesInput | ForecastScalarWhereWithAggregatesInput[]
    OR?: ForecastScalarWhereWithAggregatesInput[]
    NOT?: ForecastScalarWhereWithAggregatesInput | ForecastScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Forecast"> | string
    productId?: StringWithAggregatesFilter<"Forecast"> | string
    velocityPerDay?: FloatWithAggregatesFilter<"Forecast"> | number
    stddevDemand?: FloatWithAggregatesFilter<"Forecast"> | number
    safetyStock?: FloatWithAggregatesFilter<"Forecast"> | number
    reorderPoint?: FloatWithAggregatesFilter<"Forecast"> | number
    daysOfStockRemaining?: IntNullableWithAggregatesFilter<"Forecast"> | number | null
    status?: EnumForecastStatusWithAggregatesFilter<"Forecast"> | $Enums.ForecastStatus
    calculatedAt?: DateTimeWithAggregatesFilter<"Forecast"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Forecast"> | Date | string
  }

  export type PurchaseOrderWhereInput = {
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    id?: StringFilter<"PurchaseOrder"> | string
    shopId?: StringFilter<"PurchaseOrder"> | string
    reference?: StringFilter<"PurchaseOrder"> | string
    status?: EnumPoStatusFilter<"PurchaseOrder"> | $Enums.PoStatus
    notes?: StringNullableFilter<"PurchaseOrder"> | string | null
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    lineItems?: PoLineItemListRelationFilter
  }

  export type PurchaseOrderOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lineItems?: PoLineItemOrderByRelationAggregateInput
  }

  export type PurchaseOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    shopId?: StringFilter<"PurchaseOrder"> | string
    status?: EnumPoStatusFilter<"PurchaseOrder"> | $Enums.PoStatus
    notes?: StringNullableFilter<"PurchaseOrder"> | string | null
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    lineItems?: PoLineItemListRelationFilter
  }, "id" | "reference">

  export type PurchaseOrderOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurchaseOrderCountOrderByAggregateInput
    _max?: PurchaseOrderMaxOrderByAggregateInput
    _min?: PurchaseOrderMinOrderByAggregateInput
  }

  export type PurchaseOrderScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    shopId?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    reference?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    status?: EnumPoStatusWithAggregatesFilter<"PurchaseOrder"> | $Enums.PoStatus
    notes?: StringNullableWithAggregatesFilter<"PurchaseOrder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
  }

  export type PoLineItemWhereInput = {
    AND?: PoLineItemWhereInput | PoLineItemWhereInput[]
    OR?: PoLineItemWhereInput[]
    NOT?: PoLineItemWhereInput | PoLineItemWhereInput[]
    id?: StringFilter<"PoLineItem"> | string
    purchaseOrderId?: StringFilter<"PoLineItem"> | string
    productId?: StringFilter<"PoLineItem"> | string
    quantity?: IntFilter<"PoLineItem"> | number
    unitCost?: FloatNullableFilter<"PoLineItem"> | number | null
    purchaseOrder?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
  }

  export type PoLineItemOrderByWithRelationInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrderInput | SortOrder
    purchaseOrder?: PurchaseOrderOrderByWithRelationInput
  }

  export type PoLineItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PoLineItemWhereInput | PoLineItemWhereInput[]
    OR?: PoLineItemWhereInput[]
    NOT?: PoLineItemWhereInput | PoLineItemWhereInput[]
    purchaseOrderId?: StringFilter<"PoLineItem"> | string
    productId?: StringFilter<"PoLineItem"> | string
    quantity?: IntFilter<"PoLineItem"> | number
    unitCost?: FloatNullableFilter<"PoLineItem"> | number | null
    purchaseOrder?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
  }, "id">

  export type PoLineItemOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrderInput | SortOrder
    _count?: PoLineItemCountOrderByAggregateInput
    _avg?: PoLineItemAvgOrderByAggregateInput
    _max?: PoLineItemMaxOrderByAggregateInput
    _min?: PoLineItemMinOrderByAggregateInput
    _sum?: PoLineItemSumOrderByAggregateInput
  }

  export type PoLineItemScalarWhereWithAggregatesInput = {
    AND?: PoLineItemScalarWhereWithAggregatesInput | PoLineItemScalarWhereWithAggregatesInput[]
    OR?: PoLineItemScalarWhereWithAggregatesInput[]
    NOT?: PoLineItemScalarWhereWithAggregatesInput | PoLineItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PoLineItem"> | string
    purchaseOrderId?: StringWithAggregatesFilter<"PoLineItem"> | string
    productId?: StringWithAggregatesFilter<"PoLineItem"> | string
    quantity?: IntWithAggregatesFilter<"PoLineItem"> | number
    unitCost?: FloatNullableWithAggregatesFilter<"PoLineItem"> | number | null
  }

  export type ShopCreateInput = {
    id?: string
    domain: string
    accessToken: string
    plan?: $Enums.Plan
    timezone?: string | null
    alertsEnabled?: boolean
    alertEmail?: string | null
    installedAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: string
    domain: string
    accessToken: string
    plan?: $Enums.Plan
    timezone?: string | null
    alertsEnabled?: boolean
    alertEmail?: string | null
    installedAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    alertsEnabled?: BoolFieldUpdateOperationsInput | boolean
    alertEmail?: NullableStringFieldUpdateOperationsInput | string | null
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    alertsEnabled?: BoolFieldUpdateOperationsInput | boolean
    alertEmail?: NullableStringFieldUpdateOperationsInput | string | null
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateManyInput = {
    id?: string
    domain: string
    accessToken: string
    plan?: $Enums.Plan
    timezone?: string | null
    alertsEnabled?: boolean
    alertEmail?: string | null
    installedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    alertsEnabled?: BoolFieldUpdateOperationsInput | boolean
    alertEmail?: NullableStringFieldUpdateOperationsInput | string | null
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    alertsEnabled?: BoolFieldUpdateOperationsInput | boolean
    alertEmail?: NullableStringFieldUpdateOperationsInput | string | null
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    shopifyProductId: string
    shopifyVariantId: string
    title: string
    sku: string
    currentStock?: number
    leadTimeDays?: number
    serviceLevelZ?: number
    stockUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailySales?: DailySaleCreateNestedManyWithoutProductInput
    forecast?: ForecastCreateNestedOneWithoutProductInput
    shop: ShopCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    shopId: string
    shopifyProductId: string
    shopifyVariantId: string
    title: string
    sku: string
    currentStock?: number
    leadTimeDays?: number
    serviceLevelZ?: number
    stockUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailySales?: DailySaleUncheckedCreateNestedManyWithoutProductInput
    forecast?: ForecastUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyProductId?: StringFieldUpdateOperationsInput | string
    shopifyVariantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    currentStock?: IntFieldUpdateOperationsInput | number
    leadTimeDays?: FloatFieldUpdateOperationsInput | number
    serviceLevelZ?: FloatFieldUpdateOperationsInput | number
    stockUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailySales?: DailySaleUpdateManyWithoutProductNestedInput
    forecast?: ForecastUpdateOneWithoutProductNestedInput
    shop?: ShopUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    shopifyProductId?: StringFieldUpdateOperationsInput | string
    shopifyVariantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    currentStock?: IntFieldUpdateOperationsInput | number
    leadTimeDays?: FloatFieldUpdateOperationsInput | number
    serviceLevelZ?: FloatFieldUpdateOperationsInput | number
    stockUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailySales?: DailySaleUncheckedUpdateManyWithoutProductNestedInput
    forecast?: ForecastUncheckedUpdateOneWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    shopId: string
    shopifyProductId: string
    shopifyVariantId: string
    title: string
    sku: string
    currentStock?: number
    leadTimeDays?: number
    serviceLevelZ?: number
    stockUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyProductId?: StringFieldUpdateOperationsInput | string
    shopifyVariantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    currentStock?: IntFieldUpdateOperationsInput | number
    leadTimeDays?: FloatFieldUpdateOperationsInput | number
    serviceLevelZ?: FloatFieldUpdateOperationsInput | number
    stockUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    shopifyProductId?: StringFieldUpdateOperationsInput | string
    shopifyVariantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    currentStock?: IntFieldUpdateOperationsInput | number
    leadTimeDays?: FloatFieldUpdateOperationsInput | number
    serviceLevelZ?: FloatFieldUpdateOperationsInput | number
    stockUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySaleCreateInput = {
    id?: string
    date: Date | string
    unitsSold?: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutDailySalesInput
  }

  export type DailySaleUncheckedCreateInput = {
    id?: string
    productId: string
    date: Date | string
    unitsSold?: number
    createdAt?: Date | string
  }

  export type DailySaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutDailySalesNestedInput
  }

  export type DailySaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySaleCreateManyInput = {
    id?: string
    productId: string
    date: Date | string
    unitsSold?: number
    createdAt?: Date | string
  }

  export type DailySaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForecastCreateInput = {
    id?: string
    velocityPerDay: number
    stddevDemand: number
    safetyStock: number
    reorderPoint: number
    daysOfStockRemaining?: number | null
    status?: $Enums.ForecastStatus
    calculatedAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutForecastInput
  }

  export type ForecastUncheckedCreateInput = {
    id?: string
    productId: string
    velocityPerDay: number
    stddevDemand: number
    safetyStock: number
    reorderPoint: number
    daysOfStockRemaining?: number | null
    status?: $Enums.ForecastStatus
    calculatedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForecastUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    velocityPerDay?: FloatFieldUpdateOperationsInput | number
    stddevDemand?: FloatFieldUpdateOperationsInput | number
    safetyStock?: FloatFieldUpdateOperationsInput | number
    reorderPoint?: FloatFieldUpdateOperationsInput | number
    daysOfStockRemaining?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumForecastStatusFieldUpdateOperationsInput | $Enums.ForecastStatus
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutForecastNestedInput
  }

  export type ForecastUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    velocityPerDay?: FloatFieldUpdateOperationsInput | number
    stddevDemand?: FloatFieldUpdateOperationsInput | number
    safetyStock?: FloatFieldUpdateOperationsInput | number
    reorderPoint?: FloatFieldUpdateOperationsInput | number
    daysOfStockRemaining?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumForecastStatusFieldUpdateOperationsInput | $Enums.ForecastStatus
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForecastCreateManyInput = {
    id?: string
    productId: string
    velocityPerDay: number
    stddevDemand: number
    safetyStock: number
    reorderPoint: number
    daysOfStockRemaining?: number | null
    status?: $Enums.ForecastStatus
    calculatedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForecastUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    velocityPerDay?: FloatFieldUpdateOperationsInput | number
    stddevDemand?: FloatFieldUpdateOperationsInput | number
    safetyStock?: FloatFieldUpdateOperationsInput | number
    reorderPoint?: FloatFieldUpdateOperationsInput | number
    daysOfStockRemaining?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumForecastStatusFieldUpdateOperationsInput | $Enums.ForecastStatus
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForecastUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    velocityPerDay?: FloatFieldUpdateOperationsInput | number
    stddevDemand?: FloatFieldUpdateOperationsInput | number
    safetyStock?: FloatFieldUpdateOperationsInput | number
    reorderPoint?: FloatFieldUpdateOperationsInput | number
    daysOfStockRemaining?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumForecastStatusFieldUpdateOperationsInput | $Enums.ForecastStatus
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderCreateInput = {
    id?: string
    shopId: string
    reference: string
    status?: $Enums.PoStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lineItems?: PoLineItemCreateNestedManyWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateInput = {
    id?: string
    shopId: string
    reference: string
    status?: $Enums.PoStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lineItems?: PoLineItemUncheckedCreateNestedManyWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPoStatusFieldUpdateOperationsInput | $Enums.PoStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineItems?: PoLineItemUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPoStatusFieldUpdateOperationsInput | $Enums.PoStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineItems?: PoLineItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderCreateManyInput = {
    id?: string
    shopId: string
    reference: string
    status?: $Enums.PoStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPoStatusFieldUpdateOperationsInput | $Enums.PoStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPoStatusFieldUpdateOperationsInput | $Enums.PoStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoLineItemCreateInput = {
    id?: string
    productId: string
    quantity: number
    unitCost?: number | null
    purchaseOrder: PurchaseOrderCreateNestedOneWithoutLineItemsInput
  }

  export type PoLineItemUncheckedCreateInput = {
    id?: string
    purchaseOrderId: string
    productId: string
    quantity: number
    unitCost?: number | null
  }

  export type PoLineItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseOrder?: PurchaseOrderUpdateOneRequiredWithoutLineItemsNestedInput
  }

  export type PoLineItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseOrderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PoLineItemCreateManyInput = {
    id?: string
    purchaseOrderId: string
    productId: string
    quantity: number
    unitCost?: number | null
  }

  export type PoLineItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PoLineItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseOrderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    accessToken?: SortOrder
    plan?: SortOrder
    timezone?: SortOrder
    alertsEnabled?: SortOrder
    alertEmail?: SortOrder
    installedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    accessToken?: SortOrder
    plan?: SortOrder
    timezone?: SortOrder
    alertsEnabled?: SortOrder
    alertEmail?: SortOrder
    installedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    accessToken?: SortOrder
    plan?: SortOrder
    timezone?: SortOrder
    alertsEnabled?: SortOrder
    alertEmail?: SortOrder
    installedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanFilter<$PrismaModel>
    _max?: NestedEnumPlanFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DailySaleListRelationFilter = {
    every?: DailySaleWhereInput
    some?: DailySaleWhereInput
    none?: DailySaleWhereInput
  }

  export type ForecastNullableScalarRelationFilter = {
    is?: ForecastWhereInput | null
    isNot?: ForecastWhereInput | null
  }

  export type ShopScalarRelationFilter = {
    is?: ShopWhereInput
    isNot?: ShopWhereInput
  }

  export type DailySaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductShopIdShopifyVariantIdCompoundUniqueInput = {
    shopId: string
    shopifyVariantId: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    shopifyProductId?: SortOrder
    shopifyVariantId?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    currentStock?: SortOrder
    leadTimeDays?: SortOrder
    serviceLevelZ?: SortOrder
    stockUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    currentStock?: SortOrder
    leadTimeDays?: SortOrder
    serviceLevelZ?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    shopifyProductId?: SortOrder
    shopifyVariantId?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    currentStock?: SortOrder
    leadTimeDays?: SortOrder
    serviceLevelZ?: SortOrder
    stockUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    shopifyProductId?: SortOrder
    shopifyVariantId?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    currentStock?: SortOrder
    leadTimeDays?: SortOrder
    serviceLevelZ?: SortOrder
    stockUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    currentStock?: SortOrder
    leadTimeDays?: SortOrder
    serviceLevelZ?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type DailySaleProductIdDateCompoundUniqueInput = {
    productId: string
    date: Date | string
  }

  export type DailySaleCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    unitsSold?: SortOrder
    createdAt?: SortOrder
  }

  export type DailySaleAvgOrderByAggregateInput = {
    unitsSold?: SortOrder
  }

  export type DailySaleMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    unitsSold?: SortOrder
    createdAt?: SortOrder
  }

  export type DailySaleMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    unitsSold?: SortOrder
    createdAt?: SortOrder
  }

  export type DailySaleSumOrderByAggregateInput = {
    unitsSold?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumForecastStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ForecastStatus | EnumForecastStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ForecastStatus[] | ListEnumForecastStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ForecastStatus[] | ListEnumForecastStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumForecastStatusFilter<$PrismaModel> | $Enums.ForecastStatus
  }

  export type ForecastCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    velocityPerDay?: SortOrder
    stddevDemand?: SortOrder
    safetyStock?: SortOrder
    reorderPoint?: SortOrder
    daysOfStockRemaining?: SortOrder
    status?: SortOrder
    calculatedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForecastAvgOrderByAggregateInput = {
    velocityPerDay?: SortOrder
    stddevDemand?: SortOrder
    safetyStock?: SortOrder
    reorderPoint?: SortOrder
    daysOfStockRemaining?: SortOrder
  }

  export type ForecastMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    velocityPerDay?: SortOrder
    stddevDemand?: SortOrder
    safetyStock?: SortOrder
    reorderPoint?: SortOrder
    daysOfStockRemaining?: SortOrder
    status?: SortOrder
    calculatedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForecastMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    velocityPerDay?: SortOrder
    stddevDemand?: SortOrder
    safetyStock?: SortOrder
    reorderPoint?: SortOrder
    daysOfStockRemaining?: SortOrder
    status?: SortOrder
    calculatedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForecastSumOrderByAggregateInput = {
    velocityPerDay?: SortOrder
    stddevDemand?: SortOrder
    safetyStock?: SortOrder
    reorderPoint?: SortOrder
    daysOfStockRemaining?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumForecastStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ForecastStatus | EnumForecastStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ForecastStatus[] | ListEnumForecastStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ForecastStatus[] | ListEnumForecastStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumForecastStatusWithAggregatesFilter<$PrismaModel> | $Enums.ForecastStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumForecastStatusFilter<$PrismaModel>
    _max?: NestedEnumForecastStatusFilter<$PrismaModel>
  }

  export type EnumPoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PoStatus | EnumPoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PoStatus[] | ListEnumPoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PoStatus[] | ListEnumPoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPoStatusFilter<$PrismaModel> | $Enums.PoStatus
  }

  export type PoLineItemListRelationFilter = {
    every?: PoLineItemWhereInput
    some?: PoLineItemWhereInput
    none?: PoLineItemWhereInput
  }

  export type PoLineItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseOrderMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PoStatus | EnumPoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PoStatus[] | ListEnumPoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PoStatus[] | ListEnumPoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPoStatusWithAggregatesFilter<$PrismaModel> | $Enums.PoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPoStatusFilter<$PrismaModel>
    _max?: NestedEnumPoStatusFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PurchaseOrderScalarRelationFilter = {
    is?: PurchaseOrderWhereInput
    isNot?: PurchaseOrderWhereInput
  }

  export type PoLineItemCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
  }

  export type PoLineItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitCost?: SortOrder
  }

  export type PoLineItemMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
  }

  export type PoLineItemMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
  }

  export type PoLineItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitCost?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProductCreateNestedManyWithoutShopInput = {
    create?: XOR<ProductCreateWithoutShopInput, ProductUncheckedCreateWithoutShopInput> | ProductCreateWithoutShopInput[] | ProductUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutShopInput | ProductCreateOrConnectWithoutShopInput[]
    createMany?: ProductCreateManyShopInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ProductCreateWithoutShopInput, ProductUncheckedCreateWithoutShopInput> | ProductCreateWithoutShopInput[] | ProductUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutShopInput | ProductCreateOrConnectWithoutShopInput[]
    createMany?: ProductCreateManyShopInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPlanFieldUpdateOperationsInput = {
    set?: $Enums.Plan
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateManyWithoutShopNestedInput = {
    create?: XOR<ProductCreateWithoutShopInput, ProductUncheckedCreateWithoutShopInput> | ProductCreateWithoutShopInput[] | ProductUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutShopInput | ProductCreateOrConnectWithoutShopInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutShopInput | ProductUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ProductCreateManyShopInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutShopInput | ProductUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutShopInput | ProductUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ProductCreateWithoutShopInput, ProductUncheckedCreateWithoutShopInput> | ProductCreateWithoutShopInput[] | ProductUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutShopInput | ProductCreateOrConnectWithoutShopInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutShopInput | ProductUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ProductCreateManyShopInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutShopInput | ProductUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutShopInput | ProductUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type DailySaleCreateNestedManyWithoutProductInput = {
    create?: XOR<DailySaleCreateWithoutProductInput, DailySaleUncheckedCreateWithoutProductInput> | DailySaleCreateWithoutProductInput[] | DailySaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutProductInput | DailySaleCreateOrConnectWithoutProductInput[]
    createMany?: DailySaleCreateManyProductInputEnvelope
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
  }

  export type ForecastCreateNestedOneWithoutProductInput = {
    create?: XOR<ForecastCreateWithoutProductInput, ForecastUncheckedCreateWithoutProductInput>
    connectOrCreate?: ForecastCreateOrConnectWithoutProductInput
    connect?: ForecastWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutProductsInput = {
    create?: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutProductsInput
    connect?: ShopWhereUniqueInput
  }

  export type DailySaleUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<DailySaleCreateWithoutProductInput, DailySaleUncheckedCreateWithoutProductInput> | DailySaleCreateWithoutProductInput[] | DailySaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutProductInput | DailySaleCreateOrConnectWithoutProductInput[]
    createMany?: DailySaleCreateManyProductInputEnvelope
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
  }

  export type ForecastUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<ForecastCreateWithoutProductInput, ForecastUncheckedCreateWithoutProductInput>
    connectOrCreate?: ForecastCreateOrConnectWithoutProductInput
    connect?: ForecastWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DailySaleUpdateManyWithoutProductNestedInput = {
    create?: XOR<DailySaleCreateWithoutProductInput, DailySaleUncheckedCreateWithoutProductInput> | DailySaleCreateWithoutProductInput[] | DailySaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutProductInput | DailySaleCreateOrConnectWithoutProductInput[]
    upsert?: DailySaleUpsertWithWhereUniqueWithoutProductInput | DailySaleUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DailySaleCreateManyProductInputEnvelope
    set?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    disconnect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    delete?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    update?: DailySaleUpdateWithWhereUniqueWithoutProductInput | DailySaleUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DailySaleUpdateManyWithWhereWithoutProductInput | DailySaleUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DailySaleScalarWhereInput | DailySaleScalarWhereInput[]
  }

  export type ForecastUpdateOneWithoutProductNestedInput = {
    create?: XOR<ForecastCreateWithoutProductInput, ForecastUncheckedCreateWithoutProductInput>
    connectOrCreate?: ForecastCreateOrConnectWithoutProductInput
    upsert?: ForecastUpsertWithoutProductInput
    disconnect?: ForecastWhereInput | boolean
    delete?: ForecastWhereInput | boolean
    connect?: ForecastWhereUniqueInput
    update?: XOR<XOR<ForecastUpdateToOneWithWhereWithoutProductInput, ForecastUpdateWithoutProductInput>, ForecastUncheckedUpdateWithoutProductInput>
  }

  export type ShopUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutProductsInput
    upsert?: ShopUpsertWithoutProductsInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutProductsInput, ShopUpdateWithoutProductsInput>, ShopUncheckedUpdateWithoutProductsInput>
  }

  export type DailySaleUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<DailySaleCreateWithoutProductInput, DailySaleUncheckedCreateWithoutProductInput> | DailySaleCreateWithoutProductInput[] | DailySaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutProductInput | DailySaleCreateOrConnectWithoutProductInput[]
    upsert?: DailySaleUpsertWithWhereUniqueWithoutProductInput | DailySaleUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DailySaleCreateManyProductInputEnvelope
    set?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    disconnect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    delete?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    update?: DailySaleUpdateWithWhereUniqueWithoutProductInput | DailySaleUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DailySaleUpdateManyWithWhereWithoutProductInput | DailySaleUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DailySaleScalarWhereInput | DailySaleScalarWhereInput[]
  }

  export type ForecastUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<ForecastCreateWithoutProductInput, ForecastUncheckedCreateWithoutProductInput>
    connectOrCreate?: ForecastCreateOrConnectWithoutProductInput
    upsert?: ForecastUpsertWithoutProductInput
    disconnect?: ForecastWhereInput | boolean
    delete?: ForecastWhereInput | boolean
    connect?: ForecastWhereUniqueInput
    update?: XOR<XOR<ForecastUpdateToOneWithWhereWithoutProductInput, ForecastUpdateWithoutProductInput>, ForecastUncheckedUpdateWithoutProductInput>
  }

  export type ProductCreateNestedOneWithoutDailySalesInput = {
    create?: XOR<ProductCreateWithoutDailySalesInput, ProductUncheckedCreateWithoutDailySalesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDailySalesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutDailySalesNestedInput = {
    create?: XOR<ProductCreateWithoutDailySalesInput, ProductUncheckedCreateWithoutDailySalesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDailySalesInput
    upsert?: ProductUpsertWithoutDailySalesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDailySalesInput, ProductUpdateWithoutDailySalesInput>, ProductUncheckedUpdateWithoutDailySalesInput>
  }

  export type ProductCreateNestedOneWithoutForecastInput = {
    create?: XOR<ProductCreateWithoutForecastInput, ProductUncheckedCreateWithoutForecastInput>
    connectOrCreate?: ProductCreateOrConnectWithoutForecastInput
    connect?: ProductWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumForecastStatusFieldUpdateOperationsInput = {
    set?: $Enums.ForecastStatus
  }

  export type ProductUpdateOneRequiredWithoutForecastNestedInput = {
    create?: XOR<ProductCreateWithoutForecastInput, ProductUncheckedCreateWithoutForecastInput>
    connectOrCreate?: ProductCreateOrConnectWithoutForecastInput
    upsert?: ProductUpsertWithoutForecastInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutForecastInput, ProductUpdateWithoutForecastInput>, ProductUncheckedUpdateWithoutForecastInput>
  }

  export type PoLineItemCreateNestedManyWithoutPurchaseOrderInput = {
    create?: XOR<PoLineItemCreateWithoutPurchaseOrderInput, PoLineItemUncheckedCreateWithoutPurchaseOrderInput> | PoLineItemCreateWithoutPurchaseOrderInput[] | PoLineItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PoLineItemCreateOrConnectWithoutPurchaseOrderInput | PoLineItemCreateOrConnectWithoutPurchaseOrderInput[]
    createMany?: PoLineItemCreateManyPurchaseOrderInputEnvelope
    connect?: PoLineItemWhereUniqueInput | PoLineItemWhereUniqueInput[]
  }

  export type PoLineItemUncheckedCreateNestedManyWithoutPurchaseOrderInput = {
    create?: XOR<PoLineItemCreateWithoutPurchaseOrderInput, PoLineItemUncheckedCreateWithoutPurchaseOrderInput> | PoLineItemCreateWithoutPurchaseOrderInput[] | PoLineItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PoLineItemCreateOrConnectWithoutPurchaseOrderInput | PoLineItemCreateOrConnectWithoutPurchaseOrderInput[]
    createMany?: PoLineItemCreateManyPurchaseOrderInputEnvelope
    connect?: PoLineItemWhereUniqueInput | PoLineItemWhereUniqueInput[]
  }

  export type EnumPoStatusFieldUpdateOperationsInput = {
    set?: $Enums.PoStatus
  }

  export type PoLineItemUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: XOR<PoLineItemCreateWithoutPurchaseOrderInput, PoLineItemUncheckedCreateWithoutPurchaseOrderInput> | PoLineItemCreateWithoutPurchaseOrderInput[] | PoLineItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PoLineItemCreateOrConnectWithoutPurchaseOrderInput | PoLineItemCreateOrConnectWithoutPurchaseOrderInput[]
    upsert?: PoLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput | PoLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput[]
    createMany?: PoLineItemCreateManyPurchaseOrderInputEnvelope
    set?: PoLineItemWhereUniqueInput | PoLineItemWhereUniqueInput[]
    disconnect?: PoLineItemWhereUniqueInput | PoLineItemWhereUniqueInput[]
    delete?: PoLineItemWhereUniqueInput | PoLineItemWhereUniqueInput[]
    connect?: PoLineItemWhereUniqueInput | PoLineItemWhereUniqueInput[]
    update?: PoLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput | PoLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput[]
    updateMany?: PoLineItemUpdateManyWithWhereWithoutPurchaseOrderInput | PoLineItemUpdateManyWithWhereWithoutPurchaseOrderInput[]
    deleteMany?: PoLineItemScalarWhereInput | PoLineItemScalarWhereInput[]
  }

  export type PoLineItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: XOR<PoLineItemCreateWithoutPurchaseOrderInput, PoLineItemUncheckedCreateWithoutPurchaseOrderInput> | PoLineItemCreateWithoutPurchaseOrderInput[] | PoLineItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PoLineItemCreateOrConnectWithoutPurchaseOrderInput | PoLineItemCreateOrConnectWithoutPurchaseOrderInput[]
    upsert?: PoLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput | PoLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput[]
    createMany?: PoLineItemCreateManyPurchaseOrderInputEnvelope
    set?: PoLineItemWhereUniqueInput | PoLineItemWhereUniqueInput[]
    disconnect?: PoLineItemWhereUniqueInput | PoLineItemWhereUniqueInput[]
    delete?: PoLineItemWhereUniqueInput | PoLineItemWhereUniqueInput[]
    connect?: PoLineItemWhereUniqueInput | PoLineItemWhereUniqueInput[]
    update?: PoLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput | PoLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput[]
    updateMany?: PoLineItemUpdateManyWithWhereWithoutPurchaseOrderInput | PoLineItemUpdateManyWithWhereWithoutPurchaseOrderInput[]
    deleteMany?: PoLineItemScalarWhereInput | PoLineItemScalarWhereInput[]
  }

  export type PurchaseOrderCreateNestedOneWithoutLineItemsInput = {
    create?: XOR<PurchaseOrderCreateWithoutLineItemsInput, PurchaseOrderUncheckedCreateWithoutLineItemsInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutLineItemsInput
    connect?: PurchaseOrderWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PurchaseOrderUpdateOneRequiredWithoutLineItemsNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutLineItemsInput, PurchaseOrderUncheckedCreateWithoutLineItemsInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutLineItemsInput
    upsert?: PurchaseOrderUpsertWithoutLineItemsInput
    connect?: PurchaseOrderWhereUniqueInput
    update?: XOR<XOR<PurchaseOrderUpdateToOneWithWhereWithoutLineItemsInput, PurchaseOrderUpdateWithoutLineItemsInput>, PurchaseOrderUncheckedUpdateWithoutLineItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanFilter<$PrismaModel>
    _max?: NestedEnumPlanFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumForecastStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ForecastStatus | EnumForecastStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ForecastStatus[] | ListEnumForecastStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ForecastStatus[] | ListEnumForecastStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumForecastStatusFilter<$PrismaModel> | $Enums.ForecastStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumForecastStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ForecastStatus | EnumForecastStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ForecastStatus[] | ListEnumForecastStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ForecastStatus[] | ListEnumForecastStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumForecastStatusWithAggregatesFilter<$PrismaModel> | $Enums.ForecastStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumForecastStatusFilter<$PrismaModel>
    _max?: NestedEnumForecastStatusFilter<$PrismaModel>
  }

  export type NestedEnumPoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PoStatus | EnumPoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PoStatus[] | ListEnumPoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PoStatus[] | ListEnumPoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPoStatusFilter<$PrismaModel> | $Enums.PoStatus
  }

  export type NestedEnumPoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PoStatus | EnumPoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PoStatus[] | ListEnumPoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PoStatus[] | ListEnumPoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPoStatusWithAggregatesFilter<$PrismaModel> | $Enums.PoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPoStatusFilter<$PrismaModel>
    _max?: NestedEnumPoStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProductCreateWithoutShopInput = {
    id?: string
    shopifyProductId: string
    shopifyVariantId: string
    title: string
    sku: string
    currentStock?: number
    leadTimeDays?: number
    serviceLevelZ?: number
    stockUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailySales?: DailySaleCreateNestedManyWithoutProductInput
    forecast?: ForecastCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutShopInput = {
    id?: string
    shopifyProductId: string
    shopifyVariantId: string
    title: string
    sku: string
    currentStock?: number
    leadTimeDays?: number
    serviceLevelZ?: number
    stockUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailySales?: DailySaleUncheckedCreateNestedManyWithoutProductInput
    forecast?: ForecastUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutShopInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutShopInput, ProductUncheckedCreateWithoutShopInput>
  }

  export type ProductCreateManyShopInputEnvelope = {
    data: ProductCreateManyShopInput | ProductCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutShopInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutShopInput, ProductUncheckedUpdateWithoutShopInput>
    create: XOR<ProductCreateWithoutShopInput, ProductUncheckedCreateWithoutShopInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutShopInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutShopInput, ProductUncheckedUpdateWithoutShopInput>
  }

  export type ProductUpdateManyWithWhereWithoutShopInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutShopInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    shopId?: StringFilter<"Product"> | string
    shopifyProductId?: StringFilter<"Product"> | string
    shopifyVariantId?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    currentStock?: IntFilter<"Product"> | number
    leadTimeDays?: FloatFilter<"Product"> | number
    serviceLevelZ?: FloatFilter<"Product"> | number
    stockUpdatedAt?: DateTimeFilter<"Product"> | Date | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type DailySaleCreateWithoutProductInput = {
    id?: string
    date: Date | string
    unitsSold?: number
    createdAt?: Date | string
  }

  export type DailySaleUncheckedCreateWithoutProductInput = {
    id?: string
    date: Date | string
    unitsSold?: number
    createdAt?: Date | string
  }

  export type DailySaleCreateOrConnectWithoutProductInput = {
    where: DailySaleWhereUniqueInput
    create: XOR<DailySaleCreateWithoutProductInput, DailySaleUncheckedCreateWithoutProductInput>
  }

  export type DailySaleCreateManyProductInputEnvelope = {
    data: DailySaleCreateManyProductInput | DailySaleCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ForecastCreateWithoutProductInput = {
    id?: string
    velocityPerDay: number
    stddevDemand: number
    safetyStock: number
    reorderPoint: number
    daysOfStockRemaining?: number | null
    status?: $Enums.ForecastStatus
    calculatedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForecastUncheckedCreateWithoutProductInput = {
    id?: string
    velocityPerDay: number
    stddevDemand: number
    safetyStock: number
    reorderPoint: number
    daysOfStockRemaining?: number | null
    status?: $Enums.ForecastStatus
    calculatedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForecastCreateOrConnectWithoutProductInput = {
    where: ForecastWhereUniqueInput
    create: XOR<ForecastCreateWithoutProductInput, ForecastUncheckedCreateWithoutProductInput>
  }

  export type ShopCreateWithoutProductsInput = {
    id?: string
    domain: string
    accessToken: string
    plan?: $Enums.Plan
    timezone?: string | null
    alertsEnabled?: boolean
    alertEmail?: string | null
    installedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUncheckedCreateWithoutProductsInput = {
    id?: string
    domain: string
    accessToken: string
    plan?: $Enums.Plan
    timezone?: string | null
    alertsEnabled?: boolean
    alertEmail?: string | null
    installedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopCreateOrConnectWithoutProductsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
  }

  export type DailySaleUpsertWithWhereUniqueWithoutProductInput = {
    where: DailySaleWhereUniqueInput
    update: XOR<DailySaleUpdateWithoutProductInput, DailySaleUncheckedUpdateWithoutProductInput>
    create: XOR<DailySaleCreateWithoutProductInput, DailySaleUncheckedCreateWithoutProductInput>
  }

  export type DailySaleUpdateWithWhereUniqueWithoutProductInput = {
    where: DailySaleWhereUniqueInput
    data: XOR<DailySaleUpdateWithoutProductInput, DailySaleUncheckedUpdateWithoutProductInput>
  }

  export type DailySaleUpdateManyWithWhereWithoutProductInput = {
    where: DailySaleScalarWhereInput
    data: XOR<DailySaleUpdateManyMutationInput, DailySaleUncheckedUpdateManyWithoutProductInput>
  }

  export type DailySaleScalarWhereInput = {
    AND?: DailySaleScalarWhereInput | DailySaleScalarWhereInput[]
    OR?: DailySaleScalarWhereInput[]
    NOT?: DailySaleScalarWhereInput | DailySaleScalarWhereInput[]
    id?: StringFilter<"DailySale"> | string
    productId?: StringFilter<"DailySale"> | string
    date?: DateTimeFilter<"DailySale"> | Date | string
    unitsSold?: IntFilter<"DailySale"> | number
    createdAt?: DateTimeFilter<"DailySale"> | Date | string
  }

  export type ForecastUpsertWithoutProductInput = {
    update: XOR<ForecastUpdateWithoutProductInput, ForecastUncheckedUpdateWithoutProductInput>
    create: XOR<ForecastCreateWithoutProductInput, ForecastUncheckedCreateWithoutProductInput>
    where?: ForecastWhereInput
  }

  export type ForecastUpdateToOneWithWhereWithoutProductInput = {
    where?: ForecastWhereInput
    data: XOR<ForecastUpdateWithoutProductInput, ForecastUncheckedUpdateWithoutProductInput>
  }

  export type ForecastUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    velocityPerDay?: FloatFieldUpdateOperationsInput | number
    stddevDemand?: FloatFieldUpdateOperationsInput | number
    safetyStock?: FloatFieldUpdateOperationsInput | number
    reorderPoint?: FloatFieldUpdateOperationsInput | number
    daysOfStockRemaining?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumForecastStatusFieldUpdateOperationsInput | $Enums.ForecastStatus
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForecastUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    velocityPerDay?: FloatFieldUpdateOperationsInput | number
    stddevDemand?: FloatFieldUpdateOperationsInput | number
    safetyStock?: FloatFieldUpdateOperationsInput | number
    reorderPoint?: FloatFieldUpdateOperationsInput | number
    daysOfStockRemaining?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumForecastStatusFieldUpdateOperationsInput | $Enums.ForecastStatus
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUpsertWithoutProductsInput = {
    update: XOR<ShopUpdateWithoutProductsInput, ShopUncheckedUpdateWithoutProductsInput>
    create: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutProductsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutProductsInput, ShopUncheckedUpdateWithoutProductsInput>
  }

  export type ShopUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    alertsEnabled?: BoolFieldUpdateOperationsInput | boolean
    alertEmail?: NullableStringFieldUpdateOperationsInput | string | null
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    alertsEnabled?: BoolFieldUpdateOperationsInput | boolean
    alertEmail?: NullableStringFieldUpdateOperationsInput | string | null
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateWithoutDailySalesInput = {
    id?: string
    shopifyProductId: string
    shopifyVariantId: string
    title: string
    sku: string
    currentStock?: number
    leadTimeDays?: number
    serviceLevelZ?: number
    stockUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    forecast?: ForecastCreateNestedOneWithoutProductInput
    shop: ShopCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutDailySalesInput = {
    id?: string
    shopId: string
    shopifyProductId: string
    shopifyVariantId: string
    title: string
    sku: string
    currentStock?: number
    leadTimeDays?: number
    serviceLevelZ?: number
    stockUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    forecast?: ForecastUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutDailySalesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDailySalesInput, ProductUncheckedCreateWithoutDailySalesInput>
  }

  export type ProductUpsertWithoutDailySalesInput = {
    update: XOR<ProductUpdateWithoutDailySalesInput, ProductUncheckedUpdateWithoutDailySalesInput>
    create: XOR<ProductCreateWithoutDailySalesInput, ProductUncheckedCreateWithoutDailySalesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDailySalesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDailySalesInput, ProductUncheckedUpdateWithoutDailySalesInput>
  }

  export type ProductUpdateWithoutDailySalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyProductId?: StringFieldUpdateOperationsInput | string
    shopifyVariantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    currentStock?: IntFieldUpdateOperationsInput | number
    leadTimeDays?: FloatFieldUpdateOperationsInput | number
    serviceLevelZ?: FloatFieldUpdateOperationsInput | number
    stockUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    forecast?: ForecastUpdateOneWithoutProductNestedInput
    shop?: ShopUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutDailySalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    shopifyProductId?: StringFieldUpdateOperationsInput | string
    shopifyVariantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    currentStock?: IntFieldUpdateOperationsInput | number
    leadTimeDays?: FloatFieldUpdateOperationsInput | number
    serviceLevelZ?: FloatFieldUpdateOperationsInput | number
    stockUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    forecast?: ForecastUncheckedUpdateOneWithoutProductNestedInput
  }

  export type ProductCreateWithoutForecastInput = {
    id?: string
    shopifyProductId: string
    shopifyVariantId: string
    title: string
    sku: string
    currentStock?: number
    leadTimeDays?: number
    serviceLevelZ?: number
    stockUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailySales?: DailySaleCreateNestedManyWithoutProductInput
    shop: ShopCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutForecastInput = {
    id?: string
    shopId: string
    shopifyProductId: string
    shopifyVariantId: string
    title: string
    sku: string
    currentStock?: number
    leadTimeDays?: number
    serviceLevelZ?: number
    stockUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailySales?: DailySaleUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutForecastInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutForecastInput, ProductUncheckedCreateWithoutForecastInput>
  }

  export type ProductUpsertWithoutForecastInput = {
    update: XOR<ProductUpdateWithoutForecastInput, ProductUncheckedUpdateWithoutForecastInput>
    create: XOR<ProductCreateWithoutForecastInput, ProductUncheckedCreateWithoutForecastInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutForecastInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutForecastInput, ProductUncheckedUpdateWithoutForecastInput>
  }

  export type ProductUpdateWithoutForecastInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyProductId?: StringFieldUpdateOperationsInput | string
    shopifyVariantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    currentStock?: IntFieldUpdateOperationsInput | number
    leadTimeDays?: FloatFieldUpdateOperationsInput | number
    serviceLevelZ?: FloatFieldUpdateOperationsInput | number
    stockUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailySales?: DailySaleUpdateManyWithoutProductNestedInput
    shop?: ShopUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutForecastInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    shopifyProductId?: StringFieldUpdateOperationsInput | string
    shopifyVariantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    currentStock?: IntFieldUpdateOperationsInput | number
    leadTimeDays?: FloatFieldUpdateOperationsInput | number
    serviceLevelZ?: FloatFieldUpdateOperationsInput | number
    stockUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailySales?: DailySaleUncheckedUpdateManyWithoutProductNestedInput
  }

  export type PoLineItemCreateWithoutPurchaseOrderInput = {
    id?: string
    productId: string
    quantity: number
    unitCost?: number | null
  }

  export type PoLineItemUncheckedCreateWithoutPurchaseOrderInput = {
    id?: string
    productId: string
    quantity: number
    unitCost?: number | null
  }

  export type PoLineItemCreateOrConnectWithoutPurchaseOrderInput = {
    where: PoLineItemWhereUniqueInput
    create: XOR<PoLineItemCreateWithoutPurchaseOrderInput, PoLineItemUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type PoLineItemCreateManyPurchaseOrderInputEnvelope = {
    data: PoLineItemCreateManyPurchaseOrderInput | PoLineItemCreateManyPurchaseOrderInput[]
    skipDuplicates?: boolean
  }

  export type PoLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput = {
    where: PoLineItemWhereUniqueInput
    update: XOR<PoLineItemUpdateWithoutPurchaseOrderInput, PoLineItemUncheckedUpdateWithoutPurchaseOrderInput>
    create: XOR<PoLineItemCreateWithoutPurchaseOrderInput, PoLineItemUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type PoLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput = {
    where: PoLineItemWhereUniqueInput
    data: XOR<PoLineItemUpdateWithoutPurchaseOrderInput, PoLineItemUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type PoLineItemUpdateManyWithWhereWithoutPurchaseOrderInput = {
    where: PoLineItemScalarWhereInput
    data: XOR<PoLineItemUpdateManyMutationInput, PoLineItemUncheckedUpdateManyWithoutPurchaseOrderInput>
  }

  export type PoLineItemScalarWhereInput = {
    AND?: PoLineItemScalarWhereInput | PoLineItemScalarWhereInput[]
    OR?: PoLineItemScalarWhereInput[]
    NOT?: PoLineItemScalarWhereInput | PoLineItemScalarWhereInput[]
    id?: StringFilter<"PoLineItem"> | string
    purchaseOrderId?: StringFilter<"PoLineItem"> | string
    productId?: StringFilter<"PoLineItem"> | string
    quantity?: IntFilter<"PoLineItem"> | number
    unitCost?: FloatNullableFilter<"PoLineItem"> | number | null
  }

  export type PurchaseOrderCreateWithoutLineItemsInput = {
    id?: string
    shopId: string
    reference: string
    status?: $Enums.PoStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderUncheckedCreateWithoutLineItemsInput = {
    id?: string
    shopId: string
    reference: string
    status?: $Enums.PoStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderCreateOrConnectWithoutLineItemsInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutLineItemsInput, PurchaseOrderUncheckedCreateWithoutLineItemsInput>
  }

  export type PurchaseOrderUpsertWithoutLineItemsInput = {
    update: XOR<PurchaseOrderUpdateWithoutLineItemsInput, PurchaseOrderUncheckedUpdateWithoutLineItemsInput>
    create: XOR<PurchaseOrderCreateWithoutLineItemsInput, PurchaseOrderUncheckedCreateWithoutLineItemsInput>
    where?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderUpdateToOneWithWhereWithoutLineItemsInput = {
    where?: PurchaseOrderWhereInput
    data: XOR<PurchaseOrderUpdateWithoutLineItemsInput, PurchaseOrderUncheckedUpdateWithoutLineItemsInput>
  }

  export type PurchaseOrderUpdateWithoutLineItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPoStatusFieldUpdateOperationsInput | $Enums.PoStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderUncheckedUpdateWithoutLineItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPoStatusFieldUpdateOperationsInput | $Enums.PoStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyShopInput = {
    id?: string
    shopifyProductId: string
    shopifyVariantId: string
    title: string
    sku: string
    currentStock?: number
    leadTimeDays?: number
    serviceLevelZ?: number
    stockUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyProductId?: StringFieldUpdateOperationsInput | string
    shopifyVariantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    currentStock?: IntFieldUpdateOperationsInput | number
    leadTimeDays?: FloatFieldUpdateOperationsInput | number
    serviceLevelZ?: FloatFieldUpdateOperationsInput | number
    stockUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailySales?: DailySaleUpdateManyWithoutProductNestedInput
    forecast?: ForecastUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyProductId?: StringFieldUpdateOperationsInput | string
    shopifyVariantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    currentStock?: IntFieldUpdateOperationsInput | number
    leadTimeDays?: FloatFieldUpdateOperationsInput | number
    serviceLevelZ?: FloatFieldUpdateOperationsInput | number
    stockUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailySales?: DailySaleUncheckedUpdateManyWithoutProductNestedInput
    forecast?: ForecastUncheckedUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyProductId?: StringFieldUpdateOperationsInput | string
    shopifyVariantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    currentStock?: IntFieldUpdateOperationsInput | number
    leadTimeDays?: FloatFieldUpdateOperationsInput | number
    serviceLevelZ?: FloatFieldUpdateOperationsInput | number
    stockUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySaleCreateManyProductInput = {
    id?: string
    date: Date | string
    unitsSold?: number
    createdAt?: Date | string
  }

  export type DailySaleUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySaleUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySaleUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoLineItemCreateManyPurchaseOrderInput = {
    id?: string
    productId: string
    quantity: number
    unitCost?: number | null
  }

  export type PoLineItemUpdateWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PoLineItemUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PoLineItemUncheckedUpdateManyWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}