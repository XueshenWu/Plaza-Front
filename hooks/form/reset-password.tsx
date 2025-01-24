'use client';

import { requestSchema, confirmSchema } from '@/schemas/resetPasswordSchema';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input';

type ResetPasswordRequestDto = z.infer<typeof requestSchema>
type ResetPasswordConfirmDto = z.infer<typeof confirmSchema>
export function useResetPasswordConfirmForm() {
    const form = useForm<ResetPasswordConfirmDto>({
        resolver: zodResolver(confirmSchema),
        mode: 'onChange',
        defaultValues: {
            newPassword: '',
            confirmPassword: ''
        }
    });

    const newPasswordField = (<FormField
        control={form.control}
        name="newPassword"
        render={({ field }) => (
            <FormItem>
                <FormDescription>New Password</FormDescription>
                <FormControl>
                    <Input
                        type="password"
                        id="newPassword"
                        {...field}
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )} />
    )

    const confirmPasswordField = (<FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
            <FormItem>
                <FormDescription>Confirm Password</FormDescription>
                <FormControl>
                    <Input
                        type="password"
                        id="confirmPassword"
                        {...field}
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )} />
    )

    return {
        newPasswordField,
        confirmPasswordField,
        formObj: form
    }
}


export function useResetPasswordRequestForm() {
    const form = useForm<ResetPasswordRequestDto>({
        resolver: zodResolver(requestSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
        }
    });

    const emailField = (<FormField
        control={form.control}
        name="email"
        render={({ field }) => (
            <FormItem>
                <FormDescription>Email address</FormDescription>
                <FormControl>
                    <Input
                        type="email"
                        id="email"
                        {...field}
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )} />
    )

    return {
        emailField,
        formObj: form
    }

}
