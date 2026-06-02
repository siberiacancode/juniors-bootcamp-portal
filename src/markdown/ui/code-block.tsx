'use client';
import type { ComponentProps } from 'react';

import { useCopy } from '@siberiacancode/reactuse';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { useRef } from 'react';

import type { SupportedLanguage } from '@/markdown/shiki';

import { IconButton } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface CodeBlockProps extends ComponentProps<'pre'> {
  fileName?: string;
  language?: SupportedLanguage;
}

export const CodeBlock = ({ children, fileName, title, className, ...props }: CodeBlockProps) => {
  const preRef = useRef<HTMLPreElement>(null);
  const resolvedFileName = fileName ?? title;

  const { copied, copy } = useCopy(2000);
  const onCopyClick = () => {
    if (!preRef.current || !preRef.current.textContent || copied) return;
    copy(preRef.current.textContent);
  };

  if (!resolvedFileName) {
    return (
      <div className='not-fumadocs-codeblock'>
        <pre
          className={cn(
            'mb-4 no-scrollbar overflow-x-auto rounded-20 border-2 border-border-hard p-6 text-[16px]/6',
            className
          )}
          {...props}
        >
          {children}
        </pre>
      </div>
    );
  }

  return (
    <figure className='not-fumadocs-codeblock mb-4 rounded-20 border-2 border-border-hard'>
      <div className='flex h-16 items-center border-b-2 border-border-hard px-6'>
        <span className='text-[14px]/5.5 text-muted-fg'>{resolvedFileName}</span>
        <IconButton
          className={cn('ml-auto text-muted-fg', className)}
          size='sm'
          variant='ghost'
          onClick={onCopyClick}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </IconButton>
      </div>

      <pre
        ref={preRef}
        className={cn('no-scrollbar overflow-x-auto rounded-b-20 p-6 text-[16px]/6', className)}
        {...props}
      >
        {children}
      </pre>
    </figure>
  );
};
