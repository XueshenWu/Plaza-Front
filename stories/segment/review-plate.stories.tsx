import { Meta, StoryObj } from "@storybook/react";

import { ReviewPlate } from "@/components/segment/review-plate";


const meta:Meta<typeof ReviewPlate> = {
    title: 'Segment/ReviewPlate',
    component: ReviewPlate
}

export default meta


type Story = StoryObj<typeof ReviewPlate>


export const Default: Story = {
    args:{
        comments: 10,
        postId: "123",
        upvotes: 180,
        downvotes: 7,
        userReviewed: "none"
    }
}