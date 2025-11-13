'use client';

import { useState } from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface IframeProps extends React.ComponentProps<'div'> {
  title: string;
  type: 'figma';
  url: string;
}

const Iframe = ({ className, title, url, type, ...props }: IframeProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn('relative w-full', className)} {...props}>
      <div className='mb-2 flex items-center gap-2'>
        {/* <Image alt={type} height={24} src={TYPE_IMAGES[type]} width={24} /> */}
        <span className='text-sm font-medium'>{title}</span>
      </div>

      {isLoading && (
        <div className='absolute inset-0'>
          <Skeleton className='h-[600px] w-full rounded-lg' />
        </div>
      )}
      <iframe
        className='border-border bg-background h-[600px] w-full rounded-lg border'
        src={url}
        title={title}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export { Iframe };
