import React from "react";
import MyButton from "./button";
import { button, linkClass } from "../styles/UnAuthorizated.styles";
import Warning from "./ErrorLayer";
import { NavLink } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import MyInput from "./MyInputs";
import { emailTest } from "../store/validation";
import { useMutation } from "@apollo/react-hooks";

import LoginQuery from "../quieres/loginMutation";
import passwordInput from "../components/inputPassword";

const AuthorizationBody = props => {
  const [startLogin] = useMutation(LoginQuery);
  const [graphError, setGraphError]= React.useState(null);
  const { handleSubmit } = props;

  return (
    <>
      <form
        onSubmit={handleSubmit(event => {
          startLogin({
            variables: { email: event.email, password: event.password }
          }).then(res => {
            localStorage.setItem("token", res?.data?.login.token);
            window.location.href = "/profile";
          },err => {setGraphError(err.message)});
        })}
      >
        <Field
          name="email"
          type="text"
          placeholder="Электронная почта"
          validate={[emailTest]}
          component={MyInput}
        />
        <Field name="password" placeholder="Пароль" component={passwordInput} />
        <MyButton
          value="Войти в систему"
          className={button}
        />
      </form>
      <NavLink to="/registration" className={linkClass}>
        Зарегистрироваться
      </NavLink>
      {graphError ? <Warning msg={graphError} /> : null}
    </>
  );
};



export default reduxForm({ form: "Auth" })(AuthorizationBody);
