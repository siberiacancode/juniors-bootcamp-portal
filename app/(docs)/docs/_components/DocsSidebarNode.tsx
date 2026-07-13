import type { Node } from 'fumadocs-core/page-tree';
import type { ReactNode } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

interface SidebarNodeProps {
  activeUrl: string;
  depth?: number;
  node: Node;
}

interface SidebarLinkProps {
  active: boolean;
  depth: number;
  href: string;
  label: ReactNode;
  strong?: boolean;
}

const isActiveFolderPath = (activeUrl: string, url: string) =>
  activeUrl === url || activeUrl.startsWith(`${url}/`);

const SidebarLink = ({ active, depth, href, label, strong = false }: SidebarLinkProps) => (
  <Link
    className={cn(
      'block rounded-6 px-3 py-2 text-[14px]/6 transition hover:bg-secondary hover:text-foreground',
      active ? 'bg-secondary text-foreground' : 'text-muted-fg',
      strong && 'font-semibold',
      depth > 1 && 'text-[13px]/5'
    )}
    href={href}
  >
    {label}
  </Link>
);

export const SidebarNode = ({ activeUrl, depth = 0, node }: SidebarNodeProps) => {
  // Зачем он нужен?
  if (node.type === 'separator') {
    return (
      <p className='mt-6 px-3 font-pixelify-sans text-[12px]/5 font-semibold tracking-wide text-muted-fg uppercase'>
        {node.name}
      </p>
    );
  }

  if (node.type === 'page') {
    return (
      <SidebarLink
        active={activeUrl === node.url}
        depth={depth}
        href={node.url}
        label={node.name}
      />
    );
  }

  const folderUrl = node.index?.url;
  const isActiveFolder = folderUrl ? isActiveFolderPath(activeUrl, folderUrl) : false;

  return (
    <div className={cn(depth > 0 && 'mt-1')}>
      {folderUrl ? (
        <SidebarLink
          strong
          active={isActiveFolder}
          depth={depth}
          href={folderUrl}
          label={node.name}
        />
      ) : (
        <p className='px-3 py-2 text-[14px]/6 font-semibold text-foreground'>{node.name}</p>
      )}

      {node.children.length > 0 && (
        <div className='ml-3 flex flex-col gap-0.5 pl-4'>
          {node.children.map((child, index) => (
            <SidebarNode
              key={child.$id ?? `${child.type}-${depth}-${index}`}
              activeUrl={activeUrl}
              depth={depth + 1}
              node={child}
            />
          ))}
        </div>
      )}
    </div>
  );
};
