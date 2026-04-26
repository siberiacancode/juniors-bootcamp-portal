import type { ComponentProps } from 'react';

import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

const Card = ({
  className,
  asChild = false,
  ...props
}: ComponentProps<'div'> & {
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot.Root : 'div';
  return (
    <Comp
      className={cn(
        'flex flex-col rounded-24 border-2 border-border-hard bg-background py-6',
        className
      )}
      data-slot='card'
      {...props}
    />
  );
};

export { Card };
