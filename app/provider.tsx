'use client';

import type { ComponentProps, ReactNode } from 'react';

import { RootProvider } from 'fumadocs-ui/provider/next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { IntlProvider } from 'react-intl';

import { ThemeProvider } from './_contexts/theme';

type IntlProviderProps = ComponentProps<typeof IntlProvider>;

interface ProviderProps {
  children: ReactNode;
  intl: IntlProviderProps;
}

export const Provider = ({ children, intl }: ProviderProps) => (
  <IntlProvider {...intl}>
    <ThemeProvider>
      <RootProvider>
        <NuqsAdapter>{children}</NuqsAdapter>
      </RootProvider>
    </ThemeProvider>
  </IntlProvider>
);
