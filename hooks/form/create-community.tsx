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
                    <FormDescription>Enter the community name</FormDescription>
                    <FormControl>
                        <Input type="text" id="name" {...field} />
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

    const descriptionField = (
        <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                    <FormDescription>Enter the community description</FormDescription>
                    <FormControl>
                        <Textarea
                            {...field}
                            placeholder="Community Name"
                            className="w-full"
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
                    <FormDescription>Enter the community banner</FormDescription>
                    <FormControl>
                        <Input type="file" id="banner" {...bannerRef} />
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

    const iconField = (
        <FormField
            control={form.control}
            name="icon"
            render={({ field }) => (
                <FormItem>
                    <FormDescription>Enter the community icon</FormDescription>
                    <FormControl>
                        <Input type="file" id="icon" {...iconRef} />
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
                                    <img src="cancel.svg" alt="cancel" className="w-4 h-4" />
                                </div>



                            </div>)
                    })} </div>
                </div>
            ))}
        </div>
    )


    const visibilityField = (<FormField
        control={form.control}
        name="visibility"
        render={({ field }) => (
            <FormItem>
                <FormDescription>Select the community visibility</FormDescription>
                <FormControl>
                    <RadioGroup {...field}>
                        <RadioGroupItem value="PUBLIC">Public</RadioGroupItem>
                        <RadioGroupItem value="RESTRICTED">Restricted</RadioGroupItem>
                        <RadioGroupItem value="PRIVATE">Private</RadioGroupItem>
                    </RadioGroup>
                </FormControl>
                <FormMessage
                    className="text-xs py-1 h-5"
                    style={{ margin: 0 }}
                    children={<span>&nbsp;</span>}
                />
            </FormItem>
        )}

    />)

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
        filterTopics
    }

}