import clsx from 'clsx';
import { Nunito, Parisienne, Pixelify_Sans } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { Footer, GoogleTagManagerScript, Header, YandexMetrikaScript } from './(components)';
import { getDictionary } from './(contexts)/intl/helpers/getDictionary';
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

const locale = 'ru';

export const generateMetadata = async () => {
  const messages = await getDictionary(locale);

  return {
    title: messages['seo.main.title']
  };
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: Readonly<RootLayoutProps>) => {
  const messages = await getDictionary(locale);

  return (
    <html
      suppressHydrationWarning
      className={clsx(nunito.variable, pixelifySans.variable, parisienne.variable)}
      lang={locale}
    >
      <head>
        <link href='/metadata/favicon.ico' rel='icon' sizes='any' />
        <meta content='/metadata/open-graph.png' property='og:image' />
        <meta content='image/png' property='og:image:type' />
        <meta content='1200' property='og:image:width' />
        <meta content='640' property='og:image:height' />
        <meta content='noindex, nofollow' name='robots' />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = document.cookie.match(/theme=(.*?)(;|$)/)?.[1] || 'light';
              document.documentElement.classList.add(theme);
            `
          }}
        />
      </head>
      <body className='flex min-h-screen flex-col'>
        {process.env.NODE_ENV === 'production' && (
          <>
            <YandexMetrikaScript />
            <GoogleTagManagerScript />
          </>
        )}

        <Provider intl={{ locale, messages }}>
          <NuqsAdapter>
            <Header />
            {children}
            <Footer />
          </NuqsAdapter>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
