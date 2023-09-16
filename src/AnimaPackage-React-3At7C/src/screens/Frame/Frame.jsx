import React from "react";
import { Exclamation1 } from "../../icons/Exclamation1";
import { Sparkles1 } from "../../icons/Sparkles1";
import { Star } from "../../icons/Star";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="text-wrapper">Chat GPT</div>
        <div className="text-wrapper-2">Ver 4.0 Mar 14</div>
      </div>
      <div className="div-2" />
      <div className="div-3">
        <div className="div-4">
          <div className="div-wrapper">
            <div className="div-5">
              <div className="div-6">
                <Sparkles1 className="icon-instance-node" />
              </div>
              <div className="div-7">
                <div className="text-wrapper-3">Examples</div>
                <p className="explain-quantum">
                  <span className="span">Explain quantum computing in simple terms </span>
                  <span className="text-wrapper-4">→</span>
                </p>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <p className="p">Got any creative ideas for a 10 year old’s birthday? →</p>
          </div>
          <div className="div-wrapper">
            <p className="p">How do I make an HTTP request in Javascript? →</p>
          </div>
        </div>
        <div className="div-4">
          <div className="frame-wrapper">
            <div className="div-5">
              <div className="div-6">
                <Star className="icon-instance-node" />
              </div>
              <div className="div-7">
                <div className="text-wrapper-3">Capabilities</div>
                <p className="text-wrapper-5">Remembers what user said earlier in the conversation</p>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <p className="text-wrapper-6">Allows user to provide follow-up corrections</p>
          </div>
          <div className="div-wrapper">
            <p className="text-wrapper-6">Trained to decline inappropriate requests</p>
          </div>
        </div>
        <div className="div-4">
          <div className="frame-wrapper">
            <div className="div-5">
              <div className="div-6">
                <Exclamation1 className="icon-instance-node" />
              </div>
              <div className="div-7">
                <div className="text-wrapper-3">Limitations</div>
                <p className="text-wrapper-5">May occasionally generate incorrect information</p>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <p className="text-wrapper-6">May occasionally produce harmful instructions or biased</p>
          </div>
          <div className="div-wrapper">
            <p className="text-wrapper-6">Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};
