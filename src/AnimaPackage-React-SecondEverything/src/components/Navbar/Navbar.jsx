/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HelpCircleContained2 } from "../../icons/HelpCircleContained2";
import { Lightning011 } from "../../icons/Lightning011";
import { LinkAngled2 } from "../../icons/LinkAngled2";
import "./style.css";

export const Navbar = ({ property1, className }) => {
  return (
    <div className={`navbar ${className}`}>
      <div className="frame-9">
        <div className="unnamed-wrapper">
          <img className="unnamed" alt="Unnamed" src="/img/unnamed-932w7rr4f-transformed-1-2.png" />
        </div>
        <div className="frame-10">
          <div className="text-wrapper-6">Standard plan</div>
          <div className="frame-11">
            <div className="frame-12" />
            <div className="text-wrapper-7">Active 35 000 people</div>
          </div>
        </div>
      </div>
      <div className="frame-13">
        <div className="frame-14">
          <div className="BT">
            <div className="frame-15">
              <div className="text-wrapper-8">Upgrade Plan</div>
              <Lightning011 className="icon-instance-node-2" color="#D69D0B" />
            </div>
          </div>
          <div className="BT">
            <div className="frame-15">
              <div className="text-wrapper-9">Help</div>
              <HelpCircleContained2 className="icon-instance-node-2" color="#767676" />
            </div>
          </div>
          <div className="BT">
            <div className="frame-15">
              <div className="text-wrapper-9">API</div>
              <LinkAngled2 className="icon-instance-node-2" color="#767676" />
            </div>
          </div>
        </div>
        <div className="frame-16">
          <div className="div-wrapper">
            <div className="text-wrapper-10">GG</div>
          </div>
          <div className="text-wrapper-11">Greg Gregor</div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};
