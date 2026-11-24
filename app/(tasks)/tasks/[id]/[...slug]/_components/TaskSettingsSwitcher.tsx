'use client';

import { useCookie } from '@siberiacancode/reactuse';
import { useRouter } from 'next/navigation';

import type { TaskSettings } from '@/docs/tasks/constants';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';
import { COOKIES } from '@/constants';
import { TASK_APIS, TASK_LEVELS, TASK_STACKS } from '@/docs/tasks/constants';

const COOKIE_OPTIONS = { path: '/' } as const;

const FIELDS = [
  { key: 'level', values: TASK_LEVELS },
  { key: 'stack', values: TASK_STACKS },
  { key: 'api', values: TASK_APIS }
] as const;

interface TaskSettingsSwitcherProps {
  initialValue: TaskSettings;
}

/** Меняет cookie и перерисовывает страницу на сервере под новые настройки */
export const TaskSettingsSwitcher = ({ initialValue }: TaskSettingsSwitcherProps) => {
  const router = useRouter();
  const settings = useCookie<TaskSettings>(COOKIES.TASK_SETTINGS, {
    ...COOKIE_OPTIONS,
    initialValue
  });

  const onValueChange = (key: keyof TaskSettings) => (value: string | null) => {
    if (!value) return;
    settings.set({ ...settings.value, [key]: value }, COOKIE_OPTIONS);
    router.refresh();
  };

  return (
    <div className='flex flex-wrap gap-2'>
      {FIELDS.map(({ key, values }) => (
        <Select key={key} value={settings.value[key]} onValueChange={onValueChange(key)}>
          <SelectTrigger className='w-36'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {values.map((value) => (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
    </div>
  );
};
