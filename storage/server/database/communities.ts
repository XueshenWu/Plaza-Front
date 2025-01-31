
import { eq } from "drizzle-orm"
import { newDrizzle } from "./drizzle-client"
import * as schema from "@/drizzle/schema"


async function __test_deleteCommunity(id: string) {


    const db = newDrizzle()

    await db.transaction(async (tx) => {
        await tx.delete(schema.community_user).where(
            eq(schema.community_user.community_id, id)
        )
        await db.delete(schema.communities).where(
            eq(schema.communities.id, id)
        )
    })



}


async function createCommunity(
    name: string,
    description: string,
    visibility: "PUBLIC" | "RESTRICTED" | "PRIVATE",
    userId: string,
    icon?: string | null,
    banner?: string | null,
    topics?: string[]
) {

    const db = newDrizzle()
    return await db.transaction(async (tx) => {
        const [community] = await tx.insert(schema.communities).values({
            name,
            description,
            visibility,
            icon,
            banner,
            topics
        }).returning()

        await tx.insert(schema.community_user).values({
            user_id: userId,
            community_id: community.id,
            role: "OWNER",
        })
        return community.id
    })


}

async function queryUserCommunities(userId: string) {


    const db = newDrizzle()
    const joinedCommunities = await db.query.community_user.findMany({
        with: {
            communities: true
        },
        where: (communityRecord, { eq }) => eq(communityRecord.user_id, userId)
    })

    return joinedCommunities.map(joinedCommunity => ({
        ...joinedCommunity.communities,
        favorite: joinedCommunity.favorite
    }))



}


async function queryCommunity(communityId: string) {

    const db = newDrizzle()
    const community = await db.query.communities.findFirst({
        where: (community, { eq }) => eq(community.id, communityId)
    })

    return community


}

export {
    __test_deleteCommunity,
    createCommunity,
    queryUserCommunities,
    queryCommunity,

}