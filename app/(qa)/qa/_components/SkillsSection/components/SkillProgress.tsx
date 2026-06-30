'use client';

import * as motion from 'motion/react-client';

import { cn } from '@/lib/utils';

import { SKILL_AUTO_CHANGE_DELAY_SECONDS } from '../constants';

interface SkillProgressProps {
  className?: string;
  dotClassName?: string;
}

export const SkillProgress = ({ className, dotClassName = 'size-8' }: SkillProgressProps) => (
  <span
    className={cn(
      'absolute right-5 bottom-5 flex size-8 shrink-0 items-center justify-center',
      className
    )}
  >
    <span className={cn('rounded-full bg-(--color-neutral-400)', dotClassName)} />
    <svg aria-hidden className='absolute inset-0 -rotate-90' fill='none' viewBox='0 0 40 40'>
      <motion.circle
        animate={{ pathLength: 1 }}
        className='stroke-(--color-olive-700)'
        cx='20'
        cy='20'
        initial={{ pathLength: 0 }}
        r='18'
        strokeLinecap='round'
        strokeWidth='2'
        transition={{ duration: SKILL_AUTO_CHANGE_DELAY_SECONDS, ease: 'linear' }}
      />
    </svg>
  </span>
);
