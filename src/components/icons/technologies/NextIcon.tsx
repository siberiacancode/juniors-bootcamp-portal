import type { SVGProps } from 'react';

import { cn } from '@siberiacancode/reactuse';

export const NextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height='1em'
    viewBox='0 0 256 256'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
    className={cn('dark:invert', props.className)}
  >
    <circle cx='128' cy='128' fill='#000' r='128' />
    <path
      d='M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418'
      fill='#fff'
    />
    <path d='M163.556 76.8h17.067v102.4h-17.067z' fill='#fff' />
  </svg>
);
