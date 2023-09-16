/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const CheckYes = ({ className }) => {
  return (
    <svg
      className={`check-yes ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="12" cy="12" fill="#636363" r="8" stroke="#636363" strokeLinecap="round" />
      <path
        className="path"
        d="M10.488 15.5999C10.4046 15.5999 10.3239 15.5838 10.2458 15.5515C10.1677 15.5192 10.0922 15.4654 10.0193 15.39L7.37918 12.6618C7.25421 12.5326 7.19432 12.3685 7.19953 12.1694C7.20474 11.9703 7.26983 11.8062 7.39481 11.677C7.51978 11.5479 7.676 11.4833 7.86346 11.4833C8.05093 11.4833 8.20715 11.5479 8.33212 11.677L10.5192 13.9371L15.6901 8.59362C15.815 8.46448 15.9687 8.3999 16.1509 8.3999C16.3332 8.3999 16.4868 8.46448 16.6118 8.59362C16.7367 8.72277 16.7992 8.88152 16.7992 9.06986C16.7992 9.2582 16.7367 9.41694 16.6118 9.54609L10.9566 15.39C10.8837 15.4654 10.8082 15.5192 10.7301 15.5515C10.652 15.5838 10.5713 15.5999 10.488 15.5999Z"
        fill="white"
      />
    </svg>
  );
};
