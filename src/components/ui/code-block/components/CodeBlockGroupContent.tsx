'use client';

import { useState } from 'react';

import type { SupportedLanguage } from '@/lib/shiki';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';

import type { ParsedBlock } from '../types';

import { LANGUAGE_DISPLAY_NAMES } from '../constants';
import { CopyButton } from './CopyButton';
import { cn } from '@/lib/utils';

interface CodeBlockContentProps {
  blocks: ParsedBlock[];
  copy?: boolean;
}

export const CodeBlockGroupContent = ({ copy, blocks }: CodeBlockContentProps) => {
  const [language, setLanguage] = useState<SupportedLanguage>(blocks[0].language);

  const currentBlock = blocks.find((block) => block.language === language)!;
  console.log('currentBlock', blocks.length, language);

  return (
    <>
      <div className='flex h-16 items-center border-b-2 border-foreground px-6'>
        {currentBlock.fileName && (
          <span className='text-sm text-muted-foreground'>{currentBlock.fileName}</span>
        )}
        <div className='ml-auto flex items-center gap-2'>
          <Select
            defaultValue={language}
            value={currentBlock?.language}
            onValueChange={(value) => setLanguage(value as SupportedLanguage)}
          >
            <SelectTrigger size='sm'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {blocks.map((block) => (
                <SelectItem key={block.key} value={block.language}>
                  {LANGUAGE_DISPLAY_NAMES[block.language]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {copy && <CopyButton className='ml-auto' text={currentBlock.code} />}
        </div>
      </div>
      <pre
        className={cn(
          'p-6 text-base [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          currentBlock.className
        )}
      >
        {currentBlock.children}
      </pre>
    </>
  );
};
