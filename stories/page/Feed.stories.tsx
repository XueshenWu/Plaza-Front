import { StoryObj, Meta } from "@storybook/react";

import Feed from "@/app/feed/page"

const meta: Meta<typeof Feed> = {
    component: Feed,
    title: "Page/Feed",
    excludeStories: /.*Data$/,
    tags: ['autodocs'],

}

export default meta

type Story = StoryObj<typeof Feed>

export const Default: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/feed',
                query: {

                }
            }
        }
    },
    args: {
        searchParams: Promise.resolve({
            primary: '',
            secondary: ''
        })
    }
}

export const Best_Default: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/feed',
                query: {
                    primary: 'Best',
                    secondary: 'all',
                }
            },
            router: {
                asPath: '/feed?primary=Best&secondary=all',
                basepath: '/feed'
            }
        }
    },
    args: {
        searchParams: Promise.resolve({
            primary: 'Best',
            secondary: 'all'
        })
    }
}


export const Hot_ThisMonth: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/feed',
                query: {
                    primary: 'Hot',
                    secondary: 'This-Month',
                }
            }
        }
    },
    args: {
        searchParams: Promise.resolve({
            primary: 'Hot',
            secondary: 'This-Month'
        })
    }
}


export const CardView: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/feed',
                query: {
                    primary: 'Best',
                    secondary: 'all',
                    viewType: 'card'
                }
            }
        }
    },
    args: {
        searchParams: Promise.resolve({
            primary: 'Best',
            secondary: 'all',
            viewType: 'card'
        })
    }
}
