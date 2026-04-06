import { createIntl, createIntlCache } from 'react-intl/server';

import ruMessage from '@/public/locale/ru.json';

import 'server-only';

const LOCALE = 'ru';

const cache = createIntlCache();

export const intl = createIntl(
  {
    locale: LOCALE,
    messages: ruMessage
  },
  cache
);
