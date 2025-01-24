import { ResetPasswordRequestForm } from "@/components/segment/reset-password-request-form";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ResetPasswordRequestForm> = {
    component: ResetPasswordRequestForm,
    title: 'Segment/ResetPasswordRequestForm',
    parameters: {
        parameters: {
            nextjs: {
                appDirectory: true,
                navigation: {
                    pathname: '/',

                },
                router: {
                    asPath: '/auth/reset',
                    basepath: '/'
                }
            }
        }
    }
}

export default meta;

type Story = StoryObj<typeof ResetPasswordRequestForm>;

export const Default: Story = {
    args: {
    }
}