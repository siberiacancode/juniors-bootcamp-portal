'use client';

import type { ReactNode } from 'react';

import { LINKS } from '@/constants';

export const PracticeTasksLink = (chunks: ReactNode) => (
  <a className='underline underline-offset-4' href={LINKS.TESTER} rel='noreferrer' target='_blank'>
    {chunks}
  </a>
);
