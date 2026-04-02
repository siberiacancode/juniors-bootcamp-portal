import { useCookie } from '@siberiacancode/reactuse';

import { COOKIES } from '@/constants';

const PATH = '/';

export const useCookieConsent = () => {
  const cookieConsent = useCookie(COOKIES.COOKIE_CONSENT, {
    path: PATH,
    initialValue: false
  });

  return {
    hasConsent: cookieConsent.value,
    accept: () => cookieConsent.set(true, { path: PATH })
  };
};
