import { z } from 'zod';
import mediaSchema from './media';


const createPostFormSchema = z.object({
    hashTags: z.array(z.string()).max(5),
    title: z.string().min(1).max(100),
    content: z.string().max(1000).optional(),
    mediaFiles: mediaSchema.array().max(5),
    mediaLink: z.string().optional(),
});

export default createPostFormSchema;