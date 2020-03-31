import React from "react";
import WarningLogo from "../../img/Warning/Warning";
import { errorClass } from "./ErrorLayer.style";
import {translateError} from '../../Functions/translateError';
interface IErrorProps {
  msg: string;
}

const ErrorLayer: React.FC<IErrorProps> = (props: any) => {
  return (
    <>
      <div className={errorClass}>
        <WarningLogo />
        {translateError(props.msg)}
      </div>
    </>
  );
};
export default ErrorLayer;
