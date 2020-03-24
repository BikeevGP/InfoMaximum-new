import React from "react";
import { connect } from "react-redux";
import {
  button,
  linkClass,
  registrationTagP,
  registrationTagH2
} from "../styles/UnAuthorizated.styles";
import MyButton from "./button";
import { NavLink } from "react-router-dom";
import { reduxForm, Field, formValueSelector } from "redux-form";
import MyInput from "./MyInputs";
import {
  maxLength,
  minLength,
  emailTest,
  checkRePassword,
  minLength8
} from "../store/validation";
import RegistrationQuery from "../quieres/registrationMutation";
import { useMutation } from "@apollo/react-hooks";
import PasswordInput from './inputPassword';

let Registration = props => {
  const [startRegistrationQuery, { data, loading }] = useMutation(
    RegistrationQuery
  );
  if (data && !loading) localStorage.setItem('token', data.signup);
  if (localStorage.getItem('token')) window.location="/profile";
  return (
    <>
      <h2 className={registrationTagH2}>Регистрация</h2>
      <form action="#">
        <Field
          name="name"
          type="text"
          placeholder="Имя"
          component={MyInput}
          validate={[maxLength, minLength]}
        />
        <Field
          name="sname"
          type="text"
          placeholder="Фамилия"
          component={MyInput}
          validate={[maxLength, minLength]}
        />
        <Field
          name="email"
          type="text"
          placeholder="Электронная почта"
          component={MyInput}
          validate={[emailTest]}
        />
        <Field
          name="password"
          placeholder="Введите пароль"
          component={PasswordInput}
          validate={[maxLength, minLength8]}
        />
        <Field
          name="rePassword"
          placeholder="Повторите пароль"
          component={PasswordInput}
          validate={[checkRePassword]}
        />
        <MyButton
          value="Применить и войти"
          className={button}
          onClick={e => {
            e.preventDefault();
            startRegistrationQuery({
              variables: {
                name: props.name,
                sname: props.sname,
                email: props.email,
                password: props.password
              }
            });
          }}
        />
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
Registration = reduxForm({ form: "Registration" })(Registration);
const selector = formValueSelector("Registration");
Registration = connect(state => {
  const name = selector(state, "name");
  const sname = selector(state, "sname");
  const email = selector(state, "email");
  const password = selector(state, "password");

  return {
    name,
    sname,
    email,
    password
  };
})(Registration);
export default Registration;
