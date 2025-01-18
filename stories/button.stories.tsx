
import {Button} from '../components/ui/button'
import { Meta, StoryObj } from '@storybook/react'
import { SearchIcon } from 'lucide-react'
import type { ButtonProps } from '../components/ui/button'



const meta:Meta<typeof Button> =  {
    component: Button,
    title: 'UI/Button',
    excludeStories: /.*Data$/,
    tags:['autodocs'],
    argTypes:{
        v_disabled:{
            control:{
                type:'boolean'
            }
        }
    }
   

}

export default meta

type Story = StoryObj<typeof Button>






export const Primary:Story = {
    args:{
        variant:"primary",
        children:"Primary",
    
    }
}

export const Default:Story = {
    args:{
        variant:"default",
        children:"Default",
       
    }
}

export const Icon:Story = {
    args:{
        variant:"ghost",
        size:"icon",
        children:<SearchIcon/>,
  
    }
}

export const Disabled:Story = {
    args:{
        v_disabled:true,
        children:"Disabled",
  
    }
}