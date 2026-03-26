'use client';

import dynamic from 'next/dynamic';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import * as React from 'react';

import type { IntlProviderProps } from './(contexts)/intl';

import { IntlProvider } from './(contexts)/intl';
import { ThemeProvider } from './(contexts)/theme';

interface ProviderProps {
  children: React.ReactNode;
  intl: IntlProviderProps;
}

const CookieConsent = dynamic(() => import('./(components)').then((mod) => mod.CookieConsent), {
  ssr: false
});

export const Provider = ({ children, intl }: ProviderProps) => (
  <IntlProvider {...intl}>
    <ThemeProvider>
      <NuqsAdapter>
        {children}
        <CookieConsent />
      </NuqsAdapter>
    </ThemeProvider>
  </IntlProvider>
);
