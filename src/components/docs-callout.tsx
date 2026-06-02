import type { ReactNode } from 'react';

export function ApiStatus({ children }: { children: ReactNode }) {
  return (
    <div className='mb-6 rounded-20 border-2 border-border-hard bg-secondary p-6 text-[16px]/6 font-medium tracking-wide text-foreground'>
      {children}
    </div>
  );
}
