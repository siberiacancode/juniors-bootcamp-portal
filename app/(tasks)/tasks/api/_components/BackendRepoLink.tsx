'use client';

import type { ComponentProps } from 'react';

import { IntlText } from '@/intl';

export const BackendRepoLink = ({ values, ...props }: ComponentProps<typeof IntlText>) => (
  <IntlText
    values={{
      ...values,
      link: (chunks) => (
        <a
          href='https://github.com/siberiacancode/juniors-bootcamp-backend/issues'
          rel='noopener noreferrer'
          target='_blank'
        >
          {chunks}
        </a>
      )
    }}
    {...props}
  />
);
