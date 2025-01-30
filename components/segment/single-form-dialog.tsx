'use client'
import { useState } from "react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Plus } from 'lucide-react'
import { CreateCommunityForm } from "../form/create-community-form"

type SingleFormDialogProps = {
    form: "create-community" | "create-post" | "create-topic" | "create-user",
    trigger?: React.ReactNode,
}

const defaultTitles = {
    "create-community": "Create Community",
    "create-post": "Create Post",
    "create-topic": "Create Topic",
    "create-user": "Create User"
}



export function SingleFormDialog({
    form,
    trigger = defaultTitles[form]
}: SingleFormDialogProps) {


    const [open, setOpen] = useState(false)

    let formComponent = null;
    switch (form) {
        case "create-community":
            {
                formComponent = <CreateCommunityForm onCancel={() => setOpen(false)} onSuccess={() => {
                    alert('Community created!')
                    setOpen(false)
                }} />
                break;
            }
        default:
            {
                formComponent = <div>Not implemented</div>
            }
    }


    return (<Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="flex items-center gap-x-2 entry-default px-6 py-3 w-full ">
            <Plus className="w-6 h-6" />
            <div className="w-full text-left">
                {trigger}
            </div>
        </DialogTrigger>
        <DialogContent className="rounded-xl w-11/12">
            <DialogTitle className="hidden"></DialogTitle>
            <div className="rounded-xl px-4">
                {formComponent}
            </div>

        </DialogContent>
    </Dialog>)
}
