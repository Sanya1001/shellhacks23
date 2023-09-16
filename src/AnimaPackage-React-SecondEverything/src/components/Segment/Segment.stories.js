import { Segment } from ".";

export default {
  title: "Components/Segment",
  component: Segment,
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
    frameClassName: {},
    segmentCellText: "Сreative",
    frameClassNameOverride: {},
    segmentCellText1: "Сreative",
    hasFrame: true,
  },
};
