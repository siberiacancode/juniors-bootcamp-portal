'use client';

import type { VariantProps } from 'class-variance-authority';

import { XIcon } from 'lucide-react';
import { ToggleGroup as ChipGroupPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { chipVariants } from './chip';

const ChipGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ChipGroupPrimitive.Root>) => {
  return (
    <ChipGroupPrimitive.Root
      className={cn(
        'flex w-fit flex-row items-center gap-2 data-vertical:flex-col data-vertical:items-stretch',
        className
      )}
      data-slot='chip-group'
      {...props}
    />
  );
};

const ChipGroupItem = ({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<typeof ChipGroupPrimitive.Item> & VariantProps<typeof chipVariants>) => {
  return (
    <ChipGroupPrimitive.Item
      className={cn(chipVariants({ variant, className }), 'group/chip-group-item')}
      data-slot='chip-group-item'
      {...props}
    >
      {children}
      <XIcon className='hidden group-data-[state=on]/chip-group-item:block' />
    </ChipGroupPrimitive.Item>
  );
};

export { ChipGroup, ChipGroupItem };
