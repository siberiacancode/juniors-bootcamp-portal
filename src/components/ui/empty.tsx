import { cn } from '@/lib/utils';

const Empty = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-20 p-6 text-center text-balance text-secondary-fg',
        className
      )}
      data-slot='empty'
      {...props}
    />
  );
};

const EmptyTitle = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn('text-[32px]/10 font-extrabold tracking-wide', className)}
      data-slot='empty-title'
      {...props}
    />
  );
};

const EmptyDescription = ({ className, ...props }: React.ComponentProps<'p'>) => (
  <p
    className={cn('text-[24px]/8 font-medium tracking-wide', className)}
    data-slot='empty-description'
    {...props}
  />
);

export { Empty, EmptyDescription, EmptyTitle };
