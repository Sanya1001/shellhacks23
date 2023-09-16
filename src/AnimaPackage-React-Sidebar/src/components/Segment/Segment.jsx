/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Puzzle1 } from "../../icons/Puzzle1";
import { SegmentCell } from "../SegmentCell";
import "./style.css";

export const Segment = ({
  property1,
  className,
  frameClassName,
  segmentCellIcon = <Puzzle1 className="puzzle-1" color="#767676" />,
  segmentCellText = "Сreative",
  frameClassNameOverride,
  override = <Puzzle1 className="puzzle-1" color="white" />,
  segmentCellText1 = "Сreative",
  hasFrame = true,
}) => {
  return (
    <div className={`segment ${className}`}>
      <div className={`segment-cell-wrapper ${frameClassName}`}>
        <SegmentCell className="segment-cell-instance" icon={segmentCellIcon} state="default" text={segmentCellText} />
      </div>
      <div className={`segment-cell-instance-wrapper ${frameClassNameOverride}`}>
        <SegmentCell className="segment-cell-instance" override={override} state="active" text={segmentCellText1} />
      </div>
      {hasFrame && (
        <div className="frame-3">
          <SegmentCell
            className="segment-cell-instance"
            icon={<Puzzle1 className="puzzle-1" color="#767676" />}
            state="default"
            text="Сreative"
          />
        </div>
      )}
    </div>
  );
};

Segment.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  segmentCellText: PropTypes.string,
  segmentCellText1: PropTypes.string,
  hasFrame: PropTypes.bool,
};
