import { expect, test, describe, it, beforeAll, assertType } from 'vitest'
import { __test_createUserProfile, __test_deleteUserProfile } from '@/storage/server/database/users'
import { newDrizzle } from '@/storage/server/database/drizzle-client'
import { v4 } from 'uuid'
import * as schema from '@/drizzle/schema'

test('createUserProfile', async () => {

    const userId = await __test_createUserProfile()
    expect(userId).not.toBeNull()


    const db = newDrizzle()

    const res = await db.query.profiles.findFirst({
        where: (data, { eq }) => eq(data.id, userId)
    })

    expect(res).not.toBeFalsy()
})


test('deleteUserProfile', async () => {


    const db = newDrizzle()
    const [record] = await db.insert(schema.profiles).values({
        id: v4()
    }).returning()



    await __test_deleteUserProfile(record.id)

    const res = await db.query.profiles.findFirst({
        where: (data, { eq }) => eq(data.id, record.id)
    })

    expect(res).toBeFalsy()

})
