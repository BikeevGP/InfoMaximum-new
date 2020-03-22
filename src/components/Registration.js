import React from "react";
import {
  button,
  linkClass,
  registrationTagP,
  registrationTagH2
} from "../styles/UnAuthorizated.styles";
import MyButton from "./button";
import { NavLink } from "react-router-dom";
import { reduxForm, Field } from 'redux-form';
import MyInput from './MyInputs';
import {maxLength, minLength, emailTest, checkRePassword, minLength8} from '../store/validation';

let Registration = () => {
  return (
    <>
      <h2 className={registrationTagH2}>Регистрация</h2>
      <form action="#">
        <Field name="name" type="text" placeholder="Имя" component={MyInput} validate={[maxLength, minLength]}/>
        <Field name="sname" type="text" placeholder="Фамилия" component={MyInput} validate={[maxLength, minLength]}/>
        <Field name="email" type="text" placeholder="Электронная почта" component={MyInput} validate={[emailTest]}/>
        <Field name="password" type="password" placeholder="Введите пароль" component={MyInput} validate={[maxLength, minLength8]}/>
        <Field name="rePassword" type="password" placeholder="Повторите пароль" component={MyInput} validate={[checkRePassword]}/>
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
