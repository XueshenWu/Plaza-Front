import React from "react";
import { HouseIcon, CircleArrowOutUpRight, Laugh, Gamepad2, Clapperboard, FlaskConical, Megaphone, BookOpen, Scale } from 'lucide-react'


type SideNavigationConfig = {
    quickEntries:
    {
        title: string,
        icon: {
            active: React.ReactNode,
            inactive: React.ReactNode
        }
        href: string
    }[],
    topics: {
        base: {
            title: string,
            icon: React.ReactNode,
            sub: {
                title: string,
                href: string
            }[]
        }[],
        more: {
            title: string,
            icon: React.ReactNode,
            sub: {
                title: string,
                href: string
            }[]
        }[]
    },
    resources: {
        icon: React.ReactNode,
        title: string,
        href: string
    }[][]

}


const config: SideNavigationConfig = {
    quickEntries: [
        {
            title: "Home",
            icon: {
                active: <HouseIcon />,
                inactive: <HouseIcon />
            },
            href: "/"
        },
        {
            title: "Popular",
            icon: {
                active: <CircleArrowOutUpRight />,
                inactive: <CircleArrowOutUpRight />
            },
            href: "/feed"
        }
    ],
    topics: {
        base: [{
            title: "Internet Cuture (Viral)",
            icon: <Laugh />,
            sub: [
                {
                    title: "Amazing",
                    href: "/"
                },
                {
                    title: "Funny",
                    href: "/"
                },
                {
                    title: "Memes",
                    href: "/"
                }
            ]
        },
        {
            title: "Games",
            icon: <Gamepad2 />,
            sub: [
                {
                    title: "Action Games",
                    href: "/"
                },
                {
                    title: "Gaming Consoles & Gear",
                    href: "/"
                },
                {
                    title: "Simulation Games",
                    href: "/"
                }
            ]

        }],
        more: [
            {
                title: "Movies & TV",
                icon: <Clapperboard />,
                sub: [
                    {
                        title: "Action Movies & Series",
                        href: "/"
                    },
                    {
                        title: "Comedy Movies & Series",
                        href: "/"
                    },
                    {
                        title: "Reality TV",
                        href: "/"
                    }
                ]
            },
            {
                title: "Science",
                icon: <FlaskConical />,
                sub: [{
                    title: "Science",
                    href: "/"
                }]
            }
        ]
    },
    resources: [
        [
            {
                icon: <Megaphone />,
                title: "Advertise",
                href: "/"
            }, {
                icon: <BookOpen />,
                title: "Blog",
                href: "/"
            }
        ],
        [
            {
                icon:<Scale/>,
                title:"Privacy",
                href:"/"

            }
        ]
    ]
}


export default config;