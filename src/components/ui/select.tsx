'use client';

import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { Select as SelectPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Select = ({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) => {
  return <SelectPrimitive.Root data-slot='select' {...props} />;
};

const SelectGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) => {
  return (
    <SelectPrimitive.Group
      className={cn('scroll-my-1 p-1', className)}
      data-slot='select-group'
      {...props}
    />
  );
};

const SelectValue = ({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) => {
  return <SelectPrimitive.Value data-slot='select-value' {...props} />;
};

const SelectTrigger = ({
  className,
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'default' | 'sm';
}) => {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "flex w-fit items-center justify-between gap-1.5 rounded-full bg-muted px-3 py-1.25 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-3 focus-visible:ring-secondary disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 aria-invalid:ring-danger/20 data-placeholder:text-muted-foreground data-[size=default]:h-10 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-danger/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      data-size={size}
      data-slot='select-trigger'
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className='pointer-events-none size-4 text-muted-foreground' />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

const SelectScrollUpButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) => {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn(
        "z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      data-slot='select-scroll-up-button'
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
  );
};

const SelectScrollDownButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) => {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn(
        "z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      data-slot='select-scroll-down-button'
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
  );
};

const SelectContent = ({
  className,
  children,
  position = 'popper',
  align = 'center',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          'relative z-50 max-h-(--radix-select-content-available-height) min-w-20 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground ring-2 ring-foreground duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        align={align}
        data-align-trigger={position === 'item-aligned'}
        data-slot='select-content'
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)',
            position === 'popper' && ''
          )}
          data-position={position}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

const SelectLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) => {
  return (
    <SelectPrimitive.Label
      className={cn('px-1.5 py-1 text-xs text-muted-foreground', className)}
      data-slot='select-label'
      {...props}
    />
  );
};

const SelectItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) => {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex h-8 w-full cursor-default items-center justify-center gap-1.5 rounded-[14px] px-2 py-1.25 text-sm outline-hidden select-none focus:bg-secondary focus:text-secondary-foreground not-data-[variant=danger]:focus:**:text-secondary-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      data-slot='select-item'
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};

const SelectSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) => {
  return (
    <SelectPrimitive.Separator
      className={cn('pointer-events-none -mx-1 my-1 h-px bg-border', className)}
      data-slot='select-separator'
      {...props}
    />
  );
};

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue
};
