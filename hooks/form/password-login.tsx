
'use client';
import formSchema from '@/schemas/passwordLoginSchema';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input';

type PasswordLoginDto = z.infer<typeof formSchema>

export function usePasswordLoginForm() {
    const form = useForm<PasswordLoginDto>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        }
    });


    const emailField = (<FormField
        control={form.control}
        name="email"
        render={({ field }) => (
            <FormItem>
                <FormControl>
                    <Input
                        type="email"
                        id="email"
                        {...field}
                    />
                </FormControl>
                <FormDescription>Enter your email address</FormDescription>
                <FormMessage />
            </FormItem>
        )}
    />
    )

    const passwordField = (<FormField
        control={form.control}
        name="password"
        render={({ field }) => (
            <FormItem>
                <FormControl>
                    <Input
                        type="password"
                        id="password"
                        {...field}
                    />
                </FormControl>
                <FormDescription>Enter your password</FormDescription>
                <FormMessage />
            </FormItem>
        )}
    />)

    const formObj = form

    return (
        {
            emailField,
            passwordField,
            formObj
        }
    )
}

