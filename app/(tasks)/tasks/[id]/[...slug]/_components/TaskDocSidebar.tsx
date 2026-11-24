import type { Route } from 'next';

import { LockIcon } from 'lucide-react';
import Link from 'next/link';

import type { DocTreeNode, TaskDoc } from '@/docs';

import { cn } from '@/lib/utils';

type SidebarNode = DocTreeNode<{ lock: TaskDoc['lock'] }>;

interface TaskDocSidebarProps {
  activeUrl: string;
  nodes: SidebarNode[];
}

export const TaskDocSidebar = ({ nodes, activeUrl }: TaskDocSidebarProps) => (
  <ul className='flex flex-col gap-1'>
    {nodes.map((node, index) => {
      if (node.type === 'separator')
        return (
          <li key={`separator-${index}`} className='mt-4 text-[14px]/5 font-bold opacity-60'>
            {node.name}
          </li>
        );

      if (node.type === 'folder')
        return (
          <li key={node.$id ?? `folder-${index}`} className='flex flex-col gap-1'>
            <span className='mt-2 font-bold'>{node.name}</span>
            <div className='pl-3'>
              <TaskDocSidebar activeUrl={activeUrl} nodes={node.children} />
            </div>
          </li>
        );

      return (
        <li key={node.url}>
          <Link
            className={cn(
              'flex items-center gap-2 rounded-6 px-2 py-1',
              node.url === activeUrl && 'font-bold',
              node.lock && 'opacity-50'
            )}
            href={node.url as Route}
          >
            {node.name}
            {node.lock && <LockIcon className='size-3.5' />}
          </Link>
        </li>
      );
    })}
  </ul>
);
