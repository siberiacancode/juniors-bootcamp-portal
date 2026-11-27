'use client';

import type { ComponentProps } from 'react';

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const Dialog = (props: DialogPrimitive.Root.Props) => (
  <DialogPrimitive.Root data-slot='dialog' {...props} />
);

const DialogTrigger = (props: DialogPrimitive.Trigger.Props) => (
  <DialogPrimitive.Trigger data-slot='dialog-trigger' {...props} />
);

const DialogPortal = (props: DialogPrimitive.Portal.Props) => (
  <DialogPrimitive.Portal data-slot='dialog-portal' {...props} />
);

const DialogClose = (props: DialogPrimitive.Close.Props) => (
  <DialogPrimitive.Close data-slot='dialog-close' {...props} />
);

const DialogOverlay = ({ className, ...props }: DialogPrimitive.Backdrop.Props) => (
  <DialogPrimitive.Backdrop
    className={cn('fixed inset-0 z-50 bg-black/10 backdrop-blur-xs', className)}
    data-slot='dialog-overlay'
    {...props}
  />
);

const DialogContent = ({
  children,
  className,
  showCloseButton = true,
  ...props
}: DialogPrimitive.Popup.Props & { showCloseButton?: boolean }) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Popup
      className={cn(
        'fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-4 rounded-20 bg-background p-4 text-[14px]/5.5 text-foreground ring-1 ring-border-soft outline-none sm:max-w-sm',
        className
      )}
      data-slot='dialog-content'
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogClose
          aria-label='Close'
          className='absolute top-2 right-2 flex size-8 items-center justify-center rounded-full hover:bg-muted'
        >
          <XIcon aria-hidden='true' className='size-4' />
        </DialogClose>
      )}
    </DialogPrimitive.Popup>
  </DialogPortal>
);

const DialogHeader = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={cn('flex flex-col gap-2', className)} data-slot='dialog-header' {...props} />
);

const DialogFooter = ({ className, ...props }: ComponentProps<'div'>) => (
  <div
    className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
    data-slot='dialog-footer'
    {...props}
  />
);

const DialogTitle = ({ className, ...props }: DialogPrimitive.Title.Props) => (
  <DialogPrimitive.Title
    className={cn('text-[18px]/6 font-semibold', className)}
    data-slot='dialog-title'
    {...props}
  />
);

const DialogDescription = ({ className, ...props }: DialogPrimitive.Description.Props) => (
  <DialogPrimitive.Description
    className={cn('text-[14px]/5 text-muted-fg', className)}
    data-slot='dialog-description'
    {...props}
  />
);

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
};
