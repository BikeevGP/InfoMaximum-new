import React from "react";
import MyButton from "./button";
import { button, linkClass } from "../styles/UnAuthorizated.styles";
import Warning from "./ErrorLayer";
import { NavLink } from "react-router-dom";
import { reduxForm, Field, formValueSelector} from 'redux-form';
import MyInput from './MyInputs';
import { emailTest} from '../store/validation';
import {useMutation} from "@apollo/react-hooks";
import { connect } from 'react-redux';
import LoginQuery from '../quieres/loginMutation';



let AuthorizationBody = (props) => {

  const [startLogin, {data, loading}] = useMutation(LoginQuery);
  if (data?.login?.token && !loading) localStorage.setItem('token', data.login.token);
  if (localStorage.getItem('token')) window.location="/profile";
  return (
    <>
      <form action="#">
        <Field name="email" type="text" placeholder="Электронная почта" validate={[emailTest]} component={MyInput} />
        <Field name="password" type="password" placeholder="Пароль" component={MyInput} />
        <MyButton value="Войти в систему" className={button} onClick={e =>{
          e.preventDefault();
          startLogin({variables:{email: props.email, password: props.password}});
        }}/>
      </form>
      <NavLink to="/registration" className={linkClass}>
        Зарегистрироваться
      </NavLink>
      <Warning msg="Сообщение об ошибки" />
    </>
  );
};
AuthorizationBody =reduxForm({form:"Auth"})(AuthorizationBody);
const selector = formValueSelector('Auth');
AuthorizationBody = connect(state => {
  const email = selector(state, 'email');
  const password = selector(state, 'password');
  return {
    email,
    password
  }
})(AuthorizationBody)


export default AuthorizationBody;
