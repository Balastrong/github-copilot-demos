import type { Pizza } from "./pizza.model";

export type Restaurant = {
  id: number;
  name: string;
  description: string;
  pizzas: Pizza[];
};
