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
  language: SupportedLanguage;
}

export const CodeBlock = ({ children, fileName, className, ...props }: CodeBlockProps) => {
  const preRef = useRef<HTMLPreElement>(null);

  const { copied, copy } = useCopy(2000);
  const onCopyClick = () => {
    if (!preRef.current || !preRef.current.textContent || copied) return;
    copy(preRef.current.textContent);
  };

  if (!fileName) {
    return (
      <pre
        className={cn(
          'mb-4 overflow-x-auto rounded-20 border-2 border-border-hard p-6 text-[16px]/6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          className
        )}
        {...props}
      >
        {children}
      </pre>
    );
  }

  return (
    <figure className='mb-4 rounded-20 border-2 border-border-hard'>
      <div className='flex h-16 items-center border-b-2 border-border-hard'>
        <span className='text-[14px]/5.5 text-muted-fg'>{fileName}</span>
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
        className={cn(
          'overflow-x-auto rounded-b-20 p-6 text-[16px]/6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          className
        )}
      >
        {children}
      </pre>
    </figure>
  );
};
