'use client';

import type { TableOfContents } from 'fumadocs-core/toc';

import * as Toc from 'fumadocs-core/toc';
import { useRef } from 'react';

import { Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

interface DocTocProps {
  toc: TableOfContents;
}

export const DocToc = ({ toc }: DocTocProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  if (toc.length === 0) {
    return null;
  }

  return (
    <Toc.AnchorProvider single toc={toc}>
      <div
        ref={containerRef}
        className='sticky top-8 max-h-[calc(100vh-4rem)] w-56 overflow-y-auto pr-2 pb-8'
      >
        <Typography as='p' className='mb-3 text-foreground' variant='caption'>
          <IntlText path='page.docs.toc.title' />
        </Typography>

        <Toc.ScrollProvider containerRef={containerRef}>
          <nav aria-label='Навигация по странице' className='flex flex-col gap-1'>
            {toc.map((item) => (
              <Toc.TOCItem
                key={item.url}
                className={cn(
                  'rounded-8 py-1.5 pr-2 pl-3 text-[14px]/5 font-medium text-muted-fg transition-colors',
                  'hover:bg-secondary hover:text-foreground data-[active=true]:bg-secondary data-[active=true]:text-foreground',
                  item.depth === 3 && 'pl-6',
                  item.depth >= 4 && 'pl-9'
                )}
                href={item.url}
              >
                {item.title}
              </Toc.TOCItem>
            ))}
          </nav>
        </Toc.ScrollProvider>
      </div>
    </Toc.AnchorProvider>
  );
};
