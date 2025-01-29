import { PgClient, MongoClient } from "./prisma-client";


async function createCommunity(
    id: string,
    name: string,
    description: string,
    visibility: "PUBLIC" | "RESTRICTED" | "PRIVATE",
    userId: string,
    icon?: string,
    banner?: string,
) {
    const _community = await MongoClient.community.findFirst({
        where: {
            name
        }
    })
    if (_community) {
        return false
    }

    const community = await MongoClient.community.create({
        data: {
            id,
            name,
            description,
            visibility,
            icon,
            banner,
            pinned_posts: [],
            rules: [],
        }
    })

    await PgClient.community_User.create({
        data: {
            userId,
            communityId: community.id,
            role: "OWNER",
        }
    })

    return true
}

async function queryUserCommunities(userId: string) {
    const communities_id = await PgClient.community_User.findMany({
        where: {
            userId
        }
    });

    const communities = await MongoClient.community.findMany({
        where: {
            id: {
                in: communities_id.map(c => c.communityId)
            }
        }
    })

    return communities;
}