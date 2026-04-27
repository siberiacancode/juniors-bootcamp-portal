'use client';

import type { ReactNode } from 'react';

export const BackendRepoLink = (chunks: ReactNode) => (
  <a
    href='https://github.com/siberiacancode/juniors-bootcamp-backend/issues'
    rel='noopener noreferrer'
    target='_blank'
  >
    {chunks}
  </a>
);
