/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Sparkles = ({ className }) => {
  return (
    <svg
      className={`sparkles ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5 3V7V3ZM3 5H7H3ZM6 17V21V17ZM4 19H8H4ZM13 3L15.286 9.857L21 12L15.286 14.143L13 21L10.714 14.143L5 12L10.714 9.857L13 3Z"
        stroke="#919191"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
