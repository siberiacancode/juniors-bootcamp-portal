'use client';

import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';
import * as React from 'react';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import { IconButton } from './icon-button';

const InputGroup = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'group/input-group relative flex w-full items-center rounded-full border border-input transition-[color,box-shadow] outline-none dark:bg-input/30',
        'h-13 min-w-0',

        'has-[>[data-align=start]]:[&>input]:pl-2',
        'has-[>[data-align=end]]:[&>input]:pr-2',

        'has-[[data-slot=input-group-control]:focus-visible]:border-border-soft has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50',

        'has-[[data-slot][aria-invalid=true]]:border-danger has-[[data-slot][aria-invalid=true]]:ring-danger/20 dark:has-[[data-slot][aria-invalid=true]]:ring-danger/40',
        className
      )}
      data-slot='input-group'
      role='group'
      {...props}
    />
  );
};

const inputGroupAddonVariants = cva(
  "flex h-auto cursor-text items-center justify-center gap-2 border-input text-input select-none group-data-[disabled=true]/input-group:opacity-50 has-[>button]:-ml-2 [&>svg:not([class*='size-'])]:size-5",
  {
    variants: {
      align: {
        start: 'order-first pl-4',
        end: 'order-last pr-4'
      }
    },
    defaultVariants: {
      align: 'start'
    }
  }
);

const InputGroupAddon = ({
  className,
  align = 'start',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) => {
  return (
    <div
      className={cn(inputGroupAddonVariants({ align }), className)}
      data-align={align}
      data-slot='input-group-addon'
      role='group'
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('button')) return;
        e.currentTarget.parentElement?.querySelector('input')?.focus();
      }}
      {...props}
    />
  );
};

const InputGroupIconButton = ({
  className,
  type = 'button',
  ...props
}: Omit<React.ComponentProps<typeof IconButton>, 'rounded' | 'size' | 'variant'>) => {
  return (
    <IconButton
      rounded
      className={cn('text-input', className)}
      size='sm'
      type={type}
      variant={'ghost'}
      {...props}
    />
  );
};

const InputGroupInput = ({ className, ...props }: React.ComponentProps<typeof Input>) => {
  return (
    <Input
      className={cn(
        'flex-1 rounded-none border-none bg-transparent ring-0 focus-visible:ring-0',
        className
      )}
      data-slot='input-group-control'
      {...props}
    />
  );
};

export { InputGroup, InputGroupAddon, InputGroupIconButton, InputGroupInput };
