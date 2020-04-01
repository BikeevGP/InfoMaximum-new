// Контейней AuthorizationBody, используется в документе Unauthorized.tsx
// Используется в проекте для авторизации пользователей

////// Подключения из node_modules
import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { NavLink } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

////// Подключение стилей
import {
  button,
  linkClass
} from "../../layouts/UnAuthorized/UnAuthorizated.styles";

////// Подключение компонентов
import MyButton from "../../components/Button/Button";
import Warning from "../../components/Error/ErrorLayer";
import MyInput from "../../components/Input/MyInputs";
import passwordInput from "../../components/InputPassword/InputPassword";

////// Подключение валидаций
import { emailTest, minLength8, maxLength } from "../../store/Validation";

////// Подключение запросов
import LoginQuery from "../../quieres/LoginMutation";

interface IAuthorizationProps {}

const AuthorizationBody: React.FC<IAuthorizationProps> = (props: any): any => {
  const [startLogin] = useMutation(LoginQuery);
  const [graphError, setGraphError] = React.useState(null);
  const { handleSubmit } = props;

  return (
    <>
      <form
        onSubmit={handleSubmit((event: any) => {
          startLogin({
            variables: { email: event.email, password: event.password }
          }).then(
            (res: any) => {
              localStorage.setItem("token", res?.data?.login.token);
              window.location.href = "/profile";
            },
            (err: any) => {
              setGraphError(err.message);
            }
          );
        })}
      >
        <Field
          name="email"
          type="text"
          placeholder="Электронная почта"
          validate={[emailTest]}
          component={MyInput}
        />
        <Field
          name="password"
          placeholder="Пароль"
          requiredPassword= {true}
          validate={[minLength8, maxLength]}
          component={passwordInput}
        />
        <MyButton value="Войти в систему" className={button} />
      </form>
      <NavLink to="/registration" className={linkClass}>
        Зарегистрироваться
      </NavLink>
      {graphError ? <Warning msg={graphError} /> : null}
    </>
  );
};

export default reduxForm({ form: "Auth" })(AuthorizationBody);
