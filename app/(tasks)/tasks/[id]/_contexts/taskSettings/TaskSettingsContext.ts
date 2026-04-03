import { createContext } from 'react';

import type { ApiType, LevelName } from '../../_types';

export interface TaskSettingsCookieValue {
  api: ApiType;
  level: LevelName;
}

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
