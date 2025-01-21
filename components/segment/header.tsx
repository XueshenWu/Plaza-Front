'use server'
import { Code, Code2, Ellipsis, LogIn, Megaphone, Menu, Search, ShoppingBag } from "lucide-react"
import { Button } from "../ui/button"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer"
import { SideNavigation } from "./side-navigation"
import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"

export async function Header() {
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
                        <SideNavigation  />
                    </SheetContent>

                </Sheet>

                <Code2 className="cursor-pointer" size={40} stroke="rgb(76, 82, 84)" strokeWidth={2} />
            </div>
            <div className="flex items-center gap-x-2 ">
                <Button className="text-[11px] " variant={'primary'} size={"mobile"}>Log in</Button>
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
                            <Button variant={'ghost'}><LogIn />Log in/ Sign up</Button>
                            <Button variant={'ghost'}><Megaphone />Advertise on Open-Reddit</Button>
                            <Button variant={'ghost'}><ShoppingBag />Shop Collectable Avatars</Button>
                        </div>
                    </DrawerContent>

                </Drawer>
            </div>
        </div>
    )
}