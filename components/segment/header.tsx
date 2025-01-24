'use client'
import { Code, Code2, Ellipsis, LogIn, LogOut, Megaphone, Menu, Search, ShoppingBag } from "lucide-react"
import { Button } from "../ui/button"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer"
import Cookies from "js-cookie"
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
import { Fragment, useEffect, useState } from "react"
import { createClient } from "@/storage/supabase/supabase-cli"
import { useUIAuthStore } from "@/storage/client/zustand/authStore"
import { SigninButton } from "../ui/signin-button"


export function Header({ children }: {
    children?: React.ReactNode
}) {
    const router = useRouter()

    const { authenticated, deauthenticate } = useUIAuthStore()


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
                        {/* <SideNavigation /> */}
                        {children}
                    </SheetContent>

                </Sheet>

                <Code2 className="cursor-pointer" size={40} stroke="rgb(76, 82, 84)" strokeWidth={2} />
            </div>
            <div className="flex items-center gap-x-2 ">
                <SigninButton size={"mobile"} className="text-[11px] px-3 "/>
                {/* <Button
                    onClick={async () => {
                        if (authenticated) {
                            // router.replace('/api/auth/signout')
                            const supabase = createClient()
                            const { error } = await supabase.auth.signOut()
                            if (error) {
                                console.log(error)
                            } else {
                                // Cookies.remove('sb-umyivohnmwgdwsfwtfzz-auth-token')
                                // setAuthenticated(false)
                                deauthenticate()
                                router.replace('/')
                            }
                        } else {
                            router.replace('/auth/signin')
                        }

                    }}
                    className="text-[11px] " variant={'primary'} size={"mobile"}>{authenticated ? "Sign out" : "Sign in"}</Button> */}
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
                            <SigninButton variant={'ghost'}
                                toAuthenticateLabel={<Fragment><LogIn />Sign in/ Sign up</Fragment>}
                                toDeauthenticatedLabel={<Fragment><LogOut />Sign out</Fragment>}
                            />
                            <Button  variant={'ghost'}><Megaphone />Advertise on Open-Reddit</Button>
                            <Button variant={'ghost'}><ShoppingBag />Shop Collectable Avatars</Button>
                        </div>
                    </DrawerContent>

                </Drawer>
            </div>
        </div>
    )
}