import { Slot } from '@radix-ui/react-slot';
import { ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Breadcrumb = ({ ...props }: React.ComponentProps<'nav'>) => (
  <nav aria-label='breadcrumb' data-slot='breadcrumb' {...props} />
);

const BreadcrumbList = ({ className, ...props }: React.ComponentProps<'ol'>) => (
  <ol
    className={cn(
      'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
      className
    )}
    data-slot='breadcrumb-list'
    {...props}
  />
);

const BreadcrumbItem = ({ className, ...props }: React.ComponentProps<'li'>) => (
  <li
    className={cn('inline-flex items-center gap-1.5', className)}
    data-slot='breadcrumb-item'
    {...props}
  />
);

const BreadcrumbLink = ({
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      className={cn('hover:text-foreground transition-colors', className)}
      data-slot='breadcrumb-link'
      {...props}
    />
  );
};

const BreadcrumbPage = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-current='page'
    aria-disabled='true'
    className={cn('text-foreground font-normal', className)}
    data-slot='breadcrumb-page'
    role='link'
    {...props}
  />
);

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<'li'>) => (
  <li
    aria-hidden='true'
    className={cn('[&>svg]:size-3.5', className)}
    data-slot='breadcrumb-separator'
    role='presentation'
    {...props}
  >
    {children ?? <ChevronRightIcon />}
  </li>
);

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden='true'
    className={cn('flex size-9 items-center justify-center', className)}
    data-slot='breadcrumb-ellipsis'
    role='presentation'
    {...props}
  >
    <MoreHorizontalIcon className='size-4' />
    <span className='sr-only'>More</span>
  </span>
);

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
};
