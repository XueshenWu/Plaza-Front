'use server'
import { Code, Code2, Ellipsis, Menu, Search } from "lucide-react"
import { Button } from "../ui/button"
import { Drawer, DrawerTrigger, DrawerContent } from "../ui/drawer"

export async function Header() {
    return (
        <div className="min-w-[380px] px-4 py-2 w-full flex justify-between items-center sticky top-0 z-50 bg-white shadow-md">
            <div className="flex items-center gap-x-2">
                <Button variant={'ghost'} size={'icon'}><Menu /></Button>
                <Code2 className="cursor-pointer" />
            </div>
            <div className="flex items-center gap-x-2">
                <Button variant={'primary'}>Log in</Button>
                <Button variant={'ghost'} size={'icon'}><Search /></Button>
                <Drawer>
                    <DrawerTrigger><Ellipsis/></DrawerTrigger>
                    <DrawerContent>
                        <div className="flex flex-col gap-y-2">
                            <Button variant={'default'}>Log in/ Sign up</Button>
                            <Button variant={'default'}>Advertise on Open-Reddit</Button>
                            <Button variant={'default'}>Shop Collectable Avatars</Button>
                        </div>
                    </DrawerContent>

                </Drawer>
            </div>
        </div>
    )
}