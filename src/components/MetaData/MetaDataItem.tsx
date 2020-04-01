// Компонент MetaDataItem, используется в документе ProcessItem.tsx
// Используется в проекте для отображения метаданных о начале, завершении и загрузки процесса

import React from "react";

////// Подключение стилей
import { allLine, labelText, dateInLine } from "./MetaDataItem.styles";

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
