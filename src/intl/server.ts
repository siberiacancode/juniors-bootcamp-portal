import { createIntl } from 'react-intl/server';

import ruMessage from '@/public/locale/ru.json';

const LOCALE = 'ru';

export const intl = createIntl({
  locale: LOCALE,
  messages: ruMessage
});
