import { COOKIES } from '@/constants';
import { getCookieValue } from '@/utils/server';

import type { TaskSettings } from './constants';

import { DEFAULT_TASK_SETTINGS, TASK_APIS, TASK_LEVELS, TASK_STACKS } from './constants';

import 'server-only';

const pick = <Value extends string>(list: readonly Value[], value: unknown, fallback: Value) =>
  list.includes(value as Value) ? (value as Value) : fallback;

/** Настройки задания из cookie (та же cookie, что у выбора уровня на лендинге задания) */
export const getTaskSettings = async (): Promise<TaskSettings> => {
  const value = await getCookieValue<Partial<TaskSettings>>(COOKIES.TASK_SETTINGS, {});

  return {
    level: pick(TASK_LEVELS, value.level, DEFAULT_TASK_SETTINGS.level),
    stack: pick(TASK_STACKS, value.stack, DEFAULT_TASK_SETTINGS.stack),
    api: pick(TASK_APIS, value.api, DEFAULT_TASK_SETTINGS.api)
  };
};
