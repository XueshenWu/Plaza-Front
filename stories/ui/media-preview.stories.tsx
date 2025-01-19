import { StoryObj, Meta } from "@storybook/react";
import { MediaPreviewImage } from "@/components/ui/media-preview";
import { a1, a2, a3 } from "@/public/preview/base64image";


const meta: Meta<typeof MediaPreviewImage> = {
    component: MediaPreviewImage,
    title: 'UI/MediaPreviewImage',
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators:[
        (Story) => (
            <div className="w-96 h-96">
                <Story />
            </div>
        )
    ]
}

export default meta

type Story = StoryObj<typeof MediaPreviewImage>

export const Image: Story = {
    args: {
        type: 'image',
        preview: a1,
        amount: 10,
        width: 96,
        height: 96
    }
}

export const Video: Story = {
    args: {
        type: 'video',
        preview: a2,
        duration: 5039,
        width: 96,
        height: 96
    }
}

export const ExternalLink: Story = {
    args: {
        type: 'external',
        preview: a3,
        url: "https://example.com",
        width: 96,
        height: 96
    }
}
