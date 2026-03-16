import { GitBranch, Server } from 'lucide-react';
import Link from 'next/link';

import { IntlText } from '@/components/intl';
import { Badge } from '@/components/ui';

const KIT_ITEMS = [
  {
    href: 'https://github.com/siberiacancode/juniors-bootcamp-portal',
    key: 'page.tasks.section.kit.git',
    icon: GitBranch
  },
  //   { href: '/tasks/stack', key: 'page.tasks.section.kit.stack', icon: Layers },
  //   { href: '/tasks/tools', key: 'page.tasks.section.kit.tools', icon: Hammer },
  { href: '/tasks/api', key: 'page.tasks.section.kit.backend', icon: Server }
];

export const KitSection = () => (
  <section className='mb-8 space-y-4'>
    <div className='flex flex-wrap gap-3'>
      {KIT_ITEMS.map((item) => (
        <Badge
          asChild
          key={item.key}
          className='flex items-center gap-2 bg-card text-base'
          variant='outline'
        >
          <Link href={item.href}>
            <item.icon className='size-4' />
            <IntlText path={item.key as MessagePath} />
          </Link>
        </Badge>
      ))}
    </div>
  </section>
);
