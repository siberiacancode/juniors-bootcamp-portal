'use client';

import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { IntlText } from '../intl';

const pixilifyVariants = cva('font-pixelify-sans', {
  variants: {
    variant: {
      'display-2xl': 'text-[1.141em] font-medium',
      'display-xl': 'text-[1.041em] font-bold'
    }
  }
});

type PixelifyIntlTextProps = Omit<React.ComponentProps<typeof IntlText>, 'values'> &
  VariantProps<typeof pixilifyVariants> & {
    className?: string;
  };

const PixelifyIntlText = ({ className, variant, ...props }: PixelifyIntlTextProps) => (
  <IntlText
    values={{
      pixelify: (chunks) => (
        <span className={cn(pixilifyVariants({ variant, className }))}>{chunks}</span>
      )
    }}
    {...props}
  />
);

export { PixelifyIntlText, pixilifyVariants };
