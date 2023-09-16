import { Input } from ".";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    state: {
      options: ["active", "default", "filled", "generate", "hover", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    dscr: true,
    actionDescr: true,
    description: true,
    state: "active",
    className: {},
    ellipse: "/img/ellipse-3-1.svg",
  },
};
