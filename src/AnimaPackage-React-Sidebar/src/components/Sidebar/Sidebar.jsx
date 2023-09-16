/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChatAlt21 } from "../../icons/ChatAlt21";
import { CheckYes } from "../../icons/CheckYes";
import { ChevronDown2 } from "../../icons/ChevronDown2";
import { Collection1 } from "../../icons/Collection1";
import { Checkbox } from "../Checkbox";
import { ModeCard } from "../ModeCard";
import { Segment } from "../Segment";
import "./style.css";

export const Sidebar = ({
  property1,
  modeCardIcon = <Checkbox check={false} checkNoClassName="checkbox-instance" />,
  override = <CheckYes className="check-yes-instance" />,
  modeCardIcon1 = <Checkbox check={false} checkNoClassName="checkbox-instance" />,
  segmentSegmentCellIcon = <ChatAlt21 className="icon-instance-node" color="white" />,
  segmentSegmentCellIcon1 = <Collection1 className="icon-instance-node" color="#767676" />,
}) => {
  return (
    <div className="sidebar">
      <div className="frame-4">
        <div className="text-wrapper-2">Main</div>
        <div className="frame-5">
          <div className="frame-6">
            <div className="text-wrapper-3">Mode</div>
            <ModeCard
              className="mode-card-instance"
              icon={modeCardIcon}
              state="default"
              text="Creative mode"
              text1="&#34;Creative mode&#34; could refer to a chatbot or AI language model designed to assist and inspire creativity. Such a chatbot or AI model might provide prompts, suggest ideas, or even generate content for creative projects."
            />
            <ModeCard
              className="mode-card-instance"
              icon={override}
              state="default"
              text="Balanced mode"
              text1={
                <>
                  &#34;Balance mode&#34; generally refers to an AI chatbot or language model designed to strike a
                  balance between providing helpful responses
                  <br />
                  and maintaining appropriate boundaries with users.
                </>
              }
            />
            <ModeCard
              className="mode-card-instance"
              icon={modeCardIcon1}
              state="default"
              text="Strict mode"
              text1={
                <>
                  &#34;Strict mode&#34; generally refers to an AI chatbot
                  <br />
                  or language model that is designed to strictly adhere to a set of predefined rules or guidelines
                  <br />
                  for responding to user queries.
                </>
              }
            />
          </div>
          <div className="frame-7">
            <div className="text-wrapper-4">Version GPT 3.5</div>
            <ChevronDown2 className="chevron-down" />
          </div>
          <div className="frame-8">
            <CheckYes className="check-yes-instance" />
            <div className="text-wrapper-5">Show resource-link</div>
          </div>
          <div className="frame-8">
            <CheckYes className="check-yes-instance" />
            <div className="text-wrapper-5">Show proposed prompt</div>
          </div>
          <div className="frame-8">
            <Checkbox check={false} checkNoClassName="checkbox-instance" />
            <div className="text-wrapper-5">Dark mode</div>
          </div>
        </div>
      </div>
      <Segment
        className="segment-instance"
        frameClassName="design-component-instance-node"
        frameClassNameOverride="segment-2"
        hasFrame={false}
        override={segmentSegmentCellIcon}
        property1="default"
        segmentCellIcon={segmentSegmentCellIcon1}
        segmentCellText="History"
        segmentCellText1="Main"
      />
    </div>
  );
};

Sidebar.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};
