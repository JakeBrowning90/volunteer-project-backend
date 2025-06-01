
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model NPO
 * 
 */
export type NPO = $Result.DefaultSelection<Prisma.$NPOPayload>
/**
 * Model Opportunity
 * 
 */
export type Opportunity = $Result.DefaultSelection<Prisma.$OpportunityPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nPO`: Exposes CRUD operations for the **NPO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NPOS
    * const nPOS = await prisma.nPO.findMany()
    * ```
    */
  get nPO(): Prisma.NPODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opportunity`: Exposes CRUD operations for the **Opportunity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Opportunities
    * const opportunities = await prisma.opportunity.findMany()
    * ```
    */
  get opportunity(): Prisma.OpportunityDelegate<ExtArgs, ClientOptions>;
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
   * Prisma.skip
   */
  export import skip = runtime.skip


  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    School: 'School',
    NPO: 'NPO',
    Opportunity: 'Opportunity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "school" | "nPO" | "opportunity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      NPO: {
        payload: Prisma.$NPOPayload<ExtArgs>
        fields: Prisma.NPOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NPOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NPOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPOPayload>
          }
          findFirst: {
            args: Prisma.NPOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NPOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPOPayload>
          }
          findMany: {
            args: Prisma.NPOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPOPayload>[]
          }
          create: {
            args: Prisma.NPOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPOPayload>
          }
          createMany: {
            args: Prisma.NPOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NPOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPOPayload>[]
          }
          delete: {
            args: Prisma.NPODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPOPayload>
          }
          update: {
            args: Prisma.NPOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPOPayload>
          }
          deleteMany: {
            args: Prisma.NPODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NPOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NPOUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPOPayload>[]
          }
          upsert: {
            args: Prisma.NPOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPOPayload>
          }
          aggregate: {
            args: Prisma.NPOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNPO>
          }
          groupBy: {
            args: Prisma.NPOGroupByArgs<ExtArgs>
            result: $Utils.Optional<NPOGroupByOutputType>[]
          }
          count: {
            args: Prisma.NPOCountArgs<ExtArgs>
            result: $Utils.Optional<NPOCountAggregateOutputType> | number
          }
        }
      }
      Opportunity: {
        payload: Prisma.$OpportunityPayload<ExtArgs>
        fields: Prisma.OpportunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpportunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpportunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          findFirst: {
            args: Prisma.OpportunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpportunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          findMany: {
            args: Prisma.OpportunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          create: {
            args: Prisma.OpportunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          createMany: {
            args: Prisma.OpportunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpportunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          delete: {
            args: Prisma.OpportunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          update: {
            args: Prisma.OpportunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          deleteMany: {
            args: Prisma.OpportunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpportunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpportunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          upsert: {
            args: Prisma.OpportunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          aggregate: {
            args: Prisma.OpportunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpportunity>
          }
          groupBy: {
            args: Prisma.OpportunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpportunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpportunityCountArgs<ExtArgs>
            result: $Utils.Optional<OpportunityCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    school?: SchoolOmit
    nPO?: NPOOmit
    opportunity?: OpportunityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    school: number
    npo: number
    opportunity: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | UserCountOutputTypeCountSchoolArgs
    npo?: boolean | UserCountOutputTypeCountNpoArgs
    opportunity?: boolean | UserCountOutputTypeCountOpportunityArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNpoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NPOWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOpportunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunityWhereInput | $Types.Skip
  }


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    user: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SchoolCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput | $Types.Skip
  }


  /**
   * Count Type NPOCountOutputType
   */

  export type NPOCountOutputType = {
    admin: number
    opportunity: number
  }

  export type NPOCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | NPOCountOutputTypeCountAdminArgs
    opportunity?: boolean | NPOCountOutputTypeCountOpportunityArgs
  }

  // Custom InputTypes
  /**
   * NPOCountOutputType without action
   */
  export type NPOCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPOCountOutputType
     */
    select?: NPOCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NPOCountOutputType without action
   */
  export type NPOCountOutputTypeCountAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput | $Types.Skip
  }

  /**
   * NPOCountOutputType without action
   */
  export type NPOCountOutputTypeCountOpportunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunityWhereInput | $Types.Skip
  }


  /**
   * Count Type OpportunityCountOutputType
   */

  export type OpportunityCountOutputType = {
    npo: number
    volunteer: number
  }

  export type OpportunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npo?: boolean | OpportunityCountOutputTypeCountNpoArgs
    volunteer?: boolean | OpportunityCountOutputTypeCountVolunteerArgs
  }

  // Custom InputTypes
  /**
   * OpportunityCountOutputType without action
   */
  export type OpportunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityCountOutputType
     */
    select?: OpportunityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpportunityCountOutputType without action
   */
  export type OpportunityCountOutputTypeCountNpoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NPOWhereInput | $Types.Skip
  }

  /**
   * OpportunityCountOutputType without action
   */
  export type OpportunityCountOutputTypeCountVolunteerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput | $Types.Skip
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type UserSumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type UserMinAggregateInputType = {
    id?: true | $Types.Skip
    username?: true | $Types.Skip
    password?: true | $Types.Skip
    role?: true | $Types.Skip
  }

  export type UserMaxAggregateInputType = {
    id?: true | $Types.Skip
    username?: true | $Types.Skip
    password?: true | $Types.Skip
    role?: true | $Types.Skip
  }

  export type UserCountAggregateInputType = {
    id?: true | $Types.Skip
    username?: true | $Types.Skip
    password?: true | $Types.Skip
    role?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput | $Types.Skip
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[] | $Types.Skip
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    username?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    school?: boolean | User$schoolArgs<ExtArgs> | $Types.Skip
    npo?: boolean | User$npoArgs<ExtArgs> | $Types.Skip
    opportunity?: boolean | User$opportunityArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    username?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    username?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean | $Types.Skip
    username?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role", ExtArgs["result"]["user"], $Types.Skip>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | User$schoolArgs<ExtArgs> | $Types.Skip
    npo?: boolean | User$npoArgs<ExtArgs> | $Types.Skip
    opportunity?: boolean | User$opportunityArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>[]
      npo: Prisma.$NPOPayload<ExtArgs>[]
      opportunity: Prisma.$OpportunityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends User$schoolArgs<ExtArgs> = {}>(args?: Subset<T, User$schoolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    npo<T extends User$npoArgs<ExtArgs> = {}>(args?: Subset<T, User$npoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opportunity<T extends User$opportunityArgs<ExtArgs> = {}>(args?: Subset<T, User$opportunityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User.school
   */
  export type User$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    where?: SchoolWhereInput | $Types.Skip
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[] | $Types.Skip
    cursor?: SchoolWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.npo
   */
  export type User$npoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPO
     */
    select?: NPOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPO
     */
    omit?: NPOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPOInclude<ExtArgs> | null
    where?: NPOWhereInput | $Types.Skip
    orderBy?: NPOOrderByWithRelationInput | NPOOrderByWithRelationInput[] | $Types.Skip
    cursor?: NPOWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: NPOScalarFieldEnum | NPOScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.opportunity
   */
  export type User$opportunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    where?: OpportunityWhereInput | $Types.Skip
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[] | $Types.Skip
    cursor?: OpportunityWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    id: number | null
  }

  export type SchoolSumAggregateOutputType = {
    id: number | null
  }

  export type SchoolMinAggregateOutputType = {
    id: number | null
    schoolname: string | null
    code: string | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: number | null
    schoolname: string | null
    code: string | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    schoolname: number
    code: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type SchoolSumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type SchoolMinAggregateInputType = {
    id?: true | $Types.Skip
    schoolname?: true | $Types.Skip
    code?: true | $Types.Skip
  }

  export type SchoolMaxAggregateInputType = {
    id?: true | $Types.Skip
    schoolname?: true | $Types.Skip
    code?: true | $Types.Skip
  }

  export type SchoolCountAggregateInputType = {
    id?: true | $Types.Skip
    schoolname?: true | $Types.Skip
    code?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput | $Types.Skip
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[] | $Types.Skip
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: SchoolCountAggregateInputType | true
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: number
    schoolname: string
    code: string
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    schoolname?: boolean | $Types.Skip
    code?: boolean | $Types.Skip
    user?: boolean | School$userArgs<ExtArgs> | $Types.Skip
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    schoolname?: boolean | $Types.Skip
    code?: boolean | $Types.Skip
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    schoolname?: boolean | $Types.Skip
    code?: boolean | $Types.Skip
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean | $Types.Skip
    schoolname?: boolean | $Types.Skip
    code?: boolean | $Types.Skip
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolname" | "code", ExtArgs["result"]["school"], $Types.Skip>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | School$userArgs<ExtArgs> | $Types.Skip
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolname: string
      code: string
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends School$userArgs<ExtArgs> = {}>(args?: Subset<T, School$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'Int'>
    readonly schoolname: FieldRef<"School", 'String'>
    readonly code: FieldRef<"School", 'String'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[] | $Types.Skip
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[] | $Types.Skip
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number | $Types.Skip
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[] | $Types.Skip
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput | $Types.Skip
    /**
     * Limit how many Schools to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput | $Types.Skip
    /**
     * Limit how many Schools to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput | $Types.Skip
    /**
     * Limit how many Schools to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * School.user
   */
  export type School$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput | $Types.Skip
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    cursor?: UserWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model NPO
   */

  export type AggregateNPO = {
    _count: NPOCountAggregateOutputType | null
    _avg: NPOAvgAggregateOutputType | null
    _sum: NPOSumAggregateOutputType | null
    _min: NPOMinAggregateOutputType | null
    _max: NPOMaxAggregateOutputType | null
  }

  export type NPOAvgAggregateOutputType = {
    id: number | null
  }

  export type NPOSumAggregateOutputType = {
    id: number | null
  }

  export type NPOMinAggregateOutputType = {
    id: number | null
    nponame: string | null
  }

  export type NPOMaxAggregateOutputType = {
    id: number | null
    nponame: string | null
  }

  export type NPOCountAggregateOutputType = {
    id: number
    nponame: number
    _all: number
  }


  export type NPOAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type NPOSumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type NPOMinAggregateInputType = {
    id?: true | $Types.Skip
    nponame?: true | $Types.Skip
  }

  export type NPOMaxAggregateInputType = {
    id?: true | $Types.Skip
    nponame?: true | $Types.Skip
  }

  export type NPOCountAggregateInputType = {
    id?: true | $Types.Skip
    nponame?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type NPOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NPO to aggregate.
     */
    where?: NPOWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPOS to fetch.
     */
    orderBy?: NPOOrderByWithRelationInput | NPOOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NPOWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPOS from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPOS.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NPOS
    **/
    _count?: true | NPOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NPOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NPOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NPOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NPOMaxAggregateInputType
  }

  export type GetNPOAggregateType<T extends NPOAggregateArgs> = {
        [P in keyof T & keyof AggregateNPO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNPO[P]>
      : GetScalarType<T[P], AggregateNPO[P]>
  }




  export type NPOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NPOWhereInput | $Types.Skip
    orderBy?: NPOOrderByWithAggregationInput | NPOOrderByWithAggregationInput[] | $Types.Skip
    by: NPOScalarFieldEnum[] | NPOScalarFieldEnum
    having?: NPOScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: NPOCountAggregateInputType | true
    _avg?: NPOAvgAggregateInputType
    _sum?: NPOSumAggregateInputType
    _min?: NPOMinAggregateInputType
    _max?: NPOMaxAggregateInputType
  }

  export type NPOGroupByOutputType = {
    id: number
    nponame: string
    _count: NPOCountAggregateOutputType | null
    _avg: NPOAvgAggregateOutputType | null
    _sum: NPOSumAggregateOutputType | null
    _min: NPOMinAggregateOutputType | null
    _max: NPOMaxAggregateOutputType | null
  }

  type GetNPOGroupByPayload<T extends NPOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NPOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NPOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NPOGroupByOutputType[P]>
            : GetScalarType<T[P], NPOGroupByOutputType[P]>
        }
      >
    >


  export type NPOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    nponame?: boolean | $Types.Skip
    admin?: boolean | NPO$adminArgs<ExtArgs> | $Types.Skip
    opportunity?: boolean | NPO$opportunityArgs<ExtArgs> | $Types.Skip
    _count?: boolean | NPOCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["nPO"]>

  export type NPOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    nponame?: boolean | $Types.Skip
  }, ExtArgs["result"]["nPO"]>

  export type NPOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    nponame?: boolean | $Types.Skip
  }, ExtArgs["result"]["nPO"]>

  export type NPOSelectScalar = {
    id?: boolean | $Types.Skip
    nponame?: boolean | $Types.Skip
  }

  export type NPOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nponame", ExtArgs["result"]["nPO"], $Types.Skip>
  export type NPOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | NPO$adminArgs<ExtArgs> | $Types.Skip
    opportunity?: boolean | NPO$opportunityArgs<ExtArgs> | $Types.Skip
    _count?: boolean | NPOCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type NPOIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NPOIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NPOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NPO"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>[]
      opportunity: Prisma.$OpportunityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nponame: string
    }, ExtArgs["result"]["nPO"]>
    composites: {}
  }

  type NPOGetPayload<S extends boolean | null | undefined | NPODefaultArgs> = $Result.GetResult<Prisma.$NPOPayload, S>

  type NPOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NPOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NPOCountAggregateInputType | true
    }

  export interface NPODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NPO'], meta: { name: 'NPO' } }
    /**
     * Find zero or one NPO that matches the filter.
     * @param {NPOFindUniqueArgs} args - Arguments to find a NPO
     * @example
     * // Get one NPO
     * const nPO = await prisma.nPO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NPOFindUniqueArgs>(args: SelectSubset<T, NPOFindUniqueArgs<ExtArgs>>): Prisma__NPOClient<$Result.GetResult<Prisma.$NPOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NPO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NPOFindUniqueOrThrowArgs} args - Arguments to find a NPO
     * @example
     * // Get one NPO
     * const nPO = await prisma.nPO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NPOFindUniqueOrThrowArgs>(args: SelectSubset<T, NPOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NPOClient<$Result.GetResult<Prisma.$NPOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NPO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPOFindFirstArgs} args - Arguments to find a NPO
     * @example
     * // Get one NPO
     * const nPO = await prisma.nPO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NPOFindFirstArgs>(args?: SelectSubset<T, NPOFindFirstArgs<ExtArgs>>): Prisma__NPOClient<$Result.GetResult<Prisma.$NPOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NPO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPOFindFirstOrThrowArgs} args - Arguments to find a NPO
     * @example
     * // Get one NPO
     * const nPO = await prisma.nPO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NPOFindFirstOrThrowArgs>(args?: SelectSubset<T, NPOFindFirstOrThrowArgs<ExtArgs>>): Prisma__NPOClient<$Result.GetResult<Prisma.$NPOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NPOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NPOS
     * const nPOS = await prisma.nPO.findMany()
     * 
     * // Get first 10 NPOS
     * const nPOS = await prisma.nPO.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nPOWithIdOnly = await prisma.nPO.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NPOFindManyArgs>(args?: SelectSubset<T, NPOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NPO.
     * @param {NPOCreateArgs} args - Arguments to create a NPO.
     * @example
     * // Create one NPO
     * const NPO = await prisma.nPO.create({
     *   data: {
     *     // ... data to create a NPO
     *   }
     * })
     * 
     */
    create<T extends NPOCreateArgs>(args: SelectSubset<T, NPOCreateArgs<ExtArgs>>): Prisma__NPOClient<$Result.GetResult<Prisma.$NPOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NPOS.
     * @param {NPOCreateManyArgs} args - Arguments to create many NPOS.
     * @example
     * // Create many NPOS
     * const nPO = await prisma.nPO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NPOCreateManyArgs>(args?: SelectSubset<T, NPOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NPOS and returns the data saved in the database.
     * @param {NPOCreateManyAndReturnArgs} args - Arguments to create many NPOS.
     * @example
     * // Create many NPOS
     * const nPO = await prisma.nPO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NPOS and only return the `id`
     * const nPOWithIdOnly = await prisma.nPO.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NPOCreateManyAndReturnArgs>(args?: SelectSubset<T, NPOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NPO.
     * @param {NPODeleteArgs} args - Arguments to delete one NPO.
     * @example
     * // Delete one NPO
     * const NPO = await prisma.nPO.delete({
     *   where: {
     *     // ... filter to delete one NPO
     *   }
     * })
     * 
     */
    delete<T extends NPODeleteArgs>(args: SelectSubset<T, NPODeleteArgs<ExtArgs>>): Prisma__NPOClient<$Result.GetResult<Prisma.$NPOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NPO.
     * @param {NPOUpdateArgs} args - Arguments to update one NPO.
     * @example
     * // Update one NPO
     * const nPO = await prisma.nPO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NPOUpdateArgs>(args: SelectSubset<T, NPOUpdateArgs<ExtArgs>>): Prisma__NPOClient<$Result.GetResult<Prisma.$NPOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NPOS.
     * @param {NPODeleteManyArgs} args - Arguments to filter NPOS to delete.
     * @example
     * // Delete a few NPOS
     * const { count } = await prisma.nPO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NPODeleteManyArgs>(args?: SelectSubset<T, NPODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NPOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NPOS
     * const nPO = await prisma.nPO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NPOUpdateManyArgs>(args: SelectSubset<T, NPOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NPOS and returns the data updated in the database.
     * @param {NPOUpdateManyAndReturnArgs} args - Arguments to update many NPOS.
     * @example
     * // Update many NPOS
     * const nPO = await prisma.nPO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NPOS and only return the `id`
     * const nPOWithIdOnly = await prisma.nPO.updateManyAndReturn({
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
    updateManyAndReturn<T extends NPOUpdateManyAndReturnArgs>(args: SelectSubset<T, NPOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NPO.
     * @param {NPOUpsertArgs} args - Arguments to update or create a NPO.
     * @example
     * // Update or create a NPO
     * const nPO = await prisma.nPO.upsert({
     *   create: {
     *     // ... data to create a NPO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NPO we want to update
     *   }
     * })
     */
    upsert<T extends NPOUpsertArgs>(args: SelectSubset<T, NPOUpsertArgs<ExtArgs>>): Prisma__NPOClient<$Result.GetResult<Prisma.$NPOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NPOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPOCountArgs} args - Arguments to filter NPOS to count.
     * @example
     * // Count the number of NPOS
     * const count = await prisma.nPO.count({
     *   where: {
     *     // ... the filter for the NPOS we want to count
     *   }
     * })
    **/
    count<T extends NPOCountArgs>(
      args?: Subset<T, NPOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NPOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NPO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NPOAggregateArgs>(args: Subset<T, NPOAggregateArgs>): Prisma.PrismaPromise<GetNPOAggregateType<T>>

    /**
     * Group by NPO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPOGroupByArgs} args - Group by arguments.
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
      T extends NPOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NPOGroupByArgs['orderBy'] }
        : { orderBy?: NPOGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NPOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNPOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NPO model
   */
  readonly fields: NPOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NPO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NPOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends NPO$adminArgs<ExtArgs> = {}>(args?: Subset<T, NPO$adminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opportunity<T extends NPO$opportunityArgs<ExtArgs> = {}>(args?: Subset<T, NPO$opportunityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NPO model
   */
  interface NPOFieldRefs {
    readonly id: FieldRef<"NPO", 'Int'>
    readonly nponame: FieldRef<"NPO", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NPO findUnique
   */
  export type NPOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPO
     */
    select?: NPOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPO
     */
    omit?: NPOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPOInclude<ExtArgs> | null
    /**
     * Filter, which NPO to fetch.
     */
    where: NPOWhereUniqueInput
  }

  /**
   * NPO findUniqueOrThrow
   */
  export type NPOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPO
     */
    select?: NPOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPO
     */
    omit?: NPOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPOInclude<ExtArgs> | null
    /**
     * Filter, which NPO to fetch.
     */
    where: NPOWhereUniqueInput
  }

  /**
   * NPO findFirst
   */
  export type NPOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPO
     */
    select?: NPOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPO
     */
    omit?: NPOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPOInclude<ExtArgs> | null
    /**
     * Filter, which NPO to fetch.
     */
    where?: NPOWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPOS to fetch.
     */
    orderBy?: NPOOrderByWithRelationInput | NPOOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NPOS.
     */
    cursor?: NPOWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPOS from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPOS.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NPOS.
     */
    distinct?: NPOScalarFieldEnum | NPOScalarFieldEnum[] | $Types.Skip
  }

  /**
   * NPO findFirstOrThrow
   */
  export type NPOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPO
     */
    select?: NPOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPO
     */
    omit?: NPOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPOInclude<ExtArgs> | null
    /**
     * Filter, which NPO to fetch.
     */
    where?: NPOWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPOS to fetch.
     */
    orderBy?: NPOOrderByWithRelationInput | NPOOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NPOS.
     */
    cursor?: NPOWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPOS from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPOS.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NPOS.
     */
    distinct?: NPOScalarFieldEnum | NPOScalarFieldEnum[] | $Types.Skip
  }

  /**
   * NPO findMany
   */
  export type NPOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPO
     */
    select?: NPOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPO
     */
    omit?: NPOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPOInclude<ExtArgs> | null
    /**
     * Filter, which NPOS to fetch.
     */
    where?: NPOWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPOS to fetch.
     */
    orderBy?: NPOOrderByWithRelationInput | NPOOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NPOS.
     */
    cursor?: NPOWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPOS from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPOS.
     */
    skip?: number | $Types.Skip
    distinct?: NPOScalarFieldEnum | NPOScalarFieldEnum[] | $Types.Skip
  }

  /**
   * NPO create
   */
  export type NPOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPO
     */
    select?: NPOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPO
     */
    omit?: NPOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPOInclude<ExtArgs> | null
    /**
     * The data needed to create a NPO.
     */
    data: XOR<NPOCreateInput, NPOUncheckedCreateInput>
  }

  /**
   * NPO createMany
   */
  export type NPOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NPOS.
     */
    data: NPOCreateManyInput | NPOCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * NPO createManyAndReturn
   */
  export type NPOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPO
     */
    select?: NPOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NPO
     */
    omit?: NPOOmit<ExtArgs> | null
    /**
     * The data used to create many NPOS.
     */
    data: NPOCreateManyInput | NPOCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * NPO update
   */
  export type NPOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPO
     */
    select?: NPOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPO
     */
    omit?: NPOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPOInclude<ExtArgs> | null
    /**
     * The data needed to update a NPO.
     */
    data: XOR<NPOUpdateInput, NPOUncheckedUpdateInput>
    /**
     * Choose, which NPO to update.
     */
    where: NPOWhereUniqueInput
  }

  /**
   * NPO updateMany
   */
  export type NPOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NPOS.
     */
    data: XOR<NPOUpdateManyMutationInput, NPOUncheckedUpdateManyInput>
    /**
     * Filter which NPOS to update
     */
    where?: NPOWhereInput | $Types.Skip
    /**
     * Limit how many NPOS to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * NPO updateManyAndReturn
   */
  export type NPOUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPO
     */
    select?: NPOSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NPO
     */
    omit?: NPOOmit<ExtArgs> | null
    /**
     * The data used to update NPOS.
     */
    data: XOR<NPOUpdateManyMutationInput, NPOUncheckedUpdateManyInput>
    /**
     * Filter which NPOS to update
     */
    where?: NPOWhereInput | $Types.Skip
    /**
     * Limit how many NPOS to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * NPO upsert
   */
  export type NPOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPO
     */
    select?: NPOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPO
     */
    omit?: NPOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPOInclude<ExtArgs> | null
    /**
     * The filter to search for the NPO to update in case it exists.
     */
    where: NPOWhereUniqueInput
    /**
     * In case the NPO found by the `where` argument doesn't exist, create a new NPO with this data.
     */
    create: XOR<NPOCreateInput, NPOUncheckedCreateInput>
    /**
     * In case the NPO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NPOUpdateInput, NPOUncheckedUpdateInput>
  }

  /**
   * NPO delete
   */
  export type NPODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPO
     */
    select?: NPOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPO
     */
    omit?: NPOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPOInclude<ExtArgs> | null
    /**
     * Filter which NPO to delete.
     */
    where: NPOWhereUniqueInput
  }

  /**
   * NPO deleteMany
   */
  export type NPODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NPOS to delete
     */
    where?: NPOWhereInput | $Types.Skip
    /**
     * Limit how many NPOS to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * NPO.admin
   */
  export type NPO$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput | $Types.Skip
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    cursor?: UserWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * NPO.opportunity
   */
  export type NPO$opportunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    where?: OpportunityWhereInput | $Types.Skip
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[] | $Types.Skip
    cursor?: OpportunityWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[] | $Types.Skip
  }

  /**
   * NPO without action
   */
  export type NPODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPO
     */
    select?: NPOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPO
     */
    omit?: NPOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPOInclude<ExtArgs> | null
  }


  /**
   * Model Opportunity
   */

  export type AggregateOpportunity = {
    _count: OpportunityCountAggregateOutputType | null
    _avg: OpportunityAvgAggregateOutputType | null
    _sum: OpportunitySumAggregateOutputType | null
    _min: OpportunityMinAggregateOutputType | null
    _max: OpportunityMaxAggregateOutputType | null
  }

  export type OpportunityAvgAggregateOutputType = {
    id: number | null
  }

  export type OpportunitySumAggregateOutputType = {
    id: number | null
  }

  export type OpportunityMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
  }

  export type OpportunityMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
  }

  export type OpportunityCountAggregateOutputType = {
    id: number
    title: number
    description: number
    _all: number
  }


  export type OpportunityAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type OpportunitySumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type OpportunityMinAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    description?: true | $Types.Skip
  }

  export type OpportunityMaxAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    description?: true | $Types.Skip
  }

  export type OpportunityCountAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    description?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type OpportunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opportunity to aggregate.
     */
    where?: OpportunityWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpportunityWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Opportunities
    **/
    _count?: true | OpportunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpportunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpportunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpportunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpportunityMaxAggregateInputType
  }

  export type GetOpportunityAggregateType<T extends OpportunityAggregateArgs> = {
        [P in keyof T & keyof AggregateOpportunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpportunity[P]>
      : GetScalarType<T[P], AggregateOpportunity[P]>
  }




  export type OpportunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunityWhereInput | $Types.Skip
    orderBy?: OpportunityOrderByWithAggregationInput | OpportunityOrderByWithAggregationInput[] | $Types.Skip
    by: OpportunityScalarFieldEnum[] | OpportunityScalarFieldEnum
    having?: OpportunityScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: OpportunityCountAggregateInputType | true
    _avg?: OpportunityAvgAggregateInputType
    _sum?: OpportunitySumAggregateInputType
    _min?: OpportunityMinAggregateInputType
    _max?: OpportunityMaxAggregateInputType
  }

  export type OpportunityGroupByOutputType = {
    id: number
    title: string
    description: string
    _count: OpportunityCountAggregateOutputType | null
    _avg: OpportunityAvgAggregateOutputType | null
    _sum: OpportunitySumAggregateOutputType | null
    _min: OpportunityMinAggregateOutputType | null
    _max: OpportunityMaxAggregateOutputType | null
  }

  type GetOpportunityGroupByPayload<T extends OpportunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpportunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpportunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpportunityGroupByOutputType[P]>
            : GetScalarType<T[P], OpportunityGroupByOutputType[P]>
        }
      >
    >


  export type OpportunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    npo?: boolean | Opportunity$npoArgs<ExtArgs> | $Types.Skip
    volunteer?: boolean | Opportunity$volunteerArgs<ExtArgs> | $Types.Skip
    _count?: boolean | OpportunityCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectScalar = {
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
  }

  export type OpportunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description", ExtArgs["result"]["opportunity"], $Types.Skip>
  export type OpportunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npo?: boolean | Opportunity$npoArgs<ExtArgs> | $Types.Skip
    volunteer?: boolean | Opportunity$volunteerArgs<ExtArgs> | $Types.Skip
    _count?: boolean | OpportunityCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type OpportunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OpportunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OpportunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Opportunity"
    objects: {
      npo: Prisma.$NPOPayload<ExtArgs>[]
      volunteer: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
    }, ExtArgs["result"]["opportunity"]>
    composites: {}
  }

  type OpportunityGetPayload<S extends boolean | null | undefined | OpportunityDefaultArgs> = $Result.GetResult<Prisma.$OpportunityPayload, S>

  type OpportunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpportunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpportunityCountAggregateInputType | true
    }

  export interface OpportunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Opportunity'], meta: { name: 'Opportunity' } }
    /**
     * Find zero or one Opportunity that matches the filter.
     * @param {OpportunityFindUniqueArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpportunityFindUniqueArgs>(args: SelectSubset<T, OpportunityFindUniqueArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Opportunity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpportunityFindUniqueOrThrowArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpportunityFindUniqueOrThrowArgs>(args: SelectSubset<T, OpportunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opportunity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindFirstArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpportunityFindFirstArgs>(args?: SelectSubset<T, OpportunityFindFirstArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opportunity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindFirstOrThrowArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpportunityFindFirstOrThrowArgs>(args?: SelectSubset<T, OpportunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Opportunities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Opportunities
     * const opportunities = await prisma.opportunity.findMany()
     * 
     * // Get first 10 Opportunities
     * const opportunities = await prisma.opportunity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpportunityFindManyArgs>(args?: SelectSubset<T, OpportunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Opportunity.
     * @param {OpportunityCreateArgs} args - Arguments to create a Opportunity.
     * @example
     * // Create one Opportunity
     * const Opportunity = await prisma.opportunity.create({
     *   data: {
     *     // ... data to create a Opportunity
     *   }
     * })
     * 
     */
    create<T extends OpportunityCreateArgs>(args: SelectSubset<T, OpportunityCreateArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Opportunities.
     * @param {OpportunityCreateManyArgs} args - Arguments to create many Opportunities.
     * @example
     * // Create many Opportunities
     * const opportunity = await prisma.opportunity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpportunityCreateManyArgs>(args?: SelectSubset<T, OpportunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Opportunities and returns the data saved in the database.
     * @param {OpportunityCreateManyAndReturnArgs} args - Arguments to create many Opportunities.
     * @example
     * // Create many Opportunities
     * const opportunity = await prisma.opportunity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Opportunities and only return the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpportunityCreateManyAndReturnArgs>(args?: SelectSubset<T, OpportunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Opportunity.
     * @param {OpportunityDeleteArgs} args - Arguments to delete one Opportunity.
     * @example
     * // Delete one Opportunity
     * const Opportunity = await prisma.opportunity.delete({
     *   where: {
     *     // ... filter to delete one Opportunity
     *   }
     * })
     * 
     */
    delete<T extends OpportunityDeleteArgs>(args: SelectSubset<T, OpportunityDeleteArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Opportunity.
     * @param {OpportunityUpdateArgs} args - Arguments to update one Opportunity.
     * @example
     * // Update one Opportunity
     * const opportunity = await prisma.opportunity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpportunityUpdateArgs>(args: SelectSubset<T, OpportunityUpdateArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Opportunities.
     * @param {OpportunityDeleteManyArgs} args - Arguments to filter Opportunities to delete.
     * @example
     * // Delete a few Opportunities
     * const { count } = await prisma.opportunity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpportunityDeleteManyArgs>(args?: SelectSubset<T, OpportunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Opportunities
     * const opportunity = await prisma.opportunity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpportunityUpdateManyArgs>(args: SelectSubset<T, OpportunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opportunities and returns the data updated in the database.
     * @param {OpportunityUpdateManyAndReturnArgs} args - Arguments to update many Opportunities.
     * @example
     * // Update many Opportunities
     * const opportunity = await prisma.opportunity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Opportunities and only return the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.updateManyAndReturn({
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
    updateManyAndReturn<T extends OpportunityUpdateManyAndReturnArgs>(args: SelectSubset<T, OpportunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Opportunity.
     * @param {OpportunityUpsertArgs} args - Arguments to update or create a Opportunity.
     * @example
     * // Update or create a Opportunity
     * const opportunity = await prisma.opportunity.upsert({
     *   create: {
     *     // ... data to create a Opportunity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opportunity we want to update
     *   }
     * })
     */
    upsert<T extends OpportunityUpsertArgs>(args: SelectSubset<T, OpportunityUpsertArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Opportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityCountArgs} args - Arguments to filter Opportunities to count.
     * @example
     * // Count the number of Opportunities
     * const count = await prisma.opportunity.count({
     *   where: {
     *     // ... the filter for the Opportunities we want to count
     *   }
     * })
    **/
    count<T extends OpportunityCountArgs>(
      args?: Subset<T, OpportunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpportunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpportunityAggregateArgs>(args: Subset<T, OpportunityAggregateArgs>): Prisma.PrismaPromise<GetOpportunityAggregateType<T>>

    /**
     * Group by Opportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityGroupByArgs} args - Group by arguments.
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
      T extends OpportunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpportunityGroupByArgs['orderBy'] }
        : { orderBy?: OpportunityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpportunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpportunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Opportunity model
   */
  readonly fields: OpportunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Opportunity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpportunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    npo<T extends Opportunity$npoArgs<ExtArgs> = {}>(args?: Subset<T, Opportunity$npoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    volunteer<T extends Opportunity$volunteerArgs<ExtArgs> = {}>(args?: Subset<T, Opportunity$volunteerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Opportunity model
   */
  interface OpportunityFieldRefs {
    readonly id: FieldRef<"Opportunity", 'Int'>
    readonly title: FieldRef<"Opportunity", 'String'>
    readonly description: FieldRef<"Opportunity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Opportunity findUnique
   */
  export type OpportunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity findUniqueOrThrow
   */
  export type OpportunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity findFirst
   */
  export type OpportunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where?: OpportunityWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opportunities.
     */
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Opportunity findFirstOrThrow
   */
  export type OpportunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where?: OpportunityWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opportunities.
     */
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Opportunity findMany
   */
  export type OpportunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunities to fetch.
     */
    where?: OpportunityWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number | $Types.Skip
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Opportunity create
   */
  export type OpportunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Opportunity.
     */
    data: XOR<OpportunityCreateInput, OpportunityUncheckedCreateInput>
  }

  /**
   * Opportunity createMany
   */
  export type OpportunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Opportunities.
     */
    data: OpportunityCreateManyInput | OpportunityCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Opportunity createManyAndReturn
   */
  export type OpportunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * The data used to create many Opportunities.
     */
    data: OpportunityCreateManyInput | OpportunityCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Opportunity update
   */
  export type OpportunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Opportunity.
     */
    data: XOR<OpportunityUpdateInput, OpportunityUncheckedUpdateInput>
    /**
     * Choose, which Opportunity to update.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity updateMany
   */
  export type OpportunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Opportunities.
     */
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyInput>
    /**
     * Filter which Opportunities to update
     */
    where?: OpportunityWhereInput | $Types.Skip
    /**
     * Limit how many Opportunities to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Opportunity updateManyAndReturn
   */
  export type OpportunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * The data used to update Opportunities.
     */
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyInput>
    /**
     * Filter which Opportunities to update
     */
    where?: OpportunityWhereInput | $Types.Skip
    /**
     * Limit how many Opportunities to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Opportunity upsert
   */
  export type OpportunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Opportunity to update in case it exists.
     */
    where: OpportunityWhereUniqueInput
    /**
     * In case the Opportunity found by the `where` argument doesn't exist, create a new Opportunity with this data.
     */
    create: XOR<OpportunityCreateInput, OpportunityUncheckedCreateInput>
    /**
     * In case the Opportunity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpportunityUpdateInput, OpportunityUncheckedUpdateInput>
  }

  /**
   * Opportunity delete
   */
  export type OpportunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter which Opportunity to delete.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity deleteMany
   */
  export type OpportunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opportunities to delete
     */
    where?: OpportunityWhereInput | $Types.Skip
    /**
     * Limit how many Opportunities to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Opportunity.npo
   */
  export type Opportunity$npoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPO
     */
    select?: NPOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPO
     */
    omit?: NPOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPOInclude<ExtArgs> | null
    where?: NPOWhereInput | $Types.Skip
    orderBy?: NPOOrderByWithRelationInput | NPOOrderByWithRelationInput[] | $Types.Skip
    cursor?: NPOWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: NPOScalarFieldEnum | NPOScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Opportunity.volunteer
   */
  export type Opportunity$volunteerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput | $Types.Skip
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    cursor?: UserWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Opportunity without action
   */
  export type OpportunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    schoolname: 'schoolname',
    code: 'code'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const NPOScalarFieldEnum: {
    id: 'id',
    nponame: 'nponame'
  };

  export type NPOScalarFieldEnum = (typeof NPOScalarFieldEnum)[keyof typeof NPOScalarFieldEnum]


  export const OpportunityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description'
  };

  export type OpportunityScalarFieldEnum = (typeof OpportunityScalarFieldEnum)[keyof typeof OpportunityScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[] | $Types.Skip
    OR?: UserWhereInput[] | $Types.Skip
    NOT?: UserWhereInput | UserWhereInput[] | $Types.Skip
    id?: IntFilter<"User"> | number | $Types.Skip
    username?: StringFilter<"User"> | string | $Types.Skip
    password?: StringFilter<"User"> | string | $Types.Skip
    role?: StringFilter<"User"> | string | $Types.Skip
    school?: SchoolListRelationFilter | $Types.Skip
    npo?: NPOListRelationFilter | $Types.Skip
    opportunity?: OpportunityListRelationFilter | $Types.Skip
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    school?: SchoolOrderByRelationAggregateInput | $Types.Skip
    npo?: NPOOrderByRelationAggregateInput | $Types.Skip
    opportunity?: OpportunityOrderByRelationAggregateInput | $Types.Skip
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    username?: string | $Types.Skip
    AND?: UserWhereInput | UserWhereInput[] | $Types.Skip
    OR?: UserWhereInput[] | $Types.Skip
    NOT?: UserWhereInput | UserWhereInput[] | $Types.Skip
    password?: StringFilter<"User"> | string | $Types.Skip
    role?: StringFilter<"User"> | string | $Types.Skip
    school?: SchoolListRelationFilter | $Types.Skip
    npo?: NPOListRelationFilter | $Types.Skip
    opportunity?: OpportunityListRelationFilter | $Types.Skip
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    _count?: UserCountOrderByAggregateInput | $Types.Skip
    _avg?: UserAvgOrderByAggregateInput | $Types.Skip
    _max?: UserMaxOrderByAggregateInput | $Types.Skip
    _min?: UserMinOrderByAggregateInput | $Types.Skip
    _sum?: UserSumOrderByAggregateInput | $Types.Skip
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: UserScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"User"> | number | $Types.Skip
    username?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    password?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    role?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[] | $Types.Skip
    OR?: SchoolWhereInput[] | $Types.Skip
    NOT?: SchoolWhereInput | SchoolWhereInput[] | $Types.Skip
    id?: IntFilter<"School"> | number | $Types.Skip
    schoolname?: StringFilter<"School"> | string | $Types.Skip
    code?: StringFilter<"School"> | string | $Types.Skip
    user?: UserListRelationFilter | $Types.Skip
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    schoolname?: SortOrder | $Types.Skip
    code?: SortOrder | $Types.Skip
    user?: UserOrderByRelationAggregateInput | $Types.Skip
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    schoolname?: string | $Types.Skip
    code?: string | $Types.Skip
    AND?: SchoolWhereInput | SchoolWhereInput[] | $Types.Skip
    OR?: SchoolWhereInput[] | $Types.Skip
    NOT?: SchoolWhereInput | SchoolWhereInput[] | $Types.Skip
    user?: UserListRelationFilter | $Types.Skip
  }, "id" | "schoolname" | "code">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    schoolname?: SortOrder | $Types.Skip
    code?: SortOrder | $Types.Skip
    _count?: SchoolCountOrderByAggregateInput | $Types.Skip
    _avg?: SchoolAvgOrderByAggregateInput | $Types.Skip
    _max?: SchoolMaxOrderByAggregateInput | $Types.Skip
    _min?: SchoolMinOrderByAggregateInput | $Types.Skip
    _sum?: SchoolSumOrderByAggregateInput | $Types.Skip
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: SchoolScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"School"> | number | $Types.Skip
    schoolname?: StringWithAggregatesFilter<"School"> | string | $Types.Skip
    code?: StringWithAggregatesFilter<"School"> | string | $Types.Skip
  }

  export type NPOWhereInput = {
    AND?: NPOWhereInput | NPOWhereInput[] | $Types.Skip
    OR?: NPOWhereInput[] | $Types.Skip
    NOT?: NPOWhereInput | NPOWhereInput[] | $Types.Skip
    id?: IntFilter<"NPO"> | number | $Types.Skip
    nponame?: StringFilter<"NPO"> | string | $Types.Skip
    admin?: UserListRelationFilter | $Types.Skip
    opportunity?: OpportunityListRelationFilter | $Types.Skip
  }

  export type NPOOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    nponame?: SortOrder | $Types.Skip
    admin?: UserOrderByRelationAggregateInput | $Types.Skip
    opportunity?: OpportunityOrderByRelationAggregateInput | $Types.Skip
  }

  export type NPOWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    nponame?: string | $Types.Skip
    AND?: NPOWhereInput | NPOWhereInput[] | $Types.Skip
    OR?: NPOWhereInput[] | $Types.Skip
    NOT?: NPOWhereInput | NPOWhereInput[] | $Types.Skip
    admin?: UserListRelationFilter | $Types.Skip
    opportunity?: OpportunityListRelationFilter | $Types.Skip
  }, "id" | "nponame">

  export type NPOOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    nponame?: SortOrder | $Types.Skip
    _count?: NPOCountOrderByAggregateInput | $Types.Skip
    _avg?: NPOAvgOrderByAggregateInput | $Types.Skip
    _max?: NPOMaxOrderByAggregateInput | $Types.Skip
    _min?: NPOMinOrderByAggregateInput | $Types.Skip
    _sum?: NPOSumOrderByAggregateInput | $Types.Skip
  }

  export type NPOScalarWhereWithAggregatesInput = {
    AND?: NPOScalarWhereWithAggregatesInput | NPOScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: NPOScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: NPOScalarWhereWithAggregatesInput | NPOScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"NPO"> | number | $Types.Skip
    nponame?: StringWithAggregatesFilter<"NPO"> | string | $Types.Skip
  }

  export type OpportunityWhereInput = {
    AND?: OpportunityWhereInput | OpportunityWhereInput[] | $Types.Skip
    OR?: OpportunityWhereInput[] | $Types.Skip
    NOT?: OpportunityWhereInput | OpportunityWhereInput[] | $Types.Skip
    id?: IntFilter<"Opportunity"> | number | $Types.Skip
    title?: StringFilter<"Opportunity"> | string | $Types.Skip
    description?: StringFilter<"Opportunity"> | string | $Types.Skip
    npo?: NPOListRelationFilter | $Types.Skip
    volunteer?: UserListRelationFilter | $Types.Skip
  }

  export type OpportunityOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    npo?: NPOOrderByRelationAggregateInput | $Types.Skip
    volunteer?: UserOrderByRelationAggregateInput | $Types.Skip
  }

  export type OpportunityWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: OpportunityWhereInput | OpportunityWhereInput[] | $Types.Skip
    OR?: OpportunityWhereInput[] | $Types.Skip
    NOT?: OpportunityWhereInput | OpportunityWhereInput[] | $Types.Skip
    title?: StringFilter<"Opportunity"> | string | $Types.Skip
    description?: StringFilter<"Opportunity"> | string | $Types.Skip
    npo?: NPOListRelationFilter | $Types.Skip
    volunteer?: UserListRelationFilter | $Types.Skip
  }, "id">

  export type OpportunityOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    _count?: OpportunityCountOrderByAggregateInput | $Types.Skip
    _avg?: OpportunityAvgOrderByAggregateInput | $Types.Skip
    _max?: OpportunityMaxOrderByAggregateInput | $Types.Skip
    _min?: OpportunityMinOrderByAggregateInput | $Types.Skip
    _sum?: OpportunitySumOrderByAggregateInput | $Types.Skip
  }

  export type OpportunityScalarWhereWithAggregatesInput = {
    AND?: OpportunityScalarWhereWithAggregatesInput | OpportunityScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: OpportunityScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: OpportunityScalarWhereWithAggregatesInput | OpportunityScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Opportunity"> | number | $Types.Skip
    title?: StringWithAggregatesFilter<"Opportunity"> | string | $Types.Skip
    description?: StringWithAggregatesFilter<"Opportunity"> | string | $Types.Skip
  }

  export type UserCreateInput = {
    username: string
    password: string
    role: string
    school?: SchoolCreateNestedManyWithoutUserInput | $Types.Skip
    npo?: NPOCreateNestedManyWithoutAdminInput | $Types.Skip
    opportunity?: OpportunityCreateNestedManyWithoutVolunteerInput | $Types.Skip
  }

  export type UserUncheckedCreateInput = {
    id?: number | $Types.Skip
    username: string
    password: string
    role: string
    school?: SchoolUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    npo?: NPOUncheckedCreateNestedManyWithoutAdminInput | $Types.Skip
    opportunity?: OpportunityUncheckedCreateNestedManyWithoutVolunteerInput | $Types.Skip
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: StringFieldUpdateOperationsInput | string | $Types.Skip
    school?: SchoolUpdateManyWithoutUserNestedInput | $Types.Skip
    npo?: NPOUpdateManyWithoutAdminNestedInput | $Types.Skip
    opportunity?: OpportunityUpdateManyWithoutVolunteerNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: StringFieldUpdateOperationsInput | string | $Types.Skip
    school?: SchoolUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    npo?: NPOUncheckedUpdateManyWithoutAdminNestedInput | $Types.Skip
    opportunity?: OpportunityUncheckedUpdateManyWithoutVolunteerNestedInput | $Types.Skip
  }

  export type UserCreateManyInput = {
    id?: number | $Types.Skip
    username: string
    password: string
    role: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type SchoolCreateInput = {
    schoolname: string
    code: string
    user?: UserCreateNestedManyWithoutSchoolInput | $Types.Skip
  }

  export type SchoolUncheckedCreateInput = {
    id?: number | $Types.Skip
    schoolname: string
    code: string
    user?: UserUncheckedCreateNestedManyWithoutSchoolInput | $Types.Skip
  }

  export type SchoolUpdateInput = {
    schoolname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    code?: StringFieldUpdateOperationsInput | string | $Types.Skip
    user?: UserUpdateManyWithoutSchoolNestedInput | $Types.Skip
  }

  export type SchoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    schoolname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    code?: StringFieldUpdateOperationsInput | string | $Types.Skip
    user?: UserUncheckedUpdateManyWithoutSchoolNestedInput | $Types.Skip
  }

  export type SchoolCreateManyInput = {
    id?: number | $Types.Skip
    schoolname: string
    code: string
  }

  export type SchoolUpdateManyMutationInput = {
    schoolname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    code?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    schoolname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    code?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type NPOCreateInput = {
    nponame: string
    admin?: UserCreateNestedManyWithoutNpoInput | $Types.Skip
    opportunity?: OpportunityCreateNestedManyWithoutNpoInput | $Types.Skip
  }

  export type NPOUncheckedCreateInput = {
    id?: number | $Types.Skip
    nponame: string
    admin?: UserUncheckedCreateNestedManyWithoutNpoInput | $Types.Skip
    opportunity?: OpportunityUncheckedCreateNestedManyWithoutNpoInput | $Types.Skip
  }

  export type NPOUpdateInput = {
    nponame?: StringFieldUpdateOperationsInput | string | $Types.Skip
    admin?: UserUpdateManyWithoutNpoNestedInput | $Types.Skip
    opportunity?: OpportunityUpdateManyWithoutNpoNestedInput | $Types.Skip
  }

  export type NPOUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    nponame?: StringFieldUpdateOperationsInput | string | $Types.Skip
    admin?: UserUncheckedUpdateManyWithoutNpoNestedInput | $Types.Skip
    opportunity?: OpportunityUncheckedUpdateManyWithoutNpoNestedInput | $Types.Skip
  }

  export type NPOCreateManyInput = {
    id?: number | $Types.Skip
    nponame: string
  }

  export type NPOUpdateManyMutationInput = {
    nponame?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type NPOUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    nponame?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OpportunityCreateInput = {
    title: string
    description: string
    npo?: NPOCreateNestedManyWithoutOpportunityInput | $Types.Skip
    volunteer?: UserCreateNestedManyWithoutOpportunityInput | $Types.Skip
  }

  export type OpportunityUncheckedCreateInput = {
    id?: number | $Types.Skip
    title: string
    description: string
    npo?: NPOUncheckedCreateNestedManyWithoutOpportunityInput | $Types.Skip
    volunteer?: UserUncheckedCreateNestedManyWithoutOpportunityInput | $Types.Skip
  }

  export type OpportunityUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    npo?: NPOUpdateManyWithoutOpportunityNestedInput | $Types.Skip
    volunteer?: UserUpdateManyWithoutOpportunityNestedInput | $Types.Skip
  }

  export type OpportunityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    npo?: NPOUncheckedUpdateManyWithoutOpportunityNestedInput | $Types.Skip
    volunteer?: UserUncheckedUpdateManyWithoutOpportunityNestedInput | $Types.Skip
  }

  export type OpportunityCreateManyInput = {
    id?: number | $Types.Skip
    title: string
    description: string
  }

  export type OpportunityUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OpportunityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type SchoolListRelationFilter = {
    every?: SchoolWhereInput | $Types.Skip
    some?: SchoolWhereInput | $Types.Skip
    none?: SchoolWhereInput | $Types.Skip
  }

  export type NPOListRelationFilter = {
    every?: NPOWhereInput | $Types.Skip
    some?: NPOWhereInput | $Types.Skip
    none?: NPOWhereInput | $Types.Skip
  }

  export type OpportunityListRelationFilter = {
    every?: OpportunityWhereInput | $Types.Skip
    some?: OpportunityWhereInput | $Types.Skip
    none?: OpportunityWhereInput | $Types.Skip
  }

  export type SchoolOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type NPOOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type OpportunityOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput | $Types.Skip
    some?: UserWhereInput | $Types.Skip
    none?: UserWhereInput | $Types.Skip
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    schoolname?: SortOrder | $Types.Skip
    code?: SortOrder | $Types.Skip
  }

  export type SchoolAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    schoolname?: SortOrder | $Types.Skip
    code?: SortOrder | $Types.Skip
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    schoolname?: SortOrder | $Types.Skip
    code?: SortOrder | $Types.Skip
  }

  export type SchoolSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type NPOCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    nponame?: SortOrder | $Types.Skip
  }

  export type NPOAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type NPOMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    nponame?: SortOrder | $Types.Skip
  }

  export type NPOMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    nponame?: SortOrder | $Types.Skip
  }

  export type NPOSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type OpportunityCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
  }

  export type OpportunityAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type OpportunityMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
  }

  export type OpportunityMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
  }

  export type OpportunitySumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type SchoolCreateNestedManyWithoutUserInput = {
    create?: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput> | SchoolCreateWithoutUserInput[] | SchoolUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: SchoolCreateOrConnectWithoutUserInput | SchoolCreateOrConnectWithoutUserInput[] | $Types.Skip
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[] | $Types.Skip
  }

  export type NPOCreateNestedManyWithoutAdminInput = {
    create?: XOR<NPOCreateWithoutAdminInput, NPOUncheckedCreateWithoutAdminInput> | NPOCreateWithoutAdminInput[] | NPOUncheckedCreateWithoutAdminInput[] | $Types.Skip
    connectOrCreate?: NPOCreateOrConnectWithoutAdminInput | NPOCreateOrConnectWithoutAdminInput[] | $Types.Skip
    connect?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
  }

  export type OpportunityCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<OpportunityCreateWithoutVolunteerInput, OpportunityUncheckedCreateWithoutVolunteerInput> | OpportunityCreateWithoutVolunteerInput[] | OpportunityUncheckedCreateWithoutVolunteerInput[] | $Types.Skip
    connectOrCreate?: OpportunityCreateOrConnectWithoutVolunteerInput | OpportunityCreateOrConnectWithoutVolunteerInput[] | $Types.Skip
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
  }

  export type SchoolUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput> | SchoolCreateWithoutUserInput[] | SchoolUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: SchoolCreateOrConnectWithoutUserInput | SchoolCreateOrConnectWithoutUserInput[] | $Types.Skip
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[] | $Types.Skip
  }

  export type NPOUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<NPOCreateWithoutAdminInput, NPOUncheckedCreateWithoutAdminInput> | NPOCreateWithoutAdminInput[] | NPOUncheckedCreateWithoutAdminInput[] | $Types.Skip
    connectOrCreate?: NPOCreateOrConnectWithoutAdminInput | NPOCreateOrConnectWithoutAdminInput[] | $Types.Skip
    connect?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
  }

  export type OpportunityUncheckedCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<OpportunityCreateWithoutVolunteerInput, OpportunityUncheckedCreateWithoutVolunteerInput> | OpportunityCreateWithoutVolunteerInput[] | OpportunityUncheckedCreateWithoutVolunteerInput[] | $Types.Skip
    connectOrCreate?: OpportunityCreateOrConnectWithoutVolunteerInput | OpportunityCreateOrConnectWithoutVolunteerInput[] | $Types.Skip
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string | $Types.Skip
  }

  export type SchoolUpdateManyWithoutUserNestedInput = {
    create?: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput> | SchoolCreateWithoutUserInput[] | SchoolUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: SchoolCreateOrConnectWithoutUserInput | SchoolCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: SchoolUpsertWithWhereUniqueWithoutUserInput | SchoolUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    set?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[] | $Types.Skip
    disconnect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[] | $Types.Skip
    delete?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[] | $Types.Skip
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[] | $Types.Skip
    update?: SchoolUpdateWithWhereUniqueWithoutUserInput | SchoolUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: SchoolUpdateManyWithWhereWithoutUserInput | SchoolUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: SchoolScalarWhereInput | SchoolScalarWhereInput[] | $Types.Skip
  }

  export type NPOUpdateManyWithoutAdminNestedInput = {
    create?: XOR<NPOCreateWithoutAdminInput, NPOUncheckedCreateWithoutAdminInput> | NPOCreateWithoutAdminInput[] | NPOUncheckedCreateWithoutAdminInput[] | $Types.Skip
    connectOrCreate?: NPOCreateOrConnectWithoutAdminInput | NPOCreateOrConnectWithoutAdminInput[] | $Types.Skip
    upsert?: NPOUpsertWithWhereUniqueWithoutAdminInput | NPOUpsertWithWhereUniqueWithoutAdminInput[] | $Types.Skip
    set?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    disconnect?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    delete?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    connect?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    update?: NPOUpdateWithWhereUniqueWithoutAdminInput | NPOUpdateWithWhereUniqueWithoutAdminInput[] | $Types.Skip
    updateMany?: NPOUpdateManyWithWhereWithoutAdminInput | NPOUpdateManyWithWhereWithoutAdminInput[] | $Types.Skip
    deleteMany?: NPOScalarWhereInput | NPOScalarWhereInput[] | $Types.Skip
  }

  export type OpportunityUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<OpportunityCreateWithoutVolunteerInput, OpportunityUncheckedCreateWithoutVolunteerInput> | OpportunityCreateWithoutVolunteerInput[] | OpportunityUncheckedCreateWithoutVolunteerInput[] | $Types.Skip
    connectOrCreate?: OpportunityCreateOrConnectWithoutVolunteerInput | OpportunityCreateOrConnectWithoutVolunteerInput[] | $Types.Skip
    upsert?: OpportunityUpsertWithWhereUniqueWithoutVolunteerInput | OpportunityUpsertWithWhereUniqueWithoutVolunteerInput[] | $Types.Skip
    set?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    disconnect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    delete?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    update?: OpportunityUpdateWithWhereUniqueWithoutVolunteerInput | OpportunityUpdateWithWhereUniqueWithoutVolunteerInput[] | $Types.Skip
    updateMany?: OpportunityUpdateManyWithWhereWithoutVolunteerInput | OpportunityUpdateManyWithWhereWithoutVolunteerInput[] | $Types.Skip
    deleteMany?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[] | $Types.Skip
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type SchoolUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput> | SchoolCreateWithoutUserInput[] | SchoolUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: SchoolCreateOrConnectWithoutUserInput | SchoolCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: SchoolUpsertWithWhereUniqueWithoutUserInput | SchoolUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    set?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[] | $Types.Skip
    disconnect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[] | $Types.Skip
    delete?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[] | $Types.Skip
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[] | $Types.Skip
    update?: SchoolUpdateWithWhereUniqueWithoutUserInput | SchoolUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: SchoolUpdateManyWithWhereWithoutUserInput | SchoolUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: SchoolScalarWhereInput | SchoolScalarWhereInput[] | $Types.Skip
  }

  export type NPOUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<NPOCreateWithoutAdminInput, NPOUncheckedCreateWithoutAdminInput> | NPOCreateWithoutAdminInput[] | NPOUncheckedCreateWithoutAdminInput[] | $Types.Skip
    connectOrCreate?: NPOCreateOrConnectWithoutAdminInput | NPOCreateOrConnectWithoutAdminInput[] | $Types.Skip
    upsert?: NPOUpsertWithWhereUniqueWithoutAdminInput | NPOUpsertWithWhereUniqueWithoutAdminInput[] | $Types.Skip
    set?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    disconnect?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    delete?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    connect?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    update?: NPOUpdateWithWhereUniqueWithoutAdminInput | NPOUpdateWithWhereUniqueWithoutAdminInput[] | $Types.Skip
    updateMany?: NPOUpdateManyWithWhereWithoutAdminInput | NPOUpdateManyWithWhereWithoutAdminInput[] | $Types.Skip
    deleteMany?: NPOScalarWhereInput | NPOScalarWhereInput[] | $Types.Skip
  }

  export type OpportunityUncheckedUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<OpportunityCreateWithoutVolunteerInput, OpportunityUncheckedCreateWithoutVolunteerInput> | OpportunityCreateWithoutVolunteerInput[] | OpportunityUncheckedCreateWithoutVolunteerInput[] | $Types.Skip
    connectOrCreate?: OpportunityCreateOrConnectWithoutVolunteerInput | OpportunityCreateOrConnectWithoutVolunteerInput[] | $Types.Skip
    upsert?: OpportunityUpsertWithWhereUniqueWithoutVolunteerInput | OpportunityUpsertWithWhereUniqueWithoutVolunteerInput[] | $Types.Skip
    set?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    disconnect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    delete?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    update?: OpportunityUpdateWithWhereUniqueWithoutVolunteerInput | OpportunityUpdateWithWhereUniqueWithoutVolunteerInput[] | $Types.Skip
    updateMany?: OpportunityUpdateManyWithWhereWithoutVolunteerInput | OpportunityUpdateManyWithWhereWithoutVolunteerInput[] | $Types.Skip
    deleteMany?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[] | $Types.Skip
  }

  export type UserCreateNestedManyWithoutSchoolInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[] | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[] | $Types.Skip
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
  }

  export type UserUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[] | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[] | $Types.Skip
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
  }

  export type UserUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[] | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[] | $Types.Skip
    upsert?: UserUpsertWithWhereUniqueWithoutSchoolInput | UserUpsertWithWhereUniqueWithoutSchoolInput[] | $Types.Skip
    set?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    update?: UserUpdateWithWhereUniqueWithoutSchoolInput | UserUpdateWithWhereUniqueWithoutSchoolInput[] | $Types.Skip
    updateMany?: UserUpdateManyWithWhereWithoutSchoolInput | UserUpdateManyWithWhereWithoutSchoolInput[] | $Types.Skip
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[] | $Types.Skip
  }

  export type UserUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[] | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[] | $Types.Skip
    upsert?: UserUpsertWithWhereUniqueWithoutSchoolInput | UserUpsertWithWhereUniqueWithoutSchoolInput[] | $Types.Skip
    set?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    update?: UserUpdateWithWhereUniqueWithoutSchoolInput | UserUpdateWithWhereUniqueWithoutSchoolInput[] | $Types.Skip
    updateMany?: UserUpdateManyWithWhereWithoutSchoolInput | UserUpdateManyWithWhereWithoutSchoolInput[] | $Types.Skip
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[] | $Types.Skip
  }

  export type UserCreateNestedManyWithoutNpoInput = {
    create?: XOR<UserCreateWithoutNpoInput, UserUncheckedCreateWithoutNpoInput> | UserCreateWithoutNpoInput[] | UserUncheckedCreateWithoutNpoInput[] | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutNpoInput | UserCreateOrConnectWithoutNpoInput[] | $Types.Skip
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
  }

  export type OpportunityCreateNestedManyWithoutNpoInput = {
    create?: XOR<OpportunityCreateWithoutNpoInput, OpportunityUncheckedCreateWithoutNpoInput> | OpportunityCreateWithoutNpoInput[] | OpportunityUncheckedCreateWithoutNpoInput[] | $Types.Skip
    connectOrCreate?: OpportunityCreateOrConnectWithoutNpoInput | OpportunityCreateOrConnectWithoutNpoInput[] | $Types.Skip
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
  }

  export type UserUncheckedCreateNestedManyWithoutNpoInput = {
    create?: XOR<UserCreateWithoutNpoInput, UserUncheckedCreateWithoutNpoInput> | UserCreateWithoutNpoInput[] | UserUncheckedCreateWithoutNpoInput[] | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutNpoInput | UserCreateOrConnectWithoutNpoInput[] | $Types.Skip
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
  }

  export type OpportunityUncheckedCreateNestedManyWithoutNpoInput = {
    create?: XOR<OpportunityCreateWithoutNpoInput, OpportunityUncheckedCreateWithoutNpoInput> | OpportunityCreateWithoutNpoInput[] | OpportunityUncheckedCreateWithoutNpoInput[] | $Types.Skip
    connectOrCreate?: OpportunityCreateOrConnectWithoutNpoInput | OpportunityCreateOrConnectWithoutNpoInput[] | $Types.Skip
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
  }

  export type UserUpdateManyWithoutNpoNestedInput = {
    create?: XOR<UserCreateWithoutNpoInput, UserUncheckedCreateWithoutNpoInput> | UserCreateWithoutNpoInput[] | UserUncheckedCreateWithoutNpoInput[] | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutNpoInput | UserCreateOrConnectWithoutNpoInput[] | $Types.Skip
    upsert?: UserUpsertWithWhereUniqueWithoutNpoInput | UserUpsertWithWhereUniqueWithoutNpoInput[] | $Types.Skip
    set?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    update?: UserUpdateWithWhereUniqueWithoutNpoInput | UserUpdateWithWhereUniqueWithoutNpoInput[] | $Types.Skip
    updateMany?: UserUpdateManyWithWhereWithoutNpoInput | UserUpdateManyWithWhereWithoutNpoInput[] | $Types.Skip
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[] | $Types.Skip
  }

  export type OpportunityUpdateManyWithoutNpoNestedInput = {
    create?: XOR<OpportunityCreateWithoutNpoInput, OpportunityUncheckedCreateWithoutNpoInput> | OpportunityCreateWithoutNpoInput[] | OpportunityUncheckedCreateWithoutNpoInput[] | $Types.Skip
    connectOrCreate?: OpportunityCreateOrConnectWithoutNpoInput | OpportunityCreateOrConnectWithoutNpoInput[] | $Types.Skip
    upsert?: OpportunityUpsertWithWhereUniqueWithoutNpoInput | OpportunityUpsertWithWhereUniqueWithoutNpoInput[] | $Types.Skip
    set?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    disconnect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    delete?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    update?: OpportunityUpdateWithWhereUniqueWithoutNpoInput | OpportunityUpdateWithWhereUniqueWithoutNpoInput[] | $Types.Skip
    updateMany?: OpportunityUpdateManyWithWhereWithoutNpoInput | OpportunityUpdateManyWithWhereWithoutNpoInput[] | $Types.Skip
    deleteMany?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[] | $Types.Skip
  }

  export type UserUncheckedUpdateManyWithoutNpoNestedInput = {
    create?: XOR<UserCreateWithoutNpoInput, UserUncheckedCreateWithoutNpoInput> | UserCreateWithoutNpoInput[] | UserUncheckedCreateWithoutNpoInput[] | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutNpoInput | UserCreateOrConnectWithoutNpoInput[] | $Types.Skip
    upsert?: UserUpsertWithWhereUniqueWithoutNpoInput | UserUpsertWithWhereUniqueWithoutNpoInput[] | $Types.Skip
    set?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    update?: UserUpdateWithWhereUniqueWithoutNpoInput | UserUpdateWithWhereUniqueWithoutNpoInput[] | $Types.Skip
    updateMany?: UserUpdateManyWithWhereWithoutNpoInput | UserUpdateManyWithWhereWithoutNpoInput[] | $Types.Skip
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[] | $Types.Skip
  }

  export type OpportunityUncheckedUpdateManyWithoutNpoNestedInput = {
    create?: XOR<OpportunityCreateWithoutNpoInput, OpportunityUncheckedCreateWithoutNpoInput> | OpportunityCreateWithoutNpoInput[] | OpportunityUncheckedCreateWithoutNpoInput[] | $Types.Skip
    connectOrCreate?: OpportunityCreateOrConnectWithoutNpoInput | OpportunityCreateOrConnectWithoutNpoInput[] | $Types.Skip
    upsert?: OpportunityUpsertWithWhereUniqueWithoutNpoInput | OpportunityUpsertWithWhereUniqueWithoutNpoInput[] | $Types.Skip
    set?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    disconnect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    delete?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[] | $Types.Skip
    update?: OpportunityUpdateWithWhereUniqueWithoutNpoInput | OpportunityUpdateWithWhereUniqueWithoutNpoInput[] | $Types.Skip
    updateMany?: OpportunityUpdateManyWithWhereWithoutNpoInput | OpportunityUpdateManyWithWhereWithoutNpoInput[] | $Types.Skip
    deleteMany?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[] | $Types.Skip
  }

  export type NPOCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<NPOCreateWithoutOpportunityInput, NPOUncheckedCreateWithoutOpportunityInput> | NPOCreateWithoutOpportunityInput[] | NPOUncheckedCreateWithoutOpportunityInput[] | $Types.Skip
    connectOrCreate?: NPOCreateOrConnectWithoutOpportunityInput | NPOCreateOrConnectWithoutOpportunityInput[] | $Types.Skip
    connect?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
  }

  export type UserCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<UserCreateWithoutOpportunityInput, UserUncheckedCreateWithoutOpportunityInput> | UserCreateWithoutOpportunityInput[] | UserUncheckedCreateWithoutOpportunityInput[] | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutOpportunityInput | UserCreateOrConnectWithoutOpportunityInput[] | $Types.Skip
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
  }

  export type NPOUncheckedCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<NPOCreateWithoutOpportunityInput, NPOUncheckedCreateWithoutOpportunityInput> | NPOCreateWithoutOpportunityInput[] | NPOUncheckedCreateWithoutOpportunityInput[] | $Types.Skip
    connectOrCreate?: NPOCreateOrConnectWithoutOpportunityInput | NPOCreateOrConnectWithoutOpportunityInput[] | $Types.Skip
    connect?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
  }

  export type UserUncheckedCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<UserCreateWithoutOpportunityInput, UserUncheckedCreateWithoutOpportunityInput> | UserCreateWithoutOpportunityInput[] | UserUncheckedCreateWithoutOpportunityInput[] | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutOpportunityInput | UserCreateOrConnectWithoutOpportunityInput[] | $Types.Skip
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
  }

  export type NPOUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<NPOCreateWithoutOpportunityInput, NPOUncheckedCreateWithoutOpportunityInput> | NPOCreateWithoutOpportunityInput[] | NPOUncheckedCreateWithoutOpportunityInput[] | $Types.Skip
    connectOrCreate?: NPOCreateOrConnectWithoutOpportunityInput | NPOCreateOrConnectWithoutOpportunityInput[] | $Types.Skip
    upsert?: NPOUpsertWithWhereUniqueWithoutOpportunityInput | NPOUpsertWithWhereUniqueWithoutOpportunityInput[] | $Types.Skip
    set?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    disconnect?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    delete?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    connect?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    update?: NPOUpdateWithWhereUniqueWithoutOpportunityInput | NPOUpdateWithWhereUniqueWithoutOpportunityInput[] | $Types.Skip
    updateMany?: NPOUpdateManyWithWhereWithoutOpportunityInput | NPOUpdateManyWithWhereWithoutOpportunityInput[] | $Types.Skip
    deleteMany?: NPOScalarWhereInput | NPOScalarWhereInput[] | $Types.Skip
  }

  export type UserUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<UserCreateWithoutOpportunityInput, UserUncheckedCreateWithoutOpportunityInput> | UserCreateWithoutOpportunityInput[] | UserUncheckedCreateWithoutOpportunityInput[] | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutOpportunityInput | UserCreateOrConnectWithoutOpportunityInput[] | $Types.Skip
    upsert?: UserUpsertWithWhereUniqueWithoutOpportunityInput | UserUpsertWithWhereUniqueWithoutOpportunityInput[] | $Types.Skip
    set?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    update?: UserUpdateWithWhereUniqueWithoutOpportunityInput | UserUpdateWithWhereUniqueWithoutOpportunityInput[] | $Types.Skip
    updateMany?: UserUpdateManyWithWhereWithoutOpportunityInput | UserUpdateManyWithWhereWithoutOpportunityInput[] | $Types.Skip
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[] | $Types.Skip
  }

  export type NPOUncheckedUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<NPOCreateWithoutOpportunityInput, NPOUncheckedCreateWithoutOpportunityInput> | NPOCreateWithoutOpportunityInput[] | NPOUncheckedCreateWithoutOpportunityInput[] | $Types.Skip
    connectOrCreate?: NPOCreateOrConnectWithoutOpportunityInput | NPOCreateOrConnectWithoutOpportunityInput[] | $Types.Skip
    upsert?: NPOUpsertWithWhereUniqueWithoutOpportunityInput | NPOUpsertWithWhereUniqueWithoutOpportunityInput[] | $Types.Skip
    set?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    disconnect?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    delete?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    connect?: NPOWhereUniqueInput | NPOWhereUniqueInput[] | $Types.Skip
    update?: NPOUpdateWithWhereUniqueWithoutOpportunityInput | NPOUpdateWithWhereUniqueWithoutOpportunityInput[] | $Types.Skip
    updateMany?: NPOUpdateManyWithWhereWithoutOpportunityInput | NPOUpdateManyWithWhereWithoutOpportunityInput[] | $Types.Skip
    deleteMany?: NPOScalarWhereInput | NPOScalarWhereInput[] | $Types.Skip
  }

  export type UserUncheckedUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<UserCreateWithoutOpportunityInput, UserUncheckedCreateWithoutOpportunityInput> | UserCreateWithoutOpportunityInput[] | UserUncheckedCreateWithoutOpportunityInput[] | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutOpportunityInput | UserCreateOrConnectWithoutOpportunityInput[] | $Types.Skip
    upsert?: UserUpsertWithWhereUniqueWithoutOpportunityInput | UserUpsertWithWhereUniqueWithoutOpportunityInput[] | $Types.Skip
    set?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[] | $Types.Skip
    update?: UserUpdateWithWhereUniqueWithoutOpportunityInput | UserUpdateWithWhereUniqueWithoutOpportunityInput[] | $Types.Skip
    updateMany?: UserUpdateManyWithWhereWithoutOpportunityInput | UserUpdateManyWithWhereWithoutOpportunityInput[] | $Types.Skip
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[] | $Types.Skip
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type SchoolCreateWithoutUserInput = {
    schoolname: string
    code: string
  }

  export type SchoolUncheckedCreateWithoutUserInput = {
    id?: number | $Types.Skip
    schoolname: string
    code: string
  }

  export type SchoolCreateOrConnectWithoutUserInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput>
  }

  export type NPOCreateWithoutAdminInput = {
    nponame: string
    opportunity?: OpportunityCreateNestedManyWithoutNpoInput | $Types.Skip
  }

  export type NPOUncheckedCreateWithoutAdminInput = {
    id?: number | $Types.Skip
    nponame: string
    opportunity?: OpportunityUncheckedCreateNestedManyWithoutNpoInput | $Types.Skip
  }

  export type NPOCreateOrConnectWithoutAdminInput = {
    where: NPOWhereUniqueInput
    create: XOR<NPOCreateWithoutAdminInput, NPOUncheckedCreateWithoutAdminInput>
  }

  export type OpportunityCreateWithoutVolunteerInput = {
    title: string
    description: string
    npo?: NPOCreateNestedManyWithoutOpportunityInput | $Types.Skip
  }

  export type OpportunityUncheckedCreateWithoutVolunteerInput = {
    id?: number | $Types.Skip
    title: string
    description: string
    npo?: NPOUncheckedCreateNestedManyWithoutOpportunityInput | $Types.Skip
  }

  export type OpportunityCreateOrConnectWithoutVolunteerInput = {
    where: OpportunityWhereUniqueInput
    create: XOR<OpportunityCreateWithoutVolunteerInput, OpportunityUncheckedCreateWithoutVolunteerInput>
  }

  export type SchoolUpsertWithWhereUniqueWithoutUserInput = {
    where: SchoolWhereUniqueInput
    update: XOR<SchoolUpdateWithoutUserInput, SchoolUncheckedUpdateWithoutUserInput>
    create: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput>
  }

  export type SchoolUpdateWithWhereUniqueWithoutUserInput = {
    where: SchoolWhereUniqueInput
    data: XOR<SchoolUpdateWithoutUserInput, SchoolUncheckedUpdateWithoutUserInput>
  }

  export type SchoolUpdateManyWithWhereWithoutUserInput = {
    where: SchoolScalarWhereInput
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyWithoutUserInput>
  }

  export type SchoolScalarWhereInput = {
    AND?: SchoolScalarWhereInput | SchoolScalarWhereInput[] | $Types.Skip
    OR?: SchoolScalarWhereInput[] | $Types.Skip
    NOT?: SchoolScalarWhereInput | SchoolScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"School"> | number | $Types.Skip
    schoolname?: StringFilter<"School"> | string | $Types.Skip
    code?: StringFilter<"School"> | string | $Types.Skip
  }

  export type NPOUpsertWithWhereUniqueWithoutAdminInput = {
    where: NPOWhereUniqueInput
    update: XOR<NPOUpdateWithoutAdminInput, NPOUncheckedUpdateWithoutAdminInput>
    create: XOR<NPOCreateWithoutAdminInput, NPOUncheckedCreateWithoutAdminInput>
  }

  export type NPOUpdateWithWhereUniqueWithoutAdminInput = {
    where: NPOWhereUniqueInput
    data: XOR<NPOUpdateWithoutAdminInput, NPOUncheckedUpdateWithoutAdminInput>
  }

  export type NPOUpdateManyWithWhereWithoutAdminInput = {
    where: NPOScalarWhereInput
    data: XOR<NPOUpdateManyMutationInput, NPOUncheckedUpdateManyWithoutAdminInput>
  }

  export type NPOScalarWhereInput = {
    AND?: NPOScalarWhereInput | NPOScalarWhereInput[] | $Types.Skip
    OR?: NPOScalarWhereInput[] | $Types.Skip
    NOT?: NPOScalarWhereInput | NPOScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"NPO"> | number | $Types.Skip
    nponame?: StringFilter<"NPO"> | string | $Types.Skip
  }

  export type OpportunityUpsertWithWhereUniqueWithoutVolunteerInput = {
    where: OpportunityWhereUniqueInput
    update: XOR<OpportunityUpdateWithoutVolunteerInput, OpportunityUncheckedUpdateWithoutVolunteerInput>
    create: XOR<OpportunityCreateWithoutVolunteerInput, OpportunityUncheckedCreateWithoutVolunteerInput>
  }

  export type OpportunityUpdateWithWhereUniqueWithoutVolunteerInput = {
    where: OpportunityWhereUniqueInput
    data: XOR<OpportunityUpdateWithoutVolunteerInput, OpportunityUncheckedUpdateWithoutVolunteerInput>
  }

  export type OpportunityUpdateManyWithWhereWithoutVolunteerInput = {
    where: OpportunityScalarWhereInput
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyWithoutVolunteerInput>
  }

  export type OpportunityScalarWhereInput = {
    AND?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[] | $Types.Skip
    OR?: OpportunityScalarWhereInput[] | $Types.Skip
    NOT?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"Opportunity"> | number | $Types.Skip
    title?: StringFilter<"Opportunity"> | string | $Types.Skip
    description?: StringFilter<"Opportunity"> | string | $Types.Skip
  }

  export type UserCreateWithoutSchoolInput = {
    username: string
    password: string
    role: string
    npo?: NPOCreateNestedManyWithoutAdminInput | $Types.Skip
    opportunity?: OpportunityCreateNestedManyWithoutVolunteerInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutSchoolInput = {
    id?: number | $Types.Skip
    username: string
    password: string
    role: string
    npo?: NPOUncheckedCreateNestedManyWithoutAdminInput | $Types.Skip
    opportunity?: OpportunityUncheckedCreateNestedManyWithoutVolunteerInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutSchoolInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput>
  }

  export type UserUpsertWithWhereUniqueWithoutSchoolInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSchoolInput, UserUncheckedUpdateWithoutSchoolInput>
    create: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSchoolInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSchoolInput, UserUncheckedUpdateWithoutSchoolInput>
  }

  export type UserUpdateManyWithWhereWithoutSchoolInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSchoolInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[] | $Types.Skip
    OR?: UserScalarWhereInput[] | $Types.Skip
    NOT?: UserScalarWhereInput | UserScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"User"> | number | $Types.Skip
    username?: StringFilter<"User"> | string | $Types.Skip
    password?: StringFilter<"User"> | string | $Types.Skip
    role?: StringFilter<"User"> | string | $Types.Skip
  }

  export type UserCreateWithoutNpoInput = {
    username: string
    password: string
    role: string
    school?: SchoolCreateNestedManyWithoutUserInput | $Types.Skip
    opportunity?: OpportunityCreateNestedManyWithoutVolunteerInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutNpoInput = {
    id?: number | $Types.Skip
    username: string
    password: string
    role: string
    school?: SchoolUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    opportunity?: OpportunityUncheckedCreateNestedManyWithoutVolunteerInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutNpoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNpoInput, UserUncheckedCreateWithoutNpoInput>
  }

  export type OpportunityCreateWithoutNpoInput = {
    title: string
    description: string
    volunteer?: UserCreateNestedManyWithoutOpportunityInput | $Types.Skip
  }

  export type OpportunityUncheckedCreateWithoutNpoInput = {
    id?: number | $Types.Skip
    title: string
    description: string
    volunteer?: UserUncheckedCreateNestedManyWithoutOpportunityInput | $Types.Skip
  }

  export type OpportunityCreateOrConnectWithoutNpoInput = {
    where: OpportunityWhereUniqueInput
    create: XOR<OpportunityCreateWithoutNpoInput, OpportunityUncheckedCreateWithoutNpoInput>
  }

  export type UserUpsertWithWhereUniqueWithoutNpoInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutNpoInput, UserUncheckedUpdateWithoutNpoInput>
    create: XOR<UserCreateWithoutNpoInput, UserUncheckedCreateWithoutNpoInput>
  }

  export type UserUpdateWithWhereUniqueWithoutNpoInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutNpoInput, UserUncheckedUpdateWithoutNpoInput>
  }

  export type UserUpdateManyWithWhereWithoutNpoInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutNpoInput>
  }

  export type OpportunityUpsertWithWhereUniqueWithoutNpoInput = {
    where: OpportunityWhereUniqueInput
    update: XOR<OpportunityUpdateWithoutNpoInput, OpportunityUncheckedUpdateWithoutNpoInput>
    create: XOR<OpportunityCreateWithoutNpoInput, OpportunityUncheckedCreateWithoutNpoInput>
  }

  export type OpportunityUpdateWithWhereUniqueWithoutNpoInput = {
    where: OpportunityWhereUniqueInput
    data: XOR<OpportunityUpdateWithoutNpoInput, OpportunityUncheckedUpdateWithoutNpoInput>
  }

  export type OpportunityUpdateManyWithWhereWithoutNpoInput = {
    where: OpportunityScalarWhereInput
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyWithoutNpoInput>
  }

  export type NPOCreateWithoutOpportunityInput = {
    nponame: string
    admin?: UserCreateNestedManyWithoutNpoInput | $Types.Skip
  }

  export type NPOUncheckedCreateWithoutOpportunityInput = {
    id?: number | $Types.Skip
    nponame: string
    admin?: UserUncheckedCreateNestedManyWithoutNpoInput | $Types.Skip
  }

  export type NPOCreateOrConnectWithoutOpportunityInput = {
    where: NPOWhereUniqueInput
    create: XOR<NPOCreateWithoutOpportunityInput, NPOUncheckedCreateWithoutOpportunityInput>
  }

  export type UserCreateWithoutOpportunityInput = {
    username: string
    password: string
    role: string
    school?: SchoolCreateNestedManyWithoutUserInput | $Types.Skip
    npo?: NPOCreateNestedManyWithoutAdminInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutOpportunityInput = {
    id?: number | $Types.Skip
    username: string
    password: string
    role: string
    school?: SchoolUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    npo?: NPOUncheckedCreateNestedManyWithoutAdminInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutOpportunityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOpportunityInput, UserUncheckedCreateWithoutOpportunityInput>
  }

  export type NPOUpsertWithWhereUniqueWithoutOpportunityInput = {
    where: NPOWhereUniqueInput
    update: XOR<NPOUpdateWithoutOpportunityInput, NPOUncheckedUpdateWithoutOpportunityInput>
    create: XOR<NPOCreateWithoutOpportunityInput, NPOUncheckedCreateWithoutOpportunityInput>
  }

  export type NPOUpdateWithWhereUniqueWithoutOpportunityInput = {
    where: NPOWhereUniqueInput
    data: XOR<NPOUpdateWithoutOpportunityInput, NPOUncheckedUpdateWithoutOpportunityInput>
  }

  export type NPOUpdateManyWithWhereWithoutOpportunityInput = {
    where: NPOScalarWhereInput
    data: XOR<NPOUpdateManyMutationInput, NPOUncheckedUpdateManyWithoutOpportunityInput>
  }

  export type UserUpsertWithWhereUniqueWithoutOpportunityInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOpportunityInput, UserUncheckedUpdateWithoutOpportunityInput>
    create: XOR<UserCreateWithoutOpportunityInput, UserUncheckedCreateWithoutOpportunityInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOpportunityInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOpportunityInput, UserUncheckedUpdateWithoutOpportunityInput>
  }

  export type UserUpdateManyWithWhereWithoutOpportunityInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOpportunityInput>
  }

  export type SchoolUpdateWithoutUserInput = {
    schoolname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    code?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type SchoolUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    schoolname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    code?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type SchoolUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    schoolname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    code?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type NPOUpdateWithoutAdminInput = {
    nponame?: StringFieldUpdateOperationsInput | string | $Types.Skip
    opportunity?: OpportunityUpdateManyWithoutNpoNestedInput | $Types.Skip
  }

  export type NPOUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    nponame?: StringFieldUpdateOperationsInput | string | $Types.Skip
    opportunity?: OpportunityUncheckedUpdateManyWithoutNpoNestedInput | $Types.Skip
  }

  export type NPOUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    nponame?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OpportunityUpdateWithoutVolunteerInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    npo?: NPOUpdateManyWithoutOpportunityNestedInput | $Types.Skip
  }

  export type OpportunityUncheckedUpdateWithoutVolunteerInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    npo?: NPOUncheckedUpdateManyWithoutOpportunityNestedInput | $Types.Skip
  }

  export type OpportunityUncheckedUpdateManyWithoutVolunteerInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UserUpdateWithoutSchoolInput = {
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: StringFieldUpdateOperationsInput | string | $Types.Skip
    npo?: NPOUpdateManyWithoutAdminNestedInput | $Types.Skip
    opportunity?: OpportunityUpdateManyWithoutVolunteerNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: StringFieldUpdateOperationsInput | string | $Types.Skip
    npo?: NPOUncheckedUpdateManyWithoutAdminNestedInput | $Types.Skip
    opportunity?: OpportunityUncheckedUpdateManyWithoutVolunteerNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UserUpdateWithoutNpoInput = {
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: StringFieldUpdateOperationsInput | string | $Types.Skip
    school?: SchoolUpdateManyWithoutUserNestedInput | $Types.Skip
    opportunity?: OpportunityUpdateManyWithoutVolunteerNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutNpoInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: StringFieldUpdateOperationsInput | string | $Types.Skip
    school?: SchoolUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    opportunity?: OpportunityUncheckedUpdateManyWithoutVolunteerNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateManyWithoutNpoInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OpportunityUpdateWithoutNpoInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    volunteer?: UserUpdateManyWithoutOpportunityNestedInput | $Types.Skip
  }

  export type OpportunityUncheckedUpdateWithoutNpoInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    volunteer?: UserUncheckedUpdateManyWithoutOpportunityNestedInput | $Types.Skip
  }

  export type OpportunityUncheckedUpdateManyWithoutNpoInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type NPOUpdateWithoutOpportunityInput = {
    nponame?: StringFieldUpdateOperationsInput | string | $Types.Skip
    admin?: UserUpdateManyWithoutNpoNestedInput | $Types.Skip
  }

  export type NPOUncheckedUpdateWithoutOpportunityInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    nponame?: StringFieldUpdateOperationsInput | string | $Types.Skip
    admin?: UserUncheckedUpdateManyWithoutNpoNestedInput | $Types.Skip
  }

  export type NPOUncheckedUpdateManyWithoutOpportunityInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    nponame?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UserUpdateWithoutOpportunityInput = {
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: StringFieldUpdateOperationsInput | string | $Types.Skip
    school?: SchoolUpdateManyWithoutUserNestedInput | $Types.Skip
    npo?: NPOUpdateManyWithoutAdminNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutOpportunityInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: StringFieldUpdateOperationsInput | string | $Types.Skip
    school?: SchoolUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    npo?: NPOUncheckedUpdateManyWithoutAdminNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateManyWithoutOpportunityInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: StringFieldUpdateOperationsInput | string | $Types.Skip
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