import { SendIcon } from 'lucide-react';
import Link from 'next/link';

import { MatrixGrid } from '@/components/common';
import { Card, IconButton, Typography } from '@/components/ui';
import { LINKS } from '@/constants';
import { IntlText } from '@/intl';

export const FinalCardsSection = () => (
  <section className='flex flex-col gap-8 sm:gap-10'>
    <Typography
      pixelify
      as='h2'
      className='text-[42px]/[42px] sm:text-[56px]/none lg:text-[88px]/24'
      variant='display'
    >
      <IntlText path='page.testers.finalCards.title' />
    </Typography>

    <div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_394px]'>
      <Card className='min-h-142 justify-end rounded-24 border-0 bg-(--color-olive-100) px-6 py-10 text-action-primary sm:px-8 lg:min-h-107'>
        <div className='flex max-w-213.5 flex-col gap-4'>
          <Typography as='p' variant='caption'>
            <IntlText path='page.testers.finalCards.manual.eyebrow' />
          </Typography>
          <Typography as='h3' className='text-[36px]/10 sm:text-[48px]/12' variant='heading-md'>
            <IntlText path='page.testers.finalCards.manual.title' />
          </Typography>
        </div>
      </Card>

      <Card className='relative min-h-91 overflow-hidden rounded-24 border-0 bg-(--color-olive-100) px-6 py-10 text-action-primary sm:px-8 lg:min-h-107'>
        <div className='flex flex-col gap-1'>
          <Typography as='p' variant='caption'>
            <IntlText path='page.testers.finalCards.community.eyebrow' />
          </Typography>
          <Typography as='h3' className='text-[36px]/10 sm:text-[48px]/12' variant='heading-md'>
            <IntlText path='page.testers.finalCards.community.title' />
          </Typography>
        </div>

        <MatrixGrid
          matrix={[
            [0, 1, 1],
            [1, 1, 0],
            [0, 1, 1]
          ]}
          className='absolute bottom-0 left-1/2 -translate-x-1/2 text-action-primary/35'
          size={58}
        />

        <IconButton
          asChild
          rounded
          className='absolute right-4 bottom-4 bg-background text-action-primary hover:bg-background'
        >
          <Link href={LINKS.SOCIAL.TELEGRAM} rel='noopener noreferrer' target='_blank'>
            <SendIcon className='size-5' />
          </Link>
        </IconButton>
      </Card>
    </div>
  </section>
);
