import { Meta, Story } from "@storybook/react";
import Input, { InputProps } from ".";

export default {
  title: "Components/atoms/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: "inputId",
  placeholder: "placeholder",
  value: "1",
  useDeleteIcon: true,
};
