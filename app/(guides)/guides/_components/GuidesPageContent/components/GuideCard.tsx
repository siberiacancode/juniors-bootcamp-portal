import type { ComponentProps } from 'react';

import { ExternalLinkIcon } from 'lucide-react';

import { Card, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

export const GuideCard = ({ className, ...props }: ComponentProps<typeof Card>) => (
  <Card
    className={cn(
      'h-70 gap-2 px-10 transition hover:-translate-0.5 hover:shadow-[6px_6px_0_0_var(--color-border-hard)] focus:-translate-0.5 focus:shadow-[6px_6px_0_0_var(--color-border-hard)] focus:outline-none',
      className
    )}
    {...props}
  />
);

export const GuideCardHeader = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={cn('flex flex-col', className)} {...props} />
);

export const GuideCardHeaderMeta = ({
  className,
  external = false,
  children,
  ...props
}: ComponentProps<'div'> & { external?: boolean }) => (
  <div className={cn('inline-flex h-12 items-center justify-between', className)} {...props}>
    {children}
    {external && <ExternalLinkIcon className='size-5' />}
  </div>
);

export const GuideCardTitle = (props: ComponentProps<typeof Typography>) => (
  <Typography as='h4' variant='title-md' {...props} />
);

export const GuideCardDescription = ({
  className,
  ...props
}: ComponentProps<typeof Typography>) => (
  <Typography as='p' className={cn('line-clamp-3', className)} variant='caption' {...props} />
);

export const GuideCardFooter = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={cn('mt-auto flex items-center gap-2', className)} {...props} />
);
