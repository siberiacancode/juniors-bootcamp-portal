'use client';

import { useCookie } from '@siberiacancode/reactuse';
import Link from 'next/link';

import { COOKIES } from '@/app/(constants)';
import { IntlText } from '@/components/intl';
import { Button, Typography, typographyVariants } from '@/components/ui';

export const CookieConsent = () => {
  const cookieConsent = useCookie<boolean>(COOKIES.COOKIE_CONSENT, {
    path: '/',
    initialValue: false
  });

  if (cookieConsent.value) return null;

  return (
    <div className='fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-7xl p-5'>
      <div className='flex flex-col gap-6 rounded-16 border border-border-hard bg-secondary p-6 md:flex-row'>
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
