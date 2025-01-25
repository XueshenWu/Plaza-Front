import { Meta, StoryObj } from "@storybook/react";

import { ResetPasswordConfirmForm } from "@/components/form/reset-password-confirm-form";

const meta: Meta<typeof ResetPasswordConfirmForm> = {
    component: ResetPasswordConfirmForm,
    title: 'Form/ResetPasswordConfirmForm',
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/',

            },
            router: {
                asPath: '/auth/confirm',
                basepath: '/'
            }
        }
    }
}

export default meta;

type Story = StoryObj<typeof ResetPasswordConfirmForm>;

export const Default: Story = {
    args: {
        email: '',
        token_hash: ''
    }
}