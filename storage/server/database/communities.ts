import { pgClient } from "./prisma-client";
import type { communities } from "@/prisma/postgres/postgres-client";

async function __test_deleteCommunity(id: string) {
    await pgClient.$transaction(async tx => {
        await tx.community_user.deleteMany({
            where: {
                community_id: id
            }
        })
        await tx.communities.delete({
            where: {
                id
            }
        })
    })
}


async function createCommunity(
    name: string,
    description: string,
    visibility: "PUBLIC" | "RESTRICTED" | "PRIVATE",
    userId: string,
    icon?: string|null,
    banner?: string|null,
    topics?: string[]
) {
    const res = await pgClient.$transaction(async (tx) => {

        try {
            const community = await tx.communities.create({
                data: {

                    name,
                    description,
                    visibility,
                    icon,
                    banner,
                   
                }
            })
            await tx.community_user.create({
                data: {
                    user_id: userId,
                    community_id: community.id,
                    role: "OWNER"
                }
            })
            return community.id
        } catch (e) {
            console.error(e)
            return null
        }


    })
    return res
}

async function queryUserCommunities(userId: string) {
    const communities_meta = await pgClient.community_user.findMany({
        where: {
            user_id: userId
        },
        select: {
            community_id: true,
            favorite: true,
        },
    })

    const communities = await pgClient.communities.findMany({
        where: {
            id: {
                in: communities_meta.map(c => c.community_id)
            }
        }
    })

 
    return communities.map(c => {
        const meta = communities_meta.find(m => m.community_id === c.id)
        return {
            ...c,
            favorite: meta?.favorite??false
        }
    }) satisfies (communities & { favorite: boolean })[]


}

export {
    createCommunity,
    queryUserCommunities,
    __test_deleteCommunity
}