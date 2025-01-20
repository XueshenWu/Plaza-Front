import { StoryObj, Meta } from "@storybook/react";

import { FeedFilter } from "@/components/segment/feed-filter";


const meta: Meta = {
    title: "Segment/FeedFilter",
    component: FeedFilter
}

export default meta;

type Story = StoryObj<typeof FeedFilter>;

export const Default: Story = {
    args:{
        selectedRegion:"Everywhere",
        selectedTrending:"Top"
    }
}