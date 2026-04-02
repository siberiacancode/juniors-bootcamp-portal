import { CARS } from './content/cars';
import { CINEMA } from './content/cinema';
import { DELIVERY } from './content/delivery';
import { PIZZA } from './content/pizza';

export const TASKS = {
  cinema: CINEMA,
  pizza: PIZZA,
  delivery: DELIVERY,
  cars: CARS
} as const;
