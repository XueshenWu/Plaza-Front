import { RegisterForm } from "@/components/form/RegisterForm";
import { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof RegisterForm> = {
    component: RegisterForm,
    title: 'Segment/RegisterForm',
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/',
               
            },
            router: {
                asPath: '/auth/register',
                basepath: '/'
            }
        }
    }
}

export default meta;


type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
    args:{

    }
}

export const WithOauth: Story = {
    args: {
        useOauth: true,
        onSigninClick() {
            alert('Signin Clicked')
        },
    }
}