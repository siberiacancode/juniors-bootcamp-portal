import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type LogoProps = ComponentProps<'img'>;

export const Logo = ({ className, ...props }: LogoProps) => (
  <>
    <img
      className={cn('hidden object-contain dark:block', className)}
      src='/images/light-logo.png'
      {...props}
    />
    <img
      className={cn('object-contain dark:hidden', className)}
      src='/images/dark-logo.png'
      {...props}
    />
  </>
);
