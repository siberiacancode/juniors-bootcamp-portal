import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

import type { Skill } from '../types';

interface SkillPreviewProps {
  className?: string;
  skill: Skill;
}

export const SkillPreview = ({ skill, className }: SkillPreviewProps) => {
  const Icon = skill.Icon;

  return (
    <div
      className={cn(
        'relative flex h-48 flex-col items-center justify-center gap-4 rounded-32 bg-secondary',
        className
      )}
    >
      {/*TODO: Заготовка под контент*/}
      <Icon className='size-10 text-action-primary' />
      <Typography as='p' variant='body-lg'>
        Контент
      </Typography>
    </div>
  );
};
