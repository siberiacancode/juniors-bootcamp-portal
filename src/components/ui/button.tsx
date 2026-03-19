import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `inline-flex shrink-0 items-center justify-center rounded-full text-sm font-medium whitespace-nowrap transition outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-danger/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-fg hover:bg-primary-hover',
        secondary: 'bg-secondary text-secondary-fg hover:bg-secondary-hover',
        outline:
          'border border-border-secondary bg-outline text-foreground hover:border-action-primary hover:shadow-[-2px_2px_0px_0px_var(--color-action-primary)]',
        ghost: 'text-ghost-fg hover:bg-ghost-hover',
        danger:
          'bg-danger text-white hover:bg-danger/90 focus-visible:ring-danger/20 dark:bg-danger/60 dark:focus-visible:ring-danger/40'
      },
      size: {
        sm: 'h-8 gap-1.5 px-3',
        md: 'h-10 gap-2 px-6 py-2',
        lg: 'h-13 gap-2 px-6'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) => {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      data-size={size}
      data-slot='button'
      data-variant={variant}
      {...props}
    />
  );
};

export { Button, buttonVariants };
