// Компонент MenuItem, используется в документе Menu
// Используется в проекте для навигации между страницами после авторизации

import React, { MouseEventHandler } from "react";


import { itemMenu, itemTagP } from "./MenuItem.styles";

interface IMenuItemProps {
  icon: any;
  text: string;
  secondName?: string;
  onClick?:MouseEventHandler
}

const MenuItem: React.FC<IMenuItemProps> = (props: any) => {
  return (
    <div className={itemMenu} onClick={props.onClick}>
      {props.icon}
      <p className={itemTagP}>
        {props.text} {props.secondName}
      </p>
    </div>
  );
};

export default MenuItem;
