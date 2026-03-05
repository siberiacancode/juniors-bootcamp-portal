import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type LogoProps = ComponentProps<'img'>;

export const Logo = ({ className, ...props }: LogoProps) => (
  <>
    <img
      className={cn(
        `
        hidden object-contain
        dark:block
      `,
        className
      )}
      alt='logo'
      src='/images/light-logo-full.png'
      {...props}
    />
    <img
      className={cn(
        `
        object-contain
        dark:hidden
      `,
        className
      )}
      alt='logo'
      src='/images/dark-logo-full.png'
      {...props}
    />
  </>
);
