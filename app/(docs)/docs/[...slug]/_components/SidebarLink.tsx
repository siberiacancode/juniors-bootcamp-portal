import type { ReactNode } from 'react';

import Link from 'next/link';

import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

interface SidebarLinkProps {
  active: boolean;
  depth: number;
  href: string;
  label: ReactNode;
  strong?: boolean;
}

export const SidebarLink = ({ active, depth, href, label, strong = false }: SidebarLinkProps) => (
  <Link
    className={cn(
      'block rounded-6 px-3 py-2 transition hover:bg-secondary hover:text-foreground',
      active ? 'bg-secondary text-foreground' : 'text-muted-fg'
    )}
    href={href}
  >
    <Typography
      as='span'
      className={cn(strong && 'font-semibold', depth > 1 && 'text-[13px]/5')}
      variant='caption'
    >
      {label}
    </Typography>
  </Link>
);
