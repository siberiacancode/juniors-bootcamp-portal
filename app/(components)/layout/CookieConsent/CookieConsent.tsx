'use client';

import dynamic from 'next/dynamic';

const ClientCookieConsent = dynamic(
  () => import('./ClientCookieConsent').then((mod) => mod.ClientCookieConsent),
  {
    ssr: false
  }
);

export const CookieConsent = () => <ClientCookieConsent />;
