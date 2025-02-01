import { z } from 'zod';

const mediaSchema = z
    .instanceof(File)
    .refine((file) => {
        const isImage = file.type.startsWith("image/")
        const isVideo = file.type.startsWith("video/")
        return isImage || isVideo
    })

export default mediaSchema;