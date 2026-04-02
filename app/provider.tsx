'use client';

import { NuqsAdapter } from 'nuqs/adapters/next/app';
import * as React from 'react';
import { IntlProvider } from 'react-intl';

import { ThemeProvider } from './(contexts)/theme';

interface ProviderProps {
  children: React.ReactNode;
  intl: React.ComponentProps<typeof IntlProvider>;
}

export const Provider = ({ children, intl }: ProviderProps) => (
  <IntlProvider {...intl}>
    <ThemeProvider>
      <NuqsAdapter>{children}</NuqsAdapter>
    </ThemeProvider>
  </IntlProvider>
);
