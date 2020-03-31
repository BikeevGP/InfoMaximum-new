interface IGetHourAndMinProps {
  (time: number, allTime?: number | undefined): string;
}

const getHourAndMin: IGetHourAndMinProps = (time, allTime) => {
  console.log(allTime);
  let foundedHour: number = Math.trunc(time / 3600000);
  let foundedMin: number = Math.trunc(time / 60000) - foundedHour * 60;
  let procent: number = 0;
    allTime ? procent = Math.trunc(time / 60000 / (allTime / 6000000)) : procent = 0;
  
  return !allTime
    ? foundedHour + " ч. " + foundedMin + " мин."
    : foundedHour + " ч. " + foundedMin + " мин." + " (" + procent + "%)";
};

export default getHourAndMin;
