import { StoryObj, Meta } from "@storybook/react";
import { FeedCard } from "@/components/segment/feed-card";


const meta: Meta<typeof FeedCard> = {
    title: 'Segment/FeedCard',
    component: FeedCard
}

export default meta

type Story = StoryObj<typeof FeedCard>

export const Preview: Story = {
    args: {
        mode: 'preview',
        meta: {

            post: {
                updatedAt: '1737417109',
                publishedAt: '1737412109',
                postId: '153'
            },
            source: {
                author: {
                    id: '126',
                    name: 'Me',
                    icon: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Warp_drive_starship.png',
                    isUserFollowing: true
                },
                community: {
                    id: '126',
                    name: 'Human Confederation',
                    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Chandra-crab.jpg',
                    isUserSubscribing: true
                }
            },
            review: {
                comments: 759,
                upvotes: 6738,
                downvotes: 23,
                userReviewed: 'up'
            }

        },
        content: {
            title: "FTL: Everything you need to know",
            media: {
                type: 'image',
                urls: [
                    'https://upload.wikimedia.org/wikipedia/commons/c/c3/NGC_4414_%28NASA-med%29.jpg',
                    'https://upload.wikimedia.org/wikipedia/commons/7/70/Wormhole_travel_as_envisioned_by_Les_Bossinas_for_NASA.jpg',
                    'https://upload.wikimedia.org/wikipedia/commons/5/58/Warp_drive_starship.png',
                    'https://upload.wikimedia.org/wikipedia/commons/8/85/X-RayFlare-BlackHole-MilkyWay-20140105.jpg'
                ]
            }
        }
    }
}

export const Full: Story = {
    args: {
        mode: 'full',
        meta: {

            post: {
                updatedAt: '1737410109',
                publishedAt: '1737412129',
                postId: '1253'
            },
            source: {
                author: {
                    id: '1226',
                    name: 'Blizzard',
                    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Blizzard_Entertainment_Logo_2015.svg',
                    isUserFollowing: false
                },
                community: {
                    id: '12246',
                    name: 'Hearthstone',
                    icon: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Hearthstone_2016_logo.png',
                    isUserSubscribing: false
                }
            },
            review: {
                comments: 3230,
                upvotes: 124,
                downvotes: 23,
                userReviewed: 'down'
            }

        },
        content: {
            title: "Hearthstone x Starcraft II, check our latest Starship from Terrans!",
            media: {
                type: 'video',
                urls: [
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
                ]
            }
        }
    }
}