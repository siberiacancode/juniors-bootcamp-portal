import type { ComponentProps, CSSProperties } from 'react';

import { Fragment } from 'react';

import {
  AngularIcon,
  LaravelIcon,
  NextIcon,
  NodeIcon,
  NuxtIcon,
  ReactIcon,
  SvelteIcon,
  VueIcon
} from '@/components/icons';
import { cn } from '@/lib/utils';

type OrbitingCirclesProps = Omit<ComponentProps<'div'>, 'children'>;

const TECHNOLOGIES = [
  [VueIcon, ReactIcon],
  [AngularIcon, SvelteIcon],
  [NuxtIcon, NextIcon],
  [NodeIcon, LaravelIcon]
] as const;

export const OrbitingStack = ({ className, ...props }: OrbitingCirclesProps) => (
  <div
    className={cn(
      'relative flex aspect-square size-75 items-center justify-center select-none',
      className
    )}
    {...props}
  >
    {TECHNOLOGIES.map((orbit, orbitIndex) => {
      const radius = 44 + orbitIndex * 30;
      return (
        <Fragment key={radius}>
          <svg
            className='pointer-events-none absolute inset-0 size-full'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              className='stroke-black/10 stroke-1 dark:stroke-white/10'
              cx='50%'
              cy='50%'
              fill='none'
              r={radius}
            />
          </svg>
          {orbit.map((Icon, index) => {
            const angle = 180 * index + orbitIndex * 15;
            return (
              <div
                key={angle}
                className={cn(
                  'absolute flex transform-gpu animate-[orbit_linear_infinite] items-center justify-center',
                  'size-6 rounded-full border border-black/10 bg-background dark:border-white/10 [&>svg]:size-4',
                  'hover:paused',
                  orbitIndex % 2 === 0 && 'direction-[reverse]'
                )}
                style={
                  {
                    animationDuration: `${20 + orbitIndex * 2}s`,
                    '--radius': `${radius}px`,
                    '--angle': `${angle}deg`
                  } as CSSProperties
                }
              >
                <Icon />
              </div>
            );
          })}
        </Fragment>
      );
    })}

    <div className='flex size-10 items-center justify-center rounded-full bg-primary font-pixelify-sans text-[24px]/7 font-bold tracking-wide text-primary-fg'>
      jb
    </div>
  </div>
);
