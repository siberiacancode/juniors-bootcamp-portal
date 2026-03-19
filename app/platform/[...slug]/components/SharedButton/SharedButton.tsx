'use client';

import { useCopy, useDisclosure, useMediaQuery, useShare } from '@siberiacancode/reactuse';
import { CheckIcon, CopyIcon, ShareIcon } from 'lucide-react';

import {
  Button,
  IconButton,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Skeleton
} from '@/components/ui';

interface SharedButtonProps {
  emoji?: string;
  title: string;
}

export const SharedButton = ({ emoji, title }: SharedButtonProps) => {
  const sharePopover = useDisclosure();
  const { copy, copied } = useCopy(1000);
  const share = useShare();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const onCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    copy(window.location.href);
  };

  const onShare = async () => {
    if (!isMobile) return sharePopover.toggle();
    return share.trigger({
      title,
      text: `${emoji} ${title}`,
      url: window.location.href
    });
  };

  return (
    <Popover {...(!isMobile && { onOpenChange: sharePopover.toggle })} open={sharePopover.opened}>
      <PopoverTrigger asChild>
        <IconButton variant='ghost' onClick={onShare}>
          <ShareIcon />
        </IconButton>
      </PopoverTrigger>

      <PopoverContent className='flex w-75 flex-col gap-1'>
        <div className='relative flex flex-col rounded-20 border border-b-0'>
          <div className='flex items-center gap-4 rounded-20 bg-background px-3'>
            <div className='flex items-center gap-1.5'>
              <div className='size-3 rounded-full bg-red-400' />
              <div className='size-3 rounded-full bg-yellow-400' />
              <div className='size-3 rounded-full bg-green-400' />
            </div>
            <div className='flex flex-1 items-center gap-2 rounded-16 px-3 py-1'>
              {emoji && <div className='text-gray-400'>{emoji}</div>}
              <div className='text-sm text-ellipsis whitespace-nowrap'>{title}</div>
            </div>
          </div>

          <div className='flex flex-col gap-4 p-4'>
            <div className='flex flex-col gap-3'>
              {emoji && <div className='flex items-center justify-start text-4xl'>{emoji}</div>}
              <span className='text-lg font-medium'>{title}</span>
            </div>

            <div className='space-y-2'>
              <Skeleton className='h-6 w-3/4 animate-none' />
              <Skeleton className='h-6 w-1/2 animate-none' />
            </div>
          </div>

          <div className='absolute inset-x-0 bottom-0 h-10 rounded-b-20 bg-linear-to-b from-transparent to-black/10' />
        </div>

        <div className='mt-4 flex gap-2'>
          <Input readOnly value={window.location.href} />
          <Button
            className='flex items-center justify-center gap-2'
            disabled={copied}
            onClick={onCopy}
          >
            {copied ? <CheckIcon className='size-4' /> : <CopyIcon className='size-4' />}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
