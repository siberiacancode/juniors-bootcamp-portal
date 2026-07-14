import type { ReactNode } from 'react';

import { BookOpenIcon } from 'lucide-react';
import Link from 'next/link';

import { Card, Typography } from '@/components/ui';

interface DocsCollectionCardProps {
  children?: ReactNode;
  description?: ReactNode;
  href: string;
  title: ReactNode;
}

export const DocsCollectionCard = ({
  children,
  description,
  href,
  title
}: DocsCollectionCardProps) => (
  <Card
    asChild
    className='group gap-0 overflow-hidden py-0 transition hover:-translate-0.5 hover:border-action-primary hover:shadow-[6px_6px_0_0_var(--color-border-hard)] focus-visible:-translate-0.5 focus-visible:border-action-primary focus-visible:shadow-[6px_6px_0_0_var(--color-border-hard)] focus-visible:outline-none'
  >
    <Link href={href}>
      <div
        aria-hidden
        className='relative grid h-48 place-items-center overflow-hidden border-b-2 border-border-hard bg-secondary bg-[radial-gradient(circle,var(--color-border-soft)_1px,transparent_1px)] bg-size-[24px_24px]'
      >
        <div className='relative grid size-28 place-items-center rounded-24 border-2 border-border-hard bg-background text-action-primary shadow-[6px_6px_0_0_var(--color-border-hard)] transition-transform group-hover:-translate-y-1 group-focus-visible:-translate-y-1'>
          {children ?? <BookOpenIcon className='size-14' strokeWidth={1.5} />}
        </div>
      </div>

      <div className='flex flex-col gap-2 px-8 py-6'>
        <Typography as='h2' variant='title-md'>
          {title}
        </Typography>
        {description ? (
          <Typography as='p' className='text-muted-fg' variant='body-sm'>
            {description}
          </Typography>
        ) : null}
      </div>
    </Link>
  </Card>
);
