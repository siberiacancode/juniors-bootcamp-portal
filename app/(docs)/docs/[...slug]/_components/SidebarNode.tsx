import type { Node } from 'fumadocs-core/page-tree';

import { cn } from '@/lib/utils';

import { SidebarLink } from './SidebarLink';

interface SidebarNodeProps {
  activeUrl: string;
  depth?: number;
  node: Node;
}

export const SidebarNode = ({ activeUrl, depth = 0, node }: SidebarNodeProps) => {
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
  const isActiveFolder = folderUrl
    ? activeUrl === folderUrl || activeUrl.startsWith(`${folderUrl}/`)
    : false;

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
