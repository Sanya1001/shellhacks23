/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Puzzle1 } from "../../icons/Puzzle1";
import "./style.css";

export const SegmentCell = ({
  state,
  className,
  icon = <Puzzle1 className="puzzle" color="#767676" />,
  text = "Сreative",
  override = <Puzzle1 className="puzzle" color="white" />,
}) => {
  return (
    <div className={`segment-cell state-${state} ${className}`}>
      {["default", "hover"].includes(state) && (
        <>
          {icon}
          <div className="text">{text}</div>
        </>
      )}

      {state === "active" && (
        <div className="frame-2">
          {override}
          <div className="text-wrapper">{text}</div>
        </div>
      )}
    </div>
  );
};

SegmentCell.propTypes = {
  state: PropTypes.oneOf(["hover", "active", "default"]),
  text: PropTypes.string,
};
