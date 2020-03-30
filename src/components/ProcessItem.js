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

const getMonthName = props =>{
  switch (Number(props)) {
    case 0: return "января";
    case 1: return "февраля";
    case 2: return "марта";
    case 3: return "апреля";
    case 4: return "мая";
    case 5: return "июня";
    case 6: return "июля";
    case 7: return "августа";
    case 8: return "сентября";
    case 9: return "октября";
    case 10: return "ноября";
    case 11: return "декабря";
      
      
  
    default: return null;
      
  }
}

const getDate = props =>{
  let fullDate = new Date(Number(props));
  let foundedDate = fullDate.getDate();
  let foundedYear = fullDate.getFullYear();
  let foundedMonth = getMonthName(fullDate.getMonth());
  return foundedDate + " " + foundedMonth + " " + foundedYear;
}

const getHourAndMin = props => {
  
  let foundedHour = Math.trunc(props/3600000);
  let foundedMin = Math.trunc(props/60000) - (foundedHour * 60);
  return foundedHour + "ч. " + foundedMin + "мин.";
}

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
            <p className={mainText}>{getHourAndMin(Number(props.averageExecutionTime))}</p>
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
