'use client';

import type { ComponentProps } from 'react';

import { useCopy } from '@siberiacancode/reactuse';
import { ClipboardCheckIcon, ClipboardIcon } from 'lucide-react';
import { useRef } from 'react';

import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

export type CodeBlockProps = ComponentProps<'pre'>;

export const CodeBlock = (props: CodeBlockProps) => {
  const { copied, copy } = useCopy(1500);
  const ref = useRef<HTMLPreElement>(null);

  const onCopyClick = () => {
    if (!ref.current || !ref.current.textContent || copied) return;
    copy(ref.current.textContent);
  };

  return (
    <pre
      {...props}
      ref={ref}
      className={cn(
        'relative rounded-sm py-4 pr-8 pl-4 text-wrap [&>button]:hover:opacity-100',
        props.className
      )}
    >
      {props.children}
      <Button
        className='absolute top-2 right-2 opacity-0 transition-opacity'
        size='icon'
        variant='outline'
        onClick={onCopyClick}
      >
        {copied ? (
          <ClipboardCheckIcon className='size-5' />
        ) : (
          <ClipboardIcon className='size-5 cursor-pointer' />
        )}
      </Button>
    </pre>
  );
};
