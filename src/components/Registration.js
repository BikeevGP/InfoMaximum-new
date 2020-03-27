import React from "react";
import {
  button,
  linkClass,
  registrationTagP,
  registrationTagH2
} from "../styles/UnAuthorizated.styles";
import MyButton from "./button";
import ErrorLayer from './ErrorLayer';
import { NavLink } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
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
import PasswordInput from "./inputPassword";

const Registration = props => {
  const [startRegistrationQuery] = useMutation(RegistrationQuery);
  const [graphError, setGraphError] = React.useState(null);
  const { handleSubmit } = props;
  return (
    <>
      <h2 className={registrationTagH2}>Регистрация</h2>
      <form
        onSubmit={handleSubmit(event => {
          startRegistrationQuery({
            variables: {
              name: event.name,
              sname: event.sname,
              email: event.email,
              password: event.password
            }
          }).then(res => {
            localStorage.setItem("token", res?.data?.signup);
            window.location.href = "/profile";
          }, err=>{
            setGraphError(err.message);
          });
        })}
      >
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
        <MyButton value="Применить и войти" className={button} />
      </form>
      <p className={registrationTagP}>
        Уже зарегистрированы?{" "}
        <NavLink to="/" className={linkClass}>
          Вход
        </NavLink>
      </p>
      {graphError ? <ErrorLayer msg={graphError}/> : null}
    </>
  );
};

export default reduxForm({ form: "Registration" })(Registration);
