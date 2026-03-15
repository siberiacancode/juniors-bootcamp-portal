'use client';

import { useCopy } from '@siberiacancode/reactuse';
import { CheckIcon, CopyIcon } from 'lucide-react';

import { IconButton } from '@/components/ui';
import { cn } from '@/lib/utils';

interface CopyButtonProps {
  className?: string;
  text: string;
}

export const CopyButton = ({ text, className }: CopyButtonProps) => {
  const { copied, copy } = useCopy(2000);
  const onCopyClick = () => {
    copy(text);
  };

  return (
    <IconButton
      className={cn('text-muted-foreground', className)}
      size='sm'
      variant='ghost'
      onClick={onCopyClick}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </IconButton>
  );
};
