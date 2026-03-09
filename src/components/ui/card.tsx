import { Slot } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Card = ({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & {
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot.Root : 'div';
  return (
    <Comp
      className={cn(
        `flex flex-col rounded-2xl border-2 border-foreground bg-card py-6 text-card-foreground`,
        className
      )}
      data-slot='card'
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        `@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start px-10 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6`,
        className
      )}
      data-slot='card-header'
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('leading-none font-bold', className)} data-slot='card-title' {...props} />
  );
};

const CardDescription = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn('text-sm text-muted-foreground', className)}
      data-slot='card-description'
      {...props}
    />
  );
};

const CardAction = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(`col-start-2 row-span-2 row-start-1 self-start justify-self-end`, className)}
      data-slot='card-action'
      {...props}
    />
  );
};

const CardContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('px-10', className)} data-slot='card-content' {...props} />;
};

const CardFooter = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(`flex items-center px-10 [.border-t]:pt-6`, className)}
      data-slot='card-footer'
      {...props}
    />
  );
};

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
