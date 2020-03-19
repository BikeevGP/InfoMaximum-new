import React from "react";
import {
  button,
  inputs,
  linkClass,
  registrationTagP,
  registrationTagH2
} from "../styles/UnAuthorizated.styles";
import MyButton from "./button";
import { NavLink } from "react-router-dom";
interface IRegistrationProps {}

const Registration: React.FC<IRegistrationProps> = () => {
  return (
    <>
      <h2 className={registrationTagH2}>Регистрация</h2>
      <form action="#">
        <input type="text" placeholder="Имя" className={inputs} />
        <input type="text" placeholder="Фамилия" className={inputs} />
        <input type="text" placeholder="Электронная почта" className={inputs} />
        <input
          type="password"
          placeholder="Введите пароль"
          className={inputs}
        />
        <input
          type="password"
          placeholder="Повторите пароль"
          className={inputs}
        />
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

export default Registration;
