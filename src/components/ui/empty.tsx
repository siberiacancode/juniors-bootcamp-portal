import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const Empty = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-20 border-dashed p-6 text-center text-balance',
        className
      )}
      data-slot='empty'
      {...props}
    />
  );
};

const EmptyHeader = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn('flex max-w-3xl flex-col items-center gap-2', className)}
      data-slot='empty-header'
      {...props}
    />
  );
};

const emptyMediaVariants = cva(
  'mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "flex size-8 shrink-0 items-center justify-center rounded-20 bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4"
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

const EmptyMedia = ({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>) => {
  return (
    <div
      className={cn(emptyMediaVariants({ variant, className }))}
      data-slot='empty-icon'
      data-variant={variant}
      {...props}
    />
  );
};

const EmptyTitle = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn('text-3xl font-extrabold tracking-tight text-muted-fg', className)}
      data-slot='empty-title'
      {...props}
    />
  );
};

const EmptyDescription = ({ className, ...props }: React.ComponentProps<'p'>) => {
  return (
    <div
      className={cn(
        'text-xl/relaxed text-muted-fg [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
        className
      )}
      data-slot='empty-description'
      {...props}
    />
  );
};

const EmptyContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance',
        className
      )}
      data-slot='empty-content'
      {...props}
    />
  );
};

export { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle };
