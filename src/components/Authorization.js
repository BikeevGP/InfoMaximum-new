import React from "react";
import MyButton from "./button";
import { button, linkClass } from "../styles/UnAuthorizated.styles";
import Warning from "./ErrorLayer";
import { NavLink } from "react-router-dom";
import { reduxForm } from 'redux-form';
import MyInput from './MyInputs';



let AuthorizationBody = (props) => {
  return (
    <>
      <form action="#">
        <MyInput name="email" type="text" placeholder="Электронная почта" />
        <MyInput name="password" type="password" placeholder="Пароль" />
        <MyButton value="Войти в систему" className={button} />
      </form>
      <NavLink to="/registration" className={linkClass}>
        Зарегистрироваться
      </NavLink>
      <Warning msg="Сообщение об ошибки" />
    </>
  );
};
AuthorizationBody =reduxForm({form:"Auth"})(AuthorizationBody)


export default AuthorizationBody;
