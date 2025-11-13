import Script from 'next/script';

export const GoogleTagManagerScript = () => (
  <>
    <Script
      id='google-analytics'
      src='https://www.googletagmanager.com/gtag/js?id=G-KPFPSKKZDG'
      strategy='afterInteractive'
    />
    <Script
      id='google-analytics-config'
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KPFPSKKZDG');
        `
      }}
    />
  </>
);
