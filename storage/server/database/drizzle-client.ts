import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '@/drizzle/schema';
export  function newDrizzle() {
    return drizzle(process.env.DATABASE_URL_POSTGRES!, {
        schema
    });
}