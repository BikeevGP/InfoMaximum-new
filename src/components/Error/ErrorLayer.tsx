import React from "react";
import WarningLogo from "../../img/Warning";
import { errorClass, imgErrorClass } from "./ErrorLayer.style";

interface IErrorProps {
  msg: string;
}

const translateError = (props: any) => {
  switch (props) {
    case "GraphQL error: No user with that email":
      return "Такого пользователя не существует";
     
    case "GraphQL error: Incorrect password":
      return "Не правильный пароль";
    
    case "GraphQL error: This email is already registered":
      return "Этот email уже занят";
  }
};
const ErrorLayer: React.FC<IErrorProps> = (props: any) => {
  return (
    <>
      <div className={errorClass}>
        <WarningLogo className={imgErrorClass} />
        {translateError(props.msg)}
      </div>
    </>
  );
};
export default ErrorLayer;
