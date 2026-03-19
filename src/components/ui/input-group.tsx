'use client';

import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';
import * as React from 'react';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

import { IconButton } from './icon-button';

const InputGroup = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'group/input-group relative flex w-full items-center rounded-full border border-input transition-[color,box-shadow] outline-none dark:bg-input/30',
        'h-13 min-w-0 has-[>textarea]:h-auto',

        // Variants based on alignment.
        'has-[>[data-align=inline-start]]:[&>input]:pl-2',
        'has-[>[data-align=inline-end]]:[&>input]:pr-2',
        'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
        'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',

        // Focus state.
        'has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50',

        // Error state.
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
  "flex h-auto cursor-text items-center justify-center gap-2 py-3 text-sm font-medium text-muted-fg select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-5",
  {
    variants: {
      align: {
        'inline-start': 'order-first pl-4 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]',
        'inline-end': 'order-last pr-4 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]',
        'block-start':
          'order-first w-full justify-start px-4 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3',
        'block-end':
          'order-last w-full justify-start px-4 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3'
      }
    },
    defaultVariants: {
      align: 'inline-start'
    }
  }
);

const InputGroupAddon = ({
  className,
  align = 'inline-start',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) => {
  return (
    <div
      className={cn(inputGroupAddonVariants({ align }), className)}
      data-align={align}
      data-slot='input-group-addon'
      role='group'
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('button')) {
          return;
        }
        e.currentTarget.parentElement?.querySelector('input')?.focus();
      }}
      {...props}
    />
  );
};

const InputGroupIconButton = ({
  className,
  type = 'button',
  variant = 'ghost',
  ...props
}: Omit<React.ComponentProps<typeof IconButton>, 'size'>) => {
  return (
    <IconButton
      className={cn(
        `flex items-center rounded-full p-0 shadow-none has-[>svg]:p-0 [&_svg:not([class*='size-'])]:size-5`,
        className
      )}
      size='sm'
      type={type}
      variant={variant}
      {...props}
    />
  );
};

const InputGroupText = ({ className, ...props }: React.ComponentProps<'span'>) => {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-sm text-muted-fg [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
};

const InputGroupInput = ({ className, ...props }: React.ComponentProps<'input'>) => {
  return (
    <Input
      className={cn(
        'flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent',
        className
      )}
      data-slot='input-group-control'
      {...props}
    />
  );
};

const InputGroupTextarea = ({ className, ...props }: React.ComponentProps<'textarea'>) => {
  return (
    <Textarea
      className={cn(
        'flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent',
        className
      )}
      data-slot='input-group-control'
      {...props}
    />
  );
};

export {
  InputGroup,
  InputGroupAddon,
  InputGroupIconButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea
};
