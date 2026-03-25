import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('font-nunito', {
  variants: {
    variant: {
      display:
        'text-[56px] leading-none font-(--font-weight) tracking-normal uppercase [--font-weight:700] lg:text-[170px]',

      'heading-2xl':
        'text-[36px] leading-none font-(--font-weight) tracking-normal [--font-weight:800] md:text-[96px]',
      'heading-xl':
        'text-[64px] leading-none font-(--font-weight) tracking-normal [--font-weight:800] md:text-[80px]',
      'heading-lg': 'text-[60px]/17 font-(--font-weight) tracking-normal [--font-weight:700]',
      'heading-md':
        'text-[48px] leading-none font-(--font-weight) tracking-tighter [--font-weight:700]',

      'title-lg': 'text-[32px]/10 font-(--font-weight) tracking-normal [--font-weight:700]',
      'title-md': 'text-[24px]/8 font-(--font-weight) tracking-wide [--font-weight:700]',

      'body-lg': 'text-[24px]/8 font-medium tracking-wide',
      'body-md': 'text-[18px]/6.5 font-medium tracking-wide',
      'body-sm': 'text-[16px]/6 font-medium tracking-wide',
      link: 'text-[16px]/6 font-medium tracking-wide underline underline-offset-2',
      caption: 'text-[14px]/5.5 font-medium tracking-wide'
    },
    pixelify: {
      true: '[&>span]:font-pixelify-sans [&>span]:text-[1.13em] [&>span]:font-[calc(var(--font-weight)-200)]'
    }
  },
  defaultVariants: {
    variant: 'body-md',
    pixelify: false
  }
});
type AllowedTag = 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyProps<Tag extends AllowedTag> = ComponentProps<Tag> &
  VariantProps<typeof typographyVariants> & {
    as?: Tag;
  };

const Typography = <Tag extends AllowedTag>({
  as: Component = 'div' as Tag,
  className,
  variant = 'body-md',
  pixelify = false,
  ...props
}: TypographyProps<Tag>) => (
  <Component
    className={cn(typographyVariants({ pixelify, variant, className }))}
    data-slot='typography'
    data-variant={variant}
    {...(props as any)}
  />
);

export { Typography, typographyVariants };
