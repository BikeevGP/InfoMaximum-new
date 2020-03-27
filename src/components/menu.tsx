import React from "react";
import {
  menuTop,
  menuDown,
  menu,
  procesetImg,
  itemMenu,
  itemIcon,
  itemTagP
} from "../styles/Menu.styles";
import Proceset from "../img/proceset";
import UserIcon from "../img/usericon";
import ExitIcon from "../img/exit";
import Process from "../img/Process";
import { useQuery } from "@apollo/react-hooks";
import GetUsername from "../quieres/loadDataProfile";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const { data } = useQuery(GetUsername);
  return (
    <>
      <div className={menuTop}>
        <Proceset className={procesetImg} />
      </div>
      <div className={menuDown}>
        <div className={itemMenu}>
          <NavLink to="/profile">
            <UserIcon className={itemIcon} />
            <p className={itemTagP}>
              {data?.currentUser.firstName} {data?.currentUser.secondName}
            </p>
          </NavLink>
        </div>
        <div className={itemMenu}>
          <NavLink to="/process">
            <Process className={itemIcon} />
            <p className={itemTagP}>Список процессов</p>
          </NavLink>
        </div>
        <div
          className={itemMenu}
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          <ExitIcon className={itemIcon} />
          <p className={itemTagP}>Выход</p>
        </div>
      </div>
      <div className={menu}></div>
    </>
  );
};

export default Menu;
