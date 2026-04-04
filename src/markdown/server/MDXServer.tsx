'use server';

import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';

export const MDXServer = async ({ md }: { md: string }) => {
  const code = String(await compile(md, { outputFormat: 'function-body' }));
  const { default: Component } = await run(code, { ...runtime, baseUrl: import.meta.url });

  return <Component />;
};
