import React from "react";


interface INavIconProps {
  className: string;
  color?: string;
}

const NavIcon: React.FC<INavIconProps> = props => {
  return (
          <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
        
      >
        <rect width="24" height="24" fill="white" fill-opacity="0.01" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 4H8V8H4V4ZM10 10H14V14H10V10ZM14 4H10V8H14V4ZM16 4H20V8H16V4ZM8 10H4V14H8V10ZM16 10H20V14H16V10ZM8 16H4V20H8V16ZM10 16H14V20H10V16ZM20 16H16V20H20V16Z"
          fill={props.color}
        />
      </svg>
  
  );
};
export default NavIcon;
