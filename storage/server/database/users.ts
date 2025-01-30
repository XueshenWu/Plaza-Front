import { pgClient } from "./prisma-client";
import { v4 } from 'uuid';

async function __test_createUserProfile() {
    try {
        const user = await pgClient.profiles.create({
            data: {
                
            }
        })
        return user.id
    } catch (e) {
        console.error(e)
        return null
    }

}

async function __test_deleteUserProfile(id: string) {
    try {
        const user = await pgClient.profiles.delete({
            where: {
                id
            }
        })
        return user.id
    } catch (e) {
        console.error(e)
        return null
    }
}

export {
   __test_createUserProfile,
    __test_deleteUserProfile
}