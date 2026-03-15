import type { ComponentProps } from 'react';

import { isValidElement } from 'react';

import { cn } from '@/lib/utils';

import type { CodeBlockProps } from './CodeBlock';

import { CodeBlockGroupContent } from './components';

interface CodeBlockGroupProps extends ComponentProps<'figure'> {
  children: React.ReactNode[];
  copy?: boolean;
}

export const CodeBlockGroup = async ({
  children,
  copy = true,
  className,
  ...props
}: CodeBlockGroupProps) => {
  const blocks = children.map((child1, index) => {
    const child = child1.props.children;
    if (!isValidElement(child)) throw new Error('Invalid child element');
    const props = child.props as Omit<CodeBlockProps, 'copy'>;

    const key = props.fileName ?? `${props.language}-${index}`;

    return {
      key,
      className: props.className,
      fileName: props.fileName,
      children: props.children,
      language: props.language
    };
  });

  return (
    <figure className={cn('rounded-xl border-2 border-foreground', className)} {...props}>
      <CodeBlockGroupContent blocks={blocks} copy={copy} />
    </figure>
  );
};
