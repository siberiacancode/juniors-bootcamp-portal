import type { ComponentProps } from 'react';

import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentProps<'div'> {
  asChild?: boolean;
  pauseOnHover?: boolean;
  repeat?: number;
  reverse?: boolean;
  speed?: number;
}

export const Marquee = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  repeat = 4,
  speed = 30,
  asChild = false,
  ...props
}: MarqueeProps) => {
  const Comp = asChild ? Slot.Root : 'div';

  return (
    <div className='group overflow-hidden'>
      <Comp
        className={cn(
          'inline-flex animate-[marquee_linear_infinite] will-change-transform',
          pauseOnHover && 'group-hover:paused',
          reverse && 'direction-[reverse]',
          className
        )}
        style={{
          animationDuration: `${speed}s`
        }}
        {...props}
      >
        {Array.from({ length: repeat }).map((_, index) => (
          <div
            key={index}
            className={cn('flex shrink-0 gap-6 pr-6')}
            {...(index !== 0 && { 'aria-hidden': true, role: 'presentation' })}
          >
            {children}
          </div>
        ))}
      </Comp>
    </div>
  );
};
