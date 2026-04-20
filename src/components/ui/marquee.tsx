import type { ComponentProps } from 'react';

import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentProps<'div'> {
  asChild?: boolean;
  pauseOnHover?: boolean;
  /**
   * Number of times the children should be repeated to fill the marquee.
   * @default 4
   */
  repeat?: number;
  reverse?: boolean;
  /**
   * Animation duration in seconds.
   * @default 30
   */
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
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            {...(index !== 0 && { 'aria-hidden': true, role: 'presentation' })}
            className={cn('flex shrink-0 gap-6 pr-6')}
          >
            {children}
          </div>
        ))}
      </Comp>
    </div>
  );
};
