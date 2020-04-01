// функция getDate используется в проекте для преобразования даты с сервера в нужным нам вид

import getMonthName from "./getMountName";
import React from "react";

interface IGetDateProps {
  props: number;
}

const getDate: React.FC<IGetDateProps> = (props): any => {
  let fullDate: Date = new Date(Number(props));
  let foundedDate: Number = fullDate.getDate();
  let foundedYear: Number = fullDate.getFullYear();
  let foundedMonth: String | null = getMonthName(Number(fullDate.getMonth()));
  return foundedDate + " " + foundedMonth + " " + foundedYear;
};

export default getDate;
