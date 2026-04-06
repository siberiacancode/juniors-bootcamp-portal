import type { MDXComponents } from 'mdx/types';

import { MDX_COMPONENTS } from '@/markdown/mdxComponents';

export const useMDXComponents = (overrides: MDXComponents): MDXComponents => ({
  ...MDX_COMPONENTS,
  ...overrides
});
