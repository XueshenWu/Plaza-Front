
'use client';
import formSchema from '@/schemas/registerSchema';
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

type RegisterDto = z.infer<typeof formSchema>

export function useRegisterForm() {
    const form = useForm<RegisterDto>({
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
                 <FormDescription>Enter your email address</FormDescription>
                <FormControl>
                    <Input
                        type="email"
                        id="email"
                        {...field}
                    />
                </FormControl>
               
                <FormMessage className="text-xs py-1 h-5" style={{ margin: 0 }} children={ <span>&nbsp;</span>} />
            </FormItem>
        )}
    />
    )

    const passwordField = (<FormField
        control={form.control}
        name="password"
        render={({ field }) => (
            <FormItem>
               
                <FormDescription>Enter your password</FormDescription>
                <FormControl>
                    <Input
                        type="password"
                        id="password"
                        {...field}
                    />
                </FormControl>
                <FormMessage className="text-xs py-1 h-5" style={{ margin: 0 }} children={ <span>&nbsp;</span>} />
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

