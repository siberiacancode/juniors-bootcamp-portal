'use client';

import type { TableOfContents } from 'fumadocs-core/toc';

import * as Toc from 'fumadocs-core/toc';
import { useRef } from 'react';

interface DocsTocProps {
  toc: TableOfContents;
}

export const DocsToc = ({ toc }: DocsTocProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  if (toc.length === 0) {
    return null;
  }

  return (
    <Toc.AnchorProvider single toc={toc}>
      <div
        ref={containerRef}
        className='sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto border-l border-border-soft pl-4'
      >
        <p className='text-sm/6 mb-3 font-semibold text-foreground'>На странице</p>

        <Toc.ScrollProvider containerRef={containerRef}>
          <nav aria-label='Table of contents' className='flex flex-col gap-1'>
            {toc.map((item) => (
              <Toc.TOCItem
                key={item.url}
                style={{
                  paddingLeft: `${Math.max(item.depth - 2, 0) * 12 + 12}px`
                }}
                className='text-sm/6 block border-l border-transparent py-1.5 pr-2 text-muted-fg transition hover:text-foreground data-[active=true]:border-action-primary data-[active=true]:text-foreground'
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
