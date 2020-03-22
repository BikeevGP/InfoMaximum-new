import React from "react";
import MyButton from "./button";
import { button, linkClass } from "../styles/UnAuthorizated.styles";
import Warning from "./ErrorLayer";
import { NavLink } from "react-router-dom";
import { reduxForm, Field} from 'redux-form';
import MyInput from './MyInputs';
import { emailTest} from '../store/validation';



let AuthorizationBody = (props) => {
  return (
    <>
      <form action="#">
        <Field name="email" type="text" placeholder="Электронная почта" validate={[emailTest]} component={MyInput} />
        <Field name="password" type="password" placeholder="Пароль" component={MyInput} />
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
