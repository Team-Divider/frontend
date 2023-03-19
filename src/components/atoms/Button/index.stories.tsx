import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from ".";

export default {
  title: "Components/atoms/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = { text: "우리는 최고다!" };
