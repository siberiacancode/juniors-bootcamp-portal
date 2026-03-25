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
    <div className='fixed bottom-4 left-4 z-50 max-w-120 rounded-16 border border-border-hard bg-secondary p-6'>
      <div className='flex flex-col gap-4'>
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
        <Button className='w-full' size='lg' onClick={() => cookieConsent.set(true, { path: '/' })}>
          <IntlText path='button.accept' />
        </Button>
      </div>
    </div>
  );
};
