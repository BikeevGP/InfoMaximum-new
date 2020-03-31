const getHourAndMin = (time, allTime) => {
  let foundedHour = Math.trunc(time / 3600000);
  let foundedMin = Math.trunc(time / 60000) - foundedHour * 60;
  let procent = Math.trunc(time / 60000 / (allTime / 6000000));
  return !allTime
    ? foundedHour + " ч. " + foundedMin + " мин."
    : foundedHour + " ч. " + foundedMin + " мин." + " (" + procent + "%)";
};

export default getHourAndMin;
