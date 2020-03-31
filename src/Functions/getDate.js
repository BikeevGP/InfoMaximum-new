import getMonthName from "./getMountName";
const getDate = props => {
    let fullDate = new Date(Number(props));
    let foundedDate = fullDate.getDate();
    let foundedYear = fullDate.getFullYear();
    let foundedMonth = getMonthName(fullDate.getMonth());
    return foundedDate + " " + foundedMonth + " " + foundedYear;
  };

  export default getDate;