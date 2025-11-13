import { createContext } from 'react';

export type Theme = 'dark' | 'light';

export interface ThemeContextValue {
  value: Theme;
  set: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  value: 'light',
  set: () => {}
});
