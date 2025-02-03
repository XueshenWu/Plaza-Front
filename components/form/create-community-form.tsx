'use client'

import { useCreateCommunityForm } from "@/hooks/form/create-community"
import { useEffect, useState } from "react"
import { Form } from "../ui/form"
import { Button } from "../ui/button"

import { Input } from "../ui/input"
import { DProgress } from "../ui/dprogress"
import { CommunityPreviewer } from "../ui/community-previewer"
import { Policies } from "../segment/policies"
import { submitCreateCommunity } from "@/actions/server/form/create-community"
import {  readFileAsArrayBuffer } from "@/utils/read-file-promise"


type CreateCommunityFormProps = {
    onCancel: () => void
    onSuccess: () => void
}


export function CreateCommunityForm({
    onCancel,
    onSuccess
}: CreateCommunityFormProps) {

    const { formObj,
        fields: { nameField, descriptionField, iconField, bannerField, topicsField, visibilityField },
        cancleSelectedTopics, filterTopics, cancelBanner, cancelIcon
    } = useCreateCommunityForm()
    const [step, setStep] = useState(0)


    const [filterString, setFilterString] = useState<string>("")


    useEffect(() => {
        filterTopics(filterString)
    }, [filterString])




    const validateStep = async (step: number) => {

        switch (step) {
            case 0:
                {
                    return await formObj.trigger('name') && await formObj.trigger('description')
                }
            case 1:
                {
                    return await formObj.trigger('icon') && await formObj.trigger('banner')
                }
            case 2:
                {
                    return await formObj.trigger('topics')
                }
            case 3:
                {
                    return await formObj.trigger('visibility')
                }
            default:
                {
                    return false
                }
        }
    }

    const nextStep = async () => {

        const isValid = await validateStep(step)
        if (!isValid) {
            return
        }

        setStep(prev => prev === 3 ? 3 : prev + 1)
    }
    const prevStep = () => setStep(prev => prev === 0 ? 0 : prev - 1)

    const topics = formObj.watch('topics')
    const [name, description] = formObj.watch(['name', 'description'])
    const [banner, icon] = formObj.watch(['banner', 'icon'])

    return (
        <div className="flex flex-col items-center justify-start w-full   ">

            <Form {...formObj}>
                <form onSubmit={() => { }} className="w-full" >
                    <div className={`${step === 0 ? ' block' : 'hidden'} w-full`}>
                        <div className="space-y-6">
                            <div className="text-2xl font-semibold">
                                Tell us about your community
                            </div>
                            <div className="text-sm text-gray-600">
                                A name and description will help people understand what your community is all about.
                            </div>
                        </div>
                        <div className="my-6 w-full px-4 ">
                            <CommunityPreviewer plain name={name} description={description} />
                        </div>



                        {nameField}
                        {descriptionField}
                    </div>
                    <div className={`${step === 1 ? ' block' : 'hidden'}`}> 

                        <div className="space-y-6">
                            <div className="text-2xl font-semibold">
                                Style your community
                            </div>
                            <div className="text-sm text-gray-600">
                                Adding visual flair will catch new members attention and help establish your community’s culture! You can update this at any time.
                            </div>
                        </div>
                        <div className="my-6 w-full px-4">
                            <CommunityPreviewer name={name} description={description} icon={icon} banner={banner} />
                        </div>
                        <div className="hover:bg-slate-50 cursor-pointer  px-4 py-2 rounded-md w-full ">
                            {iconField}
                        </div>
                        {icon?.length === 1 && <div
                            onClick={cancelIcon}
                            className="hover:bg-slate-50 cursor-pointer  px-4 py-2 rounded-md w-full border flex items-center justify-between ">
                            <div className="text-xs text-gray-400">
                                {icon[0].name}
                            </div>
                            <div className="p-2 hover:bg-slate-200 rounded-full">
                                <img src="/trash.svg" alt="delete" className="w-4 h-4  " />
                            </div>

                        </div>}
                        <div className="hover:bg-slate-50 cursor-pointer  px-4 py-2 rounded-md w-full ">
                            {bannerField}
                        </div>
                        {banner?.length === 1 && <div
                            onClick={cancelBanner}
                            className="hover:bg-slate-50 cursor-pointer  px-4 py-2 rounded-md w-full border flex items-center justify-between ">
                            <div className="text-xs text-gray-400">
                                {banner[0].name}
                            </div>
                            <div className="p-2 hover:bg-slate-200 rounded-full">
                                <img src="/trash.svg" alt="delete" className="w-4 h-4  " />
                            </div>
                        </div>}

                    </div>
                    <div className={`${step === 2 ? ' block ' : 'hidden'}`}>
                        <div className="">
                            <div>
                                <div className="text-2xl font-bold">
                                    Add Topics
                                </div>
                                <div className="text-sm text-gray-500">
                                    Add up to 3 topics to help interested redditors find your community.
                                </div>
                            </div>
                            <Input value={filterString} onInput={(e) => {
                                setFilterString(e.currentTarget.value)
                            }} placeholder="Filter topics" className="w-full rounded-3xl mt-6" />
                            <h2 className="text-lg font-semibold my-4">Topics {topics.length}/3</h2>
                            <div className="flex gap-x-2 items-center justify-start min-h-14  pb-6 flex-wrap gap-y-2">
                                {topics.map((topic) => <div
                                    onClick={() => cancleSelectedTopics(topic)}
                                    className="p-2 font-semibold flex items-center justify-between gap-x-2 outline outline-1 select-none outline-gray-300 rounded-lg text-xs cursor-pointer"
                                    key={topic}>

                                    <div>
                                        {topic}
                                    </div>
                                    <img src="/cancel.svg" alt="cancel" className="w-4 h-4" />
                                </div>)}
                            </div>

                        </div>
                        <div className="overflow-y-scroll max-h-72">
                            {topicsField}
                        </div>

                    </div>
                    <div className={`${step === 3 ? 'block' : 'hidden'} space-y-6`}>
                        <div className="">
                            <div className="text-2xl font-semibold">
                                What kind of community is this?
                            </div>
                            <div className="text-[12px] leading-tight text-gray-600 mt-4">
                                Decide who can view and contribute in your community. Only public communities show up in search. <strong>Important:</strong> Once set, you will need to submit a request to change your community type.
                            </div>
                        </div>

                        {visibilityField}
                        
                        <Policies policyType={"createCommunity"} />

                    </div>

                </form>
            </Form>

            <div className="flex items-center justify-between w-full">
                <DProgress total={4} current={step + 1} />
                <div className="flex justify-end gap-x-4 w-full py-4">
                    <Button className={`${step === 0 ? 'block' : 'hidden'}`} onClick={onCancel} variant={"outline"}>Cancel</Button>

                    <Button onClick={prevStep} variant={"outline"} className={`${step === 0 ? 'hidden' : 'block'}`}>Back</Button>
                    <Button className={`${step === 3 ? 'block' : 'hidden'}   bg-[#0a449b] hover:bg-[#0a2f6c] text-white hover:text-white`} onClick={formObj.handleSubmit(async (data) => {
                       

                        const {
                            name,
                            description,
                            icon,
                            banner,
                            topics,
                            visibility
                        } = data

                        const iconData = icon?.[0]?await readFileAsArrayBuffer(icon[0]):null
                        const bannerData = banner?.[0]?await readFileAsArrayBuffer(banner[0]):null
                        

                    

                        const res = await submitCreateCommunity(name, description, visibility, iconData, bannerData, topics)

                        if(res){
                            onSuccess()
                        }else{
                            console.error('Error creating community')
                        }

                  
                    })} variant={"outline"}>Create</Button>

                    <Button className={`${step === 3 ? 'hidden' : 'block'}   bg-[#0a449b] hover:bg-[#0a2f6c] text-white hover:text-white`} onClick={nextStep} variant={step === 3 ? 'disabled' : "outline"}>Next</Button>
                </div>
            </div>

        </div>
    )
}