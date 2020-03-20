import React from "react";
import {
  button,
  linkClass,
  registrationTagP,
  registrationTagH2
} from "../styles/UnAuthorizated.styles";
import MyButton from "./button";
import { NavLink } from "react-router-dom";
import { reduxForm } from 'redux-form';
import MyInput from './MyInputs';

let Registration = () => {
  return (
    <>
      <h2 className={registrationTagH2}>Регистрация</h2>
      <form action="#">
        <MyInput name="name" type="text" placeholder="Имя"/>
        <MyInput name="sname" type="text" placeholder="Фамилия"/>
        <MyInput name="email" type="text" placeholder="Электронная почта"/>
        <MyInput name="password" type="password" placeholder="Введите пароль"/>
        <MyInput name="RePassword" type="password" placeholder="Повторите пароль"/>
        <MyButton value="Применить и войти" className={button} />
      </form>
      <p className={registrationTagP}>
        Уже зарегистрированы?{" "}
        <NavLink to="/" className={linkClass}>
          Вход
        </NavLink>
      </p>
    </>
  );
};
Registration = reduxForm({form: "Registration"})(Registration);
export default Registration;
