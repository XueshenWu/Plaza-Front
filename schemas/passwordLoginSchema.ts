import { z } from 'zod';

export default z.object({
    email: z.string().email(),
    password: z.string().min(6).max(100).refine((password) => {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    }),
})