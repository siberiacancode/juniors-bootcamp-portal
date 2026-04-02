'use client';

import dynamic from 'next/dynamic';

const CookieConsent = dynamic(() => import('./CookieConsent').then((mod) => mod.CookieConsent), {
  ssr: false
});

export const DynamicCookieConsent = () => <CookieConsent />;
