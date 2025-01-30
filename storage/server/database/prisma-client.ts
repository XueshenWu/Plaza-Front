
import { PrismaClient as _PgClient } from "@/prisma/postgres/postgres-client";

export const pgClient = new _PgClient();
