
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
 * Model profiles
 * 
 */
export type profiles = $Result.DefaultSelection<Prisma.$profilesPayload>
/**
 * Model posts
 * 
 */
export type posts = $Result.DefaultSelection<Prisma.$postsPayload>
/**
 * Model communities
 * 
 */
export type communities = $Result.DefaultSelection<Prisma.$communitiesPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model community_user
 * 
 */
export type community_user = $Result.DefaultSelection<Prisma.$community_userPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Permission: {
  DEFAULT: 'DEFAULT',
  READONLY: 'READONLY',
  SUSPENDED: 'SUSPENDED'
};

export type Permission = (typeof Permission)[keyof typeof Permission]


export const MediaType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  EXTERNAL_LINK: 'EXTERNAL_LINK'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]


export const Visibility: {
  PUBLIC: 'PUBLIC',
  RESTRICTED: 'RESTRICTED',
  PRIVATE: 'PRIVATE',
  CACHED: 'CACHED'
};

export type Visibility = (typeof Visibility)[keyof typeof Visibility]


export const Role: {
  OWNER: 'OWNER',
  MODERATOR: 'MODERATOR',
  MEMBER: 'MEMBER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const NotificationPreference: {
  OFF: 'OFF',
  LOW: 'LOW',
  FREQUENT: 'FREQUENT'
};

export type NotificationPreference = (typeof NotificationPreference)[keyof typeof NotificationPreference]

}

export type Permission = $Enums.Permission

export const Permission: typeof $Enums.Permission

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

export type Visibility = $Enums.Visibility

export const Visibility: typeof $Enums.Visibility

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type NotificationPreference = $Enums.NotificationPreference

export const NotificationPreference: typeof $Enums.NotificationPreference

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profiles.findMany()
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
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profiles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.profiles`: Exposes CRUD operations for the **profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communities`: Exposes CRUD operations for the **communities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.communities.findMany()
    * ```
    */
  get communities(): Prisma.communitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.community_user`: Exposes CRUD operations for the **community_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Community_users
    * const community_users = await prisma.community_user.findMany()
    * ```
    */
  get community_user(): Prisma.community_userDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    profiles: 'profiles',
    posts: 'posts',
    communities: 'communities',
    comments: 'comments',
    community_user: 'community_user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "profiles" | "posts" | "communities" | "comments" | "community_user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      profiles: {
        payload: Prisma.$profilesPayload<ExtArgs>
        fields: Prisma.profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findFirst: {
            args: Prisma.profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findMany: {
            args: Prisma.profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          create: {
            args: Prisma.profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          createMany: {
            args: Prisma.profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          delete: {
            args: Prisma.profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          update: {
            args: Prisma.profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          deleteMany: {
            args: Prisma.profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          upsert: {
            args: Prisma.profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.profilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      posts: {
        payload: Prisma.$postsPayload<ExtArgs>
        fields: Prisma.postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findFirst: {
            args: Prisma.postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findMany: {
            args: Prisma.postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          create: {
            args: Prisma.postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          createMany: {
            args: Prisma.postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.postsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          delete: {
            args: Prisma.postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          update: {
            args: Prisma.postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          deleteMany: {
            args: Prisma.postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.postsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          upsert: {
            args: Prisma.postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.postsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      communities: {
        payload: Prisma.$communitiesPayload<ExtArgs>
        fields: Prisma.communitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.communitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.communitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>
          }
          findFirst: {
            args: Prisma.communitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.communitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>
          }
          findMany: {
            args: Prisma.communitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>[]
          }
          create: {
            args: Prisma.communitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>
          }
          createMany: {
            args: Prisma.communitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.communitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>[]
          }
          delete: {
            args: Prisma.communitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>
          }
          update: {
            args: Prisma.communitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>
          }
          deleteMany: {
            args: Prisma.communitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.communitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.communitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>[]
          }
          upsert: {
            args: Prisma.communitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>
          }
          aggregate: {
            args: Prisma.CommunitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunities>
          }
          groupBy: {
            args: Prisma.communitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.communitiesCountArgs<ExtArgs>
            result: $Utils.Optional<CommunitiesCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      community_user: {
        payload: Prisma.$community_userPayload<ExtArgs>
        fields: Prisma.community_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.community_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.community_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_userPayload>
          }
          findFirst: {
            args: Prisma.community_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.community_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_userPayload>
          }
          findMany: {
            args: Prisma.community_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_userPayload>[]
          }
          create: {
            args: Prisma.community_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_userPayload>
          }
          createMany: {
            args: Prisma.community_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.community_userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_userPayload>[]
          }
          delete: {
            args: Prisma.community_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_userPayload>
          }
          update: {
            args: Prisma.community_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_userPayload>
          }
          deleteMany: {
            args: Prisma.community_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.community_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.community_userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_userPayload>[]
          }
          upsert: {
            args: Prisma.community_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_userPayload>
          }
          aggregate: {
            args: Prisma.Community_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity_user>
          }
          groupBy: {
            args: Prisma.community_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Community_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.community_userCountArgs<ExtArgs>
            result: $Utils.Optional<Community_userCountAggregateOutputType> | number
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
    profiles?: profilesOmit
    posts?: postsOmit
    communities?: communitiesOmit
    comments?: commentsOmit
    community_user?: community_userOmit
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
   * Models
   */

  /**
   * Model profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: string | null
    avatar: string | null
    bio: string | null
    display_name: string | null
    gender: string | null
    location: string | null
    permission: $Enums.Permission | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: string | null
    avatar: string | null
    bio: string | null
    display_name: string | null
    gender: string | null
    location: string | null
    permission: $Enums.Permission | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    blocked_users: number
    blocked_communities: number
    avatar: number
    bio: number
    display_name: number
    gender: number
    location: number
    permission: number
    saved_posts: number
    upvoted_posts: number
    downvoted_posts: number
    _all: number
  }


  export type ProfilesMinAggregateInputType = {
    id?: true
    avatar?: true
    bio?: true
    display_name?: true
    gender?: true
    location?: true
    permission?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    avatar?: true
    bio?: true
    display_name?: true
    gender?: true
    location?: true
    permission?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    blocked_users?: true
    blocked_communities?: true
    avatar?: true
    bio?: true
    display_name?: true
    gender?: true
    location?: true
    permission?: true
    saved_posts?: true
    upvoted_posts?: true
    downvoted_posts?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to aggregate.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profilesWhereInput
    orderBy?: profilesOrderByWithAggregationInput | profilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    id: string
    blocked_users: string[]
    blocked_communities: string[]
    avatar: string | null
    bio: string | null
    display_name: string | null
    gender: string | null
    location: string | null
    permission: $Enums.Permission
    saved_posts: string[]
    upvoted_posts: string[]
    downvoted_posts: string[]
    _count: ProfilesCountAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blocked_users?: boolean
    blocked_communities?: boolean
    avatar?: boolean
    bio?: boolean
    display_name?: boolean
    gender?: boolean
    location?: boolean
    permission?: boolean
    saved_posts?: boolean
    upvoted_posts?: boolean
    downvoted_posts?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blocked_users?: boolean
    blocked_communities?: boolean
    avatar?: boolean
    bio?: boolean
    display_name?: boolean
    gender?: boolean
    location?: boolean
    permission?: boolean
    saved_posts?: boolean
    upvoted_posts?: boolean
    downvoted_posts?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blocked_users?: boolean
    blocked_communities?: boolean
    avatar?: boolean
    bio?: boolean
    display_name?: boolean
    gender?: boolean
    location?: boolean
    permission?: boolean
    saved_posts?: boolean
    upvoted_posts?: boolean
    downvoted_posts?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectScalar = {
    id?: boolean
    blocked_users?: boolean
    blocked_communities?: boolean
    avatar?: boolean
    bio?: boolean
    display_name?: boolean
    gender?: boolean
    location?: boolean
    permission?: boolean
    saved_posts?: boolean
    upvoted_posts?: boolean
    downvoted_posts?: boolean
  }

  export type profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blocked_users" | "blocked_communities" | "avatar" | "bio" | "display_name" | "gender" | "location" | "permission" | "saved_posts" | "upvoted_posts" | "downvoted_posts", ExtArgs["result"]["profiles"]>

  export type $profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profiles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blocked_users: string[]
      blocked_communities: string[]
      avatar: string | null
      bio: string | null
      display_name: string | null
      gender: string | null
      location: string | null
      permission: $Enums.Permission
      saved_posts: string[]
      upvoted_posts: string[]
      downvoted_posts: string[]
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type profilesGetPayload<S extends boolean | null | undefined | profilesDefaultArgs> = $Result.GetResult<Prisma.$profilesPayload, S>

  type profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profiles'], meta: { name: 'profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {profilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profilesFindUniqueArgs>(args: SelectSubset<T, profilesFindUniqueArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profilesFindFirstArgs>(args?: SelectSubset<T, profilesFindFirstArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends profilesFindManyArgs>(args?: SelectSubset<T, profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Profiles.
     * @param {profilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends profilesCreateArgs>(args: SelectSubset<T, profilesCreateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Profiles.
     * @param {profilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profilesCreateManyArgs>(args?: SelectSubset<T, profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {profilesCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Profiles.
     * @param {profilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends profilesDeleteArgs>(args: SelectSubset<T, profilesDeleteArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Profiles.
     * @param {profilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profilesUpdateArgs>(args: SelectSubset<T, profilesUpdateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Profiles.
     * @param {profilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profilesDeleteManyArgs>(args?: SelectSubset<T, profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profilesUpdateManyArgs>(args: SelectSubset<T, profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {profilesUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.updateManyAndReturn({
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
    updateManyAndReturn<T extends profilesUpdateManyAndReturnArgs>(args: SelectSubset<T, profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Profiles.
     * @param {profilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends profilesUpsertArgs>(args: SelectSubset<T, profilesUpsertArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profilesCountArgs>(
      args?: Subset<T, profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesGroupByArgs} args - Group by arguments.
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
      T extends profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profilesGroupByArgs['orderBy'] }
        : { orderBy?: profilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profiles model
   */
  readonly fields: profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the profiles model
   */ 
  interface profilesFieldRefs {
    readonly id: FieldRef<"profiles", 'String'>
    readonly blocked_users: FieldRef<"profiles", 'String[]'>
    readonly blocked_communities: FieldRef<"profiles", 'String[]'>
    readonly avatar: FieldRef<"profiles", 'String'>
    readonly bio: FieldRef<"profiles", 'String'>
    readonly display_name: FieldRef<"profiles", 'String'>
    readonly gender: FieldRef<"profiles", 'String'>
    readonly location: FieldRef<"profiles", 'String'>
    readonly permission: FieldRef<"profiles", 'Permission'>
    readonly saved_posts: FieldRef<"profiles", 'String[]'>
    readonly upvoted_posts: FieldRef<"profiles", 'String[]'>
    readonly downvoted_posts: FieldRef<"profiles", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * profiles findUnique
   */
  export type profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findUniqueOrThrow
   */
  export type profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findFirst
   */
  export type profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findFirstOrThrow
   */
  export type profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findMany
   */
  export type profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles create
   */
  export type profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data needed to create a profiles.
     */
    data?: XOR<profilesCreateInput, profilesUncheckedCreateInput>
  }

  /**
   * profiles createMany
   */
  export type profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profiles createManyAndReturn
   */
  export type profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profiles update
   */
  export type profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data needed to update a profiles.
     */
    data: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
    /**
     * Choose, which profiles to update.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles updateMany
   */
  export type profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
  }

  /**
   * profiles updateManyAndReturn
   */
  export type profilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
  }

  /**
   * profiles upsert
   */
  export type profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The filter to search for the profiles to update in case it exists.
     */
    where: profilesWhereUniqueInput
    /**
     * In case the profiles found by the `where` argument doesn't exist, create a new profiles with this data.
     */
    create: XOR<profilesCreateInput, profilesUncheckedCreateInput>
    /**
     * In case the profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
  }

  /**
   * profiles delete
   */
  export type profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Filter which profiles to delete.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles deleteMany
   */
  export type profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to delete
     */
    where?: profilesWhereInput
  }

  /**
   * profiles without action
   */
  export type profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
  }


  /**
   * Model posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    upvotes: number | null
    downvotes: number | null
  }

  export type PostsSumAggregateOutputType = {
    upvotes: number | null
    downvotes: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    content: string | null
    mediaType: $Enums.MediaType | null
    upvotes: number | null
    downvotes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    content: string | null
    mediaType: $Enums.MediaType | null
    upvotes: number | null
    downvotes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    user_id: number
    hashtags: number
    content: number
    mediaType: number
    mediaUrls: number
    upvotes: number
    downvotes: number
    createdAt: number
    updatedAt: number
    comments_id: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    upvotes?: true
    downvotes?: true
  }

  export type PostsSumAggregateInputType = {
    upvotes?: true
    downvotes?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    user_id?: true
    content?: true
    mediaType?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    user_id?: true
    content?: true
    mediaType?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    user_id?: true
    hashtags?: true
    content?: true
    mediaType?: true
    mediaUrls?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
    comments_id?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to aggregate.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
    orderBy?: postsOrderByWithAggregationInput | postsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: string
    user_id: string
    hashtags: string[]
    content: string
    mediaType: $Enums.MediaType
    mediaUrls: string[]
    upvotes: number
    downvotes: number
    createdAt: Date
    updatedAt: Date
    comments_id: string[]
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    hashtags?: boolean
    content?: boolean
    mediaType?: boolean
    mediaUrls?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comments_id?: boolean
  }, ExtArgs["result"]["posts"]>

  export type postsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    hashtags?: boolean
    content?: boolean
    mediaType?: boolean
    mediaUrls?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comments_id?: boolean
  }, ExtArgs["result"]["posts"]>

  export type postsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    hashtags?: boolean
    content?: boolean
    mediaType?: boolean
    mediaUrls?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comments_id?: boolean
  }, ExtArgs["result"]["posts"]>

  export type postsSelectScalar = {
    id?: boolean
    user_id?: boolean
    hashtags?: boolean
    content?: boolean
    mediaType?: boolean
    mediaUrls?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comments_id?: boolean
  }

  export type postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "hashtags" | "content" | "mediaType" | "mediaUrls" | "upvotes" | "downvotes" | "createdAt" | "updatedAt" | "comments_id", ExtArgs["result"]["posts"]>

  export type $postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      hashtags: string[]
      content: string
      mediaType: $Enums.MediaType
      mediaUrls: string[]
      upvotes: number
      downvotes: number
      createdAt: Date
      updatedAt: Date
      comments_id: string[]
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = $Result.GetResult<Prisma.$postsPayload, S>

  type postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts'], meta: { name: 'posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postsFindUniqueArgs>(args: SelectSubset<T, postsFindUniqueArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs>(args: SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postsFindFirstArgs>(args?: SelectSubset<T, postsFindFirstArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs>(args?: SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends postsFindManyArgs>(args?: SelectSubset<T, postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends postsCreateArgs>(args: SelectSubset<T, postsCreateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Posts.
     * @param {postsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postsCreateManyArgs>(args?: SelectSubset<T, postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {postsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends postsCreateManyAndReturnArgs>(args?: SelectSubset<T, postsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends postsDeleteArgs>(args: SelectSubset<T, postsDeleteArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postsUpdateArgs>(args: SelectSubset<T, postsUpdateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postsDeleteManyArgs>(args?: SelectSubset<T, postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postsUpdateManyArgs>(args: SelectSubset<T, postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {postsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
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
    updateManyAndReturn<T extends postsUpdateManyAndReturnArgs>(args: SelectSubset<T, postsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends postsUpsertArgs>(args: SelectSubset<T, postsUpsertArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsGroupByArgs} args - Group by arguments.
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
      T extends postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postsGroupByArgs['orderBy'] }
        : { orderBy?: postsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts model
   */
  readonly fields: postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the posts model
   */ 
  interface postsFieldRefs {
    readonly id: FieldRef<"posts", 'String'>
    readonly user_id: FieldRef<"posts", 'String'>
    readonly hashtags: FieldRef<"posts", 'String[]'>
    readonly content: FieldRef<"posts", 'String'>
    readonly mediaType: FieldRef<"posts", 'MediaType'>
    readonly mediaUrls: FieldRef<"posts", 'String[]'>
    readonly upvotes: FieldRef<"posts", 'Int'>
    readonly downvotes: FieldRef<"posts", 'Int'>
    readonly createdAt: FieldRef<"posts", 'DateTime'>
    readonly updatedAt: FieldRef<"posts", 'DateTime'>
    readonly comments_id: FieldRef<"posts", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findUniqueOrThrow
   */
  export type postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findFirst
   */
  export type postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findFirstOrThrow
   */
  export type postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findMany
   */
  export type postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts create
   */
  export type postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data needed to create a posts.
     */
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }

  /**
   * posts createMany
   */
  export type postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts createManyAndReturn
   */
  export type postsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts update
   */
  export type postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data needed to update a posts.
     */
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
  }

  /**
   * posts updateManyAndReturn
   */
  export type postsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
  }

  /**
   * posts upsert
   */
  export type postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The filter to search for the posts to update in case it exists.
     */
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     */
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }

  /**
   * posts delete
   */
  export type postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Filter which posts to delete.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postsWhereInput
  }

  /**
   * posts without action
   */
  export type postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
  }


  /**
   * Model communities
   */

  export type AggregateCommunities = {
    _count: CommunitiesCountAggregateOutputType | null
    _min: CommunitiesMinAggregateOutputType | null
    _max: CommunitiesMaxAggregateOutputType | null
  }

  export type CommunitiesMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    banner: string | null
    visibility: $Enums.Visibility | null
  }

  export type CommunitiesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    banner: string | null
    visibility: $Enums.Visibility | null
  }

  export type CommunitiesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    banner: number
    visibility: number
    rules: number
    pinned_posts: number
    topics: number
    _all: number
  }


  export type CommunitiesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    banner?: true
    visibility?: true
  }

  export type CommunitiesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    banner?: true
    visibility?: true
  }

  export type CommunitiesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    banner?: true
    visibility?: true
    rules?: true
    pinned_posts?: true
    topics?: true
    _all?: true
  }

  export type CommunitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which communities to aggregate.
     */
    where?: communitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communities to fetch.
     */
    orderBy?: communitiesOrderByWithRelationInput | communitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: communitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned communities
    **/
    _count?: true | CommunitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunitiesMaxAggregateInputType
  }

  export type GetCommunitiesAggregateType<T extends CommunitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunities[P]>
      : GetScalarType<T[P], AggregateCommunities[P]>
  }




  export type communitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: communitiesWhereInput
    orderBy?: communitiesOrderByWithAggregationInput | communitiesOrderByWithAggregationInput[]
    by: CommunitiesScalarFieldEnum[] | CommunitiesScalarFieldEnum
    having?: communitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunitiesCountAggregateInputType | true
    _min?: CommunitiesMinAggregateInputType
    _max?: CommunitiesMaxAggregateInputType
  }

  export type CommunitiesGroupByOutputType = {
    id: string
    name: string
    description: string
    icon: string | null
    banner: string | null
    visibility: $Enums.Visibility
    rules: JsonValue
    pinned_posts: string[]
    topics: string[]
    _count: CommunitiesCountAggregateOutputType | null
    _min: CommunitiesMinAggregateOutputType | null
    _max: CommunitiesMaxAggregateOutputType | null
  }

  type GetCommunitiesGroupByPayload<T extends communitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunitiesGroupByOutputType[P]>
            : GetScalarType<T[P], CommunitiesGroupByOutputType[P]>
        }
      >
    >


  export type communitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    banner?: boolean
    visibility?: boolean
    rules?: boolean
    pinned_posts?: boolean
    topics?: boolean
  }, ExtArgs["result"]["communities"]>

  export type communitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    banner?: boolean
    visibility?: boolean
    rules?: boolean
    pinned_posts?: boolean
    topics?: boolean
  }, ExtArgs["result"]["communities"]>

  export type communitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    banner?: boolean
    visibility?: boolean
    rules?: boolean
    pinned_posts?: boolean
    topics?: boolean
  }, ExtArgs["result"]["communities"]>

  export type communitiesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    banner?: boolean
    visibility?: boolean
    rules?: boolean
    pinned_posts?: boolean
    topics?: boolean
  }

  export type communitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "icon" | "banner" | "visibility" | "rules" | "pinned_posts" | "topics", ExtArgs["result"]["communities"]>

  export type $communitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "communities"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      icon: string | null
      banner: string | null
      visibility: $Enums.Visibility
      rules: Prisma.JsonValue
      pinned_posts: string[]
      topics: string[]
    }, ExtArgs["result"]["communities"]>
    composites: {}
  }

  type communitiesGetPayload<S extends boolean | null | undefined | communitiesDefaultArgs> = $Result.GetResult<Prisma.$communitiesPayload, S>

  type communitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<communitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunitiesCountAggregateInputType | true
    }

  export interface communitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['communities'], meta: { name: 'communities' } }
    /**
     * Find zero or one Communities that matches the filter.
     * @param {communitiesFindUniqueArgs} args - Arguments to find a Communities
     * @example
     * // Get one Communities
     * const communities = await prisma.communities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends communitiesFindUniqueArgs>(args: SelectSubset<T, communitiesFindUniqueArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Communities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {communitiesFindUniqueOrThrowArgs} args - Arguments to find a Communities
     * @example
     * // Get one Communities
     * const communities = await prisma.communities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends communitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, communitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communitiesFindFirstArgs} args - Arguments to find a Communities
     * @example
     * // Get one Communities
     * const communities = await prisma.communities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends communitiesFindFirstArgs>(args?: SelectSubset<T, communitiesFindFirstArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Communities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communitiesFindFirstOrThrowArgs} args - Arguments to find a Communities
     * @example
     * // Get one Communities
     * const communities = await prisma.communities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends communitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, communitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.communities.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.communities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communitiesWithIdOnly = await prisma.communities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends communitiesFindManyArgs>(args?: SelectSubset<T, communitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Communities.
     * @param {communitiesCreateArgs} args - Arguments to create a Communities.
     * @example
     * // Create one Communities
     * const Communities = await prisma.communities.create({
     *   data: {
     *     // ... data to create a Communities
     *   }
     * })
     * 
     */
    create<T extends communitiesCreateArgs>(args: SelectSubset<T, communitiesCreateArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Communities.
     * @param {communitiesCreateManyArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const communities = await prisma.communities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends communitiesCreateManyArgs>(args?: SelectSubset<T, communitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communities and returns the data saved in the database.
     * @param {communitiesCreateManyAndReturnArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const communities = await prisma.communities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communities and only return the `id`
     * const communitiesWithIdOnly = await prisma.communities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends communitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, communitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Communities.
     * @param {communitiesDeleteArgs} args - Arguments to delete one Communities.
     * @example
     * // Delete one Communities
     * const Communities = await prisma.communities.delete({
     *   where: {
     *     // ... filter to delete one Communities
     *   }
     * })
     * 
     */
    delete<T extends communitiesDeleteArgs>(args: SelectSubset<T, communitiesDeleteArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Communities.
     * @param {communitiesUpdateArgs} args - Arguments to update one Communities.
     * @example
     * // Update one Communities
     * const communities = await prisma.communities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends communitiesUpdateArgs>(args: SelectSubset<T, communitiesUpdateArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Communities.
     * @param {communitiesDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.communities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends communitiesDeleteManyArgs>(args?: SelectSubset<T, communitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const communities = await prisma.communities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends communitiesUpdateManyArgs>(args: SelectSubset<T, communitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities and returns the data updated in the database.
     * @param {communitiesUpdateManyAndReturnArgs} args - Arguments to update many Communities.
     * @example
     * // Update many Communities
     * const communities = await prisma.communities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Communities and only return the `id`
     * const communitiesWithIdOnly = await prisma.communities.updateManyAndReturn({
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
    updateManyAndReturn<T extends communitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, communitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Communities.
     * @param {communitiesUpsertArgs} args - Arguments to update or create a Communities.
     * @example
     * // Update or create a Communities
     * const communities = await prisma.communities.upsert({
     *   create: {
     *     // ... data to create a Communities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Communities we want to update
     *   }
     * })
     */
    upsert<T extends communitiesUpsertArgs>(args: SelectSubset<T, communitiesUpsertArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communitiesCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.communities.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends communitiesCountArgs>(
      args?: Subset<T, communitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunitiesAggregateArgs>(args: Subset<T, CommunitiesAggregateArgs>): Prisma.PrismaPromise<GetCommunitiesAggregateType<T>>

    /**
     * Group by Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communitiesGroupByArgs} args - Group by arguments.
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
      T extends communitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: communitiesGroupByArgs['orderBy'] }
        : { orderBy?: communitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, communitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the communities model
   */
  readonly fields: communitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for communities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__communitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the communities model
   */ 
  interface communitiesFieldRefs {
    readonly id: FieldRef<"communities", 'String'>
    readonly name: FieldRef<"communities", 'String'>
    readonly description: FieldRef<"communities", 'String'>
    readonly icon: FieldRef<"communities", 'String'>
    readonly banner: FieldRef<"communities", 'String'>
    readonly visibility: FieldRef<"communities", 'Visibility'>
    readonly rules: FieldRef<"communities", 'Json'>
    readonly pinned_posts: FieldRef<"communities", 'String[]'>
    readonly topics: FieldRef<"communities", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * communities findUnique
   */
  export type communitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Filter, which communities to fetch.
     */
    where: communitiesWhereUniqueInput
  }

  /**
   * communities findUniqueOrThrow
   */
  export type communitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Filter, which communities to fetch.
     */
    where: communitiesWhereUniqueInput
  }

  /**
   * communities findFirst
   */
  export type communitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Filter, which communities to fetch.
     */
    where?: communitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communities to fetch.
     */
    orderBy?: communitiesOrderByWithRelationInput | communitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for communities.
     */
    cursor?: communitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of communities.
     */
    distinct?: CommunitiesScalarFieldEnum | CommunitiesScalarFieldEnum[]
  }

  /**
   * communities findFirstOrThrow
   */
  export type communitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Filter, which communities to fetch.
     */
    where?: communitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communities to fetch.
     */
    orderBy?: communitiesOrderByWithRelationInput | communitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for communities.
     */
    cursor?: communitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of communities.
     */
    distinct?: CommunitiesScalarFieldEnum | CommunitiesScalarFieldEnum[]
  }

  /**
   * communities findMany
   */
  export type communitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Filter, which communities to fetch.
     */
    where?: communitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communities to fetch.
     */
    orderBy?: communitiesOrderByWithRelationInput | communitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing communities.
     */
    cursor?: communitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communities.
     */
    skip?: number
    distinct?: CommunitiesScalarFieldEnum | CommunitiesScalarFieldEnum[]
  }

  /**
   * communities create
   */
  export type communitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * The data needed to create a communities.
     */
    data: XOR<communitiesCreateInput, communitiesUncheckedCreateInput>
  }

  /**
   * communities createMany
   */
  export type communitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many communities.
     */
    data: communitiesCreateManyInput | communitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * communities createManyAndReturn
   */
  export type communitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * The data used to create many communities.
     */
    data: communitiesCreateManyInput | communitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * communities update
   */
  export type communitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * The data needed to update a communities.
     */
    data: XOR<communitiesUpdateInput, communitiesUncheckedUpdateInput>
    /**
     * Choose, which communities to update.
     */
    where: communitiesWhereUniqueInput
  }

  /**
   * communities updateMany
   */
  export type communitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update communities.
     */
    data: XOR<communitiesUpdateManyMutationInput, communitiesUncheckedUpdateManyInput>
    /**
     * Filter which communities to update
     */
    where?: communitiesWhereInput
  }

  /**
   * communities updateManyAndReturn
   */
  export type communitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * The data used to update communities.
     */
    data: XOR<communitiesUpdateManyMutationInput, communitiesUncheckedUpdateManyInput>
    /**
     * Filter which communities to update
     */
    where?: communitiesWhereInput
  }

  /**
   * communities upsert
   */
  export type communitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * The filter to search for the communities to update in case it exists.
     */
    where: communitiesWhereUniqueInput
    /**
     * In case the communities found by the `where` argument doesn't exist, create a new communities with this data.
     */
    create: XOR<communitiesCreateInput, communitiesUncheckedCreateInput>
    /**
     * In case the communities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<communitiesUpdateInput, communitiesUncheckedUpdateInput>
  }

  /**
   * communities delete
   */
  export type communitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Filter which communities to delete.
     */
    where: communitiesWhereUniqueInput
  }

  /**
   * communities deleteMany
   */
  export type communitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which communities to delete
     */
    where?: communitiesWhereInput
  }

  /**
   * communities without action
   */
  export type communitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    upvotes: number | null
    downvotes: number | null
  }

  export type CommentsSumAggregateOutputType = {
    upvotes: number | null
    downvotes: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    upvotes: number | null
    downvotes: number | null
    content: string | null
    parent_id: string | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    upvotes: number | null
    downvotes: number | null
    content: string | null
    parent_id: string | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    user_id: number
    createdAt: number
    updatedAt: number
    upvotes: number
    downvotes: number
    content: number
    parent_id: number
    comments_id: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    upvotes?: true
    downvotes?: true
  }

  export type CommentsSumAggregateInputType = {
    upvotes?: true
    downvotes?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    upvotes?: true
    downvotes?: true
    content?: true
    parent_id?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    upvotes?: true
    downvotes?: true
    content?: true
    parent_id?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    upvotes?: true
    downvotes?: true
    content?: true
    parent_id?: true
    comments_id?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: string
    user_id: string
    createdAt: Date
    updatedAt: Date
    upvotes: number
    downvotes: number
    content: string
    parent_id: string | null
    comments_id: string[]
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
    content?: boolean
    parent_id?: boolean
    comments_id?: boolean
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
    content?: boolean
    parent_id?: boolean
    comments_id?: boolean
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
    content?: boolean
    parent_id?: boolean
    comments_id?: boolean
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
    content?: boolean
    parent_id?: boolean
    comments_id?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "createdAt" | "updatedAt" | "upvotes" | "downvotes" | "content" | "parent_id" | "comments_id", ExtArgs["result"]["comments"]>

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      createdAt: Date
      updatedAt: Date
      upvotes: number
      downvotes: number
      content: string
      parent_id: string | null
      comments_id: string[]
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
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
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
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
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the comments model
   */ 
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'String'>
    readonly user_id: FieldRef<"comments", 'String'>
    readonly createdAt: FieldRef<"comments", 'DateTime'>
    readonly updatedAt: FieldRef<"comments", 'DateTime'>
    readonly upvotes: FieldRef<"comments", 'Int'>
    readonly downvotes: FieldRef<"comments", 'Int'>
    readonly content: FieldRef<"comments", 'String'>
    readonly parent_id: FieldRef<"comments", 'String'>
    readonly comments_id: FieldRef<"comments", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
  }


  /**
   * Model community_user
   */

  export type AggregateCommunity_user = {
    _count: Community_userCountAggregateOutputType | null
    _min: Community_userMinAggregateOutputType | null
    _max: Community_userMaxAggregateOutputType | null
  }

  export type Community_userMinAggregateOutputType = {
    community_id: string | null
    user_id: string | null
    role: $Enums.Role | null
    favorite: boolean | null
    notificationPreference: $Enums.NotificationPreference | null
  }

  export type Community_userMaxAggregateOutputType = {
    community_id: string | null
    user_id: string | null
    role: $Enums.Role | null
    favorite: boolean | null
    notificationPreference: $Enums.NotificationPreference | null
  }

  export type Community_userCountAggregateOutputType = {
    community_id: number
    user_id: number
    role: number
    favorite: number
    notificationPreference: number
    _all: number
  }


  export type Community_userMinAggregateInputType = {
    community_id?: true
    user_id?: true
    role?: true
    favorite?: true
    notificationPreference?: true
  }

  export type Community_userMaxAggregateInputType = {
    community_id?: true
    user_id?: true
    role?: true
    favorite?: true
    notificationPreference?: true
  }

  export type Community_userCountAggregateInputType = {
    community_id?: true
    user_id?: true
    role?: true
    favorite?: true
    notificationPreference?: true
    _all?: true
  }

  export type Community_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which community_user to aggregate.
     */
    where?: community_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_users to fetch.
     */
    orderBy?: community_userOrderByWithRelationInput | community_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: community_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned community_users
    **/
    _count?: true | Community_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Community_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Community_userMaxAggregateInputType
  }

  export type GetCommunity_userAggregateType<T extends Community_userAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity_user[P]>
      : GetScalarType<T[P], AggregateCommunity_user[P]>
  }




  export type community_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: community_userWhereInput
    orderBy?: community_userOrderByWithAggregationInput | community_userOrderByWithAggregationInput[]
    by: Community_userScalarFieldEnum[] | Community_userScalarFieldEnum
    having?: community_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Community_userCountAggregateInputType | true
    _min?: Community_userMinAggregateInputType
    _max?: Community_userMaxAggregateInputType
  }

  export type Community_userGroupByOutputType = {
    community_id: string
    user_id: string
    role: $Enums.Role
    favorite: boolean
    notificationPreference: $Enums.NotificationPreference
    _count: Community_userCountAggregateOutputType | null
    _min: Community_userMinAggregateOutputType | null
    _max: Community_userMaxAggregateOutputType | null
  }

  type GetCommunity_userGroupByPayload<T extends community_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Community_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Community_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Community_userGroupByOutputType[P]>
            : GetScalarType<T[P], Community_userGroupByOutputType[P]>
        }
      >
    >


  export type community_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    community_id?: boolean
    user_id?: boolean
    role?: boolean
    favorite?: boolean
    notificationPreference?: boolean
  }, ExtArgs["result"]["community_user"]>

  export type community_userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    community_id?: boolean
    user_id?: boolean
    role?: boolean
    favorite?: boolean
    notificationPreference?: boolean
  }, ExtArgs["result"]["community_user"]>

  export type community_userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    community_id?: boolean
    user_id?: boolean
    role?: boolean
    favorite?: boolean
    notificationPreference?: boolean
  }, ExtArgs["result"]["community_user"]>

  export type community_userSelectScalar = {
    community_id?: boolean
    user_id?: boolean
    role?: boolean
    favorite?: boolean
    notificationPreference?: boolean
  }

  export type community_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"community_id" | "user_id" | "role" | "favorite" | "notificationPreference", ExtArgs["result"]["community_user"]>

  export type $community_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "community_user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      community_id: string
      user_id: string
      role: $Enums.Role
      favorite: boolean
      notificationPreference: $Enums.NotificationPreference
    }, ExtArgs["result"]["community_user"]>
    composites: {}
  }

  type community_userGetPayload<S extends boolean | null | undefined | community_userDefaultArgs> = $Result.GetResult<Prisma.$community_userPayload, S>

  type community_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<community_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Community_userCountAggregateInputType | true
    }

  export interface community_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['community_user'], meta: { name: 'community_user' } }
    /**
     * Find zero or one Community_user that matches the filter.
     * @param {community_userFindUniqueArgs} args - Arguments to find a Community_user
     * @example
     * // Get one Community_user
     * const community_user = await prisma.community_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends community_userFindUniqueArgs>(args: SelectSubset<T, community_userFindUniqueArgs<ExtArgs>>): Prisma__community_userClient<$Result.GetResult<Prisma.$community_userPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Community_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {community_userFindUniqueOrThrowArgs} args - Arguments to find a Community_user
     * @example
     * // Get one Community_user
     * const community_user = await prisma.community_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends community_userFindUniqueOrThrowArgs>(args: SelectSubset<T, community_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__community_userClient<$Result.GetResult<Prisma.$community_userPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Community_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_userFindFirstArgs} args - Arguments to find a Community_user
     * @example
     * // Get one Community_user
     * const community_user = await prisma.community_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends community_userFindFirstArgs>(args?: SelectSubset<T, community_userFindFirstArgs<ExtArgs>>): Prisma__community_userClient<$Result.GetResult<Prisma.$community_userPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Community_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_userFindFirstOrThrowArgs} args - Arguments to find a Community_user
     * @example
     * // Get one Community_user
     * const community_user = await prisma.community_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends community_userFindFirstOrThrowArgs>(args?: SelectSubset<T, community_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__community_userClient<$Result.GetResult<Prisma.$community_userPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Community_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Community_users
     * const community_users = await prisma.community_user.findMany()
     * 
     * // Get first 10 Community_users
     * const community_users = await prisma.community_user.findMany({ take: 10 })
     * 
     * // Only select the `community_id`
     * const community_userWithCommunity_idOnly = await prisma.community_user.findMany({ select: { community_id: true } })
     * 
     */
    findMany<T extends community_userFindManyArgs>(args?: SelectSubset<T, community_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$community_userPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Community_user.
     * @param {community_userCreateArgs} args - Arguments to create a Community_user.
     * @example
     * // Create one Community_user
     * const Community_user = await prisma.community_user.create({
     *   data: {
     *     // ... data to create a Community_user
     *   }
     * })
     * 
     */
    create<T extends community_userCreateArgs>(args: SelectSubset<T, community_userCreateArgs<ExtArgs>>): Prisma__community_userClient<$Result.GetResult<Prisma.$community_userPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Community_users.
     * @param {community_userCreateManyArgs} args - Arguments to create many Community_users.
     * @example
     * // Create many Community_users
     * const community_user = await prisma.community_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends community_userCreateManyArgs>(args?: SelectSubset<T, community_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Community_users and returns the data saved in the database.
     * @param {community_userCreateManyAndReturnArgs} args - Arguments to create many Community_users.
     * @example
     * // Create many Community_users
     * const community_user = await prisma.community_user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Community_users and only return the `community_id`
     * const community_userWithCommunity_idOnly = await prisma.community_user.createManyAndReturn({
     *   select: { community_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends community_userCreateManyAndReturnArgs>(args?: SelectSubset<T, community_userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$community_userPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Community_user.
     * @param {community_userDeleteArgs} args - Arguments to delete one Community_user.
     * @example
     * // Delete one Community_user
     * const Community_user = await prisma.community_user.delete({
     *   where: {
     *     // ... filter to delete one Community_user
     *   }
     * })
     * 
     */
    delete<T extends community_userDeleteArgs>(args: SelectSubset<T, community_userDeleteArgs<ExtArgs>>): Prisma__community_userClient<$Result.GetResult<Prisma.$community_userPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Community_user.
     * @param {community_userUpdateArgs} args - Arguments to update one Community_user.
     * @example
     * // Update one Community_user
     * const community_user = await prisma.community_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends community_userUpdateArgs>(args: SelectSubset<T, community_userUpdateArgs<ExtArgs>>): Prisma__community_userClient<$Result.GetResult<Prisma.$community_userPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Community_users.
     * @param {community_userDeleteManyArgs} args - Arguments to filter Community_users to delete.
     * @example
     * // Delete a few Community_users
     * const { count } = await prisma.community_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends community_userDeleteManyArgs>(args?: SelectSubset<T, community_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Community_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Community_users
     * const community_user = await prisma.community_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends community_userUpdateManyArgs>(args: SelectSubset<T, community_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Community_users and returns the data updated in the database.
     * @param {community_userUpdateManyAndReturnArgs} args - Arguments to update many Community_users.
     * @example
     * // Update many Community_users
     * const community_user = await prisma.community_user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Community_users and only return the `community_id`
     * const community_userWithCommunity_idOnly = await prisma.community_user.updateManyAndReturn({
     *   select: { community_id: true },
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
    updateManyAndReturn<T extends community_userUpdateManyAndReturnArgs>(args: SelectSubset<T, community_userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$community_userPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Community_user.
     * @param {community_userUpsertArgs} args - Arguments to update or create a Community_user.
     * @example
     * // Update or create a Community_user
     * const community_user = await prisma.community_user.upsert({
     *   create: {
     *     // ... data to create a Community_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community_user we want to update
     *   }
     * })
     */
    upsert<T extends community_userUpsertArgs>(args: SelectSubset<T, community_userUpsertArgs<ExtArgs>>): Prisma__community_userClient<$Result.GetResult<Prisma.$community_userPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Community_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_userCountArgs} args - Arguments to filter Community_users to count.
     * @example
     * // Count the number of Community_users
     * const count = await prisma.community_user.count({
     *   where: {
     *     // ... the filter for the Community_users we want to count
     *   }
     * })
    **/
    count<T extends community_userCountArgs>(
      args?: Subset<T, community_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Community_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Community_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Community_userAggregateArgs>(args: Subset<T, Community_userAggregateArgs>): Prisma.PrismaPromise<GetCommunity_userAggregateType<T>>

    /**
     * Group by Community_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_userGroupByArgs} args - Group by arguments.
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
      T extends community_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: community_userGroupByArgs['orderBy'] }
        : { orderBy?: community_userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, community_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunity_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the community_user model
   */
  readonly fields: community_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for community_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__community_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the community_user model
   */ 
  interface community_userFieldRefs {
    readonly community_id: FieldRef<"community_user", 'String'>
    readonly user_id: FieldRef<"community_user", 'String'>
    readonly role: FieldRef<"community_user", 'Role'>
    readonly favorite: FieldRef<"community_user", 'Boolean'>
    readonly notificationPreference: FieldRef<"community_user", 'NotificationPreference'>
  }
    

  // Custom InputTypes
  /**
   * community_user findUnique
   */
  export type community_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_user
     */
    select?: community_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_user
     */
    omit?: community_userOmit<ExtArgs> | null
    /**
     * Filter, which community_user to fetch.
     */
    where: community_userWhereUniqueInput
  }

  /**
   * community_user findUniqueOrThrow
   */
  export type community_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_user
     */
    select?: community_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_user
     */
    omit?: community_userOmit<ExtArgs> | null
    /**
     * Filter, which community_user to fetch.
     */
    where: community_userWhereUniqueInput
  }

  /**
   * community_user findFirst
   */
  export type community_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_user
     */
    select?: community_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_user
     */
    omit?: community_userOmit<ExtArgs> | null
    /**
     * Filter, which community_user to fetch.
     */
    where?: community_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_users to fetch.
     */
    orderBy?: community_userOrderByWithRelationInput | community_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for community_users.
     */
    cursor?: community_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of community_users.
     */
    distinct?: Community_userScalarFieldEnum | Community_userScalarFieldEnum[]
  }

  /**
   * community_user findFirstOrThrow
   */
  export type community_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_user
     */
    select?: community_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_user
     */
    omit?: community_userOmit<ExtArgs> | null
    /**
     * Filter, which community_user to fetch.
     */
    where?: community_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_users to fetch.
     */
    orderBy?: community_userOrderByWithRelationInput | community_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for community_users.
     */
    cursor?: community_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of community_users.
     */
    distinct?: Community_userScalarFieldEnum | Community_userScalarFieldEnum[]
  }

  /**
   * community_user findMany
   */
  export type community_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_user
     */
    select?: community_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_user
     */
    omit?: community_userOmit<ExtArgs> | null
    /**
     * Filter, which community_users to fetch.
     */
    where?: community_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_users to fetch.
     */
    orderBy?: community_userOrderByWithRelationInput | community_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing community_users.
     */
    cursor?: community_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_users.
     */
    skip?: number
    distinct?: Community_userScalarFieldEnum | Community_userScalarFieldEnum[]
  }

  /**
   * community_user create
   */
  export type community_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_user
     */
    select?: community_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_user
     */
    omit?: community_userOmit<ExtArgs> | null
    /**
     * The data needed to create a community_user.
     */
    data: XOR<community_userCreateInput, community_userUncheckedCreateInput>
  }

  /**
   * community_user createMany
   */
  export type community_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many community_users.
     */
    data: community_userCreateManyInput | community_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * community_user createManyAndReturn
   */
  export type community_userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_user
     */
    select?: community_userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the community_user
     */
    omit?: community_userOmit<ExtArgs> | null
    /**
     * The data used to create many community_users.
     */
    data: community_userCreateManyInput | community_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * community_user update
   */
  export type community_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_user
     */
    select?: community_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_user
     */
    omit?: community_userOmit<ExtArgs> | null
    /**
     * The data needed to update a community_user.
     */
    data: XOR<community_userUpdateInput, community_userUncheckedUpdateInput>
    /**
     * Choose, which community_user to update.
     */
    where: community_userWhereUniqueInput
  }

  /**
   * community_user updateMany
   */
  export type community_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update community_users.
     */
    data: XOR<community_userUpdateManyMutationInput, community_userUncheckedUpdateManyInput>
    /**
     * Filter which community_users to update
     */
    where?: community_userWhereInput
  }

  /**
   * community_user updateManyAndReturn
   */
  export type community_userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_user
     */
    select?: community_userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the community_user
     */
    omit?: community_userOmit<ExtArgs> | null
    /**
     * The data used to update community_users.
     */
    data: XOR<community_userUpdateManyMutationInput, community_userUncheckedUpdateManyInput>
    /**
     * Filter which community_users to update
     */
    where?: community_userWhereInput
  }

  /**
   * community_user upsert
   */
  export type community_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_user
     */
    select?: community_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_user
     */
    omit?: community_userOmit<ExtArgs> | null
    /**
     * The filter to search for the community_user to update in case it exists.
     */
    where: community_userWhereUniqueInput
    /**
     * In case the community_user found by the `where` argument doesn't exist, create a new community_user with this data.
     */
    create: XOR<community_userCreateInput, community_userUncheckedCreateInput>
    /**
     * In case the community_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<community_userUpdateInput, community_userUncheckedUpdateInput>
  }

  /**
   * community_user delete
   */
  export type community_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_user
     */
    select?: community_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_user
     */
    omit?: community_userOmit<ExtArgs> | null
    /**
     * Filter which community_user to delete.
     */
    where: community_userWhereUniqueInput
  }

  /**
   * community_user deleteMany
   */
  export type community_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which community_users to delete
     */
    where?: community_userWhereInput
  }

  /**
   * community_user without action
   */
  export type community_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_user
     */
    select?: community_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_user
     */
    omit?: community_userOmit<ExtArgs> | null
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


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    blocked_users: 'blocked_users',
    blocked_communities: 'blocked_communities',
    avatar: 'avatar',
    bio: 'bio',
    display_name: 'display_name',
    gender: 'gender',
    location: 'location',
    permission: 'permission',
    saved_posts: 'saved_posts',
    upvoted_posts: 'upvoted_posts',
    downvoted_posts: 'downvoted_posts'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    hashtags: 'hashtags',
    content: 'content',
    mediaType: 'mediaType',
    mediaUrls: 'mediaUrls',
    upvotes: 'upvotes',
    downvotes: 'downvotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    comments_id: 'comments_id'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const CommunitiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    banner: 'banner',
    visibility: 'visibility',
    rules: 'rules',
    pinned_posts: 'pinned_posts',
    topics: 'topics'
  };

  export type CommunitiesScalarFieldEnum = (typeof CommunitiesScalarFieldEnum)[keyof typeof CommunitiesScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    upvotes: 'upvotes',
    downvotes: 'downvotes',
    content: 'content',
    parent_id: 'parent_id',
    comments_id: 'comments_id'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const Community_userScalarFieldEnum: {
    community_id: 'community_id',
    user_id: 'user_id',
    role: 'role',
    favorite: 'favorite',
    notificationPreference: 'notificationPreference'
  };

  export type Community_userScalarFieldEnum = (typeof Community_userScalarFieldEnum)[keyof typeof Community_userScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Permission'
   */
  export type EnumPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permission'>
    


  /**
   * Reference to a field of type 'Permission[]'
   */
  export type ListEnumPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permission[]'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'MediaType[]'
   */
  export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Visibility'
   */
  export type EnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility'>
    


  /**
   * Reference to a field of type 'Visibility[]'
   */
  export type ListEnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'NotificationPreference'
   */
  export type EnumNotificationPreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationPreference'>
    


  /**
   * Reference to a field of type 'NotificationPreference[]'
   */
  export type ListEnumNotificationPreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationPreference[]'>
    


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


  export type profilesWhereInput = {
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    id?: UuidFilter<"profiles"> | string
    blocked_users?: StringNullableListFilter<"profiles">
    blocked_communities?: StringNullableListFilter<"profiles">
    avatar?: StringNullableFilter<"profiles"> | string | null
    bio?: StringNullableFilter<"profiles"> | string | null
    display_name?: StringNullableFilter<"profiles"> | string | null
    gender?: StringNullableFilter<"profiles"> | string | null
    location?: StringNullableFilter<"profiles"> | string | null
    permission?: EnumPermissionFilter<"profiles"> | $Enums.Permission
    saved_posts?: StringNullableListFilter<"profiles">
    upvoted_posts?: StringNullableListFilter<"profiles">
    downvoted_posts?: StringNullableListFilter<"profiles">
  }

  export type profilesOrderByWithRelationInput = {
    id?: SortOrder
    blocked_users?: SortOrder
    blocked_communities?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    display_name?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    permission?: SortOrder
    saved_posts?: SortOrder
    upvoted_posts?: SortOrder
    downvoted_posts?: SortOrder
  }

  export type profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    blocked_users?: StringNullableListFilter<"profiles">
    blocked_communities?: StringNullableListFilter<"profiles">
    avatar?: StringNullableFilter<"profiles"> | string | null
    bio?: StringNullableFilter<"profiles"> | string | null
    display_name?: StringNullableFilter<"profiles"> | string | null
    gender?: StringNullableFilter<"profiles"> | string | null
    location?: StringNullableFilter<"profiles"> | string | null
    permission?: EnumPermissionFilter<"profiles"> | $Enums.Permission
    saved_posts?: StringNullableListFilter<"profiles">
    upvoted_posts?: StringNullableListFilter<"profiles">
    downvoted_posts?: StringNullableListFilter<"profiles">
  }, "id">

  export type profilesOrderByWithAggregationInput = {
    id?: SortOrder
    blocked_users?: SortOrder
    blocked_communities?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    display_name?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    permission?: SortOrder
    saved_posts?: SortOrder
    upvoted_posts?: SortOrder
    downvoted_posts?: SortOrder
    _count?: profilesCountOrderByAggregateInput
    _max?: profilesMaxOrderByAggregateInput
    _min?: profilesMinOrderByAggregateInput
  }

  export type profilesScalarWhereWithAggregatesInput = {
    AND?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    OR?: profilesScalarWhereWithAggregatesInput[]
    NOT?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"profiles"> | string
    blocked_users?: StringNullableListFilter<"profiles">
    blocked_communities?: StringNullableListFilter<"profiles">
    avatar?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    bio?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    display_name?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    gender?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    location?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    permission?: EnumPermissionWithAggregatesFilter<"profiles"> | $Enums.Permission
    saved_posts?: StringNullableListFilter<"profiles">
    upvoted_posts?: StringNullableListFilter<"profiles">
    downvoted_posts?: StringNullableListFilter<"profiles">
  }

  export type postsWhereInput = {
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    id?: UuidFilter<"posts"> | string
    user_id?: UuidFilter<"posts"> | string
    hashtags?: StringNullableListFilter<"posts">
    content?: StringFilter<"posts"> | string
    mediaType?: EnumMediaTypeFilter<"posts"> | $Enums.MediaType
    mediaUrls?: StringNullableListFilter<"posts">
    upvotes?: IntFilter<"posts"> | number
    downvotes?: IntFilter<"posts"> | number
    createdAt?: DateTimeFilter<"posts"> | Date | string
    updatedAt?: DateTimeFilter<"posts"> | Date | string
    comments_id?: StringNullableListFilter<"posts">
  }

  export type postsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    hashtags?: SortOrder
    content?: SortOrder
    mediaType?: SortOrder
    mediaUrls?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comments_id?: SortOrder
  }

  export type postsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    user_id?: UuidFilter<"posts"> | string
    hashtags?: StringNullableListFilter<"posts">
    content?: StringFilter<"posts"> | string
    mediaType?: EnumMediaTypeFilter<"posts"> | $Enums.MediaType
    mediaUrls?: StringNullableListFilter<"posts">
    upvotes?: IntFilter<"posts"> | number
    downvotes?: IntFilter<"posts"> | number
    createdAt?: DateTimeFilter<"posts"> | Date | string
    updatedAt?: DateTimeFilter<"posts"> | Date | string
    comments_id?: StringNullableListFilter<"posts">
  }, "id">

  export type postsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    hashtags?: SortOrder
    content?: SortOrder
    mediaType?: SortOrder
    mediaUrls?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comments_id?: SortOrder
    _count?: postsCountOrderByAggregateInput
    _avg?: postsAvgOrderByAggregateInput
    _max?: postsMaxOrderByAggregateInput
    _min?: postsMinOrderByAggregateInput
    _sum?: postsSumOrderByAggregateInput
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    OR?: postsScalarWhereWithAggregatesInput[]
    NOT?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"posts"> | string
    user_id?: UuidWithAggregatesFilter<"posts"> | string
    hashtags?: StringNullableListFilter<"posts">
    content?: StringWithAggregatesFilter<"posts"> | string
    mediaType?: EnumMediaTypeWithAggregatesFilter<"posts"> | $Enums.MediaType
    mediaUrls?: StringNullableListFilter<"posts">
    upvotes?: IntWithAggregatesFilter<"posts"> | number
    downvotes?: IntWithAggregatesFilter<"posts"> | number
    createdAt?: DateTimeWithAggregatesFilter<"posts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"posts"> | Date | string
    comments_id?: StringNullableListFilter<"posts">
  }

  export type communitiesWhereInput = {
    AND?: communitiesWhereInput | communitiesWhereInput[]
    OR?: communitiesWhereInput[]
    NOT?: communitiesWhereInput | communitiesWhereInput[]
    id?: UuidFilter<"communities"> | string
    name?: StringFilter<"communities"> | string
    description?: StringFilter<"communities"> | string
    icon?: StringNullableFilter<"communities"> | string | null
    banner?: StringNullableFilter<"communities"> | string | null
    visibility?: EnumVisibilityFilter<"communities"> | $Enums.Visibility
    rules?: JsonFilter<"communities">
    pinned_posts?: StringNullableListFilter<"communities">
    topics?: StringNullableListFilter<"communities">
  }

  export type communitiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    visibility?: SortOrder
    rules?: SortOrder
    pinned_posts?: SortOrder
    topics?: SortOrder
  }

  export type communitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: communitiesWhereInput | communitiesWhereInput[]
    OR?: communitiesWhereInput[]
    NOT?: communitiesWhereInput | communitiesWhereInput[]
    name?: StringFilter<"communities"> | string
    description?: StringFilter<"communities"> | string
    icon?: StringNullableFilter<"communities"> | string | null
    banner?: StringNullableFilter<"communities"> | string | null
    visibility?: EnumVisibilityFilter<"communities"> | $Enums.Visibility
    rules?: JsonFilter<"communities">
    pinned_posts?: StringNullableListFilter<"communities">
    topics?: StringNullableListFilter<"communities">
  }, "id">

  export type communitiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    visibility?: SortOrder
    rules?: SortOrder
    pinned_posts?: SortOrder
    topics?: SortOrder
    _count?: communitiesCountOrderByAggregateInput
    _max?: communitiesMaxOrderByAggregateInput
    _min?: communitiesMinOrderByAggregateInput
  }

  export type communitiesScalarWhereWithAggregatesInput = {
    AND?: communitiesScalarWhereWithAggregatesInput | communitiesScalarWhereWithAggregatesInput[]
    OR?: communitiesScalarWhereWithAggregatesInput[]
    NOT?: communitiesScalarWhereWithAggregatesInput | communitiesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"communities"> | string
    name?: StringWithAggregatesFilter<"communities"> | string
    description?: StringWithAggregatesFilter<"communities"> | string
    icon?: StringNullableWithAggregatesFilter<"communities"> | string | null
    banner?: StringNullableWithAggregatesFilter<"communities"> | string | null
    visibility?: EnumVisibilityWithAggregatesFilter<"communities"> | $Enums.Visibility
    rules?: JsonWithAggregatesFilter<"communities">
    pinned_posts?: StringNullableListFilter<"communities">
    topics?: StringNullableListFilter<"communities">
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: UuidFilter<"comments"> | string
    user_id?: UuidFilter<"comments"> | string
    createdAt?: DateTimeFilter<"comments"> | Date | string
    updatedAt?: DateTimeFilter<"comments"> | Date | string
    upvotes?: IntFilter<"comments"> | number
    downvotes?: IntFilter<"comments"> | number
    content?: StringFilter<"comments"> | string
    parent_id?: StringNullableFilter<"comments"> | string | null
    comments_id?: StringNullableListFilter<"comments">
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    content?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    comments_id?: SortOrder
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    user_id?: UuidFilter<"comments"> | string
    createdAt?: DateTimeFilter<"comments"> | Date | string
    updatedAt?: DateTimeFilter<"comments"> | Date | string
    upvotes?: IntFilter<"comments"> | number
    downvotes?: IntFilter<"comments"> | number
    content?: StringFilter<"comments"> | string
    parent_id?: StringNullableFilter<"comments"> | string | null
    comments_id?: StringNullableListFilter<"comments">
  }, "id">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    content?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    comments_id?: SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"comments"> | string
    user_id?: UuidWithAggregatesFilter<"comments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"comments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"comments"> | Date | string
    upvotes?: IntWithAggregatesFilter<"comments"> | number
    downvotes?: IntWithAggregatesFilter<"comments"> | number
    content?: StringWithAggregatesFilter<"comments"> | string
    parent_id?: StringNullableWithAggregatesFilter<"comments"> | string | null
    comments_id?: StringNullableListFilter<"comments">
  }

  export type community_userWhereInput = {
    AND?: community_userWhereInput | community_userWhereInput[]
    OR?: community_userWhereInput[]
    NOT?: community_userWhereInput | community_userWhereInput[]
    community_id?: UuidFilter<"community_user"> | string
    user_id?: UuidFilter<"community_user"> | string
    role?: EnumRoleFilter<"community_user"> | $Enums.Role
    favorite?: BoolFilter<"community_user"> | boolean
    notificationPreference?: EnumNotificationPreferenceFilter<"community_user"> | $Enums.NotificationPreference
  }

  export type community_userOrderByWithRelationInput = {
    community_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    favorite?: SortOrder
    notificationPreference?: SortOrder
  }

  export type community_userWhereUniqueInput = Prisma.AtLeast<{
    community_id_user_id?: community_userCommunity_idUser_idCompoundUniqueInput
    AND?: community_userWhereInput | community_userWhereInput[]
    OR?: community_userWhereInput[]
    NOT?: community_userWhereInput | community_userWhereInput[]
    community_id?: UuidFilter<"community_user"> | string
    user_id?: UuidFilter<"community_user"> | string
    role?: EnumRoleFilter<"community_user"> | $Enums.Role
    favorite?: BoolFilter<"community_user"> | boolean
    notificationPreference?: EnumNotificationPreferenceFilter<"community_user"> | $Enums.NotificationPreference
  }, "community_id_user_id">

  export type community_userOrderByWithAggregationInput = {
    community_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    favorite?: SortOrder
    notificationPreference?: SortOrder
    _count?: community_userCountOrderByAggregateInput
    _max?: community_userMaxOrderByAggregateInput
    _min?: community_userMinOrderByAggregateInput
  }

  export type community_userScalarWhereWithAggregatesInput = {
    AND?: community_userScalarWhereWithAggregatesInput | community_userScalarWhereWithAggregatesInput[]
    OR?: community_userScalarWhereWithAggregatesInput[]
    NOT?: community_userScalarWhereWithAggregatesInput | community_userScalarWhereWithAggregatesInput[]
    community_id?: UuidWithAggregatesFilter<"community_user"> | string
    user_id?: UuidWithAggregatesFilter<"community_user"> | string
    role?: EnumRoleWithAggregatesFilter<"community_user"> | $Enums.Role
    favorite?: BoolWithAggregatesFilter<"community_user"> | boolean
    notificationPreference?: EnumNotificationPreferenceWithAggregatesFilter<"community_user"> | $Enums.NotificationPreference
  }

  export type profilesCreateInput = {
    id?: string
    blocked_users?: profilesCreateblocked_usersInput | string[]
    blocked_communities?: profilesCreateblocked_communitiesInput | string[]
    avatar?: string | null
    bio?: string | null
    display_name?: string | null
    gender?: string | null
    location?: string | null
    permission?: $Enums.Permission
    saved_posts?: profilesCreatesaved_postsInput | string[]
    upvoted_posts?: profilesCreateupvoted_postsInput | string[]
    downvoted_posts?: profilesCreatedownvoted_postsInput | string[]
  }

  export type profilesUncheckedCreateInput = {
    id?: string
    blocked_users?: profilesCreateblocked_usersInput | string[]
    blocked_communities?: profilesCreateblocked_communitiesInput | string[]
    avatar?: string | null
    bio?: string | null
    display_name?: string | null
    gender?: string | null
    location?: string | null
    permission?: $Enums.Permission
    saved_posts?: profilesCreatesaved_postsInput | string[]
    upvoted_posts?: profilesCreateupvoted_postsInput | string[]
    downvoted_posts?: profilesCreatedownvoted_postsInput | string[]
  }

  export type profilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocked_users?: profilesUpdateblocked_usersInput | string[]
    blocked_communities?: profilesUpdateblocked_communitiesInput | string[]
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    saved_posts?: profilesUpdatesaved_postsInput | string[]
    upvoted_posts?: profilesUpdateupvoted_postsInput | string[]
    downvoted_posts?: profilesUpdatedownvoted_postsInput | string[]
  }

  export type profilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocked_users?: profilesUpdateblocked_usersInput | string[]
    blocked_communities?: profilesUpdateblocked_communitiesInput | string[]
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    saved_posts?: profilesUpdatesaved_postsInput | string[]
    upvoted_posts?: profilesUpdateupvoted_postsInput | string[]
    downvoted_posts?: profilesUpdatedownvoted_postsInput | string[]
  }

  export type profilesCreateManyInput = {
    id?: string
    blocked_users?: profilesCreateblocked_usersInput | string[]
    blocked_communities?: profilesCreateblocked_communitiesInput | string[]
    avatar?: string | null
    bio?: string | null
    display_name?: string | null
    gender?: string | null
    location?: string | null
    permission?: $Enums.Permission
    saved_posts?: profilesCreatesaved_postsInput | string[]
    upvoted_posts?: profilesCreateupvoted_postsInput | string[]
    downvoted_posts?: profilesCreatedownvoted_postsInput | string[]
  }

  export type profilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocked_users?: profilesUpdateblocked_usersInput | string[]
    blocked_communities?: profilesUpdateblocked_communitiesInput | string[]
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    saved_posts?: profilesUpdatesaved_postsInput | string[]
    upvoted_posts?: profilesUpdateupvoted_postsInput | string[]
    downvoted_posts?: profilesUpdatedownvoted_postsInput | string[]
  }

  export type profilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocked_users?: profilesUpdateblocked_usersInput | string[]
    blocked_communities?: profilesUpdateblocked_communitiesInput | string[]
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    saved_posts?: profilesUpdatesaved_postsInput | string[]
    upvoted_posts?: profilesUpdateupvoted_postsInput | string[]
    downvoted_posts?: profilesUpdatedownvoted_postsInput | string[]
  }

  export type postsCreateInput = {
    id?: string
    user_id: string
    hashtags?: postsCreatehashtagsInput | string[]
    content: string
    mediaType: $Enums.MediaType
    mediaUrls?: postsCreatemediaUrlsInput | string[]
    upvotes: number
    downvotes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments_id?: postsCreatecomments_idInput | string[]
  }

  export type postsUncheckedCreateInput = {
    id?: string
    user_id: string
    hashtags?: postsCreatehashtagsInput | string[]
    content: string
    mediaType: $Enums.MediaType
    mediaUrls?: postsCreatemediaUrlsInput | string[]
    upvotes: number
    downvotes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments_id?: postsCreatecomments_idInput | string[]
  }

  export type postsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    hashtags?: postsUpdatehashtagsInput | string[]
    content?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    mediaUrls?: postsUpdatemediaUrlsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments_id?: postsUpdatecomments_idInput | string[]
  }

  export type postsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    hashtags?: postsUpdatehashtagsInput | string[]
    content?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    mediaUrls?: postsUpdatemediaUrlsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments_id?: postsUpdatecomments_idInput | string[]
  }

  export type postsCreateManyInput = {
    id?: string
    user_id: string
    hashtags?: postsCreatehashtagsInput | string[]
    content: string
    mediaType: $Enums.MediaType
    mediaUrls?: postsCreatemediaUrlsInput | string[]
    upvotes: number
    downvotes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments_id?: postsCreatecomments_idInput | string[]
  }

  export type postsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    hashtags?: postsUpdatehashtagsInput | string[]
    content?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    mediaUrls?: postsUpdatemediaUrlsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments_id?: postsUpdatecomments_idInput | string[]
  }

  export type postsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    hashtags?: postsUpdatehashtagsInput | string[]
    content?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    mediaUrls?: postsUpdatemediaUrlsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments_id?: postsUpdatecomments_idInput | string[]
  }

  export type communitiesCreateInput = {
    id?: string
    name: string
    description: string
    icon?: string | null
    banner?: string | null
    visibility?: $Enums.Visibility
    rules?: JsonNullValueInput | InputJsonValue
    pinned_posts?: communitiesCreatepinned_postsInput | string[]
    topics?: communitiesCreatetopicsInput | string[]
  }

  export type communitiesUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    icon?: string | null
    banner?: string | null
    visibility?: $Enums.Visibility
    rules?: JsonNullValueInput | InputJsonValue
    pinned_posts?: communitiesCreatepinned_postsInput | string[]
    topics?: communitiesCreatetopicsInput | string[]
  }

  export type communitiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    rules?: JsonNullValueInput | InputJsonValue
    pinned_posts?: communitiesUpdatepinned_postsInput | string[]
    topics?: communitiesUpdatetopicsInput | string[]
  }

  export type communitiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    rules?: JsonNullValueInput | InputJsonValue
    pinned_posts?: communitiesUpdatepinned_postsInput | string[]
    topics?: communitiesUpdatetopicsInput | string[]
  }

  export type communitiesCreateManyInput = {
    id?: string
    name: string
    description: string
    icon?: string | null
    banner?: string | null
    visibility?: $Enums.Visibility
    rules?: JsonNullValueInput | InputJsonValue
    pinned_posts?: communitiesCreatepinned_postsInput | string[]
    topics?: communitiesCreatetopicsInput | string[]
  }

  export type communitiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    rules?: JsonNullValueInput | InputJsonValue
    pinned_posts?: communitiesUpdatepinned_postsInput | string[]
    topics?: communitiesUpdatetopicsInput | string[]
  }

  export type communitiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    rules?: JsonNullValueInput | InputJsonValue
    pinned_posts?: communitiesUpdatepinned_postsInput | string[]
    topics?: communitiesUpdatetopicsInput | string[]
  }

  export type commentsCreateInput = {
    id?: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes: number
    downvotes: number
    content: string
    parent_id?: string | null
    comments_id?: commentsCreatecomments_idInput | string[]
  }

  export type commentsUncheckedCreateInput = {
    id?: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes: number
    downvotes: number
    content: string
    parent_id?: string | null
    comments_id?: commentsCreatecomments_idInput | string[]
  }

  export type commentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    comments_id?: commentsUpdatecomments_idInput | string[]
  }

  export type commentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    comments_id?: commentsUpdatecomments_idInput | string[]
  }

  export type commentsCreateManyInput = {
    id?: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes: number
    downvotes: number
    content: string
    parent_id?: string | null
    comments_id?: commentsCreatecomments_idInput | string[]
  }

  export type commentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    comments_id?: commentsUpdatecomments_idInput | string[]
  }

  export type commentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    comments_id?: commentsUpdatecomments_idInput | string[]
  }

  export type community_userCreateInput = {
    community_id: string
    user_id: string
    role?: $Enums.Role
    favorite?: boolean
    notificationPreference?: $Enums.NotificationPreference
  }

  export type community_userUncheckedCreateInput = {
    community_id: string
    user_id: string
    role?: $Enums.Role
    favorite?: boolean
    notificationPreference?: $Enums.NotificationPreference
  }

  export type community_userUpdateInput = {
    community_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favorite?: BoolFieldUpdateOperationsInput | boolean
    notificationPreference?: EnumNotificationPreferenceFieldUpdateOperationsInput | $Enums.NotificationPreference
  }

  export type community_userUncheckedUpdateInput = {
    community_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favorite?: BoolFieldUpdateOperationsInput | boolean
    notificationPreference?: EnumNotificationPreferenceFieldUpdateOperationsInput | $Enums.NotificationPreference
  }

  export type community_userCreateManyInput = {
    community_id: string
    user_id: string
    role?: $Enums.Role
    favorite?: boolean
    notificationPreference?: $Enums.NotificationPreference
  }

  export type community_userUpdateManyMutationInput = {
    community_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favorite?: BoolFieldUpdateOperationsInput | boolean
    notificationPreference?: EnumNotificationPreferenceFieldUpdateOperationsInput | $Enums.NotificationPreference
  }

  export type community_userUncheckedUpdateManyInput = {
    community_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favorite?: BoolFieldUpdateOperationsInput | boolean
    notificationPreference?: EnumNotificationPreferenceFieldUpdateOperationsInput | $Enums.NotificationPreference
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type EnumPermissionFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission | EnumPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionFilter<$PrismaModel> | $Enums.Permission
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type profilesCountOrderByAggregateInput = {
    id?: SortOrder
    blocked_users?: SortOrder
    blocked_communities?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    display_name?: SortOrder
    gender?: SortOrder
    location?: SortOrder
    permission?: SortOrder
    saved_posts?: SortOrder
    upvoted_posts?: SortOrder
    downvoted_posts?: SortOrder
  }

  export type profilesMaxOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    display_name?: SortOrder
    gender?: SortOrder
    location?: SortOrder
    permission?: SortOrder
  }

  export type profilesMinOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    display_name?: SortOrder
    gender?: SortOrder
    location?: SortOrder
    permission?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type EnumPermissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission | EnumPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionWithAggregatesFilter<$PrismaModel> | $Enums.Permission
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionFilter<$PrismaModel>
    _max?: NestedEnumPermissionFilter<$PrismaModel>
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

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
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

  export type postsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    hashtags?: SortOrder
    content?: SortOrder
    mediaType?: SortOrder
    mediaUrls?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comments_id?: SortOrder
  }

  export type postsAvgOrderByAggregateInput = {
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type postsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    mediaType?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type postsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    mediaType?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type postsSumOrderByAggregateInput = {
    upvotes?: SortOrder
    downvotes?: SortOrder
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

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
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

  export type EnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type communitiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    banner?: SortOrder
    visibility?: SortOrder
    rules?: SortOrder
    pinned_posts?: SortOrder
    topics?: SortOrder
  }

  export type communitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    banner?: SortOrder
    visibility?: SortOrder
  }

  export type communitiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    banner?: SortOrder
    visibility?: SortOrder
  }

  export type EnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    content?: SortOrder
    parent_id?: SortOrder
    comments_id?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    content?: SortOrder
    parent_id?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    content?: SortOrder
    parent_id?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumNotificationPreferenceFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationPreference | EnumNotificationPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationPreference[] | ListEnumNotificationPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationPreference[] | ListEnumNotificationPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationPreferenceFilter<$PrismaModel> | $Enums.NotificationPreference
  }

  export type community_userCommunity_idUser_idCompoundUniqueInput = {
    community_id: string
    user_id: string
  }

  export type community_userCountOrderByAggregateInput = {
    community_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    favorite?: SortOrder
    notificationPreference?: SortOrder
  }

  export type community_userMaxOrderByAggregateInput = {
    community_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    favorite?: SortOrder
    notificationPreference?: SortOrder
  }

  export type community_userMinOrderByAggregateInput = {
    community_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    favorite?: SortOrder
    notificationPreference?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumNotificationPreferenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationPreference | EnumNotificationPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationPreference[] | ListEnumNotificationPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationPreference[] | ListEnumNotificationPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationPreferenceWithAggregatesFilter<$PrismaModel> | $Enums.NotificationPreference
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationPreferenceFilter<$PrismaModel>
    _max?: NestedEnumNotificationPreferenceFilter<$PrismaModel>
  }

  export type profilesCreateblocked_usersInput = {
    set: string[]
  }

  export type profilesCreateblocked_communitiesInput = {
    set: string[]
  }

  export type profilesCreatesaved_postsInput = {
    set: string[]
  }

  export type profilesCreateupvoted_postsInput = {
    set: string[]
  }

  export type profilesCreatedownvoted_postsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type profilesUpdateblocked_usersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type profilesUpdateblocked_communitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPermissionFieldUpdateOperationsInput = {
    set?: $Enums.Permission
  }

  export type profilesUpdatesaved_postsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type profilesUpdateupvoted_postsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type profilesUpdatedownvoted_postsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type postsCreatehashtagsInput = {
    set: string[]
  }

  export type postsCreatemediaUrlsInput = {
    set: string[]
  }

  export type postsCreatecomments_idInput = {
    set: string[]
  }

  export type postsUpdatehashtagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type postsUpdatemediaUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type postsUpdatecomments_idInput = {
    set?: string[]
    push?: string | string[]
  }

  export type communitiesCreatepinned_postsInput = {
    set: string[]
  }

  export type communitiesCreatetopicsInput = {
    set: string[]
  }

  export type EnumVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.Visibility
  }

  export type communitiesUpdatepinned_postsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type communitiesUpdatetopicsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type commentsCreatecomments_idInput = {
    set: string[]
  }

  export type commentsUpdatecomments_idInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumNotificationPreferenceFieldUpdateOperationsInput = {
    set?: $Enums.NotificationPreference
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedEnumPermissionFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission | EnumPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionFilter<$PrismaModel> | $Enums.Permission
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedEnumPermissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission | EnumPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionWithAggregatesFilter<$PrismaModel> | $Enums.Permission
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionFilter<$PrismaModel>
    _max?: NestedEnumPermissionFilter<$PrismaModel>
  }

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
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

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
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

  export type NestedEnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }

  export type NestedEnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumNotificationPreferenceFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationPreference | EnumNotificationPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationPreference[] | ListEnumNotificationPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationPreference[] | ListEnumNotificationPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationPreferenceFilter<$PrismaModel> | $Enums.NotificationPreference
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumNotificationPreferenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationPreference | EnumNotificationPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationPreference[] | ListEnumNotificationPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationPreference[] | ListEnumNotificationPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationPreferenceWithAggregatesFilter<$PrismaModel> | $Enums.NotificationPreference
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationPreferenceFilter<$PrismaModel>
    _max?: NestedEnumNotificationPreferenceFilter<$PrismaModel>
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