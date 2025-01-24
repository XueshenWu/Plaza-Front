
import { z } from 'zod'

export const requestSchema = z.object({
    email: z.string().email(),
})

export const confirmSchema = z.object({
    newPassword: z.string().min(6, {
        message: 'Password must be at least 6 characters',
    }).max(100, {
        message: 'Password must be at most 100 characters',
    }).refine((password) => {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    }, {
        message: 'Password must contain at least one letter and one number'
    }),
    confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
})