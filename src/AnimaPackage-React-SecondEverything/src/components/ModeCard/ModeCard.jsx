/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CheckYes } from "../../icons/CheckYes";
import "./style.css";

export const ModeCard = ({
  state,
  className,
  icon = <CheckYes className="checkbox-3" />,
  text = "Creative mode",
  text1 = "&#34;Creative mode&#34; could refer to a chatbot or AI language model designed to assist and inspire creativity. Such a chatbot or AI model might provide prompts, suggest ideas, or even generate content for creative projects.",
}) => {
  return (
    <div className={`mode-card ${state} ${className}`}>
      <div className="frame">
        {icon}
        <div className="div">
          <div className="creative-mode">{text}</div>
          <p className="creative-mode-could">{text1}</p>
        </div>
      </div>
    </div>
  );
};

ModeCard.propTypes = {
  state: PropTypes.oneOf(["hover-pressed", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
