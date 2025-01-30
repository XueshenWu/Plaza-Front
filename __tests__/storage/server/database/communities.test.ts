import { expect, test, describe, it, beforeAll, assertType } from 'vitest'
import { __test_createUserProfile, __test_deleteUserProfile } from '@/storage/server/database/users'
import { __test_deleteCommunity, createCommunity, queryUserCommunities, } from '@/storage/server/database/communities'
import { communities } from '@/prisma/postgres/postgres-client'

test('createCommunity', async () => {

    const userId = await __test_createUserProfile()
    expect(userId).not.toBeNull()

    const userId_not_null = userId as string

    const communityId = await createCommunity(
        'test-community-name',
        'test-community-description',
        'PUBLIC',
        userId_not_null
    )
    expect(communityId).not.toBeNull()
  
    const communityId_not_null = communityId as string

    const joinedCommunities = await queryUserCommunities(userId_not_null)
  

    const communities_id = joinedCommunities.map((c) => c.id)

    expect(communities_id).includes(communityId_not_null)
    // success
    await __test_deleteCommunity(communityId_not_null)
    await __test_deleteUserProfile(userId_not_null)

})