'use client';

import { runSync } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';

export const MDXClient = ({ code }: { code: string }) => {
  const { default: Component } = runSync(code, { ...runtime, baseUrl: import.meta.url });

  return <Component />;
};
