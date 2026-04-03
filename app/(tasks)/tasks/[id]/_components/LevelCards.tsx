'use client';

import { Card, Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

import type { LevelName } from '../_types';

import { useTaskSettings } from '../_contexts/taskSettings';
import { LEVELS } from './constants';

interface LevelCardsProps {
  levelNames: LevelName[];
}

export const LevelCards = ({ levelNames }: LevelCardsProps) => {
  const taskSettings = useTaskSettings();

  const setLevel = (level: LevelName) =>
    taskSettings.set({
      ...taskSettings.value,
      level
    });

  return (
    <div className='no-scrollbar overflow-x-auto'>
      <div className='mx-auto flex w-max gap-4 px-6 pb-0.75 *:w-80 sm:w-7xl sm:*:flex-1'>
        {levelNames.map((levelName) => {
          const levelData = LEVELS[levelName];
          const LevelIcon = levelData.icon;
          return (
            <Card
              key={levelName}
              className={cn(
                'gap-4 px-6 sm:px-10',
                'group/trigger cursor-pointer transition hover:shadow-[3px_3px_0_0_var(--color-border-hard)]',
                levelData.tab
              )}
              data-active={taskSettings.value.level === levelName}
              onClick={() => setLevel(levelName)}
            >
              <LevelIcon className='size-10 text-(--color-special)' />

              <Typography
                pixelify
                className='group-data-active/trigger:drop-shadow-[3px_0_0_var(--color-special)]'
                variant='heading-2xl'
              >
                {levelData.title}
              </Typography>

              <Typography as='p' variant='body-md'>
                <IntlText path={levelData.description} />
              </Typography>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
