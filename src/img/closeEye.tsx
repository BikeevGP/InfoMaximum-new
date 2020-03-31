import React, { MouseEventHandler } from "react";

interface ICloseEyeProps {
    className?:String,
    onClick?:MouseEventHandler
}

const closeEye: React.FC<ICloseEyeProps> = (props:any) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      onClick={props.onClick}
    >
      <rect width="12" height="12" fill="white" fillOpacity="0.01" />
      <path
        d="M0.334437 6.03842L-2.94905e-05 5.34619L1.36085 4.66147C0.653818 3.95378 0.167203 3.38462 0.167203 3.38462C0.167203 3.38462 0.296409 3.23846 0.50928 3C1.72411 4 3.6923 6 5.99999 6V8H5.53845V7C4.8793 6.94225 4.19767 6.93953 3.65683 6.55394L2.71413 7.50008L2.1818 6.96146L3.01815 6.11542L1.85494 5.26919L0.334437 6.03842Z"
        fill="#6879BB"
      />
      <path
        d="M11.6655 6.03842L12 5.34619L10.6391 4.66147C11.3462 3.95378 11.8328 3.38462 11.8328 3.38462C11.8328 3.38462 11.7036 3.23846 11.4907 3C10.2759 4 8.30767 6 5.99999 6V8H6.46152V7C7.12067 6.94225 7.8023 6.93953 8.34314 6.55394L9.28584 7.50008L9.81817 6.96146L8.98182 6.11542L10.145 5.26919L11.6655 6.03842Z"
        fill="#6879BB"
      />
    </svg>
  );
};

export default closeEye;
