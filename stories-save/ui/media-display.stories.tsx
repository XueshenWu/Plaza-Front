import { Meta, StoryObj } from "@storybook/react";

import { MediaDisplay } from "@/components/ui/media-display";



const meta: Meta<typeof MediaDisplay> = {
    component: MediaDisplay,
    title: 'UI/MediaDisplay',
}

export default meta

type Story = StoryObj<typeof MediaDisplay>

export const Image: Story = {
    args: {
        type: 'image',
        urls: [
            'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/TEIDE.JPG',
            'https://upload.wikimedia.org/wikipedia/commons/d/d4/Dorney_Park_Steel_Force_Thunderhawk.jpg',
        ]
    }
}


export const Video: Story = {
    args: {
        type: 'video',
        urls: [
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
        ]
    }
}

export const ExternalLink: Story = {
    args: {
        type: 'external-link',
        urls: [
            'https://www.radix-ui.com/primitives/docs/overview/introduction'
        ]
    }
}