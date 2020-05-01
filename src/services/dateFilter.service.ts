import { Item } from "../types/item";
import { Counter } from "../types/counter";

export type DateFilters = {
  startDate: string;
  endDate: string;
};

const dateFilterService = (
  data: (Item | Counter)[],
  dateFilters: DateFilters
): (Item | Counter)[] => {
  return data.filter(
    (row: Item | Counter) =>
      +row.date >= +dateFilters.startDate && +row.date <= +dateFilters.endDate
  );
};

export default dateFilterService;
