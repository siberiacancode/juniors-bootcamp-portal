import type { MDXComponents } from 'mdx/types';

import { CodeBlock, CodeGroup } from '@/markdown/ui';

export const CUSTOM_COMPONENTS = {
  h1: (props) => <h1 {...props} className='mb-10 text-[60px]/17 font-bold text-foreground' />,
  h2: (props) => <h2 {...props} className='mt-12 mb-8 text-[48px]/14 font-bold text-foreground' />,
  h3: (props) => <h3 {...props} className='mt-8 mb-6 text-[32px]/10 font-bold text-foreground' />,
  h4: (props) => <h4 {...props} className='mt-6 mb-4 text-[24px]/8 font-bold text-foreground' />,
  h5: (props) => <h5 {...props} className='mt-6 mb-3 text-[18px]/6.5 font-bold text-foreground' />,
  h6: (props) => <h6 {...props} className='mt-6 mb-2 text-[16px]/6 font-bold text-foreground' />,
  p: (props) => <p {...props} className='mb-6 text-[16px]/6 font-normal text-foreground' />,
  a: (props) => <a {...props} className='font-medium underline underline-offset-4' />,
  ul: (props) => <ul {...props} className='list-disc' />,
  ol: (props) => <ol {...props} className='list-inside list-decimal' />,
  li: (props) => <li {...props} className='text-[16px]/6 font-normal text-foreground' />,
  blockquote: (props) => (
    <blockquote {...props} className='border-l-4 pl-5 text-[20px]/6 font-medium text-foreground' />
  ),
  pre: (props) => <CodeBlock {...props} />,
  CodeGroup: (props) => <CodeGroup {...props} />
} satisfies MDXComponents;
