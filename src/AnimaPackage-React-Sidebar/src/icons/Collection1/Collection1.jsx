/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Collection1 = ({ color = "#111928", className }) => {
  return (
    <svg
      className={`collection-1 ${className}`}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5.6001 2.8999C5.38792 2.8999 5.18444 2.98419 5.03441 3.13422C4.88438 3.28425 4.8001 3.48773 4.8001 3.6999C4.8001 3.91208 4.88438 4.11556 5.03441 4.26559C5.18444 4.41562 5.38792 4.4999 5.6001 4.4999H10.4001C10.6123 4.4999 10.8158 4.41562 10.9658 4.26559C11.1158 4.11556 11.2001 3.91208 11.2001 3.6999C11.2001 3.48773 11.1158 3.28425 10.9658 3.13422C10.8158 2.98419 10.6123 2.8999 10.4001 2.8999H5.6001ZM3.2001 6.0999C3.2001 5.88773 3.28438 5.68425 3.43441 5.53422C3.58444 5.38419 3.78792 5.2999 4.0001 5.2999H12.0001C12.2123 5.2999 12.4158 5.38419 12.5658 5.53422C12.7158 5.68425 12.8001 5.88773 12.8001 6.0999C12.8001 6.31208 12.7158 6.51556 12.5658 6.66559C12.4158 6.81562 12.2123 6.8999 12.0001 6.8999H4.0001C3.78792 6.8999 3.58444 6.81562 3.43441 6.66559C3.28438 6.51556 3.2001 6.31208 3.2001 6.0999ZM1.6001 9.2999C1.6001 8.87556 1.76867 8.46859 2.06873 8.16853C2.36878 7.86847 2.77575 7.6999 3.2001 7.6999H12.8001C13.2244 7.6999 13.6314 7.86847 13.9315 8.16853C14.2315 8.46859 14.4001 8.87556 14.4001 9.2999V12.4999C14.4001 12.9242 14.2315 13.3312 13.9315 13.6313C13.6314 13.9313 13.2244 14.0999 12.8001 14.0999H3.2001C2.77575 14.0999 2.36878 13.9313 2.06873 13.6313C1.76867 13.3312 1.6001 12.9242 1.6001 12.4999V9.2999Z"
        fill={color}
      />
    </svg>
  );
};

Collection1.propTypes = {
  color: PropTypes.string,
};