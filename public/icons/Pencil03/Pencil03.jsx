/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Pencil03 = ({ color = "#888888", className }) => {
  return (
    <svg
      className={`pencil-03 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4.8 15.6L9 19.2M12 22.2H21.6M4.2 15.6L16.0314 3.35543C17.3053 2.08153 19.3707 2.08152 20.6446 3.35542C21.9185 4.62932 21.9185 6.69473 20.6446 7.96863L8.4 19.8L2.4 21.6L4.2 15.6Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

Pencil03.propTypes = {
  color: PropTypes.string,
};
