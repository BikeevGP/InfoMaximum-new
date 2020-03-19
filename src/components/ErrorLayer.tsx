import React from "react";
import WarningLogo from "../img/Warning";
import { errorClass, imgErrorClass } from "../styles/UnAuthorizated.styles";

interface IErrorProps {
  msg: string;
}

const ErrorLayer: React.FC<IErrorProps> = props => {
  return (
    <>
      <div className={errorClass}>
        <WarningLogo className={imgErrorClass} />
        {props.msg}
      </div>
    </>
  );
};
export default ErrorLayer;
