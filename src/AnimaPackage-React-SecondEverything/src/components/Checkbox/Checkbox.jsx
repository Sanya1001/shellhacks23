/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CheckYes } from "../../icons/CheckYes";
import "./style.css";

export const Checkbox = ({ check, checkNoClassName }) => {
  return (
    <>
      {check && <CheckYes className="check-yes" />}

      {!check && (
        <div className={`checkbox ${checkNoClassName}`}>
          <div className="ellipse" />
        </div>
      )}
    </>
  );
};

Checkbox.propTypes = {
  check: PropTypes.bool,
};
