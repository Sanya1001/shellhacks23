import React from "react";
import { Checkbox } from "../../components/Checkbox";
import { Sidebar } from "../../components/Sidebar";
import { ChatAlt21 } from "../../icons/ChatAlt21";
import { CheckYes } from "../../icons/CheckYes";
import { Collection1 } from "../../icons/Collection1";
import "./style.css";

export const Slide = () => {
  return (
    <div className="slide">
      <div className="div-2">
        <Sidebar
          className="sidebar-instance"
          modeCardIcon={<Checkbox check={false} checkNoClassName="checkbox-2" />}
          modeCardIcon1={<Checkbox check={false} checkNoClassName="checkbox-2" />}
          override={<CheckYes className="checkbox-4-instance" />}
          property1="default"
          segmentSegmentCellIcon={<Collection1 className="icon-instance-node-2" color="#767676" />}
          segmentSegmentCellIcon1={<ChatAlt21 className="icon-instance-node-2" color="white" />}
        />
        <img className="img" alt="Frame" src="/img/frame-159.png" />
      </div>
    </div>
  );
};
