type Locale = 'ru';
type MessagePath = keyof typeof import('@/public/locale/ru.json');

namespace FormatjsIntl {
  interface IntlConfig {
    locale: Locale;
  }
  interface Message {
    ids: MessagePath;
  }
}
