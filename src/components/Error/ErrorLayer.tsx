// Компонент ErrorLayer, используется в документах AuthorizationBody, RegistrationBody
// Используется в проекте для обработки ошибок сервера

import React from "react";

////// Подключение изображений
import WarningLogo from "../../img/Warning/Warning";

////// Подключение стилей
import { errorClass } from "./ErrorLayer.style";

////// Подключение функций
import { translateError } from "../../functions/translateError";

interface IErrorProps {
  msg: string | null;
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
