'use client';

import { CookieConsentPopover } from './components';
import { useCookieConsent } from './hooks';
import { YandexMetrikaScript } from './scripts';

export const CookieConsent = () => {
  const { hasConsent } = useCookieConsent();
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <>
      {!hasConsent && <CookieConsentPopover />}
      {hasConsent && isProduction && <YandexMetrikaScript />}
    </>
  );
};
