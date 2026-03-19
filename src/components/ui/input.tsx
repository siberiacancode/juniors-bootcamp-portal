import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = ({ className, type, ...props }: React.ComponentProps<'input'>) => {
  return (
    <input
      className={cn(
        `h-13 w-full min-w-0 rounded-full border border-input bg-transparent px-4 py-2 text-2xl transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-fg file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-fg disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30`,
        `focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50`,
        `aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40`,
        className
      )}
      data-slot='input'
      type={type}
      {...props}
    />
  );
};

export { Input };
