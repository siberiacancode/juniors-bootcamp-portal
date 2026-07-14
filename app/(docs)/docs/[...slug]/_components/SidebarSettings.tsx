'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui';
import { IntlText } from '@/intl';

const LEVEL_OPTIONS = [
  { label: 'page.docs.settings.level.junior', value: 'junior' },
  { label: 'page.docs.settings.level.middle', value: 'middle' },
  { label: 'page.docs.settings.level.senior', value: 'senior' }
] as const;

const API_OPTIONS = [
  { label: 'page.docs.settings.api.rest', value: 'rest' },
  { label: 'page.docs.settings.api.graphql', value: 'graphql' }
] as const;

export const SidebarSettings = () => (
  <div className='mb-5 grid grid-cols-2 gap-2'>
    <Select defaultValue='junior'>
      <SelectTrigger aria-label='Уровень' className='w-full rounded-8' size='sm'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent align='start'>
        <SelectGroup>
          {LEVEL_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <IntlText path={option.label} />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>

    <Select defaultValue='rest'>
      <SelectTrigger aria-label='Тип API' className='w-full rounded-8' size='sm'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent align='start'>
        <SelectGroup>
          {API_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <IntlText path={option.label} />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
);
