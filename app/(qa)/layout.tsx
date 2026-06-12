import type { ReactNode } from 'react';

interface QALayoutProps {
  children: ReactNode;
}

const QALayout = ({ children }: QALayoutProps) => (
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

export default QALayout;
