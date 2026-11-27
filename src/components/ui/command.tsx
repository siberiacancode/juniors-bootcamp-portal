'use client';

import type { ComponentProps, ReactNode } from 'react';

import { Command as CommandPrimitive } from 'cmdk';
import { CheckIcon, SearchIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';
import { InputGroup, InputGroupAddon } from './input-group';

const Command = ({ className, ...props }: ComponentProps<typeof CommandPrimitive>) => (
  <CommandPrimitive
    className={cn(
      'flex size-full flex-col overflow-hidden rounded-20 bg-background text-foreground',
      className
    )}
    data-slot='command'
    {...props}
  />
);

const CommandDialog = ({
  title,
  description,
  children,
  className,
  showCloseButton = false,
  ...props
}: Omit<ComponentProps<typeof Dialog>, 'children'> & {
  title: string;
  description: string;
  className?: string;
  showCloseButton?: boolean;
  children: ReactNode;
}) => (
  <Dialog {...props}>
    <DialogContent
      className={cn('top-1/3 translate-y-0 gap-0 overflow-hidden rounded-20 p-0', className)}
      showCloseButton={showCloseButton}
    >
      <DialogHeader className='sr-only'>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      {children}
    </DialogContent>
  </Dialog>
);

const CommandInput = ({ className, ...props }: ComponentProps<typeof CommandPrimitive.Input>) => (
  <div className='p-1 pb-0' data-slot='command-input-wrapper'>
    <InputGroup className='h-12 rounded-full border-0 bg-muted shadow-none'>
      <InputGroupAddon className='pl-4'>
        <SearchIcon aria-hidden='true' className='size-4 text-muted-fg' />
      </InputGroupAddon>
      <CommandPrimitive.Input
        className={cn(
          'h-full min-w-0 flex-1 bg-transparent pr-4 text-[16px] text-foreground outline-none placeholder:text-muted-fg disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        data-slot='command-input'
        {...props}
      />
    </InputGroup>
  </div>
);

const CommandList = ({ className, ...props }: ComponentProps<typeof CommandPrimitive.List>) => (
  <CommandPrimitive.List
    className={cn(
      'max-h-[min(380px,50vh)] overflow-x-hidden overflow-y-auto overscroll-contain py-2 outline-none',
      className
    )}
    data-slot='command-list'
    {...props}
  />
);

const CommandEmpty = ({ className, ...props }: ComponentProps<typeof CommandPrimitive.Empty>) => (
  <CommandPrimitive.Empty
    className={cn('px-3 py-6 text-center text-[14px] text-muted-fg', className)}
    data-slot='command-empty'
    {...props}
  />
);

const CommandGroup = ({ className, ...props }: ComponentProps<typeof CommandPrimitive.Group>) => (
  <CommandPrimitive.Group
    className={cn(
      'overflow-hidden px-1 text-foreground **:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:py-2 **:[[cmdk-group-heading]]:text-[12px] **:[[cmdk-group-heading]]:text-muted-fg',
      className
    )}
    data-slot='command-group'
    {...props}
  />
);

const CommandSeparator = ({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Separator>) => (
  <CommandPrimitive.Separator
    className={cn('my-1 h-px bg-border-soft', className)}
    data-slot='command-separator'
    {...props}
  />
);

const CommandItem = ({
  className,
  children,
  ...props
}: ComponentProps<typeof CommandPrimitive.Item>) => (
  <CommandPrimitive.Item
    className={cn(
      'group/command-item flex min-h-10 cursor-pointer items-center gap-3 rounded-14 px-3 text-[15px] font-semibold text-foreground outline-none select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-muted [&_svg]:shrink-0',
      className
    )}
    data-slot='command-item'
    {...props}
  >
    {children}
    <CheckIcon
      aria-hidden='true'
      className='ml-auto hidden size-4 group-data-[checked=true]/command-item:block'
    />
  </CommandPrimitive.Item>
);

const CommandShortcut = ({ className, ...props }: ComponentProps<'span'>) => (
  <span
    className={cn('ml-auto text-[12px] text-muted-fg', className)}
    data-slot='command-shortcut'
    {...props}
  />
);

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
};
