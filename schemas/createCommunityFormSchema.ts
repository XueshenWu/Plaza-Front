import { z } from 'zod';
import { imageSchema } from './image';
import type { TopicOptions } from '@/actions/server/getTopics';

// const createCommunityFormSchema = z.object({
//     name: z.string().min(2).max(30),
//     description: z.string().min(3).max(255),
//     banner: imageSchema(2).optional(),
//     icon: imageSchema(1).optional(),
//     topics: z.array(z.enum(['ART', 'SCIENCE', 'TECHNOLOGY', 'SPORTS', 'MUSIC', 'MOVIES', 'GAMING', 'BOOKS', 'TRAVEL', 'FOOD', 'FASHION', 'HEALTH', 'NEWS', 'OTHER'])).max(5),
//     visibility: z.enum(['PUBLIC', 'RESTRICTED', 'PRIVATE']),
// });





const createCommunityFormSchema = () => z.object({
    name: z.string().min(2).max(30),
    description: z.string().min(3).max(255),
    banner: imageSchema(2).optional(),
    icon: imageSchema(1).optional(),
    topics: z.array(z.string()).max(3),
    visibility: z.enum(['PUBLIC', 'RESTRICTED', 'PRIVATE']),
})

export default createCommunityFormSchema;