'use client';

import type { ComponentProps } from 'react';

import { IntlText } from '../intl';

type PixelifyIntlTextProps = Omit<ComponentProps<typeof IntlText>, 'values'>;

export const PixelifyIntlText = (props: PixelifyIntlTextProps) => (
  <IntlText
    values={{
      pixelify: (chunks: React.ReactNode) => (
        <span className='font-pixelify-sans text-[1.141em] font-medium'>{chunks}</span>
      )
    }}
    {...props}
  />
);
