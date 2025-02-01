'use client';

import { useCreatePostForm } from "@/hooks/form/create-post";
import { Form } from "../ui/form";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { ImagePreview } from "../ui/imagePreview";
import type { CreatePostDto } from "@/actions/server/form/create-post";


const linkRegex = /https?:\/\/[^\s]+/g

type CreatePostFormProps = {
    userId: string,
    communityId: string,

}

export function CreatePostForm({
    userId,
    communityId,
}: CreatePostFormProps) {

    const { formObj,
        formFields: {
            titleField,
            contentField,
            mediaFieldFile,
            mediaFieldLink
        },
        removeFile,
        clearExtraFields,

    } = useCreatePostForm()

    const fileLists = formObj.watch("mediaFiles")
    const [formType, setFormType] = useState<"Text" | "Link" | "Media">("Text")
    return (

        <div className="space-y-2 ">
            <div className="flex items-center gap-x-4">
                {(["Text", "Media", "Link"] as const).map((type) => (
                    <div className="gap-y-1 p-2 flex flex-col items-center" key={type}>
                        <div
                            className={`cursor-pointer text-sm font-semibold`}
                            onClick={() => {
                                setFormType(type)
                            }}>
                            {type === 'Media' ? "Images & Video" : type}
                        </div>
                        <div className={`w-10/12 rounded-3xl transition-colors duration-100 h-1 ${formType === type ? 'bg-blue-600' : 'bg-transparent'} `} />


                    </div>
                ))}
            </div>

            <Form
                {...formObj}>
                <form onSubmit={(e) => e.preventDefault()}>
                    {titleField}
                    {formType === "Text" && contentField}
                    {formType === "Link" && mediaFieldLink}

                    {formType === "Media" && (<div>
                        {mediaFieldFile}
                        <div className="flex flex-col gap-y-1 mt-2">
                            {fileLists.map((file, index) => (
                                <div className={`flex w-full py-2 rounded items-center justify-between px-2 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-transparent'}`} key={index}>
                                    <ImagePreview file={file} trigger={<div
                                        className="underline"
                                    >
                                        {file.name}
                                    </div>} />

                                    <div
                                        className={`cursor-pointer p-1 rounded-full ${index % 2 === 0 ? 'hover:bg-slate-200' : 'hover:bg-slate-100'}`}
                                        onClick={() => {
                                            removeFile(file.name)
                                        }}><X /></div>
                                </div>
                            ))}
                        </div>
                    </div>)}

                </form>
            </Form>
            <div>
                
            </div>
            <div className="flex flex-row items-center justify-end px-2 gap-x-2">
                <Button variant={'default'}>
                    Save Draft
                </Button>
                <Button onClick={formObj.handleSubmit((data) => {

                    const createPostDto: CreatePostDto = {
                        title: data.title,
                        communityId: communityId,
                        authorId: userId,
                        content: []
                    }

                    switch (formType) {
                        case "Text":
                            {
                                createPostDto.content = data.content?.split("\n") ?? []
                                break;
                            }
                        case "Link": {
                            const link = data.mediaLink
                            if (!link || !link.match(linkRegex)) {
                                //TODO: Add error message
                                formObj.setError("mediaLink", {
                                    type: "value",
                                    message: "Legal link is required",
                                }, {
                                    shouldFocus: true
                                })
                                formObj.reset({}, {
                                    keepErrors: true,
                                })
                            } else {
                                createPostDto.media = {
                                    mediaType: "EXTERNAL_LINK",
                                    mediaUrl: [link],
                                    mediaPreview: {
                                        link: link,
                                        meta: link
                                    }
                                }
                            }
                            break
                        }
                        case "Media": {
                            const files = data.mediaFiles
                            if (files.length === 0) {
                                //TODO: Add error message
                                formObj.setError("mediaFiles", {
                                    type: "value",
                                    message: "Media is required"
                                }, {
                                    shouldFocus: true
                                })
                                formObj.reset({}, {
                                    keepErrors: true,
                                })
                            } else {
                                if (files[0].type.includes('video')) {

                                } else {

                                }
                            }
                        }

                    }

                    formObj.reset({}, {
                        keepErrors: true,
                    })
                })}>
                    Post
                </Button>
            </div>
        </div>)
}