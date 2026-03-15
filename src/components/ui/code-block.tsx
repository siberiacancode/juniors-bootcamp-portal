'use client';
import type { ComponentProps } from 'react';

import { useCopy } from '@siberiacancode/reactuse';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { useRef } from 'react';

import type { SupportedLanguage } from '@/lib/shiki';

import { cn } from '@/lib/utils';

import { IconButton } from './icon-button';

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
          'overflow-x-auto rounded-xl border-2 border-foreground p-6 text-base [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          className
        )}
        {...props}
      >
        {children}
      </pre>
    );
  }

  return (
    <figure className='rounded-xl border-2 border-foreground'>
      <div className='flex h-16 items-center border-b-2 border-foreground px-6'>
        <span className='text-sm text-muted-foreground'>{fileName}</span>
        <IconButton
          className={cn('ml-auto text-muted-foreground', className)}
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
          'overflow-x-auto rounded-b-xl p-6 text-base [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          className
        )}
      >
        {children}
      </pre>
    </figure>
  );
};
