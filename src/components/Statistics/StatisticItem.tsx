// Компонент StatisticItem, используется в документе ProcessItem
// Используется в проекте для отображения задействанных ресурсов и статистики процесса
import React from "react";

////// Подключение стилей
import { mainText, subText } from "./Statistics.styles";

interface IStatisticItem {
  className: string;
  mainText: any;
  iconInside: any;
  subText: string;
}

const StatisticItem: React.FC<IStatisticItem> = (props): any => {
  return (
    <div className={props.className}>
      {props.iconInside}
      <p className={mainText}>{props.mainText}</p>
      <p className={subText}>{props.subText}</p>
    </div>
  );
};

export default StatisticItem;
