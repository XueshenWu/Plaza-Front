'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"

export type MediaDisplayProps = {
    type: 'IMAGE' | 'VIDEO' | "EXTERNAL_LINK",
    urls: string[]
}
export function MediaDisplay({ type, urls }: MediaDisplayProps) {


    let content = null

    if (type === 'IMAGE') {
        content = (<Carousel className="p-2 ">

            <CarouselContent className=" " >
                {urls.map((url, i) => (
                    <CarouselItem key={i} className=" grid place-content-center bg-white ">
                        <div className="relative max-w-[358px] ">
                            {/* TODO: Should add preview */}
                            <Image src={url} alt="" className="rounded-xl object-cover "

                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                width={1}
                                height={1}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

        </Carousel>)
    } else if (type === 'VIDEO') {
        content = (<video controls className="rounded-xl my-2 w-full h-full">
            <source src={urls[0]} type="video/mp4" />
            Your browser does not support the video tag.
        </video>)
    } else {
        content = <a target="_blank" className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors duration-100" href={urls[0]} >{urls[0]}</a>
    }

    return (
        <div >
            {content}
        </div>
    )
}