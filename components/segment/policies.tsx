'use client';

import { useMemo } from "react";

type PoliciesProps = {
    policyType: "signin" | "signup" | "createCommunity"
}

type first = {
    title: string,
    link: string
};

type second = {
    title: string,
    link: string
}


const getDetails = (policyType: string): {
    first: first,
    second: second
} => {
    switch (policyType) {
        case "signin":
            return {
                first: {
                    title: "User Agreement",
                    link: ""
                },
                second: {
                    title: "Privacy Policy",
                    link: ""
                }
            }
        case "signup":
            return {
                first: {
                    title: "User Agreement",
                    link: ""
                },
                second: {
                    title: "Privacy Policy",
                    link: ""
                }
            }
        case "createCommunity":
            return {
                first: {
                    title: "Mod Code of Conduct",
                    link: ""
                },
                second: {
                    title: "Reddit Rules",
                    link: ""
                }
            }
        default:
            return {
                first: {
                    title: "User Agreement",
                    link: ""
                },
                second: {
                    title: "Privacy Policy",
                    link: ""
                }
            }

    }
}



export function Policies({ policyType }: PoliciesProps) {

    const { first, second } = useMemo(() => getDetails(policyType), [policyType])

    return (
        <div className="text-xs py-2 px-1 ">
            <p className="text-muted-foreground">By continuing, you agree to our&nbsp;
                <a href={first.link} target="_blank" className="text-[#115bca] hover:underline ">{first.title}</a>
                &nbsp;and acknowledge that you understand the&nbsp;
                <a href={second.link} target="_blank" className="text-[#115bca] hover:underline">{second.title}</a>
                .
            </p>
        </div>
    )
}

