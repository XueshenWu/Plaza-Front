'use server'


import { Select, SelectTrigger, SelectItem, SelectLabel, SelectContent, SelectGroup } from "../ui/select"
import feedFilterConfig from "./config/feed-filter.config"


export async function FeedFilter({ selectedTrending = feedFilterConfig.trendings.default, selectedRegion = feedFilterConfig.regions.default, selectedView = 'compact' }: {
    selectedTrending?: string,
    selectedRegion?: string,
    selectedView?: "card" | "compact"
}) {
    return (
        <div className="flex flex-row items-center justify-start">
            {/* trendings */}
            <Select value={selectedTrending}>
                <SelectTrigger variant={'ghost'} className=" ">
                    {selectedTrending}
                </SelectTrigger>
                <SelectContent  >
                    <SelectGroup>
                        <SelectLabel>
                            Sort by
                        </SelectLabel>
                        {feedFilterConfig.trendings.options.map((option) => (
                            <SelectItem className={`cursor-pointer  `} value={option} key={option}>
                                {option}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select value={selectedRegion}>
                <SelectTrigger variant={'ghost'} className=" ">
                    {selectedRegion}
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>
                            Sort by
                        </SelectLabel>
                        {feedFilterConfig.regions.options.map((option) => (
                            <SelectItem className={`cursor-pointer`} value={option} key={option}>
                                {option}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select value={selectedView}>
                <SelectTrigger variant={'ghost'} className="flex flex-row items-center">

                    {selectedView === 'compact' ? <img src="compact.svg" className="" /> : <img src="card.svg" className="" />}


                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>
                            View
                        </SelectLabel>

                        <SelectItem className={`cursor-pointer  `} value={'compact'} key={0}>
                            <div className="flex flex-row items-center gap-x-2">
                                <img src="compact.svg" className="h-5 w-5" />
                                <div>compact</div>
                            </div>
                        </SelectItem>
                        <SelectItem className={`cursor-pointer `} value={'card'} key={0}>
                            <div className="flex flex-row items-center gap-x-2">
                                <img src="card.svg" className="h-5 w-5" />
                                <div>card</div>
                            </div>

                        </SelectItem>

                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}