'use client'

import { useCreateCommunityForm } from "@/hooks/form/create-community"
import { useEffect, useState } from "react"
import { Form } from "../ui/form"
import { Button } from "../ui/button"
import { useWatch } from "react-hook-form"
import { Input } from "../ui/input"


export function CreateCommunityForm() {

    const { formObj,
        fields: { nameField, descriptionField, iconField, bannerField, topicsField, visibilityField },
        cancleSelectedTopics, filterTopics
    } = useCreateCommunityForm()
    const [step, setStep] = useState(0)


    const [filterString, setFilterString] = useState<string>("")


    useEffect(() => {
        filterTopics(filterString)
    }, [filterString])


    const nextStep = () => {
        setStep(prev => prev === 3 ? 3 : prev + 1)
    }
    const prevStep = () => setStep(prev => prev === 0 ? 0 : prev - 1)

    const topics = formObj.watch('topics')

    return (
        <div className="flex flex-col items-center justify-start w-full  ">

            <Form {...formObj}>
                <form onSubmit={formObj.handleSubmit((data) => console.log(data))} >
                    <div className={`${step === 0 ? ' block' : 'hidden'} `}>
                        {nameField}
                        {descriptionField}
                    </div>
                    <div className={`${step === 1 ? ' block' : 'hidden'}`}>
                        {iconField}
                        {bannerField}
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
                                    <img src="cancel.svg" alt="cancel" className="w-4 h-4" />
                                </div>)}
                            </div>

                        </div>
                        <div className="overflow-y-scroll max-h-72">
                            {topicsField}
                        </div>

                    </div>
                    <div className={`${step === 3 ? 'block' : 'hidden'}`}>
                        {visibilityField}
                    </div>

                </form>
            </Form>
            <div className="flex justify-end gap-x-4 w-full py-4">
                <Button onClick={prevStep} variant={step === 0 ? 'disabled' : "outline"}>Back</Button>

                <Button className="bg-[#0a449b] hover:bg-[#0a2f6c] text-white hover:text-white" onClick={nextStep} variant={step === 3 ? 'disabled' : "outline"}>Next</Button>
            </div>
        </div>
    )
}