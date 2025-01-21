import { StoryObj, Meta } from "@storybook/react";

import Feed from "@/app/feed/page"

const meta:Meta<typeof Feed> = {
    component:Feed,
    title:"Page/Feed",
    excludeStories:/.*Data$/,
    tags:['autodocs']
}

export default meta

type Story = StoryObj<typeof Feed>

export const Default : Story = {
    parameters:{
        nextjs:{
            router:{
                pathname:'/feed',
                asPath:'/feed',
                query:{
                    
                }
            }
        }
    }
}

export const Best_Default : Story = {
    parameters:{
        nextjs:{
            router:{
                pathname:'/feed',
                query:{
                    primary:'Best',
                    secondary:'all',
                }
            }
        }
    }
}


export const Hot_ThisMonth : Story = {
    parameters:{
        nextjs:{
            router:{
                pathname:'/feed',
                query:{
                    primary:'Hot',
                    secondary:'This-Month',
                }
            }
        }
    }
}

