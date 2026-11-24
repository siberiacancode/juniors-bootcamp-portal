'use client';

import type { ComponentProps } from 'react';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const Select = SelectPrimitive.Root;

const SelectGroup = ({ className, ...props }: SelectPrimitive.Group.Props) => (
  <SelectPrimitive.Group className={cn('py-0.5', className)} data-slot='select-group' {...props} />
);

const SelectValue = ({ className, ...props }: SelectPrimitive.Value.Props) => (
  <SelectPrimitive.Value
    className={cn(
      'flex min-w-0 flex-1 items-center gap-2 truncate group-data-placeholder/select:text-input',
      className
    )}
    data-slot='select-value'
    {...props}
  />
);

type SelectTriggerProps = SelectPrimitive.Trigger.Props & {
  size?: 'lg' | 'md' | 'sm';
};

const SelectTrigger = ({ children, className, size = 'md', ...props }: SelectTriggerProps) => (
  <SelectPrimitive.Trigger
    className={cn(
      'group/select box-border flex w-full min-w-0 items-center justify-between gap-2 rounded-full border border-input bg-background text-left font-nunito font-normal tracking-[0.005em] text-foreground shadow-[0_1px_2px_rgb(0_0_0/5%)] transition-[border-color,box-shadow,opacity] duration-150 outline-none hover:not-disabled:not-data-popup-open:border-foreground focus-visible:border-border-soft focus-visible:ring-3 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40 aria-invalid:border-danger aria-invalid:shadow-none aria-invalid:focus-visible:border-danger aria-invalid:focus-visible:ring-danger/20 data-popup-open:border-border-soft data-popup-open:ring-3 data-popup-open:ring-ring aria-invalid:data-popup-open:border-danger aria-invalid:data-popup-open:ring-danger/20 data-[size=lg]:h-13 data-[size=lg]:px-4 data-[size=lg]:py-3 data-[size=lg]:text-[24px]/6 data-[size=md]:h-10 data-[size=md]:px-4 data-[size=md]:py-2 data-[size=md]:text-[20px]/6 data-[size=sm]:h-8 data-[size=sm]:px-3 data-[size=sm]:py-1 data-[size=sm]:text-[18px]/6',
      className
    )}
    data-size={size}
    data-slot='select-trigger'
    {...props}
  >
    {children}
    <SelectPrimitive.Icon className='inline-flex shrink-0 text-input transition-transform duration-150 group-data-popup-open/select:rotate-180'>
      <ChevronDownIcon aria-hidden='true' size={size === 'lg' ? 20 : 16} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
);

const SelectScrollUpButton = ({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) => (
  <SelectPrimitive.ScrollUpArrow
    className={cn('flex h-6 items-center justify-center bg-background text-muted-fg', className)}
    data-slot='select-scroll-up-button'
    {...props}
  >
    <ChevronUpIcon aria-hidden='true' size={16} />
  </SelectPrimitive.ScrollUpArrow>
);

const SelectScrollDownButton = ({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) => (
  <SelectPrimitive.ScrollDownArrow
    className={cn('flex h-6 items-center justify-center bg-background text-muted-fg', className)}
    data-slot='select-scroll-down-button'
    {...props}
  >
    <ChevronDownIcon aria-hidden='true' size={16} />
  </SelectPrimitive.ScrollDownArrow>
);

type SelectContentProps = SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    'align' | 'alignItemWithTrigger' | 'alignOffset' | 'side' | 'sideOffset'
  >;

const SelectContent = ({
  align = 'start',
  alignItemWithTrigger = false,
  alignOffset,
  children,
  className,
  side = 'bottom',
  sideOffset = 8,
  ...props
}: SelectContentProps) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Positioner
      align={align}
      alignItemWithTrigger={alignItemWithTrigger}
      alignOffset={alignOffset}
      className='z-50 w-(--anchor-width) min-w-55'
      side={side}
      sideOffset={sideOffset}
    >
      <SelectPrimitive.Popup
        className={cn(
          'box-border max-h-[min(320px,var(--available-height))] overflow-auto rounded-24 border border-border-soft bg-background font-nunito text-foreground shadow-[0_12px_24px_rgb(0_0_0/12%)]',
          className
        )}
        data-slot='select-content'
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.List className='p-1.5'>{children}</SelectPrimitive.List>
        <SelectScrollDownButton />
      </SelectPrimitive.Popup>
    </SelectPrimitive.Positioner>
  </SelectPrimitive.Portal>
);

const SelectLabel = ({ className, ...props }: SelectPrimitive.GroupLabel.Props) => (
  <SelectPrimitive.GroupLabel
    className={cn('px-3 py-2 text-[13px] font-semibold text-muted-fg uppercase', className)}
    data-slot='select-label'
    {...props}
  />
);

const SelectItem = ({ children, className, ...props }: SelectPrimitive.Item.Props) => (
  <SelectPrimitive.Item
    className={cn(
      'group/item box-border flex min-h-10 items-center gap-3 rounded-full px-3 py-2 pl-4 text-[16px]/6 outline-none hover:not-data-disabled:bg-secondary data-highlighted:bg-secondary data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-40',
      className
    )}
    data-slot='select-item'
    {...props}
  >
    <SelectPrimitive.ItemText className='flex min-w-0 flex-1 items-center gap-2 truncate group-data-selected/item:font-bold'>
      {children}
    </SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className='ml-auto inline-flex shrink-0'>
      <CheckIcon aria-hidden='true' size={16} />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
);

const SelectSeparator = ({ className, ...props }: SelectPrimitive.Separator.Props) => (
  <SelectPrimitive.Separator
    className={cn('mx-3 my-1.5 h-px bg-border-soft', className)}
    data-slot='select-separator'
    {...props}
  />
);

export {
  Select,
  SelectContent,
  type SelectContentProps,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  type SelectTriggerProps,
  SelectValue
};
