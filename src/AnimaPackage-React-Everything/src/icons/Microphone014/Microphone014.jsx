/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Microphone014 = ({ color = "#919191", className }) => {
  return (
    <svg
      className={`microphone-01-4 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.66479 9.31428C3.88632 10.8364 4.64845 12.2278 5.81175 13.2341C6.97505 14.2403 8.46176 14.7941 9.99988 14.7941M9.99988 14.7941C11.538 14.7941 13.0247 14.2403 14.188 13.2341C15.3513 12.2278 16.1134 10.8364 16.335 9.31428M9.99988 14.7941V18M10.0008 2C9.27334 2 8.57569 2.28898 8.0613 2.80336C7.54692 3.31775 7.25794 4.01541 7.25794 4.74286V8.4C7.25794 9.12745 7.54692 9.82511 8.0613 10.3395C8.57569 10.8539 9.27334 11.1429 10.0008 11.1429C10.7282 11.1429 11.4259 10.8539 11.9403 10.3395C12.4547 9.82511 12.7437 9.12745 12.7437 8.4V4.74286C12.7437 4.01541 12.4547 3.31775 11.9403 2.80336C11.4259 2.28898 10.7282 2 10.0008 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Microphone014.propTypes = {
  color: PropTypes.string,
};
