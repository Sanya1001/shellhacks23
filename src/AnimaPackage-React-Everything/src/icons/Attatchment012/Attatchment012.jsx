/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Attatchment012 = ({ color = "#C4C4C4", className }) => {
  return (
    <svg
      className={`attatchment-01-2 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.9152 10.201L10.3101 16.8061C8.51233 18.6038 5.81613 18.8161 3.98318 16.9832C2.18541 15.1854 2.41906 12.5809 4.25201 10.748L11.6768 3.32315C12.8132 2.18679 14.6426 2.18679 15.779 3.32315C16.9154 4.45951 16.9154 6.28895 15.779 7.42531L8.22379 14.9805C7.6574 15.5469 6.7391 15.5469 6.17272 14.9805C5.60633 14.4141 5.60633 13.4958 6.17272 12.9294L12.9082 6.19396"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Attatchment012.propTypes = {
  color: PropTypes.string,
};
