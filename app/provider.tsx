'use client';

import { NuqsAdapter } from 'nuqs/adapters/next/app';
import * as React from 'react';
import { IntlProvider } from 'react-intl';

import { ThemeProvider } from './_contexts/theme';

type IntlProviderProps = React.ComponentProps<typeof IntlProvider>;

interface ProviderProps {
  children: React.ReactNode;
  intl: IntlProviderProps;
}

export const Provider = ({ children, intl }: ProviderProps) => (
  <IntlProvider {...intl}>
    <ThemeProvider>
      <NuqsAdapter>{children}</NuqsAdapter>
    </ThemeProvider>
  </IntlProvider>
);
