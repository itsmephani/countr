const dateService = {
  getTodayDate() {
    return new Date();
  },
  getReadableDateFormatted(date = new Date()) {
    return `${date
      .getDate()
      .toString()
      .padStart(2, "0")}/${date
      .getMonth()
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  },
  getDateFormatted(date = new Date()): string {
    // MMDDYYYY
    return `${date
      .getMonth()
      .toString()
      .padStart(2, "0")}${date
      .getDate()
      .toString()
      .padStart(2, "0")}${date.getFullYear()}`;
  },
  getDateFromString(i: string) {
    const date = this.getTodayDate();
    date.setMonth(+`${i[0]}${i[1]}`);
    date.setDate(+`${i[2]}${i[3]}`);
    date.setFullYear(+`${i[4]}${i[5]}${i[6]}${i[7]}`);

    return date;
  },
  getReadableDateFromString(i: string) {
    const date = this.getTodayDate();
    date.setMonth(+`${i[0]}${i[1]}`);
    date.setDate(+`${i[2]}${i[3]}`);
    date.setFullYear(+`${i[4]}${i[5]}${i[6]}${i[7]}`);

    return this.getReadableDateFormatted(date);
  },
};

export default dateService;
