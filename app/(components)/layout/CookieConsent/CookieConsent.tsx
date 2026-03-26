'use client';

import { useCookie } from '@siberiacancode/reactuse';
import Link from 'next/link';

import { COOKIES } from '@/app/(constants)';
import { IntlText } from '@/components/intl';
import { Button, Typography, typographyVariants } from '@/components/ui';

export const CookieConsent = () => {
  const cookieConsent = useCookie(COOKIES.COOKIE_CONSENT, {
    path: '/',
    initialValue: false
  });

  if (cookieConsent.value) return null;

  return (
    <div className='fixed bottom-0 left-0 z-50 m-5'>
      <div className='flex max-w-120 flex-col gap-6 rounded-16 border border-border-hard bg-white p-6 dark:bg-secondary'>
        <Typography as='p' variant='body-sm'>
          <IntlText
            values={{
              link: (chunks) => (
                <Link className={typographyVariants({ variant: 'link' })} href='#'>
                  {chunks}
                </Link>
              )
            }}
            path='cookieConsent.description'
          />
        </Typography>
        <Button size='lg' onClick={() => cookieConsent.set(true, { path: '/' })}>
          <IntlText path='button.accept' />
        </Button>
      </div>
    </div>
  );
};
