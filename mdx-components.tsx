import type { MDXComponents } from 'mdx/types';

import { CUSTOM_COMPONENTS } from '@/markdown';

export const useMDXComponents = (overrides: MDXComponents): MDXComponents => ({
  ...CUSTOM_COMPONENTS,
  ...overrides
});
