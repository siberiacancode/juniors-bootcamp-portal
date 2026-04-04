import type { ComponentProps } from 'react';

import ReactMarkdown from 'react-markdown';

export const Markdown = (props: Omit<ComponentProps<typeof ReactMarkdown>, 'components'>) => (
  <ReactMarkdown
    components={{
      p: ({ node, ...props }) => (
        <p {...props} className='text-[24px]/8 font-medium text-foreground' />
      ),
      li: ({ node, ...props }) => (
        <li {...props} className='text-[24px]/8 font-medium text-foreground' />
      ),
      ol: ({ node, ...props }) => (
        <ol {...props} className='flex list-inside list-decimal flex-col gap-4' />
      ),
      ul: ({ node, ...props }) => <ul {...props} className='flex list-disc flex-col gap-4' />
    }}
    {...props}
  />
);
