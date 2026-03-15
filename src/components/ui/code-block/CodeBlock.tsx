import type { ComponentProps, ReactNode } from 'react';

import type { SupportedLanguage } from '@/lib/shiki';

import { cn } from '@/lib/utils';

import { CopyButton } from './components';

export interface CodeBlockProps extends ComponentProps<'pre'> {
  children: ReactNode;
  copy?: boolean;
  fileName?: string;
  language: SupportedLanguage;
}

export const CodeBlock = async ({
  children,
  language,
  fileName,
  copy = true,
  className,
  ...props
}: CodeBlockProps) => (
  <figure className={'rounded-xl border-2 border-foreground'}>
    <div className='flex h-16 items-center border-b-2 border-foreground px-6'>
      <span className='text-sm text-muted-foreground'>{fileName}</span>
      {copy && <CopyButton className='ml-auto' text={children} />}
    </div>

    <pre
      className={cn(
        'overflow-x-auto rounded-b-xl p-6 text-base [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
        className
      )}
      {...props}
    >
      {children}
    </pre>
  </figure>
);
