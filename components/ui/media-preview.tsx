'use client'
import Image from "next/image"

import { Fragment } from "react"

type VideoPreview = {
    type: 'VIDEO',
    preview: string,
    duration: number
}

type ImagePreview = {
    type: 'IMAGE',
    preview: string,
    amount: number
}

type ExternalLinkPreview = {
    type: 'EXTERNAL',
    preview: string,
    url: string
}

// type MediaPreview = VideoPreview | ImagePreview | ExternalLinkPreview
type MediaPreview = {
    type: 'VIDEO' | 'IMAGE' | 'EXTERNAL_LINK',
    preview: string,
    meta: string //duration, amount, url
}

export type { MediaPreview, VideoPreview, ImagePreview, ExternalLinkPreview }

type MediaPreviewProps = MediaPreview & {
    className?: string,
}

const snapshotIconSize = 8

export function MediaPreviewImage({ type, className, ...props }: MediaPreviewProps) {
    let content = null
    if (type === 'IMAGE') {
        content = (
            <Fragment>
                <Image height={snapshotIconSize} width={snapshotIconSize} src="/preview/image.svg" alt="" className=" invert" />
                <div> {props.meta}</div>
            </Fragment>


        )
    } else if (type === 'VIDEO') {
        content = (
            <Fragment>
                <Image height={snapshotIconSize} width={snapshotIconSize} src="preview/video.svg" alt="" className=" invert" />
                <div>{new Date(parseInt(props.meta) * 1000).toISOString().substr(11, 8)}</div>
            </Fragment>

        )
    } else {
        content = (
            <Fragment>
                <Image height={snapshotIconSize} width={snapshotIconSize} src="preview/external-link.svg" alt="" className=" invert" />
                <div> {props.meta}</div>
            </Fragment>
        )
    }

    return (
        <div className={className + " rounded-xl relative cursor-pointer min-w-14 w-[84px] mobile-sm:w-[112px] mobile-lg:w-[148px]"}>
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