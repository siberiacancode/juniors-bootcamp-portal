import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `inline-flex shrink-0 items-center justify-center transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        primary: `bg-primary text-primary-foreground hover:bg-primary/90`,
        destructive: `bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40`,
        outline: `border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,
        secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80`,
        ghost: `hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`,
        link: `text-primary underline-offset-4 hover:underline`
      },
      iconOnly: {
        false: `rounded-full text-sm font-medium whitespace-nowrap [&_svg:not([class*='size-'])]:size-4`,
        true: 'rounded-sm'
      },
      size: {
        sm: 'gap-1.5',
        md: 'gap-2',
        lg: 'gap-2'
      }
    },
    compoundVariants: [
      {
        iconOnly: false,
        size: 'sm',
        className: 'h-8 px-3'
      },
      {
        iconOnly: false,
        size: 'md',
        className: 'h-10 px-6 py-2'
      },
      {
        iconOnly: false,
        size: 'lg',
        className: 'h-13 px-6'
      },
      {
        iconOnly: true,
        size: 'sm',
        className: `size-8 [&_svg:not([class*='size-'])]:size-6`
      },
      {
        iconOnly: true,
        size: 'md',
        className: `size-10 [&_svg:not([class*='size-'])]:size-6`
      },
      {
        iconOnly: true,
        size: 'lg',
        className: `size-13 [&_svg:not([class*='size-'])]:size-9`
      }
    ],
    defaultVariants: {
      variant: 'primary',
      iconOnly: false,
      size: 'md'
    }
  }
);

const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  asChild = false,
  iconOnly = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) => {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className, iconOnly }))}
      data-icon-only={iconOnly}
      data-size={size}
      data-slot='button'
      data-variant={variant}
      {...props}
    />
  );
};

export { Button, buttonVariants };
