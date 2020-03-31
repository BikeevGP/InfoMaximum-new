import React from "react";
import {allLine, labelText, dateInLine} from './MetaDataItem.styles';
interface IMetaDataProps {
  labelText: string;
  dateInside: any;
}

const MetaData: React.FC<IMetaDataProps> = (props: any): any => {
  return (
    <div className={allLine}>
      <p className={labelText}>{props.labelText}</p>
      <p className={dateInLine}>{props.dateInside}</p>
    </div>
  );
};

export default MetaData;
