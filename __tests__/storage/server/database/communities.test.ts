import { expect, test, describe, it, beforeAll, assertType } from 'vitest'
import { __test_createUserProfile, __test_deleteUserProfile } from '@/storage/server/database/users'
import { __test_deleteCommunity, createCommunity, queryUserCommunities, } from '@/storage/server/database/communities'
import { newDrizzle } from '@/storage/server/database/drizzle-client'
import { v4 } from 'uuid'
import * as schema from '@/drizzle/schema'
import { and } from 'drizzle-orm'

test('createCommunity', async () => {

    const db = newDrizzle()
    const [user] = await db.insert(schema.profiles).values({
        id: v4()
    }).returning()

    const communityId = await createCommunity(
        `CommunityName-${Math.random().toFixed(5)}`,
        "Test Description",
        "PUBLIC",
        user.id
    )

    expect(communityId).toBeTruthy()

    const communityRecord = await db.query.communities.findFirst({
        where: (data, { eq }) => eq(data.id, communityId)
    })

    expect(communityRecord).toBeTruthy()

    const communityUserRecord = await db.query.community_user.findFirst({
        where: (data, { eq }) => and(eq(data.community_id, communityId), eq(data.user_id, user.id))
    })

    expect(communityUserRecord).toBeTruthy()

})


test('deleteCommunity', async () => {

    const db = newDrizzle()
    const [user] = await db.insert(schema.profiles).values({
        id: v4()
    }).returning()

    const [communityRecord] = await db.insert(schema.communities).values({
        name: `CommunityName-${Math.random().toFixed(5)}`,
        description: "Test Description",
        visibility: "PUBLIC"
    }).returning()

    const [communityUserRecord] = await db.insert(schema.community_user).values({
        user_id: user.id,
        community_id: communityRecord.id,
        role: "OWNER"
    }).returning()



    await __test_deleteCommunity(communityRecord.id)



    const communityRecordAfterDelete = await db.query.communities.findFirst({
        where: (data, { eq }) => eq(data.id, communityRecord.id)
    })

    expect(communityRecordAfterDelete).toBeFalsy()


})

test('queryUserCommunities', async () => {

    const db = newDrizzle()
    const [user] = await db.insert(schema.profiles).values({
        id: v4()
    }).returning()

    const [communityRecord1] = await db.insert(schema.communities).values({
        name: `CommunityName-${Math.random().toFixed(5)}`,
        description: "Test Description",
        visibility: "PUBLIC"
    }).returning()

    const [communityRecord2] = await db.insert(schema.communities).values({
        name: `CommunityName-${Math.random().toFixed(5)}`,
        description: "Test Description",
        visibility: "RESTRICTED"
    }).returning()

    const communityUserRecords = await db.insert(schema.community_user).values([
        {
            user_id: user.id,
            community_id: communityRecord1.id,
        },
        {
            user_id: user.id,
            community_id: communityRecord2.id,
        }
    ]).returning()

    const userCommunities = await queryUserCommunities(user.id)

    expect(userCommunities.length).toBe(2)

    const communityIds = userCommunities.map(c => c.id)

    expect(communityIds).toContain(communityRecord1.id)
    expect(communityIds).toContain(communityRecord2.id)

});