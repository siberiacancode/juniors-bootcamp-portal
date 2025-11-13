import { getCookie, setCookie } from '@siberiacancode/reactuse';
import { useLayoutEffect, useMemo, useState } from 'react';

import type { Theme } from './ThemeContext';

import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    return (getCookie('theme') as Theme) ?? 'light';
  });

  useLayoutEffect(() => {
    const root = document.documentElement;
    setCookie('theme', theme);
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const value = useMemo(() => ({ value: theme, set: setTheme }), [theme]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
};
