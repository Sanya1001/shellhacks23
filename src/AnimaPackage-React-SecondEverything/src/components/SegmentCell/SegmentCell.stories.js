import { SegmentCell } from ".";

export default {
  title: "Components/SegmentCell",
  component: SegmentCell,
  argTypes: {
    state: {
      options: ["hover", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "hover",
    className: {},
    text: "Сreative",
  },
};
