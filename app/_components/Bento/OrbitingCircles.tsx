import React from 'react';

import { cn } from '@/lib/utils';

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  path?: boolean;
  radius?: number;
  reverse?: boolean;
  speed?: number;
}

export const OrbitingCircles = ({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  speed = 1,
  ...props
}: OrbitingCirclesProps) => {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          className='pointer-events-none absolute inset-0 size-full'
          version='1.1'
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
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            className={cn(
              `absolute flex size-(--icon-size) transform-gpu animate-[orbit_linear_infinite] items-center justify-center rounded-full [&_*:not([class*='size-'])]:size-4`,
              reverse && 'direction-[reverse]',
              className
            )}
            style={
              {
                animationDuration: `${calculatedDuration}s`,
                '--radius': `${radius}px`,
                '--angle': `${angle}deg`
              } as React.CSSProperties
            }
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
};
