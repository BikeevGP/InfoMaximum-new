import React from "react";
import {countReplay, countReplayText, countReplaySubText} from './CountReplay.styles';
import Circle from '../../img/Circle/Circle';
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
