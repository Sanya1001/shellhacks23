import React from "react";
import { Checkbox } from "../../components/Checkbox";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { AlignVerticalCenter01 } from "../../icons/AlignVerticalCenter01";
import { ChatAlt21 } from "../../icons/ChatAlt21";
import { CheckYes } from "../../icons/CheckYes";
import { Collection1 } from "../../icons/Collection1";
import { Pencil03 } from "../../icons/Pencil03";
import { SpaceWidth } from "../../icons/SpaceWidth";
import { Stars } from "../../icons/Stars";
import { Translate } from "../../icons/Translate";
import "./style.css";

export const Slide = () => {
  return (
    <div className="slide">
      <div className="div-2">
        <Sidebar
          className="design-component-instance-node-2"
          modeCardIcon={<Checkbox check={false} checkNoClassName="checkbox-2" />}
          modeCardIcon1={<Checkbox check={false} checkNoClassName="checkbox-2" />}
          override={<CheckYes className="icon-instance-node-3" />}
          property1="default"
          segmentSegmentCellIcon={<ChatAlt21 className="icon-instance-node-4" color="white" />}
          segmentSegmentCellIcon1={<Collection1 className="icon-instance-node-4" color="#767676" />}
        />
        <div className="frame-17">
          <div className="frame-18">
            <div className="frame-wrapper">
              <div className="frame-19">
                <div className="frame-20">
                  <div className="text-wrapper-13">2.03 PM, 15 Nov</div>
                  <p className="text-wrapper-14">Design development, UX/UI, product design - what is this?</p>
                </div>
                <div className="frame-21">
                  <Pencil03 className="icon-instance-node-3" color="#888888" />
                  <img className="icon-instance-node-3" alt="Pin angle" src="/img/pin-angle.svg" />
                </div>
              </div>
            </div>
            <div className="frame-22">
              <div className="frame-23">
                <div className="unnamed-wrrf-wrapper">
                  <img className="unnamed-wrrf" alt="Unnamed" src="/img/unnamed-932w7rr4f-transformed-1-1.png" />
                </div>
                <div className="frame-24">
                  <div className="text-wrapper-15">2.03 PM, 15 Nov</div>
                  <p className="design-development">
                    IncluScript.Ai
                    <br />
                    this is the live transcript
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Navbar className="design-component-instance-node-2" property1="default" />
          <div className="frame-25">
            <div className="frame-26">
              <div className="frame-27">
                <div className="frame-28">
                  <Translate className="icon-instance-node-4" />
                  <div className="text-wrapper-16">Translate</div>
                </div>
                <div className="frame-28">
                  <Stars className="icon-instance-node-4" />
                  <div className="text-wrapper-16">Improve</div>
                </div>
                <div className="frame-28">
                  <SpaceWidth className="icon-instance-node-4" />
                  <div className="text-wrapper-16">Make longer</div>
                </div>
                <div className="frame-28">
                  <AlignVerticalCenter01 className="icon-instance-node-4" />
                  <div className="text-wrapper-16">Make shorter</div>
                </div>
              </div>
              <div className="frame-29">
                <div className="icon-instance-node-3">
                  <div className="overlap">
                    <div className="overlap-group">
                      <img className="icon" alt="Icon" src="/img/icon.svg" />
                      <img className="star" alt="Star" src="/img/star-2.svg" />
                    </div>
                    <img className="star-2" alt="Star" src="/img/star-1.svg" />
                  </div>
                </div>
                <div className="text-wrapper-17">New dialog</div>
              </div>
            </div>
            <Input className="input-instance" description={false} ellipse="/img/ellipse-3.svg" state="generate" />
          </div>
        </div>
      </div>
    </div>
  );
};
