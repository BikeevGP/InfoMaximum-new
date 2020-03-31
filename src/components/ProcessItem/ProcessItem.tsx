import React from "react";
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
  metaData
} from "./Process.styles";

import Timer from "../../img/Timer/Timer";
import ActivityTimer from "../../img/ActivityTimer/ActivityTimer";
import Staff from "../../img/Staff/Staff";
import ScenariosIcon from "../../img/ScenariosIcon/ScenariosIcon";
import getDate from "../../Functions/getDate";
import getHourAndMin from "../../Functions/getHourAndMin";
import ICountReplay from '../CountReplay/CountReplay';
import StatisticItem from "../Statistics/StatisticItem";
import MetaDataItem from "../MetaData/MetaDataItem";
interface IPropcessItemProps {
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
    <div className={ItemLayer}>
      <div className={topLine}>
        <h2 className={h2Tag}>{props.name}</h2>
      </div>
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
            mainText={props.staff + " сотрудников"}
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
          <MetaDataItem labelText="Загрузка" dateInside={getDate(props.loading)} />
        </div>
      </div>
    </div>
  );
};

export default ProcessItem;
