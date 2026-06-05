import type { ReactNode } from 'react';

interface TestersLayoutProps {
  children: ReactNode;
}

const TestersLayout = ({ children }: TestersLayoutProps) => (
  <>
    {children}
    <style>
      {`
          :root {
            --color-action-primary:var(--color-olive-700);
            --color-action-primary-hover:var(--color-olive-800);
            --color-action-primary-fg:var(--color-neutral-50);
          }
        `}
    </style>
  </>
);

export default TestersLayout;
