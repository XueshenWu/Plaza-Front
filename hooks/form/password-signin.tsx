
'use client';
import formSchema from '@/schemas/passwordSigninSchema';
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

type PasswordSigninDto = z.infer<typeof formSchema>

export function usePasswordSigninForm() {
    const form = useForm<PasswordSigninDto>({
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
            <FormItem className=''>
                <FormDescription className=''>Enter your email address</FormDescription>

                <FormControl   >
                    <Input
                        type="email"
                        id="email"
                        {...field}

                    />
                </FormControl>

                <FormMessage children={ <span className="text-sm">&nbsp;</span>}/> 
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

