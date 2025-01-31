import { Meta, StoryObj } from "@storybook/react";
import { a2 } from "@/public/preview/base64image";
import { http, HttpResponse, delay } from 'msw';
import { FeedPreviewContainer } from "@/components/segment/feed-preview-container";
import type { FeedPreviewProps } from "@/components/segment/feed-preview";
import { sampleCompact } from "@/app/feed/data"

const meta: Meta = {
    component: FeedPreviewContainer,
    title: 'Segment/FeedPreviewContainer',
}

export default meta;

const testData: FeedPreviewProps[] = [
    {
        meta: {
            post: {
                updatedAt: "1737339998",
                publishedAt: "1737335996",
                isUserSubscribed: true,
                postId: "1232"
            },
            community: {
                communityId: "1231",
                communityName: "Cake Republic",
                communityIcon: "neon_abyss.webp"
            },
            review: {
                comments: 120,
                upvotes: 5928,
                downvotes: 7,
                userReviewed: "up",
                previewType: 'compact'
            }
        },
        content: {
            title: "Sensational Hearthstone mini-set card reveal: Meet His majesty Grunter, the ALL-MIGHTY Space Murloc!!!",
        }
    },
    {
        meta: {
            post: {
                updatedAt: "1737335996",
                publishedAt: "1737335996",
                isUserSubscribed: false,
                postId: "123"
            },
            community: {
                communityId: "123",
                communityName: "Cake Republic",
                communityIcon: "citrus.svg"
            },
            review: {
                comments: 10,
                upvotes: 180,
                downvotes: 7,
                userReviewed: "up",
                previewType: 'compact'
            }
        },
        content: {
            title: "How to make a CHEESE cake, Here's a thorough guide to making a cake that's perfect for any occasion. Whether you're a beginner or experienced baker, these steps will help you create a delicious, moist, and beautiful cake.",
            media: {
                type: "image",
                preview: a2,
                amount: 5,
            }
        }
    }
]

type Story = StoryObj<typeof FeedPreviewContainer>;

export const Preview: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get('/api/feeds', async (req) => {

                    return HttpResponse.json({
                        data: sampleCompact(5)
                    })
                })
            ]
        }
    },
    args: {
        initialFeeds: sampleCompact(5)
    },
}

