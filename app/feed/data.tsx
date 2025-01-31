import { FeedCardProps } from "@/components/segment/feed-card"
import type { FeedPreviewProps } from "@/components/segment/feed-preview"
import { a2 } from "@/public/preview/base64image"

const testDataCompact: FeedPreviewProps[] = [
    {
        meta: {
            post: {
                updatedAt: "1737339998",
                createdAt: "1737335996",
                isUserSubscribed: true,
                postId: "1232"
            },
            community: {
                communityId: "1231",
                communityName: "Cake Republic",
                communityIcon: "/neon_abyss.webp"
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
                createdAt: "1737335996",
                isUserSubscribed: false,
                postId: "123"
            },
            community: {
                communityId: "123",
                communityName: "Cake Republic",
                communityIcon: "/citrus.svg"
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
                type: "IMAGE",
                preview: a2,
                meta: '5',
            }
        }
    }
]

const testDataCard: FeedCardProps[] = [
    {
        mode: 'preview',
        meta: {

            post: {
                updatedAt: '1737417109',
                createdAt: '1737412109',
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
    },
    {
        mode: 'preview',
        meta: {

            post: {
                updatedAt: '1737410109',
                createdAt: '1737412129',
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
]



export const sampleCompact = (n: number) => {

    const res: FeedPreviewProps[] = []
    for (let i = 0; i < n; i++) {
        res.push(testDataCompact[Math.floor(Math.random() * testDataCompact.length)])
    }
    return res
}

export const sampleCard = (n: number) => { 
    const res: FeedCardProps[] = []
    for (let i = 0; i < n; i++) {
        res.push(testDataCard[Math.floor(Math.random() * testDataCard.length)])
    }
    return res
}