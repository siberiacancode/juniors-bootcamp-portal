export const TAB_COLOR_MAP = {
  '📦': {
    background: 'data-active:bg-(--color-green-100) hover:bg-(--color-green-50)',
    title: 'drop-shadow-[3px_0_0_rgb(80_201_114)]'
  },
  '🏍️': {
    background: 'data-active:bg-(--color-blue-100) hover:bg-(--color-blue-50)',
    title: 'drop-shadow-[3px_0_0_rgb(29_114_241)]'
  },
  '🍿': {
    background: 'data-active:bg-(--color-pink-100) hover:bg-(--color-pink-50)',
    title: 'drop-shadow-[3px_0_0_rgb(232_91_254)]'
  },
  '🍕': {
    background: 'data-active:bg-(--color-red-100) hover:bg-(--color-red-50)',
    title: 'drop-shadow-[3px_0_0_rgb(241_78_29)]'
  }
};

// TODO add hrefs
export const LINKS = [
  {
    href: '',
    title: 'page.tasks.tag.design'
  },
  {
    href: '',
    title: 'page.tasks.tag.api'
  },
  {
    href: '',
    title: 'page.tasks.tag.github'
  },
  {
    href: '',
    title: 'page.tasks.tag.actualStack'
  },
  {
    href: '',
    title: 'page.tasks.tag.workWithGit'
  }
] as const;

export const FAQ_ITEMS = [
  {
    question: 'page.tasks.section.faq.0.question',
    answer: 'page.tasks.section.faq.0.answer'
  },
  {
    question: 'page.tasks.section.faq.1.question',
    answer: 'page.tasks.section.faq.1.answer'
  },
  {
    question: 'page.tasks.section.faq.2.question',
    answer: 'page.tasks.section.faq.2.answer'
  }
] as const;

export const ROADMAP = [
  'page.tasks.section.roadmap.step.1',
  'page.tasks.section.roadmap.step.2',
  'page.tasks.section.roadmap.step.3',
  'page.tasks.section.roadmap.step.4'
] as const;

export const TASKS = [
  {
    emoji: '📦',
    title: 'page.tasks.cards.delivery.title',
    description: 'page.tasks.cards.delivery.description',
    href: '/tasks/delivery'
  },
  {
    emoji: '🏍️',
    title: 'page.tasks.cards.cars.title',
    description: 'page.tasks.cards.cars.description',
    href: '/tasks/cars'
  },
  {
    emoji: '🍿',
    title: 'page.tasks.cards.cinema.title',
    description: 'page.tasks.cards.cinema.description',
    href: '/tasks/cinema'
  },
  {
    emoji: '🍕',
    title: 'page.tasks.cards.pizza.title',
    description: 'page.tasks.cards.pizza.description',
    href: '/tasks/pizza'
  }
] as const;
