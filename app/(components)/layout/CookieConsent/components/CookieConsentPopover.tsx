'use client';

import Link from 'next/link';

import { Button, Typography } from '@/components/ui';
import { IntlText } from '@/intl';

import { useCookieConsent } from '../hooks';

export const CookieConsentPopover = () => {
  const { accept } = useCookieConsent();

  return (
    <div className='fixed bottom-0 left-0 z-50 m-5'>
      <div className='flex max-w-120 flex-col gap-6 rounded-16 border border-border-hard bg-white p-6 dark:bg-secondary'>
        <Typography as='p' variant='body-sm'>
          <IntlText
            values={{
              link: (chunks) => (
                <Typography asChild variant='link'>
                  <Link
                    href='#' // TODO add href
                  >
                    {chunks}
                  </Link>
                </Typography>
              )
            }}
            path='cookieConsent.description'
          />
        </Typography>
        <Button size='lg' onClick={accept}>
          <IntlText path='button.accept' />
        </Button>
      </div>
    </div>
  );
};
