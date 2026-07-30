'use client';

import type { ComponentProps, ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { useState } from 'react';
import { IntlProvider } from 'react-intl';

import { ThemeProvider } from './_contexts/theme';

type IntlProviderProps = ComponentProps<typeof IntlProvider>;

interface ProviderProps {
  children: ReactNode;
  intl: IntlProviderProps;
}

export const Provider = ({ children, intl }: ProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <IntlProvider {...intl}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
        </ThemeProvider>
      </QueryClientProvider>
    </IntlProvider>
  );
};
