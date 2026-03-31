'use client';

import { CookieConsentPopover } from './components';
import { useCookieConsent } from './hooks';
import { YandexMetrikaScript } from './scripts';

export const ClientCookieConsent = () => {
  const { value } = useCookieConsent();
  const isProduction = process.env.NODE_ENV === 'production';

  if (!value) return <CookieConsentPopover />;
  if (isProduction) return <YandexMetrikaScript />;
  return null;
};
