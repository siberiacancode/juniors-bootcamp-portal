'use client';

import { useCookie } from '@siberiacancode/reactuse';
import { useMemo } from 'react';

import { COOKIES } from '@/constants';

import type { TaskSettingsCookieValue } from '../../_types';

import { TaskSettingsContext } from './TaskSettingsContext';

interface TaskSettingsProviderProps {
  children: React.ReactNode;
  initialValue: TaskSettingsCookieValue;
}

const PATH = '/';

export const TaskSettingsProvider = ({ children, initialValue }: TaskSettingsProviderProps) => {
  const cookie = useCookie(COOKIES.TASK_SETTINGS, {
    path: PATH,
    initialValue
  });

  const value = useMemo(
    () => ({
      value: cookie.value,
      set: (value: TaskSettingsCookieValue) =>
        cookie.set(value, {
          path: PATH
        })
    }),
    [cookie]
  );

  return <TaskSettingsContext value={value}>{children}</TaskSettingsContext>;
};
