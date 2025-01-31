import { Meta, StoryObj } from "@storybook/react";
import { SignSwith } from "@/components/segment/sign-switch";

const meta: Meta = {
    title: 'Segment/SignSwitch',
    component: SignSwith,
    parameters: {
        nextjs: {
            appDirectory: true,
            router: {
                basePath: '/feed',
            },
        }
    },
}


export default meta

type Story = StoryObj<typeof SignSwith>

export const Default: Story = {
    args:{
        initialFormType: 'signin',
        onClose: () => {}
    }
}