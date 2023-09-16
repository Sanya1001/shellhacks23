/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const HelpCircleContained = ({ color = "#767676", className }) => {
  return (
    <svg
      className={`help-circle-contained ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.999 16.8V16.8422M9.6 9.04533C9.6 7.69481 10.6745 6.6 12 6.6C13.3255 6.6 14.4 7.69481 14.4 9.04533C14.4 10.3958 13.3255 11.4907 12 11.4907C12 11.4907 11.999 12.2205 11.999 13.1209M21.6 12C21.6 17.3019 17.3019 21.6 12 21.6C6.69807 21.6 2.4 17.3019 2.4 12C2.4 6.69807 6.69807 2.4 12 2.4C17.3019 2.4 21.6 6.69807 21.6 12Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

HelpCircleContained.propTypes = {
  color: PropTypes.string,
};
