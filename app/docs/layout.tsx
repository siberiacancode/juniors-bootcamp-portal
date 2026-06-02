import type { ReactNode } from 'react';

import { DocsLayout } from 'fumadocs-ui/layouts/docs';

import { baseOptions } from '@/lib/layout.shared';
import { docsSource } from '@/lib/source';

export default function DocsRootLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions()}
      nav={{
        enabled: false
      }}
      searchToggle={{
        enabled: false
      }}
      sidebar={{
        enabled: true
      }}
      themeSwitch={{
        enabled: false
      }}
      tabs={false}
      tree={docsSource.getPageTree()}
    >
      {children}
    </DocsLayout>
  );
}
