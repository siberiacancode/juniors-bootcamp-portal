import clsx from 'clsx';
import { Nunito, Nunito_Sans, Overpass_Mono, Parisienne, Pixelify_Sans } from 'next/font/google';

import { LOCALE } from '@/app/(constants)';

import {
  CookieConsent,
  Footer,
  GoogleTagManagerScript,
  Header,
  ThemeScript,
  YandexMetrikaScript
} from './(components)';
import { getDictionary } from './(contexts)/intl/helpers/getDictionary';
import { Provider } from './provider';

import './globals.css';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin', 'cyrillic']
});

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
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

export const generateMetadata = async () => {
  const messages = await getDictionary(LOCALE);

  return {
    title: messages['seo.main.title']
  };
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: Readonly<RootLayoutProps>) => {
  const messages = await getDictionary(LOCALE);

  return (
    <html
      suppressHydrationWarning
      className={clsx(
        nunito.variable,
        nunitoSans.variable,
        pixelifySans.variable,
        parisienne.variable,
        overpassMono.variable
      )}
      lang={LOCALE}
    >
      <head>
        <link href='/metadata/favicon.ico' rel='icon' sizes='any' />
        <meta content='/metadata/open-graph.png' property='og:image' />
        <meta content='image/png' property='og:image:type' />
        <meta content='1200' property='og:image:width' />
        <meta content='640' property='og:image:height' />
        <meta content='noindex, nofollow' name='robots' />
        <ThemeScript />
      </head>
      <body className='flex min-h-screen flex-col'>
        {process.env.NODE_ENV === 'production' && (
          <>
            <YandexMetrikaScript />
            <GoogleTagManagerScript />
          </>
        )}

        <Provider intl={{ locale: LOCALE, messages }}>
          <Header />
          <div className='flex flex-1 flex-col'>{children}</div>
          <Footer />

          <CookieConsent />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
