import { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse, delay } from 'msw';
import { FeedCardContainer } from "@/components/segment/feed-card-container";
import { FeedPreviewContainer } from "@/components/segment/feed-preview-container";
import type { FeedCardProps } from "@/components/segment/feed-card";
import { sampleCard } from "@/app/feed/data"

const meta: Meta = {
    component: FeedCardContainer,
    title: 'Segment/FeedCardContainer',
}

export default meta;

type Story = StoryObj<typeof FeedCardContainer>;

export const CardView: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get('/api/feeds', async (req) => {

                    return HttpResponse.json({
                        data: sampleCard(5)
                    })
                })
            ]
        }
    },
    args: {
        initialFeeds: sampleCard(5)
    },
}

