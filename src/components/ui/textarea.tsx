import * as React from 'react';

import { cn } from '@/lib/utils';

const Textarea = ({ className, ...props }: React.ComponentProps<'textarea'>) => {
  return (
    <textarea
      className={cn(
        'flex field-sizing-content min-h-16 w-full rounded-16 border border-input bg-transparent px-3 py-2 text-base transition-[color,box-shadow] outline-none placeholder:text-muted-fg focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-danger/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-danger/40',
        className
      )}
      data-slot='textarea'
      {...props}
    />
  );
};

export { Textarea };
