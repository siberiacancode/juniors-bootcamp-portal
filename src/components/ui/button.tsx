import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `inline-flex shrink-0 items-center justify-center rounded-full text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
  {
    variants: {
      variant: {
        primary: `bg-primary text-primary-foreground hover:bg-primary/90`,
        destructive: `bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40`,
        outline: `border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,
        secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80`,
        ghost: `hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`
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
