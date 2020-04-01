// Компонент Button, используется в документах AuthorizationBody, RegistrationBody и Profile
// Используется в проекте для отработки submit и запуска валидации
import React from "react";

interface IButtonProps {
  value: string;
  className: string;
  onClick?: React.MouseEventHandler;
}

const MyButton: React.FC<IButtonProps> = (props: any) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props?.value}
    </button>
  );
};

export default MyButton;
