// Контейней RegistrationBody, используется в документе UnAuthorized.tsx
// Используется в проекте для регистрации новых пользователей

////// Подключения из node_modules
import React from "react";
import { NavLink } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { useMutation } from "@apollo/react-hooks";

////// Подключения стилей
import {
  button,
  linkClass,
  registrationTagP,
  registrationTagH2
} from "../../layouts/UnAuthorized/UnAuthorizated.styles";

////// Подключения компонентов
import MyButton from "../../components/Button/Button";
import ErrorLayer from "../../components/Error/ErrorLayer";
import MyInput from "../../components/Input/MyInputs";
import PasswordInput from "../../components/InputPassword/InputPassword";

////// Подключение валидаций
import {
  maxLength,
  minLength,
  emailTest,
  checkRePassword,
  minLength8,
  checkNameChar
} from "../../store/Validation";

////// Подключение запросов
import RegistrationQuery from "../../quieres/RegistrationMutation";

interface IRegistrationProps {}

const Registration: React.FC<IRegistrationProps> = (props: any) => {
  const [startRegistrationQuery] = useMutation(RegistrationQuery);
  const [graphError, setGraphError] = React.useState(null);
  const { handleSubmit } = props;
  return (
    <>
      <h2 className={registrationTagH2}>Регистрация</h2>
      <form
        onSubmit={handleSubmit((event: any) => {
          startRegistrationQuery({
            variables: {
              name: event.name,
              sname: event.sname,
              email: event.email,
              password: event.password
            }
          }).then(
            res => {
              localStorage.setItem("token", res?.data?.signup);
              window.location.href = "/profile";
            },
            err => {
              setGraphError(err.message);
            }
          );
        })}
      >
        <Field
          name="name"
          type="text"
          placeholder="Имя"
          component={MyInput}
          validate={[maxLength, minLength, checkNameChar]}
        />
        <Field
          name="sname"
          type="text"
          placeholder="Фамилия"
          component={MyInput}
          validate={[maxLength, minLength, checkNameChar]}
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
          requiredPassword= {true}
          validate={[maxLength, minLength8]}
        />
        <Field
          name="rePassword"
          placeholder="Повторите пароль"
          component={PasswordInput}
          requiredPassword= {true}
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
      {graphError ? <ErrorLayer msg={graphError} /> : null}
    </>
  );
};

export default reduxForm({ form: "Registration" })(Registration);
