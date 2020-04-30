import { Item } from "../types/item";
import { Counter } from "../types/counter";

const storageService = {
  // Items.
  getItems(): Item[] {
    return JSON.parse(localStorage.getItem("items") || "[]");
  },
  getItem(itemId: number): Item | undefined {
    return this.getItems().find((item) => item.id == itemId);
  },
  addItem(item: Item) {
    const items = this.getItems();
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
  },
  updateItemCount(itemId: number, count: number) {
    const items = this.getItems().map((item: Item) => {
      if (item.id == itemId) {
        item.count = count;
      }
      return item;
    });
    localStorage.setItem("items", JSON.stringify(items));
  },
  // Counters.
  getCounters(): Counter[] {
    return JSON.parse(localStorage.getItem("counters") || "[]");
  },
  getCounter(counterId: number): Counter | undefined {
    return this.getCounters().find((counter) => counter.id == counterId);
  },
  findCounter(filters: Record<string, number | string>): Counter | undefined {
    return this.getCounters().find(
      (counter: Record<string, string | number>) => {
        return Object.keys(filters).every(
          (filter) => counter[filter] == filters[filter]
        );
      }
    );
  },
  addCounter(counter: Counter) {
    const counters = this.getCounters();
    counters.push(counter);
    localStorage.setItem("counters", JSON.stringify(counters));
  },
  updateCounter(counter: Counter) {
    const counters = this.getCounters().map((existingCounter) => {
      if (counter.id == existingCounter.id) {
        existingCounter = counter;
      }

      return existingCounter;
    });
    localStorage.setItem("counters", JSON.stringify(counters));
  },
};

export default storageService;
