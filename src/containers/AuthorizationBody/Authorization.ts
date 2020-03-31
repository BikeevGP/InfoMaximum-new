import React from "react";
import MyButton from "../../components/Button/Button";
import { button, linkClass } from "../../layouts/UnAuthorized/UnAuthorizated.styles";
import Warning from "../../components/Error/ErrorLayer";
import { NavLink } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import MyInput from "../../components/Input/MyInputs";
import { emailTest } from "../../store/Validation";
import { useMutation } from "@apollo/react-hooks";

import LoginQuery from "../../quieres/LoginMutation";
import passwordInput from "../../components/InputPassword/InputPassword";

interface IAuthorizationProps{
}

const AuthorizationBody:React.FC<IAuthorizationProps> = (props:any):any => {
  const [startLogin] = useMutation(LoginQuery);
  const [graphError, setGraphError]= React.useState(null);
  const { handleSubmit } = props;

  return (
    
      <form onSubmit={handleSubmit(event => {
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
    
  );
};



export default reduxForm({ form: "Auth" })(AuthorizationBody);
