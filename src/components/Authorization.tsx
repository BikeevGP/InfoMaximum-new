import React from "react";
import MyButton from "./button";
import { button, inputs, linkClass } from "../styles/UnAuthorizated.styles";
import Warning from "./ErrorLayer";
import { NavLink } from "react-router-dom";

interface IAuthProps {}

const AuthorizationBody: React.FC<IAuthProps> = props => {
  return (
    <>
      <form action="#">
        <input type="text" className={inputs} placeholder="Электронная почта" />
        <input type="password" className={inputs} placeholder="Пароль" />
        <MyButton value="Войти в систему" className={button} />
      </form>
      <NavLink to="/registration" className={linkClass}>
        Зарегистрироваться
      </NavLink>
      <Warning msg="Сообщение об ошибки" />
    </>
  );
};

export default AuthorizationBody;
