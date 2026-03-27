'use client';

import dynamic from 'next/dynamic';

import { useCookieConsent } from './hooks';

const CookieConsentPopover = dynamic(
  () => import('./components').then((mod) => mod.CookieConsentPopover),
  {
    ssr: false
  }
);

const YandexMetrikaScript = dynamic(
  () => import('./scripts').then((mod) => mod.YandexMetrikaScript),
  {
    ssr: false
  }
);

export const CookieConsent = () => {
  const { value } = useCookieConsent();
  const isProduction = process.env.NODE_ENV === 'production';

  if (!value) return <CookieConsentPopover />;
  if (isProduction) return <YandexMetrikaScript />;
};
