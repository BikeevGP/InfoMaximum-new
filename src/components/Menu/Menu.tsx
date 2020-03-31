import React from "react";
import {
  menuTop,
  menuDown,
  menu,
  itemMenu,
  itemIcon,
  itemTagP
} from "./Menu.styles";
import Proceset from "../../img/Proceset/Proceset";
import UserIcon from "../../img/UserIcon/Usericon";
import ExitIcon from "../../img/Exit/Exit";
import Process from "../../img/Process/Process";
import { useQuery } from "@apollo/react-hooks";
import GetUsername from "../../quieres/LoadDataProfile";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const { data } = useQuery(GetUsername);
  return (
    <>
      <div className={menuTop}>
        <Proceset />
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
