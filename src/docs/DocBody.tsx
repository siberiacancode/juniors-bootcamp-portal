import type { MDXComponents } from 'mdx/types';

import { CUSTOM_COMPONENTS } from '@/markdown';

import type { DocPage } from './helpers';

interface DocBodyProps {
  components?: MDXComponents;
  doc: DocPage;
}

/** Рендер MDX страницы с компонентами портала и props для `<show when={...}>` */
export const DocBody = ({ doc, components }: DocBodyProps) => (
  <doc.Body components={{ ...CUSTOM_COMPONENTS, ...components }} {...doc.props} />
);
