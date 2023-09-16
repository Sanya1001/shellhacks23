import { ModeCard } from ".";

export default {
  title: "Components/ModeCard",
  component: ModeCard,
  argTypes: {
    state: {
      options: ["hover-pressed", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "hover-pressed",
    className: {},
    text: "Creative mode",
    text1:
      "&#34;Creative mode&#34; could refer to a chatbot or AI language model designed to assist and inspire creativity. Such a chatbot or AI model might provide prompts, suggest ideas, or even generate content for creative projects.",
  },
};
