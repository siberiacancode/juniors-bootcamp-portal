'use server';

import { cookies } from 'next/headers';

import { COOKIES } from '@/constants';

import type { TaskSettingsCookieValue } from '../_types';

export const getTaskSettingsCookieValue = async () => {
  const cookieStore = await cookies();

  return cookieStore.has(COOKIES.TASK_SETTINGS)
    ? (JSON.parse(cookieStore.get(COOKIES.TASK_SETTINGS)!.value) as TaskSettingsCookieValue)
    : ({
        level: 'junior',
        api: 'rest'
      } as TaskSettingsCookieValue);
};
