'use client';

import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';
import { XIcon } from 'lucide-react';
import { Toggle as ChipPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

const chipVariants = cva(
  "inline-flex h-13 min-w-13 items-center justify-center gap-2 rounded-full bg-secondary px-8 text-[20px]/7 font-bold tracking-wider whitespace-nowrap text-foreground outline-none hover:bg-secondary-hover focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-danger/20 data-[state=on]:px-4.5 dark:aria-invalid:ring-danger/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: '',
        primary:
          'data-[state=on]:bg-primary data-[state=on]:text-primary-fg data-[state=on]:hover:bg-primary-hover',
        accent:
          'data-[state=on]:bg-accent-primary data-[state=on]:text-accent-primary-fg data-[state=on]:hover:bg-accent-primary-hover'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export type ChipProps = React.ComponentProps<typeof ChipPrimitive.Root> &
  VariantProps<typeof chipVariants> & {
    icon?: React.ReactNode;
  };

const Chip = ({ className, variant, children, icon, ...props }: ChipProps) => (
  <ChipPrimitive.Root
    className={cn(chipVariants({ variant, className }), 'group/chip')}
    data-slot='chip'
    {...props}
  >
    {children}
    <span className='hidden group-data-[state=on]/chip:block'>{icon || <XIcon />}</span>
  </ChipPrimitive.Root>
);

export { Chip, chipVariants };
