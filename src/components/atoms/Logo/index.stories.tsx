import { Meta, Story } from "@storybook/react";
import Logo, { LogoProps } from ".";

export default {
  title: "Components/atoms/Logo",
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Basic = Template.bind({});
Basic.args = { LogoSize: "h1" };
