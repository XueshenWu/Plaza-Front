import { StoryObj, Meta } from "@storybook/react";

import { FeedFilter } from "@/components/segment/feed-filter";


const meta: Meta = {
    title: "Segment/FeedFilter",
    component: FeedFilter,
    parameters: {
        nextjs: {
            appDirectory: true,
            router: {
                basePath: '/feed',
            },
        }
    },
}

export default meta;

type Story = StoryObj<typeof FeedFilter>;

export const Best: Story = {
    args: {
        primary: {
            options: ['Best', 'Hot', 'New', 'Top'],
            selected: 'Best'
        },
        secondary: {
            options: ['Everywhere', 'US', 'CA', 'CN', 'Local'],
            selected: 'Everywhere'
        }
    }
}

export const Top: Story = {
    args: {
        primary: {
            options: ['Best', 'Hot', 'New', 'Top'],
            selected: 'Top'
        },
        secondary: {
            options: ['Today', 'This-Week', 'This-Month', 'This-Year', 'All-Time'],
            selected: 'This-Week'
        }
    }
}