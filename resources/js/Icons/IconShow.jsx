import * as React from "react";
const IconShow = (props) => (
    <svg
        width="15px"
        height="15px"
        className="fill-white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#000000"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="miter"
        {...props}
    >
        <path d="M2,12S5,4,12,4s10,8,10,8-2,8-10,8S2,12,2,12Z" />
        <circle cx={12} cy={12} r={4} />
    </svg>
);
export default IconShow;
