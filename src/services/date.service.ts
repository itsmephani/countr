export const dates: number[] = new Array(31)
  .fill(1)
  .reduce((datesArray, currentDate, index) => {
    datesArray.push(index + 1);
    return datesArray;
  }, []);

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const years = (startYear = 2020) => {
  const data = [];
  for (let i = 0; i <= 25; i++) {
    data.push(startYear + i);
  }

  return data;
};

const dateService = {
  getTodayDate() {
    return new Date();
  },
  getReadableMonth(date = new Date()) {
    return months[date.getMonth()];
  },
  getReadableDateFormatted(date = new Date()) {
    return `${date.getDate().toString().padStart(2, "0")} ${
      months[date.getMonth()]
    } ${date.getFullYear()}`;
  },
  getDateFormatted(date = new Date()): string {
    // MMDDYYYY
    return `${date.getFullYear()}${date
      .getMonth()
      .toString()
      .padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}`;
  },
  getDateFromString(i: string) {
    const date = this.getTodayDate();
    date.setFullYear(+`${i[0]}${i[1]}${i[2]}${i[3]}`);
    date.setMonth(+`${i[4]}${i[5]}`);
    date.setDate(+`${i[6]}${i[7]}`);

    return date;
  },
  getReadableDateFromString(i: string) {
    return this.getReadableDateFormatted(this.getDateFromString(i));
  },
};

export default dateService;
