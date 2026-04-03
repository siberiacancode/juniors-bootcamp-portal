import { createContext } from 'react';

import type { TaskSettingsCookieValue } from '../../_types';

interface ThemeContextValue {
  value: TaskSettingsCookieValue;
  set: (value: TaskSettingsCookieValue) => void;
}

export const TaskSettingsContext = createContext<ThemeContextValue>({
  value: {
    level: 'junior',
    api: 'rest'
  },
  set: () => {}
});
