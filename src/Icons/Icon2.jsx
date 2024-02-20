import React from "react";

const Icon2 = ({ selected }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="24"
    height="24"
    x="0"
    y="0"
    viewBox="0 0 32 32"
    style={{ enableBackground: "new 0 0 24 24" }}
    xmlSpace="preserve"
  >
    <g>
      <path
        d="M12.854 24c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm10-4c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zM29.56 8.218A2.974 2.974 0 0 0 27.146 7H8.02l-.999-3.542A2.006 2.006 0 0 0 5.095 2H2.854a1 1 0 1 0 0 2h2.242l1.201 4.26 2.097 9.089A5.973 5.973 0 0 0 14.241 22h7.92a5.97 5.97 0 0 0 5.735-4.236l2.117-6.881a2.974 2.974 0 0 0-.453-2.665zm-1.459 2.076-2.117 6.882A3.98 3.98 0 0 1 22.161 20h-7.92a3.98 3.98 0 0 1-3.897-3.1L8.521 9h18.625c.321 0 .614.148.805.406a.99.99 0 0 1 .15.888z"
        fill={selected ? "#3a25df" : "#808080a4"}
        opacity="1"
        data-original="#000000"
        className=""
        clipRule="evenodd"
        stroke={selected ? "#3a25df" : "#808080a4"}
      ></path>
    </g>
  </svg>
);

export default Icon2;
