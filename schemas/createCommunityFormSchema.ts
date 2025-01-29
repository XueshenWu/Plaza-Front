import { z } from 'zod';
import { imageSchema } from './image';
import type { TopicOptions } from '@/actions/server/getTopics';





const createCommunityFormSchema = () => z.object({
    name: z.string().min(2).max(30),
    description: z.string().min(1, {
        message: 'Please enter a description'
    }).max(255),
    banner: imageSchema(2).optional(),
    icon: imageSchema(1).optional(),
    topics: z.array(z.string()).max(3),
    visibility: z.enum(['PUBLIC', 'RESTRICTED', 'PRIVATE']),
})

export default createCommunityFormSchema;