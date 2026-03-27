export const TITLE_COLORS_MAP = {
  '📦': 'drop-shadow-[3px_0_0_rgb(80_201_114)]',
  '🏍️': 'drop-shadow-[3px_0_0_rgb(29_114_241)]',
  '🍿': 'drop-shadow-[3px_0_0_rgb(232_91_254)]',
  '🍕': 'drop-shadow-[3px_0_0_rgb(241_78_29)]'
};

export const TAB_COLORS_MAP = {
  '📦': 'data-[state=active]:bg-[rgb(222_247_229)]',
  '🏍️': 'data-[state=active]:bg-[rgb(212_227_255)]',
  '🍿': 'data-[state=active]:bg-[rgb(251_226_255)]',
  '🍕': 'data-[state=active]:bg-[rgb(255_220_212)]'
};

export const TAGS = [
  'page.tasks.tag.design',
  'page.tasks.tag.api',
  'page.tasks.tag.github',
  'page.tasks.tag.actualStack',
  'page.tasks.tag.workWithGit'
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

// TODO add hrefs for tasks
export const TASKS = [
  {
    emoji: '📦',
    title: 'page.tasks.cards.delivery.title',
    description: 'page.tasks.cards.delivery.description',
    href: ''
  },
  {
    emoji: '🏍️',
    title: 'page.tasks.cards.car.title',
    description: 'page.tasks.cards.car.description',
    href: ''
  },
  {
    emoji: '🍿',
    title: 'page.tasks.cards.cinema.title',
    description: 'page.tasks.cards.cinema.description',
    href: ''
  },
  {
    emoji: '🍕',
    title: 'page.tasks.cards.pizza.title',
    description: 'page.tasks.cards.pizza.description',
    href: ''
  }
] as const;
