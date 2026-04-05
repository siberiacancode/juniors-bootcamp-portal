import { createIntl } from 'react-intl/server';

import ruMessage from '@/public/locale/ru.json';

import 'server-only';

const LOCALE = 'ru';

export const intl = createIntl({
  locale: LOCALE,
  messages: ruMessage
});
