import { MedalIcon, StarIcon, TrophyIcon } from 'lucide-react';

export const LEVEL_ICON_MAP = {
  junior: StarIcon,
  middle: MedalIcon,
  senior: TrophyIcon
};

export const LEVEL_TITLE_MAP = {
  junior: (
    <>
      J<span>u</span>nior
    </>
  ),
  middle: (
    <>
      Mi<span>d</span>dle
    </>
  ),
  senior: (
    <>
      S<span>e</span>nior
    </>
  )
};

export const LEVEL_DESCRIPTION_MAP = {
  junior: 'page.task.section.level.junior.description',
  middle: 'page.task.section.level.middle.description',
  senior: 'page.task.section.level.senior.description'
} as const;

export const TAB_TRIGGER_BG_COLOR_MAP = {
  junior:
    'data-[state=active]:bg-(--color-green-50) dark:data-[state=active]:bg-(--color-green-900) [--color-special:var(--color-green-500)]',
  middle:
    'data-[state=active]:bg-(--color-yellow-50) dark:data-[state=active]:bg-(--color-yellow-900) [--color-special:var(--color-yellow-500)]',
  senior:
    'data-[state=active]:bg-(--color-purple-50) dark:data-[state=active]:bg-(--color-purple-900) [--color-special:var(--color-purple-500)]'
} as const;
