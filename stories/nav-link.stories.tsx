


import { NavLink } from '@/components/ui/nav-link'
import { Meta, StoryObj } from '@storybook/react'
import { HouseIcon } from 'lucide-react'

const meta: Meta<typeof NavLink> = {
    component: NavLink,
    title: 'UI/NavLink',
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    argTypes:{
        active:{
            control:{
                type:"boolean"
            }
        }
    }

}

export default meta

type Story = StoryObj<typeof NavLink>

export const Default: Story = {
    args: {
        label: "Home",
        variant:"default",
        icon:<HouseIcon/>,
        href:"/",
        active:false,
        className:""
    }
}

export const Sub: Story = {
    args: {
        label: "Sub",
        variant:"sub",
        href:"/"
    }
}



