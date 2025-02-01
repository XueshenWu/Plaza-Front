import { newDrizzle } from './drizzle-client';
import * as schema from '@/drizzle/schema';
import { v4 } from 'uuid';
import { eq, type InferInsertModel } from "drizzle-orm"




async function __test_createUserProfile() {
    const db = newDrizzle()

    const [res] = await db
        .insert(schema.profiles)
        .values({
            id: v4()
        })
        .returning()
    return res.id


}

async function __test_deleteUserProfile(id: string) {
    await newDrizzle().delete(schema.profiles).where(eq(schema.profiles.id, id))
}

export {
    __test_createUserProfile,
    __test_deleteUserProfile
}