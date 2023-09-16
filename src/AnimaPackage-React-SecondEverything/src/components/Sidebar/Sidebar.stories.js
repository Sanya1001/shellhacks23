import { Sidebar } from ".";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
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
