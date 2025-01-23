import { Meta, StoryObj } from "@storybook/react";

import { PasswordLoginForm } from "@/components/form/PasswordLoginForm";

export default {
    title: "Segment/PasswordLoginForm",
    component: PasswordLoginForm,
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/',
                query: {
                    primary: 'Best',
                    secondary: 'all',
                }
            },
            router: {
                asPath: '/auth/login',
                basepath: '/'
            }
        }
    }
} as Meta;

type Story = StoryObj<typeof PasswordLoginForm>;

export const Default: Story = {
    args: {
        useOauth: false,
    }
}

export const WithOauth: Story = {
    args: {
        useOauth: true,
        onSignupClick() {
            alert('Signup Clicked')
        },
    }
}