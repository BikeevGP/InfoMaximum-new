import React from "react";

interface ICircleProps {
  className: string;
}

const Circle: React.FC<ICircleProps> = (props: any) => {
  return (
    <svg
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <rect width="24" height="24" fill="white" fillOpacity="0.01" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 4.99994L10.5 7.59802V6.18896C7.91211 6.85504 6 9.20416 6 11.9999C6 14.2527 7.24146 16.2154 9.07751 17.2413L7.13513 18.3513C5.229 16.8891 4 14.588 4 11.9999C4 8.09436 6.79858 4.84241 10.5 4.14032V2.40186L15 4.99994ZM14.9225 6.75854C16.7585 7.78448 18 9.74719 18 11.9999C18 14.7957 16.0879 17.1448 13.5 17.8109V16.4019L9 18.9999L13.5 21.598V19.8596C17.2014 19.1575 20 15.9055 20 11.9999C20 9.41187 18.771 7.11078 16.8649 5.64856L14.9225 6.75854Z"
          fill="#535374"
        />
      </g>
    </svg>
  );
};

export default Circle;
