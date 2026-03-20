'use client';

import type { CSSProperties, Fragment, ReactElement, ReactNode } from 'react';

import { useCopy } from '@siberiacancode/reactuse';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { isValidElement, useRef, useState } from 'react';

import {
  IconButton,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui';
import { LANGUAGE_DISPLAY_NAMES } from '@/constants';
import { cn } from '@/lib/utils';

import type { SupportedLanguage } from '../shiki';

interface CodeBlockGroupProps {
  children: ReactElement<typeof Fragment> | ReactElement<typeof Fragment>[];
}

interface BlockProps {
  children?: ReactNode;
  className?: string;
  fileName?: string;
  language: SupportedLanguage;
  style?: CSSProperties;
  tabIndex?: number;
}

export const CodeGroup = ({ children }: CodeBlockGroupProps) => {
  if (!Array.isArray(children)) throw new Error('Must be an array of elements');

  const blocks = children.map((element, index) => {
    const props = element.props as unknown as BlockProps;
    if (!isValidElement(props.children)) throw new Error('Invalid child element');
    const key = `${props.language}-${index}`;
    return {
      key,
      ...props
    };
  });

  const preRef = useRef<HTMLPreElement>(null);
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(blocks[0].language);

  const { copied, copy } = useCopy(2000);

  const onCopyClick = () => {
    if (!preRef.current || !preRef.current.textContent || copied) return;
    copy(preRef.current.textContent);
  };

  const { fileName, className, language, key, ...props } = blocks.find(
    (block) => block.language === currentLanguage
  )!;

  return (
    <figure className='mb-4 rounded-20 border-2 border-border-hard'>
      <div className='flex h-16 items-center rounded-t-20 border-b-2 border-border-hard px-6'>
        {fileName && <span className='text-sm text-muted-fg'>{fileName}</span>}
        <div className='ml-auto flex items-center gap-2'>
          <Select
            value={currentLanguage}
            onValueChange={(value) => setCurrentLanguage(value as SupportedLanguage)}
          >
            <SelectTrigger size='sm'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {blocks.map((block) => (
                  <SelectItem key={block.key} value={block.language}>
                    {LANGUAGE_DISPLAY_NAMES[block.language]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <IconButton className='text-muted-fg' size='sm' variant='ghost' onClick={onCopyClick}>
            {copied ? <CheckIcon /> : <CopyIcon />}
          </IconButton>
        </div>
      </div>
      <pre
        key={key}
        ref={preRef}
        className={cn(
          'overflow-x-auto rounded-b-20 p-6 text-base [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          className
        )}
        {...props}
      />
    </figure>
  );
};
