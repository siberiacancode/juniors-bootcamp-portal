export const PAYMENT_TASK_IDS = ['delivery', 'car', 'cinema', 'pizza', 'game'] as const;

export type PaymentTaskId = (typeof PAYMENT_TASK_IDS)[number];

export const PAYMENT_TASKS = {
  delivery: {
    emoji: '📦',
    title: 'DELIVERY'
  },
  car: {
    emoji: '🏍️',
    title: 'CARS'
  },
  cinema: {
    emoji: '🍿',
    title: 'CINEMA'
  },
  pizza: {
    emoji: '🍕',
    title: 'PIZZA'
  },
  game: {
    emoji: '🎮',
    title: 'GAMES'
  }
} satisfies Record<
  PaymentTaskId,
  {
    emoji: string;
    title: string;
  }
>;
