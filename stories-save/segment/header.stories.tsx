import { Header } from "@/components/segment/header";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Segment/Header",
  excludeStories: /.*Data$/,

};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
 
};
