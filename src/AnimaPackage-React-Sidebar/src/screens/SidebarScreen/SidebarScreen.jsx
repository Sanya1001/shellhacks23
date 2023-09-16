import React from "react";
import { Checkbox } from "../../components/Checkbox";
import { Sidebar } from "../../components/Sidebar";
import { ChatAlt21 } from "../../icons/ChatAlt21";
import { CheckYes } from "../../icons/CheckYes";
import { Collection1 } from "../../icons/Collection1";
import "./style.css";

export const SidebarScreen = () => {
  return (
    <Sidebar
      modeCardIcon={<Checkbox check={false} checkNoClassName="checkbox-2" />}
      modeCardIcon1={<Checkbox check={false} checkNoClassName="checkbox-2" />}
      override={<CheckYes className="checkbox-4-instance" />}
      property1="default"
      segmentSegmentCellIcon={<ChatAlt21 className="icon-instance-node-2" color="white" />}
      segmentSegmentCellIcon1={<Collection1 className="icon-instance-node-2" color="#767676" />}
    />
  );
};
