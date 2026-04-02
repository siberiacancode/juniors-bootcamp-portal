'use client';

import type { ComponentProps } from 'react';

import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { IntlProvider } from 'react-intl';

import { ThemeProvider } from './_contexts/theme';

type IntlProviderProps = ComponentProps<typeof IntlProvider>;

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
