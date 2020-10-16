// util function to calculate years difference between two Dates
const getDateYearsDifference = (date1: Date, date2: Date) => {
  return date1.getFullYear() - date2.getFullYear();
};

export default getDateYearsDifference;
