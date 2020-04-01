// Компонент Menu, используется в документе Profile
// Используется в проекте для навигации между страницами после авторизации

////// Подключения из node_modules
import { useQuery } from "@apollo/react-hooks";
import { NavLink } from "react-router-dom";
import React from "react";

////// Подключение стилей
import {
  menuTop,
  menuDown,
  menu,
  itemIcon,
} from "./Menu.styles";

////// Подключение изображений
import Proceset from "../../img/Proceset/Proceset";
import UserIcon from "../../img/UserIcon/Usericon";
import ExitIcon from "../../img/Exit/Exit";
import Process from "../../img/Process/Process";

////// Подключение запроса
import GetUsername from "../../quieres/LoadDataProfile";

////// Подключение компонентов
import MenuItem from "../MenuItem/MenuItem";

interface IMenuProps {}

const Menu: React.FC<IMenuProps> = () => {
  const { data } = useQuery(GetUsername);
  return (
    <>
      <div className={menuTop}>
        <Proceset />
      </div>
      <div className={menuDown}>
        <NavLink to="/profile">
          <MenuItem
            icon={<UserIcon className={itemIcon} />}
            text={data?.currentUser.firstName}
            secondName={data?.currentUser.secondName}
          />
        </NavLink>
        <NavLink to="/process">
        <MenuItem
          icon={<Process className={itemIcon} />}
          text="Список процессов"
        />
        </NavLink>
        <NavLink to="/profile">
        <MenuItem
          icon={<ExitIcon className={itemIcon} />}
          text="Выход"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        />
        </NavLink>
      </div>
      <div className={menu}></div>
    </>
  );
};

export default Menu;
