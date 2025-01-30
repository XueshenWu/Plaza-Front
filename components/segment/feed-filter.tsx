'use client'


import Link from "next/link"
import { Select, SelectTrigger, SelectItem, SelectLabel, SelectContent, SelectGroup } from "../ui/select"
import { useRouter } from "next/navigation"
// import feedFilterConfig, {type PrimaryFilterOption} from "./config/feed-filter-v2.config"

export type PreviewType = 'compact' | 'card'

export function FeedFilter({ primary, secondary, view = 'compact' }: {
    primary: {
        selected: string,
        options: string[]
    },
    secondary?: {
        selected: string,
        options: string[]
    },
    view?: PreviewType,

}) {

    const router = useRouter()
    return (
        <div className={`flex flex-row items-center justify-start py-2 `}>
            {/* trendings */}
            <Select value={primary.selected} onValueChange={(value) => {
                router.push(`/feed?primary=${value}`)
            }} >
                <SelectTrigger variant={'ghost'} size={'compact'} className=" ">
                    {primary.selected}
                </SelectTrigger>
                <SelectContent  >
                    <SelectGroup>
                        <SelectLabel>
                            Sort by
                        </SelectLabel>
                        {
                            primary.options.map((option, index) => (
                                <SelectItem className={`cursor-pointer`} value={option} key={`primary-${index}`}>
                                    {option}
                                </SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
            {secondary && <Select

                onValueChange={(value) => {
                    router.push(`/feed?primary=${primary.selected}&secondary=${value.replace(" ", "-")}`)
                }}
                value={secondary.selected.replace("-", " ")}>
                <SelectTrigger variant={'ghost'} size={'compact'} className=" ">
                    {secondary.selected.replace("-", " ")}
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>
                            Sort by
                        </SelectLabel>
                        {secondary.options.map((option, index) => (
                            <SelectItem className={`cursor-pointer`} value={option.replace("-", ' ')} key={`$regions-${index}`}>
                                {option.replace("-", " ")}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>}
            <Select value={view} onValueChange={(value) => {
                router.push(`/feed?primary=${primary.selected}&secondary=${secondary?.selected}&viewType=${value}`)
            }}>
                <SelectTrigger variant={'ghost'} size={'compact'} className="flex flex-row items-center">

                    {view === 'compact' ? <img src="/compact.svg" className="" /> : <img src="/card.svg" className="" />}


                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>
                            View
                        </SelectLabel>

                        <SelectItem className={`cursor-pointer  `} value={'compact'} key={0}>
                            <div className="flex flex-row items-center gap-x-2">
                                <img src="/compact.svg" className="h-5 w-5" />
                                <div>compact</div>
                            </div>
                        </SelectItem>
                        <SelectItem className={`cursor-pointer `} value={'card'} key={1}>
                            <div className="flex flex-row items-center gap-x-2">
                                <img src="/card.svg" className="h-5 w-5" />
                                <div>card</div>
                            </div>

                        </SelectItem>

                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}