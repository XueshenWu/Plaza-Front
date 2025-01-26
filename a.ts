import { PrismaClient } from "@prisma/client";



async function main() {
    const prisma = new PrismaClient();
    const community = await prisma.community.findFirst()
    const community_post = await prisma.community_Post.findFirst()
    const post = await prisma.post.findFirst()
}