import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Nunito, Overpass_Mono, Parisienne, Pixelify_Sans } from 'next/font/google';

import { intl } from '@/intl/server';
import { cn } from '@/lib/utils';

import { DynamicCookieConsent, Footer, Header } from './_components/layout';
import { ThemeScript } from './_scripts';
import { Provider } from './provider';

import './globals.css';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin', 'cyrillic']
});

const pixelifySans = Pixelify_Sans({
  variable: '--font-pixelify-sans',
  subsets: ['latin', 'cyrillic']
});

const parisienne = Parisienne({
  variable: '--font-parisienne',
  weight: '400',
  subsets: ['latin']
});

const overpassMono = Overpass_Mono({
  variable: '--font-overpass-mono',
  weight: '400',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: intl.formatMessage({ id: 'seo.main.title' }),
  metadataBase: new URL('https://juniorsbootcamp.ru'),
  icons: {
    icon: [
      { sizes: 'any', url: '/favicon.ico' },
      { sizes: '16x16', type: 'image/png', url: '/favicon-16x16.png' },
      { sizes: '32x32', type: 'image/png', url: '/favicon-32x32.png' }
    ],
    apple: [{ sizes: '180x180', url: '/apple-touch-icon.png' }]
  }
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = async ({ children }: Readonly<RootLayoutProps>) => (
  <html
    suppressHydrationWarning
    className={cn(
      nunito.variable,
      pixelifySans.variable,
      parisienne.variable,
      overpassMono.variable
    )}
    lang={intl.locale}
  >
    <head>
      <meta content='/metadata/open-graph.png' property='og:image' />
      <meta content='image/png' property='og:image:type' />
      <meta content='1200' property='og:image:width' />
      <meta content='640' property='og:image:height' />
      <meta content='noindex, nofollow' name='robots' />
      <ThemeScript />
    </head>
    <body className='flex min-h-screen flex-col overflow-x-hidden'>
      <Provider intl={{ locale: intl.locale, messages: intl.messages }}>
        <Header />
        <div className='flex flex-1 flex-col'>{children}</div>
        <Footer />
        <DynamicCookieConsent />
      </Provider>
    </body>
  </html>
);

export default RootLayout;
