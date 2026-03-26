import { useCookie } from '@siberiacancode/reactuse';

import { COOKIES } from '@/app/(constants)';

const PATH = '/';

export const useCookieConsent = () => {
  const cookieConsent = useCookie(COOKIES.COOKIE_CONSENT, {
    path: PATH,
    initialValue: false
  });

  return {
    value: cookieConsent.value,
    accept: () => cookieConsent.set(true, { path: PATH })
  };
};
