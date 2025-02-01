import { useForm } from "react-hook-form";
import schema from "@/schemas/createPostFormSchema"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useDropzone } from "react-dropzone";
import { useRef } from "react";

function isMedia(file: File) {
    return file.type.includes("image") || file.type.includes("video")
}





function mergeMedia(prev: File[], current: File) {


    if(!isMedia(current)){
        return [...prev]
    }

    if (prev.length === 0) {
        return [current]
    } else {
        const isPrevImage = prev[0].type.includes("image")
        const isCurrentImage = current.type.includes("image")
        if (isPrevImage === isCurrentImage) {

            const idx_same_name = prev.findIndex((file) => file.name === current.name)
            if (idx_same_name !== -1) {
                prev[idx_same_name] = current
                return [...prev]
            } else {
                return [...prev, current]
            }
        } else {
            return [current]
        }
    }

}

export function useCreatePostForm() {
    type CreatePostDto = z.infer<typeof schema>
    const form = useForm<CreatePostDto>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: {
            hashTags: [],
            title: "",
            content: "",
            mediaFiles: [],
            mediaLink: ""
        }
    })

    function clearExtraFields(formType:"Text" | "Link" | "Media") {
        if(formType === "Text"){
            form.setValue("mediaFiles",[])
            form.setValue("mediaLink","")
        }else if(formType === "Link"){
            form.setValue("mediaFiles",[])
            form.setValue("content","")
        }else{
            form.setValue("content","")
            form.setValue("mediaLink","")
        }
    
    }



    const files = form.watch("mediaFiles")

    const removeFile = (name: string) => {

        const newFiles = files.filter((file) => file.name !== name)
        console.log('newFiles', newFiles)

        form.setValue("mediaFiles", newFiles)
    }

    const titleField = (<FormField
        control={form.control}
        name="title"
        render={({ field }) => (<FormItem>
            <FormDescription>Title</FormDescription>
            <FormControl>
                <Input {...field} />
            </FormControl>
            <FormMessage
                className="text-xs  py-1 h-5"
                style={{ margin: 0 }}
                children={<span>&nbsp;</span>}
            />
        </FormItem>)}
    />)

    const contentField = (<FormField
        control={form.control}
        name="content"
        render={({ field }) => (<FormItem>
            <FormDescription>Content</FormDescription>
            <FormControl>
                <Textarea
                    maxLength={500}
                    autoHeight
                    {...field} />
            </FormControl>
            <FormMessage
                className="text-xs  py-1 h-5"
                style={{ margin: 0 }}
                children={<span>&nbsp;</span>}
            />
        </FormItem>)}
    />
    )

    // const mediaFieldFile = (<div>
    //     <input
    //         id="file"
    //         onChange={(e) => {
    //             if (e.target.files) {
    //                 const file = e.target.files[0]
    //                 const isMedia = file?.type.includes("image") || file.type.includes("video")
    //                 if (isMedia) {
    //                     form.setValue("mediaFiles", mergeMedia(files, file))
    //                 }

    //             }
    //         }}

    //         type="file" className="hidden" />
    //     <label htmlFor="file" className="cursor-pointer">
    //         <span className="text-blue-500">Upload Media</span>
    //     </label>
    // </div>)


    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        maxSize: 6 * 1024 * 1024,
        onDropAccepted: (acceptedfiles: File[]) => {
            console.log('files', acceptedfiles)
            form.setValue("mediaFiles", mergeMedia(files, acceptedfiles[0]))
        },
      
    })

    const mediaFieldFile = (<div style={{height:"96px",borderStyle: 'dashed', borderWidth: '2px'}} className="w-full rounded-lg">
        <div {...getRootProps({style:{}, className: 'dropzone h-full w-full flex items-center justify-center  rounded-lg cursor-pointer' })}>
            <input className="" {...getInputProps()} />
            <p >Drag or Click to Upload</p>
        </div>

    </div>)

    const mediaFieldLink = (<FormField
        control={form.control}
        name="mediaLink"
        render={({ field }) => (<FormItem>
            <FormDescription>External Link</FormDescription>
            <FormControl>
                <Input autoComplete="" {...field} />
            </FormControl>
            <FormMessage
                className="text-xs  py-1 h-5 "
                style={{ margin: 0 }}
                children={<span>&nbsp;</span>}
            />
        </FormItem>)} />)



    return {
        formObj: form,
        formFields: {
            titleField,
            contentField,
            mediaFieldFile,
            mediaFieldLink
        },
        removeFile,
        clearExtraFields
    }

}