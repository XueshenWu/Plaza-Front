'use client'
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
}

const snapshotIconSize = 8

export  function MediaPreviewImage({ type, className,  ...props }: MediaPreviewProps) {
    let content = null
    if (type === 'image') {
        content = (
            <Fragment>
                <Image height={snapshotIconSize} width={snapshotIconSize} src={SVG_image} alt="" className=" invert" />
                <div> {(props as ImagePreview).amount}</div>
            </Fragment>


        )
    } else if (type === 'video') {
        content = (
            <Fragment>
                <Image height={snapshotIconSize} width={snapshotIconSize} src={SVG_video} alt="" className=" invert" />
                <div>{new Date((props as VideoPreview).duration * 1000).toISOString().substr(11, 8)}</div>
            </Fragment>

        )
    } else {
        content = (
            <Fragment>
                <Image height={snapshotIconSize} width={snapshotIconSize} src={SVG_external} alt="" className=" invert" />
                <div> {(props as ExternalLinkPreview).url}</div>
            </Fragment>
        )
    }

    return (
        <div className={className + " rounded-xl relative cursor-pointer min-w-14  "}>
            {/* <Image width={size?.width} height={size?.height} fill={size === undefined ? true : undefined} src={props.preview} alt="" className="rounded-xl " /> */}

            <Image src={props.preview} alt="" className="rounded-xl object-cover "

                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                width={500}
                height={300}
            />

            <span className="absolute bottom-1 left-1 text-[7px] inline-flex gap-x-2 px-1  items-center justify-start bg-black bg-opacity-50 text-white rounded-3xl">

                {content}
            </span>
        </div>
    )
}