'use client'


import React from 'react';
import { MediaDisplay, type MediaDisplayProps } from '../ui/media-display';
import type { ReviewPlateProps } from './review-plate';
import { ReviewPlate } from './review-plate';
import { Button } from '../ui/button';
import { fromNow } from '@/utils/fromNow';

import Link from 'next/link';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { Code, Ellipsis, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { CommentInput } from './comment-input';

export type FeedCardProps = {
    meta: {

        post: {
            updatedAt: Date,
            createdAt: Date,
            postId: string,
        },
        source: {
            author: {
                id: string,
                displayName?: string | null,
                avatar?: string | null,
                isUserFollowing: boolean,
            },
            community: {
                id: string,
                name: string,
                icon?: string | null,
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

}


export function FeedCard({ meta, content, mode, show = 'community' }: FeedCardProps & {
    mode: 'preview' | 'full',
    show?: "author" | "community"
}) {

    const showLink = show === 'author' ? `/user/${meta.source.author.id}` : `/community/${meta.source.community.id}`
    const showIcon = show === 'author' ? meta.source.author.avatar : meta.source.community.icon
    const showName = show === 'author' ? `u/${meta.source.author.displayName ?? meta.source.author.id.substring(0, 5)}` : `r/${meta.source.community.name}`

    const router = useRouter()


    return (
        <div className="pt-2 pb-4  flex flex-col items-start  border-b border-slate-300 text-xs w-full">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex items-center justtiy-start  gap-x-2">
                    <Link href={showLink} >
                        {showIcon ? <img className="w-8 h-8 rounded-full" src={showIcon} /> : <Code className="w-8 h-8 rounded-full" />}
                    </Link>
                    <div>
                        <Link href={showLink} className="text-gray-700 font-semibold">
                            {showName}
                        </Link>
                        {mode === 'full' && <div>
                            {meta.source.author.displayName ?? meta.source.author.id.substring(0, 8)}
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
                                    <img src="/save.svg" />
                                    Save
                                </div>
                                <div className="flex items-center justify-center gap-x-6">
                                    <img src="/hide.svg" />
                                    Hide
                                </div>
                                <div className="flex items-center justify-center gap-x-6">
                                    <img src="/report.svg" />
                                    Report
                                </div>

                            </div>
                        </DrawerContent>
                    </Drawer>

                </div>
            </div>
            <div className={`flex flex-col items-center  w-full ${mode === 'preview' && 'cursor-pointer'}`}

                onClick={() => {
                    if (mode === 'preview') {
                        router.push(`/post/${meta.post.postId}`)
                    } else {

                    }
                }}
            >
                <div className="flex-grow w-full cursor-pointer py-1 font-semibold text-2xl">
                    {content.title}
                </div>
                {(content.body?.length ?? 0) > 0 && (mode === 'preview' ? (<div className='flex flex-col gap-y-2 w-full'>
                    {content.body?.slice(0, 2).map((b, i) => <p key={i} className="text-gray-800 text-sm">{b}</p>)}

                    <div className="text-blue-500 hover:text-blue-400 transition-colors duration-100">Read more</div>

                </div>) : <div className=''>
                    {content.body?.map((b, i) => <p key={i} className="text-gray-800 text-sm">{b}</p>)}
                </div>)}
                <div className="text-xs text-left w-full  text-gray-800 mb-1">

                    {fromNow(meta.post.updatedAt)}
                </div>
                <div>
                    {content.media && <MediaDisplay  {...content.media} />}
                </div>




            </div>
            <div className='space-y-2 w-full'>
                <ReviewPlate {...meta.review} previewType="card" postId={meta.post.postId} />
                {mode === 'full' && <CommentInput 
                target={{id: meta.post.postId, type: 'Post'}}
                
                />}
            </div>

        </div>
    )
}