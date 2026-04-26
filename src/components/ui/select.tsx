'use client';

import type { ComponentProps } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { Select as SelectPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

const Select = ({ ...props }: ComponentProps<typeof SelectPrimitive.Root>) => (
  <SelectPrimitive.Root data-slot='select' {...props} />
);

const SelectGroup = ({ className, ...props }: ComponentProps<typeof SelectPrimitive.Group>) => (
  <SelectPrimitive.Group
    className={cn('scroll-my-1 p-1', className)}
    data-slot='select-group'
    {...props}
  />
);

const SelectValue = ({ ...props }: ComponentProps<typeof SelectPrimitive.Value>) => (
  <SelectPrimitive.Value data-slot='select-value' {...props} />
);

const SelectTrigger = ({
  className,
  size = 'default',
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'default' | 'sm';
}) => (
  <SelectPrimitive.Trigger
    className={cn(
      "flex w-fit items-center justify-between gap-1.5 rounded-full bg-secondary px-3 py-1.25 font-nunito text-[14px]/5.5 tracking-wide whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-3 focus-visible:ring-action-primary disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 aria-invalid:ring-danger/20 data-placeholder:text-muted-fg data-[size=default]:h-10 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-danger/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    data-size={size}
    data-slot='select-trigger'
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDownIcon className='pointer-events-none size-4 text-muted-fg' />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
);

const SelectScrollUpButton = ({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollUpButton>) => (
  <SelectPrimitive.ScrollUpButton
    className={cn(
      "z-10 flex cursor-default items-center justify-center bg-background py-1 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    data-slot='select-scroll-up-button'
    {...props}
  >
    <ChevronUpIcon />
  </SelectPrimitive.ScrollUpButton>
);

const SelectScrollDownButton = ({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollDownButton>) => (
  <SelectPrimitive.ScrollDownButton
    className={cn(
      "z-10 flex cursor-default items-center justify-center bg-background py-1 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    data-slot='select-scroll-down-button'
    {...props}
  >
    <ChevronDownIcon />
  </SelectPrimitive.ScrollDownButton>
);

const SelectContent = ({
  className,
  children,
  position = 'popper',
  align = 'center',
  ...props
}: ComponentProps<typeof SelectPrimitive.Content>) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        'relative z-50 max-h-(--radix-select-content-available-height) min-w-20 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-16 bg-background text-foreground ring-2 ring-foreground duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
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

const SelectLabel = ({ className, ...props }: ComponentProps<typeof SelectPrimitive.Label>) => (
  <SelectPrimitive.Label
    className={cn('px-1.5 py-1 text-[12px] text-muted-fg', className)}
    data-slot='select-label'
    {...props}
  />
);

const SelectItem = ({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Item>) => (
  <SelectPrimitive.Item
    className={cn(
      "relative flex h-8 w-full cursor-default items-center justify-center gap-1.5 rounded-14 px-2 py-1.25 font-nunito text-[14px]/5.5 tracking-wide outline-hidden select-none focus:bg-action-primary focus:text-action-primary-fg not-data-[variant=danger]:focus:**:text-action-primary-fg data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
      className
    )}
    data-slot='select-item'
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
);

const SelectSeparator = ({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.Separator>) => (
  <SelectPrimitive.Separator
    className={cn('pointer-events-none -mx-1 my-1 h-px bg-border-soft', className)}
    data-slot='select-separator'
    {...props}
  />
);

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
