import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

import type { Skill } from '../types';

import { SKILL_AUTO_CHANGE_DELAY_MS } from '../constants';
import { SkillProgressIcon } from './SkillProgressIcon';

interface SkillPreviewProps {
  active?: boolean;
  className?: string;
  progressKey?: string;
  skill: Skill;
}

export const SkillPreview = ({
  active = true,
  skill,
  className,
  progressKey = skill.title
}: SkillPreviewProps) => {
  const Icon = skill.Icon;

  return (
    <div
      className={cn(
        'relative grid size-full gap-4 rounded-32 bg-background p-6 sm:p-8 lg:bg-secondary',
        className
      )}
    >
      {/*TODO: Заготовка под контент*/}
      <div className='grid min-h-48 place-content-center rounded-32 bg-background lg:min-h-full'>
        <div className='flex flex-col items-center'>
          <Icon className='size-10 text-action-primary' />
          <Typography as='p' variant='body-lg'>
            Контент
          </Typography>
        </div>
      </div>

      <SkillProgressIcon
        active={active}
        className='absolute right-4 bottom-4 lg:right-5 lg:bottom-5'
        durationMs={SKILL_AUTO_CHANGE_DELAY_MS}
        progressKey={progressKey}
      />
    </div>
  );
};
