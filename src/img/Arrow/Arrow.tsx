import React from "react";
import ArrowIcon from "./Arrow.styles";

interface IArrowProps {}

const Arrow: React.FC<IArrowProps> = (props: any) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={ArrowIcon}
    >
      <rect
        x="12"
        y="12"
        width="12"
        height="12"
        transform="rotate(-180 12 12)"
        fill="white"
        fillOpacity="0.01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.53034 11.5303L3.46968 10.4696L7.93935 5.99994L3.46968 1.53027L4.53034 0.469614L10.0607 5.99994L4.53034 11.5303Z"
        fill="#6879BB"
      />
    </svg>
  );
};

export default Arrow;
