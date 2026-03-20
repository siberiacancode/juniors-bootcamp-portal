'use client';

import { useCopy } from '@siberiacancode/reactuse';
import { CheckIcon, ShareIcon } from 'lucide-react';

import { IconButton } from '@/components/ui';

export const ShareButtton = ({
  onClick,
  variant = 'ghost',
  ...props
}: React.ComponentProps<typeof IconButton>) => {
  const { copied, copy } = useCopy(2000);

  const onShareClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    copy(window.location.href);
    onClick?.(event);
  };

  return (
    <IconButton variant={variant} onClick={onShareClick} {...props}>
      {copied ? <CheckIcon /> : <ShareIcon />}
    </IconButton>
  );
};
