import { StoryObj, Meta } from "@storybook/react";

import { Select, SelectTrigger, SelectContent, SelectItem, SelectLabel, SelectGroup } from "@/components/ui/select";



const meta: Meta = {
    title: "UI/Select",
    component: SelectTrigger,
    tags: ["autodocs"],
    decorators: [(Story) => (
        <Select>
            <Story />
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>
                        Group 1
                    </SelectLabel>
                    <SelectItem value="1">
                        Item1
                    </SelectItem>
                    <SelectItem value="2">
                        Item2
                    </SelectItem>
                  
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>
                        Group 2
                    </SelectLabel>
                    <SelectItem value="3">
                        Item3
                    </SelectItem>
                    <SelectItem value="4">
                        Item4
                    </SelectItem>
                  
                </SelectGroup>

            </SelectContent>
        </Select>
    )]
}


export default meta

type Story = StoryObj<typeof SelectTrigger>

export const Default: Story = {
    args: {
        variant: "default",
        children: "Default",
        
    }
}

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Ghost",
    }
}


