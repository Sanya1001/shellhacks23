/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LinkAngled = ({ color = "#767676", className }) => {
  return (
    <svg
      className={`link-angled ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.37851 10.1905L5.14506 12.424C4.31092 13.2581 3.83124 14.3931 3.84001 15.5859C3.84878 16.7787 4.31796 17.9206 5.19167 18.7673C6.03836 19.6411 7.18049 20.1102 8.37311 20.119C9.59293 20.128 10.701 19.6753 11.5352 18.8412L13.7687 16.6077M16.6215 13.8095L18.8549 11.576C19.6891 10.7419 20.1688 9.60691 20.16 8.41409C20.1512 7.22128 19.682 6.07939 18.8083 5.23266C17.9618 4.38617 16.8199 3.91696 15.6271 3.9082C14.4343 3.89943 13.2992 4.35189 12.465 5.18604L10.2315 7.4195M8.61311 15.3272L15.3135 8.6268"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

LinkAngled.propTypes = {
  color: PropTypes.string,
};
