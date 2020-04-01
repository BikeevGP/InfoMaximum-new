// Компонент CountReplay, используется в документе ProcessItem.tsx
// Используется в проекте для визуализации данных с сервера о количестве выполненных действий
import React from "react";

//////Подключение стилей
import {
  countReplay,
  countReplayText,
  countReplaySubText
} from "./CountReplay.styles";

/////Подключение изображений
import Circle from "../../img/Circle/Circle";

interface ICountReplayProps {
  countReplay: Number;
}

const ICountReplay: React.FC<ICountReplayProps> = (props: any): any => {
  return (
    <div className={countReplay}>
      <Circle />
      <p className={countReplayText}>{props.countReplay}</p>
      <p className={countReplaySubText}>выполнено раз</p>
    </div>
  );
};

export default ICountReplay;
