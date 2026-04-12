import { useCookie } from '@siberiacancode/reactuse';

import { COOKIES } from '@/constants';

const PATH = '/';
const MAX_AGE = 365 * 24 * 60 * 60;

export const useCookieConsent = () => {
  const cookieConsent = useCookie(COOKIES.COOKIE_CONSENT, {
    path: PATH,
    initialValue: false,
    maxAge: MAX_AGE
  });

  return {
    hasConsent: cookieConsent.value,
    accept: () => cookieConsent.set(true, { path: PATH, maxAge: MAX_AGE })
  };
};
