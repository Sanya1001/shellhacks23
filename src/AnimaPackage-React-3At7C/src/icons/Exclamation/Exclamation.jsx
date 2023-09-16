/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Exclamation = ({ className }) => {
  return (
    <svg
      className={`exclamation ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 9V11M12 15H12.01M5.072 19H18.928C20.468 19 21.43 17.333 20.66 16L13.732 4C12.962 2.667 11.038 2.667 10.268 4L3.34 16C2.57 17.333 3.532 19 5.072 19Z"
        stroke="#919191"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
