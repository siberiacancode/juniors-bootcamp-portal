import type { LucideIcon } from 'lucide-react';
import type { JSX } from 'react';

import { MedalIcon, StarIcon, TrophyIcon } from 'lucide-react';

import type { LevelName } from '../../_types';

interface LevelData {
  description: MessagePath;
  icon: LucideIcon;
  tab: string;
  title: JSX.Element;
}

export const LEVELS: Record<LevelName, LevelData> = {
  junior: {
    icon: StarIcon,
    title: (
      <>
        J<span>u</span>nior
      </>
    ),
    description: 'page.task.section.level.junior.description',
    tab: 'data-active:bg-(--color-green-50) dark:data-active:bg-(--color-green-900) [--color-special:var(--color-green-500)]'
  },
  middle: {
    icon: MedalIcon,
    title: (
      <>
        Mi<span>d</span>dle
      </>
    ),
    description: 'page.task.section.level.middle.description',
    tab: 'data-active:bg-(--color-yellow-50) dark:data-active:bg-(--color-yellow-900) [--color-special:var(--color-yellow-500)]'
  },
  senior: {
    icon: TrophyIcon,
    title: (
      <>
        S<span>e</span>nior
      </>
    ),
    description: 'page.task.section.level.senior.description',
    tab: 'data-active:bg-(--color-purple-50) dark:data-active:bg-(--color-purple-900) [--color-special:var(--color-purple-500)]'
  }
} as const;
