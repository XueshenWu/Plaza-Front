import { PrismaClient as _MongoClient } from "@/prisma/mongo/mongo-client";
import { PrismaClient as _PgClient } from "@/prisma/postgres/postgres-client";

export const MongoClient = new _MongoClient();
export const PgClient = new _PgClient();
