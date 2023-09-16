/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Stars = ({ className }) => {
  return (
    <svg
      className={`stars ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.88245 1.6001L11.1026 4.89757L14.4001 6.11775L11.1026 7.33792L9.88245 10.6354L8.66228 7.33792L5.3648 6.11775L8.66228 4.89757L9.88245 1.6001Z"
        stroke="#585858"
        strokeLinejoin="round"
      />
      <path
        className="path"
        d="M4.23539 9.12951L5.30128 10.6989L6.87069 11.7648L5.30128 12.8307L4.23539 14.4001L3.16951 12.8307L1.6001 11.7648L3.16951 10.6989L4.23539 9.12951Z"
        stroke="#585858"
        strokeLinejoin="round"
      />
    </svg>
  );
};
