import type { MDXComponents } from 'mdx/types';

import * as TabsComponents from 'fumadocs-ui/components/tabs';
import defaultMdxComponents from 'fumadocs-ui/mdx';

import { CUSTOM_COMPONENTS } from '@/markdown';

import { ApiStatus } from './docs-callout';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...CUSTOM_COMPONENTS,
    ...TabsComponents,
    ApiStatus,
    ...components
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
