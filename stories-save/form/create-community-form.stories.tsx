import { StoryObj, Meta } from "@storybook/react";

import { CreateCommunityForm } from "@/components/form/create-community-form";


const meta: Meta = {
    title: "Form/CreateCommunityForm",
    component: CreateCommunityForm
}

export default meta

type Story = StoryObj<typeof CreateCommunityForm>

export const Default: Story = {
    
}