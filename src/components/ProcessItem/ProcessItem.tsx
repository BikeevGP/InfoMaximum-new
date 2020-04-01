// Компонент ProcessItem, используется в документе ProcessBody
// Используется в проекте для визуализации информации получаемой с сервера

import React from "react";

////// Подключение стилей
import {
  ItemLayer,
  topLine,
  h2Tag,
  bodyLayer,
  statistics,
  averageExecutionTime,
  averageActiveTime,
  insideProcess,
  scenarios,
  metaData,
  onMapProcess,
  forBorder
} from "./Process.styles";

////// Подключение изображений
import Timer from "../../img/Timer/Timer";
import ActivityTimer from "../../img/ActivityTimer/ActivityTimer";
import Staff from "../../img/Staff/Staff";
import ScenariosIcon from "../../img/ScenariosIcon/ScenariosIcon";
import Arrow from "../../img/Arrow/Arrow";

////// Подключение функций
import getDate from "../../functions/getDate";
import getHourAndMin from "../../functions/getHourAndMin";
import gettingTheEnd from "../../functions/gettingTheEnd";

////// Подключение компонентов
import ICountReplay from "../CountReplay/CountReplay";
import StatisticItem from "../Statistics/StatisticItem";
import MetaDataItem from "../MetaData/MetaDataItem";

interface IPropcessItemProps {
  id: string;
  name: string;
  countReplay: Number;
  averageExecutionTime: Number;
  averageActiveTime: Number;
  staff: Number;
  scenarios: Number;
  start: Number;
  end: Number;
  loading: Number;
}

const ProcessItem: React.FC<IPropcessItemProps> = (props: any): any => {
  return (
    <div className={ItemLayer} key={props.id}>
      <div className={topLine}>
        <h2 className={h2Tag}>{props.name}</h2>
        <p className={onMapProcess}>На карту процесса</p>
        <Arrow />
      </div>
      <hr className={forBorder} />
      <div className={bodyLayer}>
        <ICountReplay countReplay={props.countReplay} />
        <div className={statistics}>
          <StatisticItem
            className={averageExecutionTime}
            mainText={getHourAndMin(Number(props.averageExecutionTime))}
            iconInside={<Timer />}
            subText="среднее время выполнения"
          />
          <StatisticItem
            className={averageActiveTime}
            mainText={getHourAndMin(
              Number(props.averageActiveTime),
              Number(props.averageExecutionTime)
            )}
            iconInside={<ActivityTimer />}
            subText="среднее активное время"
          />
          <StatisticItem
            className={insideProcess}
            mainText={props.staff + gettingTheEnd(props.staff)}
            iconInside={<Staff />}
            subText="участвует в процессе"
          />
          <StatisticItem
            className={scenarios}
            mainText={props.scenarios + " сценариев"}
            iconInside={<ScenariosIcon />}
            subText="в процессе"
          />
        </div>
        <div className={metaData}>
          <MetaDataItem labelText="Начало" dateInside={getDate(props.start)} />
          <MetaDataItem labelText="Окончание" dateInside={getDate(props.end)} />
          <MetaDataItem
            labelText="Загрузка"
            dateInside={getDate(props.loading)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessItem;
