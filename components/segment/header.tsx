'use client'
import { Code, Code2, Ellipsis, LogIn, LogOut, Megaphone, Menu, Search, ShoppingBag } from "lucide-react"
import { Button } from "../ui/button"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer"

import Link from "next/link"

import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"
import { useRouter } from "next/navigation"
import { Fragment, useEffect, useState, useMemo } from "react"
import { createClient } from "@/storage/supabase/supabase-cli"
import { useUIAuthStore } from "@/storage/client/zustand/authStore"
import { SigninButton } from "../ui/signin-button"
import useSWR from "swr"
import { SignSwith } from "./sign-switch"
import { useScreenMatch } from "@/hooks/useScreenMatch"
import { revalidatePath } from "next/cache"


export function Header({ children }: {
    children?: React.ReactNode
}) {
    const { authenticate, deauthenticate } = useUIAuthStore()

    const [showSignForm, setShowSignForm] = useState(false)

    const router = useRouter()
    const screen = useScreenMatch([
        [380, 'mobile-sm'] as const,

        [640, 'sm'] as const,
    ])

    const { signinMode, signinCallback } = useMemo<{ signinMode: 'dialog' | 'external' | 'route', signinCallback: (useDefault: () => void) => void }>(() => {
        if (screen === 'mobile-sm' || screen === undefined) {
            return {
                signinMode: 'external',
                signinCallback: (useDefault) => {
                    setShowSignForm(true)
                }
            }
        } else {
            return {
                signinMode: 'dialog',
                signinCallback: (useDefault) => {
                    useDefault()
                }
            }
        }
    }, [screen])


    useEffect(() => {
        const supabase = createClient();
        const effect = async () => {



            // const { data, error } = await supabase.auth.getUser()
            // if (!error && data) {
            //     authenticate()
            //     router.refresh()


            // } else {
            //     deauthenticate()
            //     router.refresh()



            // }

            supabase.auth.onAuthStateChange((event, session) => {
                console.log('auth event:', event)
                if (event === 'SIGNED_IN') {
                    authenticate()
                    router.refresh()
                } else if (event === 'SIGNED_OUT') {
                    deauthenticate()
           
                    router.refresh()
                    window.location.reload()
                    // TODO: Need to find a better way
                } else {

                }
            })

        }

        effect()

        return () => {

        }
    }, [])


    if (showSignForm) {
        return (
            <div className="fixed inset-0 bg-white z-50 flex justify-center items-center px-10 py-10 overflow-y-scroll no-scrollbar">
                <SignSwith initialFormType="signin" onClose={() => setShowSignForm(false)} />
            </div>

        )
    }

    return (
        <div className=" min-w-[380px] h-12 px-4 py-3 w-full flex justify-between items-center sticky top-0 z-50  bg-white shadow-md">
            <div className="flex items-center gap-x-4 ">
                <Sheet  >
                    <SheetTrigger className="h-full p-2  entry-default" >  <Menu className="" /></SheetTrigger>
                    <SheetContent side={'left'} className="overflow-y-scroll no-scrollbar w-2/3 [&>button]:hidden ">
                        <SheetHeader className="hidden">

                            <SheetTitle>
                                title
                            </SheetTitle>
                        </SheetHeader>

                        {children}
                    </SheetContent>

                </Sheet>
                <Link href={'/'}>
                    <Code2 className="cursor-pointer" size={40} stroke="rgb(76, 82, 84)" strokeWidth={2} />
                </Link>
            </div>
            <div className="flex items-center gap-x-2 ">
                <SigninButton signinMode={signinMode} signinCallback={signinCallback} size={"mobile"} className="text-[11px] px-3 " />

                <Button variant={'ghost'} size={'icon'}><Search /></Button>
                <Drawer>
                    <DrawerTrigger className="h-full p-2  entry-default"><Ellipsis /></DrawerTrigger>
                    <DrawerContent >
                        <DrawerHeader className="hidden">

                            <DrawerTitle>
                                title
                            </DrawerTitle>
                        </DrawerHeader>
                        <div className="flex flex-col my-4 px-4 *:inline-flex *:items-center *:justify-start *:w-full *:gap-x-4">
                            <SigninButton signinMode="route" variant={'ghost'}

                                toAuthenticateLabel={<Fragment><LogIn />Sign in/ Sign up</Fragment>}
                                toDeauthenticatedLabel={<Fragment><LogOut />Sign out</Fragment>}
                            />
                            <Button variant={'ghost'}><Megaphone />Advertise on Open-Reddit</Button>
                            <Button variant={'ghost'}><ShoppingBag />Shop Collectable Avatars</Button>
                        </div>
                    </DrawerContent>

                </Drawer>
            </div>
        </div>
    )
}