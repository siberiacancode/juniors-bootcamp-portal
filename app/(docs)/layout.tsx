import type { ReactNode } from 'react';

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => (
  <>
    {children}
    <style>
      {`
          :root {
            --color-action-primary:var(--color-accent-secondary);
            --color-action-primary-hover:var(--color-accent-secondary-hover);
            --color-action-primary-fg:var(--color-accent-secondary-fg);
          }
        `}
    </style>
  </>
);

export default DocsLayout;
