/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Attatchment013 } from "../../icons/Attatchment013";
import { Microphone011 } from "../../icons/Microphone011";
import { Stop2 } from "../../icons/Stop2";
import "./style.css";

export const Input = ({
  dscr = true,
  actionDescr = true,
  description = true,
  state,
  className,
  ellipse = "/img/ellipse-3-1.svg",
}) => {
  return (
    <div className={`input state-1-${state} ${className}`}>
      <div className="input-case">
        <div className="content">
          {["active", "default", "disabled", "filled", "hover"].includes(state) && (
            <Attatchment013 className="instance-node" color={state === "disabled" ? "#C4C4C4" : "#919191"} />
          )}

          {state === "generate" && (
            <div className="ellipse-wrapper">
              <img className="img" alt="Ellipse" src={ellipse} />
            </div>
          )}

          <div className="send-a-message">
            {["active", "default", "hover"].includes(state) && <>Send a message</>}

            {["disabled", "filled"].includes(state) && (
              <p className="text-wrapper-18">Send me prompt and request ai chat GPT</p>
            )}

            {state === "generate" && <>Generate message..</>}
          </div>
          {state === "generate" && <Stop2 className="instance-node" color="black" />}

          {["active", "default", "disabled", "filled", "hover"].includes(state) && (
            <>
              <Microphone011 className="instance-node" color={state === "disabled" ? "#C4C4C4" : "#919191"} />
              <img
                className="instance-node"
                alt="Telegram fill"
                src={state === "disabled" ? "/img/telegram-fill-2.svg" : "/img/telegram-fill.svg"}
              />
            </>
          )}
        </div>
        {state === "hover" && <img className="cursor" alt="Cursor" src="/img/cursor.svg" />}
      </div>
      {dscr && (
        <div className="dscr">
          {description && <div className="text-wrapper-12">Description</div>}

          {actionDescr && <p className="p">ESC or Click to cancel</p>}
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  dscr: PropTypes.bool,
  actionDescr: PropTypes.bool,
  description: PropTypes.bool,
  state: PropTypes.oneOf(["active", "default", "filled", "generate", "hover", "disabled"]),
  ellipse: PropTypes.string,
};
