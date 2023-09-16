import { Navbar } from ".";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    property1: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
  },
};
