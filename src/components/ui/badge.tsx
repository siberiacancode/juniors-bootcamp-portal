import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  `inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-4 py-2 text-xs font-bold whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 [&>svg]:pointer-events-none [&>svg]:size-3`,
  {
    variants: {
      variant: {
        outline: `border border-border-secondary`,
        accent: `bg-accent-primary text-accent-primary-fg`,
        primary: `bg-primary text-primary-fg`
      }
    },
    defaultVariants: {
      variant: 'outline'
    }
  }
);

const Badge = ({
  className,
  variant = 'primary',
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp
      className={cn(badgeVariants({ variant }), className)}
      data-slot='badge'
      data-variant={variant}
      {...props}
    />
  );
};

export { Badge, badgeVariants };
