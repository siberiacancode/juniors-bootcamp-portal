import { Avatar as AvatarPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root> {
  size?: 'lg' | 'md' | 'sm';
}

const Avatar = ({ className, size = 'md', ...props }: AvatarProps) => (
  <AvatarPrimitive.Root
    className={cn(
      'group/avatar relative flex shrink-0 overflow-hidden rounded-full select-none',
      'data-[size=lg]:size-12 data-[size=md]:size-10 data-[size=sm]:size-8',
      className
    )}
    data-size={size}
    data-slot='avatar'
    {...props}
  />
);

const AvatarImage = ({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) => (
  <AvatarPrimitive.Image
    className={cn('aspect-square size-full', className)}
    data-slot='avatar-image'
    {...props}
  />
);

const AvatarFallback = ({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) => (
  <AvatarPrimitive.Fallback
    className={cn(
      'flex size-full items-center justify-center rounded-full bg-muted text-[16px] text-muted-fg group-data-[size=sm]/avatar:text-[12px]',
      className
    )}
    data-slot='avatar-fallback'
    {...props}
  />
);

export { Avatar, AvatarFallback, AvatarImage };
