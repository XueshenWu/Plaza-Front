import getFormSchema from "@/schemas/createCommunityFormSchema";

import { Controller, useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { z } from "zod";

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { use, useRef } from "react";
import { getTopicOptions } from "@/actions/server/getTopics";
import type { TopicOptions } from "@/actions/server/getTopics";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import _topicOptions from "@/public/topicOptions";
import { X } from "lucide-react";

// const labelAddClass = ' bg-slate-100 hover:bg-slate-200'
const labelAddClass = ' bg-slate-100 hover:bg-slate-200'
const labelChangeClass = ' bg-slate-100 hover:bg-slate-200'


export function useCreateCommunityForm() {





    const formSchema = getFormSchema();
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const cancleSelectedTopics = (topic: string) => {
        setSelectedTopics(selectedTopics.filter((t) => t !== topic))
    }

    const [filterString, setFilterString] = useState<string>("");

    const filterTopics = (str: string) => {
        setFilterString(str)
    }

    const cancelBanner = () => {
        form.setValue('banner', undefined)
    }
    const cancelIcon = () => {
        form.setValue('icon', undefined)
    }




    const topicOptions = useMemo(() => {
        if (!filterString) {
            return _topicOptions
        } else {
            const filteted = _topicOptions.map(({ topicSection, topics }) => {
                const matchedTopics = topics.filter((topic) => topic.toLowerCase().includes(filterString.toLowerCase()))
                if (matchedTopics.length === 0) {
                    return null
                } else {
                    return { topicSection, topics: matchedTopics }
                }
            }).filter((topicOption) => topicOption !== null)
            if (filteted.length === 0) {
                return null
            } else {
                return filteted
            }
        }
    }, [filterString])


    type CreateCommunityDto = z.infer<typeof formSchema>;
    const form = useForm<CreateCommunityDto>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            description: "",
            banner: undefined,
            icon: undefined,
            topics: [],
            visibility: "PUBLIC",
          
        },
    });
    const visibility = form.watch('visibility')

    const [banner, icon] = form.watch(['banner', 'icon'])
    const bannerRef = form.register("banner");
    const iconRef = form.register("icon");


    useEffect(() => {
        form.setValue("topics", selectedTopics)
    }, [selectedTopics])

    const nameField = (
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                    <FormDescription>Community name</FormDescription>
                    <FormControl>
                        <Input type="text" id="name" {...field} autoComplete={'off'} />
                    </FormControl>
                    <FormMessage
                        className="text-xs  py-1 h-5"
                        style={{ margin: 0 }}
                        children={<span>&nbsp;</span>}
                    />
                </FormItem>
            )}
        />
    );

    const descriptionField = (
        <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                    <FormDescription>Description</FormDescription>
                    <FormControl>
                        <Textarea
                           autoHeight
                            maxLength={255}
                            {...field}
                            placeholder="Community Name"

                            autoComplete="off"
                        />
                    </FormControl>
                    <FormMessage
                        className="text-xs py-1 h-5"
                        style={{ margin: 0 }}
                        children={<span>&nbsp;</span>}
                    />
                </FormItem>
            )}
        />
    );

    const bannerField = (
        <FormField
            control={form.control}
            name="banner"
            render={({ field }) => (
                <FormItem>
                    {/* <FormDescription>Banner</FormDescription> */}
                    <FormControl className="">
                        <div className="flex items-center justify-between  ">
                            <div >Banner</div>
                            <Label htmlFor="banner" className={`flex items-center gap-x-2 justify-between cursor-pointer ${banner?.length === 1 ? labelChangeClass : labelAddClass} rounded-3xl py-3 px-3`}>
                                <Input className="hidden" type="file" accept="image/*" id="banner" {...bannerRef} />
                                <img src="/image.svg" alt="upload" className="w-4 h-4" />
                                <div>
                                    {banner?.length === 1 ? 'Change' : 'Add'}
                                </div>
                            </Label>
                        </div>

                    </FormControl>

                </FormItem>
            )}
        />
    );

    const iconField = (
        <FormField
            control={form.control}
            name="icon"
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <div className="flex items-center justify-between  ">
                            <div >Icon</div>
                            <Label htmlFor="icon" className={`flex  items-center justify-between gap-x-2 cursor-pointer ${icon?.length === 1 ? labelChangeClass : labelAddClass} rounded-3xl py-3 px-3`}>
                                <Input className="hidden" type="file" accept="image/*" id="icon" {...iconRef} />
                                <img src="/image.svg" alt="upload" className="w-4 h-4" />
                                <div>
                                    {icon?.length === 1 ? 'Change' : 'Add'}
                                </div>
                            </Label>
                        </div>
                    </FormControl>

                </FormItem>
            )}
        />
    );
    const topicsField = (
        <div className="flex flex-col items-start justify-start gap-y-4  font-semibold w-full">
            {!topicOptions ? (<div className="text-left text-xs cursor-pointer gap-x-2 my-1 select-none  rounded-3xl flex flex-row items-center justify-between  hover:bg-slate-200 py-2 px-2 bg-slate-100">
                No topics matching your search
            </div>) : topicOptions.map((topicOption) => (
                <div className="flex flex-col " key={topicOption.topicSection}>
                    <div className="text-lg">{topicOption.topicSection}</div>
                    <div className="flex flex-wrap gap-x-1">{topicOption.topics.map((topic) => {
                        return (
                            <div
                                key={topic}
                                className={`cursor-pointer gap-x-2 my-1 select-none  rounded-3xl flex flex-row items-center justify-between  hover:bg-slate-200 py-2 px-2 ${selectedTopics.includes(topic) ? 'bg-slate-200' : 'bg-slate-100'}`}
                                onClick={() => {
                                    if (selectedTopics.includes(topic)) {
                                        setSelectedTopics(selectedTopics.filter((t) => t !== topic))
                                    } else {
                                        if (selectedTopics.length >= 3) {
                                            return
                                        }
                                        setSelectedTopics([...selectedTopics, topic])
                                    }
                                }}
                            >
                                <div className="text-xs">
                                    {topic}
                                </div>
                                <div className={"rounded-full hover:bg-slate-400" + " " + (selectedTopics.includes(topic) ? 'block' : 'hidden')}>
                                    <img src="/cancel.svg" alt="cancel" className="w-4 h-4" />
                                </div>



                            </div>)
                    })} </div>
                </div>
            ))}
        </div>
    )


    const visibilityField = (<RadioGroup
        defaultValue="PUBLIC"
        value={visibility}
        onValueChange={(value) => {

            if (value !== 'RESTRICTED' && value !== 'PRIVATE' && value !== 'PUBLIC') {
                return
            }

            form.setValue('visibility', value)
        }}
        className="w-full flex flex-col">


        {
            [{
                image: '/world.svg',
                label: 'Public',
                description: 'Anyone can view, post, and comment to this community',
                value: 'PUBLIC',
            }, {
                image: '/eyes.svg',
                label: "Restricted",
                description: 'Anyone can view, but only approved users can contribute',
                value: 'RESTRICTED',
            }, {
                image: '/lock.svg',
                label: 'Private',
                description: 'Only approved members can view and contribute',
                value: 'PRIVATE',
            }
            ].map(({ image, label, description, value }) => (
                <Label
                    key={value}
                    htmlFor={value}

                    className={`rounded-sm transition-colors duration-100 select-none cursor-pointer flex items-center justify-between gap-x-2 px-4 py-3 ${visibility === value && 'bg-slate-200'}`} >
                    <div className="flex items-center justify-start gap-x-4">
                        <img src={image} alt={label} className={`w-6 h-6 ${visibility === value && ' stroke-white'}`} />
                        <div>
                            <div>{label}</div>
                            <p className="text-xs text-gray-500">
                                {description}
                            </p>
                        </div>
                    </div>
                    <RadioGroupItem value={value} id={value} />
                </Label>
            ))
        }


    </RadioGroup>)

    return {
        formObj: form,
        fields: {
            nameField,
            descriptionField,
            bannerField,
            iconField,
            topicsField,
            visibilityField,
        },
        cancleSelectedTopics,
        filterTopics,
        cancelBanner,
        cancelIcon
    }

}