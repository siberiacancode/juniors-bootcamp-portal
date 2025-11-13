import { Pixelify_Sans, Roboto } from 'next/font/google';

import { Footer, GoogleTagManagerScript, Header, YandexMetrikaScript } from './(components)';
import { getDictionary } from './(contexts)/intl/helpers/getDictionary';
import { Provider } from './provider';

import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin']
});

const pixelifySans = Pixelify_Sans({
  variable: '--font-pixelify-sans',
  subsets: ['latin']
});

const locale = 'ru';

export const generateMetadata = async () => {
  const messages = await getDictionary(locale);

  return {
    title: messages['seo.landing.title'],
    description: messages['seo.landing.description']
  };
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: Readonly<RootLayoutProps>) => {
  const messages = await getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link href='/metadata/favicon.ico' rel='icon' sizes='any' />
        <meta content='/metadata/open-graph.png' property='og:image' />
        <meta content='image/png' property='og:image:type' />
        <meta content='1200' property='og:image:width' />
        <meta content='640' property='og:image:height' />
        <meta name='robots' content='noindex, nofollow' />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = document.cookie.match(/theme=(.*?)(;|$)/)?.[1] || 'light';
              document.documentElement.classList.add(theme);
            `
          }}
        />
      </head>
      <body className={`${roboto.variable} ${pixelifySans.variable} flex min-h-screen flex-col`}>
        {process.env.NODE_ENV === 'production' && (
          <>
            <YandexMetrikaScript />
            <GoogleTagManagerScript />
          </>
        )}

        <Provider intl={{ locale, messages }}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
