import type { MDXComponents } from 'mdx/types';

import { CodeBlock, CodeGroup } from '@/markdown/ui';

export const getMDXComponents = (components?: MDXComponents): MDXComponents => ({
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
  a: (props) => <a {...props} className='underline' />,
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
  pre: (props) => <CodeBlock {...props} />,
  CodeGroup: (props) => <CodeGroup {...props} />,
  ...components
});

export const useMDXComponents = getMDXComponents;
