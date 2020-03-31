import React from "react";

interface IExitIconProps {
  className?: string;
}
const ExitLogo:React.FC<IExitIconProps> = (props: any) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
      >
        <path
          fill="#6879BB"
          d="M27,3V29a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V27H7v1H25V4H7V7H5V3A1,1,0,0,1,6,2H26A1,1,0,0,1,27,3ZM10.71,20.29,7.41,17H18V15H7.41l3.3-3.29L9.29,10.29l-5,5a1,1,0,0,0,0,1.42l5,5Z"
        ></path>
      </svg>
    </>
  );
};

export default ExitLogo;
