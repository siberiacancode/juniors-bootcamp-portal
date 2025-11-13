'use client';

// import dynamic from 'next/dynamic';
import * as React from 'react';

import type { IntlProviderProps } from './(contexts)/intl';

import { IntlProvider } from './(contexts)/intl';
import { ThemeProvider } from './(contexts)/theme';

// const DockPanel = dynamic(
//   () => import('./(components)/layout/DockPanel/DockPanel').then((module) => module.DockPanel),
//   {
//     ssr: false
//   }
// );

interface ProviderProps {
  children: React.ReactNode;
  intl: IntlProviderProps;
}

export const Provider = ({ children, intl }: ProviderProps) => (
  <IntlProvider {...intl}>
    <ThemeProvider>
      {children}
      {/* <div className='fixed right-0 bottom-5 left-0 z-11'>
        <DockPanel />
      </div> */}
    </ThemeProvider>
  </IntlProvider>
);
