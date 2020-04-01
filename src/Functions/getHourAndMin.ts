// функция getHourAndMin используется в проекте для
// преобразования поступаемого времени в минуты, часы и проценты полезного действия

interface IGetHourAndMinProps {
  (time: number, allTime?: number | undefined): string;
}

const getHourAndMin: IGetHourAndMinProps = (time, allTime) => {
  let foundedHour: number = Math.trunc(time / 3600000);
  let foundedMin: number = Math.trunc(time / 60000) - foundedHour * 60;
  let procent: number = 0;
  allTime
    ? (procent = Math.trunc(time / 60000 / (allTime / 6000000)))
    : (procent = 0);

  return `${foundedHour > 0 ? foundedHour + " ч" : ""} ${
    foundedMin > 0 ? foundedMin + " мин." : ""
  } ${allTime ? "(" + procent + "%)" : ""}`;
};

export default getHourAndMin;
