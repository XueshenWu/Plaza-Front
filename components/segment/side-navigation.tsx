'use server'
import { NavLink } from "../ui/nav-link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { HouseIcon, CircleArrowOutUpRight } from 'lucide-react'
import config from "./config/side-nagivation.config"
import { Fragment } from "react"

export async function SideNavigation() {
    return (

        <nav className="font-[family-name:var(--font-ubuntu-sans)]">
            {/* Quick Entries */}
            <ul className="*:*:w-full">

                {config.quickEntries.map((entry, index) => (
                    <li key={index}>
                        <NavLink label={entry.title} variant="default" icon={entry.icon.inactive}
                            href={entry.href} className="" />
                    </li>
                ))}
            </ul>

            {/* Topics */}

            <Accordion type="single" collapsible>
                <AccordionItem value="topic">
                    <AccordionTrigger className="entry-default px-2  text-gray-500">TOPICS</AccordionTrigger>
                    <AccordionContent>
                        <div>


                            {config.topics.base.map((topic, index) => (
                                topic.sub.length < 2 ? <NavLink key={index} label={topic.title} variant="default" icon={topic.icon} href={topic.sub[0].href} className="w-full" /> :
                                    <Accordion type="single" collapsible key={index}>
                                        <AccordionItem className="border-b-0" value={`item-${index}`}>
                                            <AccordionTrigger className="entry-default px-6"><div className="flex items-center justify-start gap-x-2">

                                                {topic.icon} {topic.title}

                                            </div></AccordionTrigger>
                                            <AccordionContent>
                                                <ul>
                                                    {topic.sub.map((sub, index) => (
                                                        <li key={index}>
                                                            <NavLink label={sub.title} variant="sub" href={sub.href} className="w-full ml-4 " />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                            ))}
                        </div>
                        <input type="checkbox" id="show" className=" peer hidden " />
                        <label htmlFor="show" className="peer-checked:hidden block py-2 px-3 w-fit my-auto entry-default rounded-3xl" >see more</label>
                        {
                            <div className="peer-checked:block hidden">
                                {

                                    config.topics.more.map((topic, index) => (
                                        topic.sub.length < 2 ? <NavLink key={index} label={topic.title} variant="default" icon={topic.icon} href={topic.sub[0].href} className="w-full" /> :
                                            <Accordion type="single" collapsible key={index}>
                                                <AccordionItem className="border-b-0" value={`item-${index}`}>
                                                    <AccordionTrigger className="entry-default px-6"><div className="flex items-center justify-start gap-x-2">

                                                        {topic.icon} {topic.title}

                                                    </div></AccordionTrigger>
                                                    <AccordionContent>
                                                        <ul>
                                                            {topic.sub.map((sub, index) => (
                                                                <li key={index}>
                                                                    <NavLink label={sub.title} variant="sub" href={sub.href} className="w-full ml-4" />
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                    ))}

                                <label className="block  py-2 px-3 w-fit my-auto entry-default rounded-3xl" htmlFor="show"  >see less</label>

                            </div>

                        }
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {/* Resources */}
            <Accordion type="single" collapsible>
                <AccordionItem value="resources">
                    <AccordionTrigger className="entry-default px-2  text-gray-500">RESOURCES</AccordionTrigger>
                    <AccordionContent>
                        {config.resources.map((resource, index, arr) => (
                            <div key={index} className={`${index === arr.length - 1 ? "" : "border-b"} border-gray-200`}>
                                {
                                    resource.map((item, subindex) => (
                                        <NavLink key={`${index}-${subindex}`} label={item.title} variant="default" icon={item.icon} href={item.href} className="w-full" />
                                    ))
                                }
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </nav>
    )
}