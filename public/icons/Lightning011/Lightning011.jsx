/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Lightning011 = ({ color = "#D69D0B", className }) => {
  return (
    <svg
      className={`lightning-01-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.2222 14.4889L9.51111 21.6L18.7556 11.6444L13.7778 8.8L14.4889 2.4L5.24444 12.3556L10.2222 14.4889Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

Lightning011.propTypes = {
  color: PropTypes.string,
};
