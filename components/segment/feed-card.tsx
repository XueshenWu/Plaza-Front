'use client'


import React from 'react';
import { MediaDisplay, type MediaDisplayProps } from '../ui/media-display';
import type { ReviewPlateProps } from './review-plate';
import { ReviewPlate } from './review-plate';
import { Button } from '../ui/button';
import { fromNow } from '@/utils/fromNow';

import Link from 'next/link';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { Ellipsis, Menu } from 'lucide-react';


export type FeedCardProps = {

    meta: {

        post: {
            updatedAt: string,
            createdAt: string,
            postId: string,
        },
        source: {
            author: {
                id: string,
                name: string,
                icon: string,
                isUserFollowing: boolean,
            },
            community: {
                id: string,
                name: string,
                icon: string,
                isUserSubscribing: boolean,
            }

        },
        review: Omit<ReviewPlateProps, 'postId'>
    },
    content: {
        title: string,
        body?: string[],
        media?: MediaDisplayProps
    },
    mode: 'preview' | 'full'

}


export function FeedCard({ meta, content, mode }: FeedCardProps) {
    return (
        <div className="py-2  flex flex-col items-start  border-b border-slate-300 text-xs w-full">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex items-center justtiy-start  gap-x-2">
                    <Link href={`localhost:xxxx/community/${meta.source.community.id}`} >
                        <img className="w-8 h-8 rounded-full" src={meta.source.community.icon} />
                    </Link>
                    <div>
                        <Link href={`localhost:xxxx/community/${meta.source.community.id}`} className="text-gray-700 font-semibold">
                            r/{meta.source.community.name}
                        </Link>
                        {mode === 'full' && <div>
                            {meta.source.author.name}
                        </div>}
                    </div>



                </div>
                <div className='flex items-center justify-end gap-x-1'>
                    <Button variant={'primary'} size={'mobile'} className="bg-[#0a449b] hover:bg-[#0a2f6c] text-[9px] " >
                        {meta.source.community.isUserSubscribing ? "Unsubscribe" : "Subscribe"}
                    </Button>
                    <Drawer>
                        <DrawerTrigger>
                            <div className={"flex hover:bg-slate-300 transition-colors rounded-xl px-2  py-1 cursor-pointer"}>
                                <Ellipsis className='w-3' />
                            </div>

                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader className="text-left font-bold text-blue-950">
                                Options
                            </DrawerHeader>
                            <DrawerTitle>
                                
                            </DrawerTitle>
                            <div className="*:cursor-pointer flex flex-col gap-y-2 items-start justify-start py-6 border-t-2 border-gray-300 px-8">
                                <div className="flex items-center justify-center gap-x-6">
                                    <img src="save.svg" />
                                    Save
                                </div>
                                <div className="flex items-center justify-center gap-x-6">
                                    <img src="hide.svg" />
                                    Hide
                                </div>
                                <div className="flex items-center justify-center gap-x-6">
                                    <img src="report.svg" />
                                    Report
                                </div>

                            </div>
                        </DrawerContent>
                    </Drawer>

                </div>
            </div>
            <div className="flex flex-col items-center  w-full">
                <div className="flex-grow w-full cursor-pointer py-4 font-semibold text-lg">
                    {content.title}
                </div>
                <div className="text-xs text-left w-full  text-gray-800 mb-1">

                    {fromNow(meta.post.updatedAt)}
                </div>
                <div>
                    {content.media && <MediaDisplay  {...content.media} />}
                </div>




            </div>
            <ReviewPlate {...meta.review} previewType="card" postId={meta.post.postId} />
        </div>
    )
}