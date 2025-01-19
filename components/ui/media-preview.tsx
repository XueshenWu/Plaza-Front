'use server'
import Image from "next/image"
import SVG_image from "@/public/preview/image.svg"
import SVG_video from "@/public/preview/video.svg"
import SVG_external from "@/public/preview/external-link.svg"
import { Fragment } from "react"

type VideoPreview = {
    type: 'video',
    preview: string,
    duration: number
}

type ImagePreview = {
    type: 'image',
    preview: string,
    amount: number
}

type ExternalLinkPreview = {
    type: 'external',
    preview: string,
    url: string
}

type MediaPreview = VideoPreview | ImagePreview | ExternalLinkPreview

export type { MediaPreview, VideoPreview, ImagePreview, ExternalLinkPreview }

type MediaPreviewProps = MediaPreview & {
    className?: string,
    width?: number,
    height?: number
}

export async function MediaPreviewImage({ type, className, width, height, ...props }: MediaPreviewProps) {
    let content = null
    if (type === 'image') {
        content = (
            <Fragment>
                <Image height={20} width={20} src={SVG_image} alt="" className=" invert" />
                <div> {(props as ImagePreview).amount}</div>
            </Fragment>


        )
    } else if (type === 'video') {
        content = (
            <Fragment>
                <Image height={20} width={20} src={SVG_video} alt="" className=" invert" />
                <div>{new Date((props as VideoPreview).duration * 1000).toISOString().substr(11, 8)}</div>
            </Fragment>

        )
    } else {
        content = (
            <Fragment>
                <Image height={20} width={20} src={SVG_external} alt="" className=" invert" />
                <div> {(props as ExternalLinkPreview).url}</div>
            </Fragment>
        )
    }

    return (
        <div className={className+" rounded-xl relative cursor-pointer"}>
            <Image width={width} height={height} fill={width===undefined||height===undefined?true:undefined} src={props.preview} alt=""  className="rounded-xl w-full"/>
            <span className="absolute bottom-4 left-4 inline-flex gap-x-2 px-2 py-1 items-center justify-start bg-black bg-opacity-50 text-white rounded-3xl">

                {content}
            </span>
        </div>
    )
}