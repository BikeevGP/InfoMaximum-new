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
} from "../styles/Process.styles";
import Circle from "../img/circle";
import Timer from "../img/timer";
import ActivityTimer from "../img/activityTimer";
import Staff from "../img/staff";
import ScenariosIcon from "../img/scenariosIcon";
const ProcessItem = props => {
  return (
    <div className={ItemLayer} key={props.id}>
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
            <p className={mainText}>10ч 36 мин</p>
            <p className={subText}>среднее время выполнения</p>
          </div>
          <div className={averageActiveTime}>
            <ActivityTimer />
            <p className={mainText}>1ч 7 мин (10.5%)</p>
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
            <p className={dateInLine}>11 ноября 2017</p>
          </div>
          <div className={allLine}>
            <p className={labelText}>Окончание</p>
            <p className={dateInLine}>11 ноября 2017</p>
          </div>
          <div className={allLine}>
            <p className={labelText}>Загрузка</p>
            <p className={dateInLine}>11 ноября 2017</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessItem;
