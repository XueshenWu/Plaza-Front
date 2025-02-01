'use client'

import React from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from "./dialog"
import { DialogTitle } from "@radix-ui/react-dialog"

type ImagePreviewProps = {
    file: File,
    trigger: React.ReactNode

}

export function ImagePreview({ file, trigger }: ImagePreviewProps) {
    return (<Dialog>
        <DialogTrigger>
            {trigger}
        </DialogTrigger>
        <DialogContent className="rounded-xl w-[96vw]">
            <DialogTitle></DialogTitle>
            <div className="flex justify-center max-h-[80vh] items-center ">
                {file.type.includes('image') ? <img src={URL.createObjectURL(file)} alt="" /> : <video className="max-h-full" src={URL.createObjectURL(file)} controls />}

            </div>
        </DialogContent>
    </Dialog>)
}