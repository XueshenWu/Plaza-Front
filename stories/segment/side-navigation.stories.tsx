import { Meta, StoryObj } from "@storybook/react";
import { SideNavigation } from '../../components/segment/side-navigation'
const meta:Meta = {
    component:SideNavigation,
    title:"Segment/SideNavigation",
    excludeStories:/.*Data$/
}


export default meta

type Story = StoryObj<typeof SideNavigation>

export const Default:Story = {
    args:{}
}