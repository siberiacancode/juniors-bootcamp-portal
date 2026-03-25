import { cn } from '@/lib/utils';

import { Typography } from './typography';

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

const EmptyTitle = ({ ...props }: React.ComponentProps<'div'>) => {
  return <Typography as='div' data-slot='empty-title' variant='title-lg' {...props} />;
};

const EmptyDescription = ({ ...props }: React.ComponentProps<'p'>) => (
  <Typography as='p' data-slot='empty-description' variant='body-lg' {...props} />
);

export { Empty, EmptyDescription, EmptyTitle };
