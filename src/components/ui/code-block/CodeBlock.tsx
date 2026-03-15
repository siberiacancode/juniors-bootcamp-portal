import React from 'react';

import type { SupportedLanguage } from '@/lib/shiki';

import { CopyButton } from './components';
import { getElement } from './helpers';

export interface CodeBlockProps {
  children: React.ReactNode;
  copy?: boolean;
  fileName?: string;
  language: SupportedLanguage;
}

export const CodeBlock = async ({ children, language, fileName, copy = true }: CodeBlockProps) => {
  const code = typeof children === 'string' ? children : String(children);

  const element = await getElement(code.trim(), language);

  return (
    <figure className='rounded-xl border-2 border-foreground'>
      <div className='flex h-16 items-center border-b-2 border-foreground px-6'>
        <span className='text-sm text-muted-foreground'>{fileName}</span>
        {copy && <CopyButton className='ml-auto' text={code} />}
      </div>
      {element}
    </figure>
  );
};
