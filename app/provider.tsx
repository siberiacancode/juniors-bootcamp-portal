'use client';

import { NuqsAdapter } from 'nuqs/adapters/next/app';
import * as React from 'react';

import { TooltipProvider } from '@/components/ui';

import type { IntlProviderProps } from './(contexts)/intl';

import { IntlProvider } from './(contexts)/intl';
import { ThemeProvider } from './(contexts)/theme';

interface ProviderProps {
  children: React.ReactNode;
  intl: IntlProviderProps;
}

export const Provider = ({ children, intl }: ProviderProps) => (
  <IntlProvider {...intl}>
    <ThemeProvider>
      <NuqsAdapter>
        <TooltipProvider>{children}</TooltipProvider>
      </NuqsAdapter>
    </ThemeProvider>
  </IntlProvider>
);
