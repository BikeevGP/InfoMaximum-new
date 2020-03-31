import React from "react";
import {
  ItemLayer,
  topLine,
  h2Tag,
  bodyLayer,
  countReplay,
  countReplayIcon,
  countReplayText,
  countReplaySubText,
  statistics,
  averageExecutionTime,
  mainText,
  subText,
  averageActiveTime,
  insideProcess,
  scenarios,
  metaData,
  allLine,
  labelText,
  dateInLine
} from "./Process.styles";
import Circle from "../../img/Circle";
import Timer from "../../img/Timer";
import ActivityTimer from "../../img/ActivityTimer";
import Staff from "../../img/Staff";
import ScenariosIcon from "../../img/ScenariosIcon";
import getDate  from "../../Functions/getDate";
import getHourAndMin from "../../Functions/getHourAndMin";
const ProcessItem = props => {
  return (
    <div className={ItemLayer}>
      <div className={topLine}>
        <h2 className={h2Tag}>{props.name}</h2>
      </div>
      <div className={bodyLayer}>
        <div className={countReplay}>
          <Circle className={countReplayIcon} />
          <p className={countReplayText}>{props.countReplay}</p>
          <p className={countReplaySubText}>выполнено раз</p>
        </div>
        <div className={statistics}>
          <div className={averageExecutionTime}>
            <Timer />
            <p className={mainText}>
              {getHourAndMin(Number(props.averageExecutionTime))}
            </p>
            <p className={subText}>среднее время выполнения</p>
          </div>
          <div className={averageActiveTime}>
            <ActivityTimer />
            <p className={mainText}>
              {getHourAndMin(
                Number(props.averageActiveTime),
                Number(props.averageExecutionTime)
              )}
            </p>
            <p className={subText}>среднее активное время</p>
          </div>
          <div className={insideProcess}>
            <Staff />
            <p className={mainText}>{props.staff} сотрудников</p>
            <p className={subText}>участвует в процессе</p>
          </div>
          <div className={scenarios}>
            <ScenariosIcon />
            <p className={mainText}>{props.scenarios} сценариев</p>
            <p className={subText}>в процессе</p>
          </div>
        </div>
        <div className={metaData}>
          <div className={allLine}>
            <p className={labelText}>Начало</p>
            <p className={dateInLine}>{getDate(props.start)}</p>
          </div>
          <div className={allLine}>
            <p className={labelText}>Окончание</p>
            <p className={dateInLine}>{getDate(props.end)}</p>
          </div>
          <div className={allLine}>
            <p className={labelText}>Загрузка</p>
            <p className={dateInLine}>{getDate(props.loading)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessItem;
