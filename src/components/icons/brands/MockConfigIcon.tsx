import type { SVGProps } from 'react';

export const MockConfigIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill='none'
    height={24}
    viewBox='0 0 130 130'
    width={24}
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <defs>
      <mask id='mock-config-cut'>
        <rect fill='white' height={130} width={130} />
        <rect fill='black' height={120} rx={32} width={120} />
      </mask>
    </defs>
    <rect
      fill='var(--color-accent-tertiary)'
      height={120}
      mask='url(#mock-config-cut)'
      rx={32}
      width={120}
      x={10}
      y={10}
    />
    <rect height={114} rx={29} stroke='currentColor' strokeWidth={6} width={114} x={3} y={3} />
    <rect fill='currentColor' height={36} rx={9} width={36} x={42} y={42} />
  </svg>
);
