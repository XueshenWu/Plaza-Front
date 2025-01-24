import { Meta, StoryObj } from "@storybook/react";

import { PasswordSigninForm } from "@/components/form/PasswordSigninForm";

export default {
    title: "Segment/PasswordSigninForm",
    component: PasswordSigninForm,
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/',
            },
            router: {
                asPath: '/auth/signin',
                basepath: '/'
            }
        }
    }
} as Meta;

type Story = StoryObj<typeof PasswordSigninForm>;

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