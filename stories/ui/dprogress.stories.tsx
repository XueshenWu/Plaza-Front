import { StoryObj, Meta } from "@storybook/react";
import { DProgress } from "@/components/ui/dprogress";
import { Button } from "@/components/ui/button";
import React from "react";

export default {
    title: "UI/DProgress",
    component: DProgress,
} as Meta;

type Story = StoryObj<typeof DProgress>;



const Wrapper = () => {
    const [current, setCurrent] = React.useState(1)
    const total = 4
    const next = () => {
        if (current < total) {
            setCurrent(current => current + 1)
        }
    }
    const back = () => {
        if (current > 1) {
            setCurrent(current => current - 1)
        }
    }

    return (
        <div className="w-1/2 flex flex-col items-center gap-y-4">
            <DProgress total={4} current={current} />
            <div className="flex items-center justify-center gap-x-1">
                <Button onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </div>
        </div>
    )
}

export const Default: Story = {
    render: Wrapper
}