import React from "react";

const Icon6 = ({ selected }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="24"
    height="24"
    x="0"
    y="0"
    viewBox="0 0 24 24"
    style={{ enableBackground: "new 0 0 24 24" }}
    xmlSpace="preserve"
  >
    <g>
      <path
        d="M22 11H8.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L8.41 13H22a1 1 0 0 0 0-2z"
        fill={selected ? "#3a25df" : "#808080a4"}
        opacity="1"
        data-original="#000000"
        className=""
      ></path>
      <path
        d="M13 16a1 1 0 0 0-1 1 3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5H6a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h3a5 5 0 0 0 5-5 1 1 0 0 0-1-1z"
        fill={selected ? "#3a25df" : "#808080a4"}
        opacity="1"
        data-original="#000000"
        className=""
      ></path>
    </g>
  </svg>
);

export default Icon6;
