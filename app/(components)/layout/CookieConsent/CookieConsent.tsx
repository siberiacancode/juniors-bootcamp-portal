'use client';

import { useCookie } from '@siberiacancode/reactuse';
import Link from 'next/link';

import { COOKIES } from '@/app/(constants)';
import { IntlText } from '@/components/intl';
import { Button } from '@/components/ui';

export const CookieConsent = () => {
  const cookieConsent = useCookie<boolean>(COOKIES.COOKIE_CONSENT, false);

  if (typeof window === 'undefined' || cookieConsent.value) return null;

  return (
    <div className='fixed bottom-4 left-4 z-50 max-w-[480px] rounded-16 border border-border-hard bg-secondary p-6'>
      <div className='flex flex-col gap-4'>
        <p className='text-base/6 font-medium text-foreground'>
          <IntlText
            values={{
              link: (chunks) => (
                <Link className='font-medium underline underline-offset-2' href='#'>
                  {chunks}
                </Link>
              )
            }}
            path='cookieConsent.description'
          />
        </p>
        <Button className='w-full' size='lg' onClick={() => cookieConsent.set(true, { path: '/' })}>
          <IntlText path='button.accept' />
        </Button>
      </div>
    </div>
  );
};
