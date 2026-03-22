import type { ComponentProps } from 'react';

import { MDXRemote } from 'next-mdx-remote/rsc';

import { getMDXComponents } from '../../mdx-components';

type MarkdownProps = ComponentProps<typeof MDXRemote>;

export const Markdown = (props: MarkdownProps) => (
  <MDXRemote components={getMDXComponents()} {...props} />
);
