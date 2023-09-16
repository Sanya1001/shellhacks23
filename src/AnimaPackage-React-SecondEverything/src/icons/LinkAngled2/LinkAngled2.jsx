/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LinkAngled2 = ({ color = "#767676", className }) => {
  return (
    <svg
      className={`link-angled-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.37851 10.1905L5.14505 12.424C4.31092 13.2581 3.83124 14.3931 3.84001 15.5859C3.84877 16.7787 4.31796 17.9206 5.19167 18.7673C6.03836 19.641 7.18048 20.1102 8.3731 20.119C9.59293 20.1279 10.701 19.6753 11.5352 18.8411L13.7687 16.6077M16.6215 13.8094L18.8549 11.576C19.6891 10.7418 20.1688 9.60687 20.16 8.41406C20.1512 7.22124 19.682 6.07936 18.8083 5.23262C17.9618 4.38614 16.8199 3.91693 15.6271 3.90816C14.4343 3.8994 13.2992 4.35185 12.465 5.18601L10.2315 7.41946M8.6131 15.3271L15.3135 8.62676"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

LinkAngled2.propTypes = {
  color: PropTypes.string,
};
