import type { MDXComponents } from 'mdx/types';
import type { ComponentProps } from 'react';

import type { CodeBlockProps } from '@/components/ui';

import { CodeBlock } from '@/components/ui';
import { cn } from '@/lib/utils';

export const useMDXComponents = (components?: MDXComponents): MDXComponents => ({
  h1: (props) => (
    <h1
      {...props}
      className='mt-10 mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100'
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className='mt-10 mb-5 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100'
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className='mt-10 mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100'
    />
  ),
  p: (props) => <p {...props} className='mb-4 text-lg/8 text-gray-700 dark:text-gray-300' />,
  ul: (props) => (
    <ul {...props} className='mb-4 ml-8 list-disc text-lg text-gray-700 dark:text-gray-300' />
  ),
  ol: (props) => (
    <ol {...props} className='mb-4 ml-8 list-decimal text-lg text-gray-700 dark:text-gray-300' />
  ),
  li: (props) => <li {...props} className='mb-1 text-lg/8' />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className='mb-4 border-l-4 border-gray-200 pl-4 text-lg text-gray-700 italic dark:border-gray-700 dark:text-gray-300'
    />
  ),
  pre: (props: CodeBlockProps) => (
    <CodeBlock
      {...props}
      className={cn(
        props.className,
        `mb-3 [&>code]:bg-transparent [&>code]:px-0 dark:[&>code]:bg-transparent`
      )}
    />
  ),
  code: (props: ComponentProps<'code'>) => (
    <code {...props} className='rounded-sm bg-gray-200 px-1 text-sm dark:bg-gray-600' />
  ),
  ...components
});
