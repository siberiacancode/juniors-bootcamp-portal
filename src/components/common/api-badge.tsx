import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import * as React from 'react';

import type { GraphQLOperation, RestOperation } from '@/types/operation';

import { cn } from '@/lib/utils';

const apiBadgeVariants = cva<{ variant: Record<GraphQLOperation | RestOperation, string> }>(
  'rounded-full px-6 py-2 text-[20px]/7 font-bold tracking-wider',
  {
    variants: {
      variant: {
        delete:
          'bg-(--color-red-100) text-(--color-red-800) dark:bg-(--color-red-800) dark:text-(--color-red-100)',
        get: 'bg-(--color-blue-50) text-(--color-blue-800) dark:bg-(--color-blue-800) dark:text-(--color-blue-50)',
        patch:
          'bg-(--color-yellow-50) text-(--color-yellow-800) dark:bg-(--color-yellow-800) dark:text-(--color-yellow-50)',
        post: 'bg-(--color-green-100) text-(--color-green-800) dark:bg-(--color-green-800) dark:text-(--color-green-100)',
        put: 'bg-(--color-orange-100) text-(--color-orange-800) dark:bg-(--color-orange-800) dark:text-(--color-orange-100)',
        mutation:
          'bg-(--color-purple-100) text-(--color-purple-600) dark:bg-(--color-purple-600) dark:text-(--color-purple-100)',
        query:
          'bg-(--color-sky-100) text-(--color-sky-500) dark:bg-(--color-sky-500) dark:text-(--color-sky-100)',
        subscription:
          'bg-(--color-orange-100) text-(--color-orange-400) dark:bg-(--color-orange-400) dark:text-(--color-orange-100)'
      }
    }
  }
);

type ApiBadgeProps = React.ComponentProps<'div'> &
  VariantProps<typeof apiBadgeVariants> & { asChild?: boolean };

const ApiBadge = ({ className, variant, asChild = false, ...props }: ApiBadgeProps) => {
  const Comp = asChild ? Slot.Root : 'div';

  return (
    <Comp
      className={cn(apiBadgeVariants({ variant }), className)}
      data-slot='api-badge'
      data-variant={variant}
      {...props}
    />
  );
};

export { ApiBadge, apiBadgeVariants };
