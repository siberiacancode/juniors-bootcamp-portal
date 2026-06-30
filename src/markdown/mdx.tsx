import type { MDXComponents } from 'mdx/types';

import defaultMdxComponents from 'fumadocs-ui/mdx';

import { CUSTOM_COMPONENTS } from '@/markdown';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...CUSTOM_COMPONENTS,
    ...components
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;
