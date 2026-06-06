import * as motion from 'motion/react-client';

import { cn } from '@/lib/utils';

interface SkillProgressIconProps {
  active: boolean;
  className?: string;
  durationMs: number;
  progressKey: string;
}

export const SkillProgressIcon = ({
  active,
  className,
  durationMs,
  progressKey
}: SkillProgressIconProps) => (
  <span
    className={cn(
      'relative flex size-6 shrink-0 items-center justify-center lg:size-10',
      className
    )}
  >
    <span className='size-5 rounded-full bg-(--color-neutral-400) lg:size-8' />

    {active && (
      <svg aria-hidden className='absolute inset-0 -rotate-90' fill='none' viewBox='0 0 40 40'>
        <circle
          className='stroke-(--color-olive-700) opacity-30'
          cx='20'
          cy='20'
          r='18'
          strokeWidth='2'
        />
        <motion.circle
          key={progressKey}
          animate={{ pathLength: 1 }}
          className='stroke-(--color-olive-700)'
          cx='20'
          cy='20'
          initial={{ pathLength: 0 }}
          r='18'
          strokeLinecap='round'
          strokeWidth='2'
          transition={{ duration: durationMs / 1000, ease: 'linear' }}
        />
      </svg>
    )}
  </span>
);
