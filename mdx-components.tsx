import type { MDXComponents } from 'mdx/types';

import { CodeBlock, CodeBlockGroup } from '@/components/ui';
import { cn } from '@/lib/utils';

export const useMDXComponents = (components?: MDXComponents): MDXComponents => ({
  // h1: (props) => <h1 {...props} />,
  // h2: (props) => <h2 {...props} />,
  // h3: (props) => <h3 {...props} />,
  // p: (props) => <p {...props} />,
  // ul: (props) => <ul {...props} />,
  // ol: (props) => <ol {...props} />,
  // li: (props) => <li {...props} />,
  // blockquote: (props) => <blockquote {...props} />,
  // code: (props) => <code {...props} />,
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        'overflow-x-auto rounded-xl border-2 border-foreground p-6 text-base [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
        className
      )}
      {...props}
    />
  ),
  CodeGroup: (props) => <CodeBlockGroup {...props} />,
  CodeBlock: (props) => <CodeBlock {...props} />,
  ...components
});
