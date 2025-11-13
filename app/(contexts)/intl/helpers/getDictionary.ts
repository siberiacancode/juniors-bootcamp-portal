import 'server-only';

import type ruMessage from '@/public/locale/ru.json';

type Message = typeof ruMessage;

const dictionaries = {
  ru: () => import('@/public/locale/ru.json').then((module) => module.default)
} as unknown as Record<string, () => Promise<Message>>;

export const getDictionary = async (locale: 'ru') => dictionaries[locale]();
