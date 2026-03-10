'use client';

import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';
import { XIcon } from 'lucide-react';
import { Toggle as ChipPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

const chipVariants = cva(
  "inline-flex h-13 min-w-13 items-center justify-center gap-1.5 rounded-full bg-muted px-8 text-xl font-bold whitespace-nowrap text-foreground transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: '',
        accent: 'data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
        primary: 'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

const Chip = ({
  className,
  variant,
  children,
  pressed,
  ...props
}: React.ComponentProps<typeof ChipPrimitive.Root> & VariantProps<typeof chipVariants>) => {
  return (
    <ChipPrimitive.Root
      className={cn(chipVariants({ variant, className }))}
      data-slot='chip'
      {...props}
    >
      {children}
      {pressed && <XIcon />}
    </ChipPrimitive.Root>
  );
};

export { Chip, chipVariants };
