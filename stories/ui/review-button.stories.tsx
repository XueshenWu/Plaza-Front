import { Meta, StoryObj } from "@storybook/react";

import { ReviewButton, type ReviewUpdateAction, type ReviewButtonData } from "@/components/ui/review-button";
import { useEffect, useMemo, useState } from "react";


const meta: Meta = {
    title: "UI/ReviewButton",
    component: ReviewButton
}

export default meta;

type Story = StoryObj<typeof ReviewButton>;


const failedThreshold = 1
const waitTime = 200

const WithState = (props: ReviewButtonData) => {
    const [state, setState] = useState<ReviewButtonData>(props)

    const data = useMemo<ReviewButtonData>(() => state, [state])



    const sometimeFailsUpdate = async (action: ReviewUpdateAction) => {

        await new Promise(res => setTimeout(() => res(1), waitTime))
        if (Math.random() > failedThreshold) {
            console.log('oops')
            return
        }
        switch (action) {
            case 'Upvote': {
                setState(prev => ({ userReviewed: "up", upvotes: prev.upvotes + 1, downvotes: prev.downvotes }))
                break;
            }
            case 'Downvote': {
                setState(prev => ({ userReviewed: "down", upvotes: prev.upvotes, downvotes: prev.downvotes + 1 }))
                break;
            }
            case 'CancelUpvote': {
                setState(prev => ({ userReviewed: 'none', upvotes: prev.upvotes - 1, downvotes: prev.downvotes }))
                break;
            }
            case 'CancelDownvote': {
                setState(prev => ({ userReviewed: 'none', upvotes: prev.upvotes, downvotes: prev.downvotes - 1 }))
                break;
            }
            case 'SwitchToUpvote': {
                setState(prev => ({ userReviewed: "up", upvotes: prev.upvotes + 1, downvotes: prev.downvotes - 1 }))
                break;
            }
            case 'SwitchToDownvote': {
                setState(prev => ({ userReviewed: "down", upvotes: prev.upvotes - 1, downvotes: prev.downvotes + 1 }))
                break;
            }
        }
    }

    return <ReviewButton data={data} update={sometimeFailsUpdate} />
}




export const Default: Story = {
    render: () => <WithState
        upvotes={10}
        downvotes={5}
        userReviewed={'none'}

    />
}

export const Upvoted: Story = {
    render: () => <WithState
        upvotes={130}
        downvotes={5}
        userReviewed={"up"}

    />
}

export const Downvoted: Story = {
    render: () => <WithState
        upvotes={120}
        downvotes={24}
        userReviewed={"down"}

    />
}

export const Initial: Story = {
    render: () => <WithState
        upvotes={0}
        downvotes={0}
        userReviewed={"none"}

    />
}

export const Neg: Story = {
    render: () => <WithState
        upvotes={5}
        downvotes={-20}
        userReviewed={"down"}

    />
}