interface FormatMoneyParams {
  locales?: Intl.LocalesArgument;
  options?: Intl.NumberFormatOptions;
}

const DEFAULT_MONEY_FORMAT_OPTIONS = {
  currency: 'RUB',
  maximumFractionDigits: 0,
  style: 'currency'
} satisfies Intl.NumberFormatOptions;

export const formatMoney = (
  price: number,
  { locales = 'ru-RU', options = DEFAULT_MONEY_FORMAT_OPTIONS }: FormatMoneyParams = {}
): string => new Intl.NumberFormat(locales, options).format(price).replace(/\u00A0/g, ' ');
