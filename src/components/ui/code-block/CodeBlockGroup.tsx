import React from 'react';

import type { CodeBlockProps } from './CodeBlock';

import { CodeBlockGroupContent } from './components';
import { getElement } from './helpers';

interface CodeBlockGroupProps {
  children: React.ReactNode;
  copy?: boolean;
}

export const CodeBlockGroup = async ({ children, copy = true }: CodeBlockGroupProps) => {
  const blocks = await Promise.all(
    children.map(async (child, index) => {
      if (!React.isValidElement(child)) return;
      const props = child.props as Omit<CodeBlockProps, 'copy'>;
      const code = typeof props.children === 'string' ? props.children : String(props.children);
      const trimmedCode = code.trim();

      const key = props.fileName ?? `${props.language}-${index}`;

      return {
        key,
        fileName: props.fileName,
        code: trimmedCode,
        element: await getElement(trimmedCode, props.language),
        language: props.language
      };
    })
  );

  return (
    <figure className='rounded-xl border-2 border-foreground'>
      <CodeBlockGroupContent blocks={blocks} copy={copy} />
    </figure>
  );
};
