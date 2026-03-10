import { cn } from '@/lib/utils';

const Skeleton = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn('animate-pulse rounded-2xl bg-surface', className)}
      data-slot='skeleton'
      {...props}
    />
  );
};

export { Skeleton };
