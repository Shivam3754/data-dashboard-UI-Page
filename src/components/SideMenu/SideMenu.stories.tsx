import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import SideMenu, { SideMenuProps } from "./SideMenu";

export default {
  title: "Component/SideMenu",
  component: SideMenu,
  argTypes: {
    className: { control: "text" }, // Allows changing the className from Storybook controls
  },
} as Meta;

const Template: StoryFn<SideMenuProps> = (args: SideMenuProps) => <SideMenu {...args} />;

export const SideMenuStory = Template.bind({});
SideMenuStory.storyName = "SideMenu";
SideMenuStory.args = {
  className: "", // Default className
};
