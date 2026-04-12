import { RocketIcon } from 'lucide-react';
import Link from 'next/link';

import { MatrixGrid } from '@/components/common';
import { UnicStarIcon } from '@/components/icons';
import { Button, Card, Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

import { GradientBlur, OrbitingStack } from './components';
import { GUIDES, LEVELS } from './constants';

export const BentoSection = () => (
  <section className='grid grid-cols-1 gap-4 lg:h-155 lg:grid-flow-col lg:grid-cols-12 lg:grid-rows-12'>
    <Card className='relative items-stretch overflow-hidden bg-(--color-violet-100) px-6 lg:col-span-5 lg:row-span-7 dark:bg-(--color-violet-900)/70'>
      <div className='z-1 flex flex-col gap-1'>
        <Typography variant='heading-lg'>Hello, user</Typography>
        <Typography as='p' variant='body-md'>
          <IntlText path='page.home.section.bento.col.1.card.up.text' />
        </Typography>
      </div>

      <div className='relative mb-6 flex-1 text-(--color-violet-500)'>
        <UnicStarIcon
          className='absolute -bottom-33 -left-6 size-33 animate-[spin_5s_linear_infinite] paused hover:running sm:-bottom-27 sm:left-0 sm:size-42'
          viewBox='4 4 24 24'
        />

        <UnicStarIcon
          className='absolute -right-8 -bottom-6 size-18 animate-[spin_3s_linear_infinite] paused hover:running sm:left-4/9 sm:size-26'
          viewBox='4 4 24 24'
        />
      </div>

      <Button asChild className='z-1 w-full self-end sm:max-w-48'>
        <Link href='/tasks'>Start</Link>
      </Button>
    </Card>

    <Card className='justify-end overflow-hidden px-6 lg:col-span-5 lg:row-span-5'>
      <div className='relative min-h-10 flex-1'>
        <OrbitingStack className='absolute top-1/2 left-1/2 -translate-1/2 mask-b-from-50% mask-b-to-65% sm:mask-b-to-80%' />
      </div>

      <div className='z-1 flex flex-col gap-1'>
        <Typography variant='title-md'>
          <IntlText path='page.home.section.bento.col.1.card.down.title' />
        </Typography>
        <Typography as='p' className='text-muted-fg' variant='caption'>
          <IntlText path='page.home.section.bento.col.1.card.down.description' />
        </Typography>
      </div>
    </Card>

    <Card className='gap-6 px-6 lg:col-span-3 lg:row-span-5'>
      <div className='flex flex-col gap-1'>
        <Typography variant='title-md'>
          <IntlText path='page.home.section.bento.col.2.card.up.title' />
        </Typography>
        <Typography as='p' className='text-muted-fg' variant='caption'>
          <IntlText path='page.home.section.bento.col.2.card.up.description' />
        </Typography>
      </div>

      <div className='grid h-full grid-cols-3 gap-4 select-none'>
        {LEVELS.map(({ color, name, icon: Icon }) => (
          <div
            key={name}
            className={cn(
              'flex flex-col items-center justify-center rounded-8 border border-border-hard py-5 font-pixelify-sans text-[16px]/6 font-normal tracking-wide transition hover:scale-[1.1] lg:py-0',
              color
            )}
          >
            <Icon />
            {name}
          </div>
        ))}
      </div>
    </Card>

    <Card className='relative justify-between overflow-hidden px-6 lg:col-span-3 lg:row-span-7'>
      <div className='absolute -inset-1'>
        <GradientBlur className='h-40 w-full' preserveAspectRatio='none' />
      </div>

      <div className='z-1 h-30'>
        <div className='flex size-8 items-center justify-center rounded-full border border-white bg-white/40'>
          <RocketIcon className='size-4' stroke='black' />
        </div>
      </div>

      <div className='z-1 flex flex-col gap-1'>
        <Typography variant='title-md'>
          <IntlText path='page.home.section.bento.col.2.card.down.title' />
        </Typography>
        <Typography as='p' className='text-muted-fg' variant='caption'>
          <IntlText path='page.home.section.bento.col.2.card.down.description' />
        </Typography>
      </div>
    </Card>

    <Card className='justify-between lg:col-span-4 lg:row-span-6'>
      <div className='relative h-40 shrink-0 overflow-hidden'>
        <div className='absolute top-1/2 left-1/2 flex w-160 -translate-1/2 flex-wrap justify-center gap-2 select-none'>
          {GUIDES.map(({ background, color, icon: Icon, label }, index) => (
            <div
              key={label}
              className={cn(
                'flex flex-col items-center justify-center gap-2 rounded-14 border border-border-hard p-2',
                background
              )}
            >
              <span className='text-[20px]/7 font-medium'>{`0${index + 1}`}</span>
              <div className='flex items-center gap-1 rounded-full bg-background px-2 text-nowrap'>
                <Icon className={cn('size-3', color)} />
                <span className='text-[10px]/4.5 font-semibold'>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-2 px-6'>
        <Typography variant='title-md'>
          <IntlText path='page.home.section.bento.col.3.card.up.title' />
        </Typography>
        <Typography as='p' className='text-muted-fg' variant='caption'>
          <IntlText path='page.home.section.bento.col.3.card.up.description' />
        </Typography>
      </div>
    </Card>

    <Card className='relative items-center justify-center px-6 lg:col-span-4 lg:row-span-6'>
      <MatrixGrid
        matrix={[
          [0, 1],
          [0, 1],
          [1, 1]
        ]}
        className='text-(--color-orange-400)/50 blur-md'
        size={70}
      />
      <Typography className='absolute top-1/2 left-1/2 -translate-1/2' variant='title-md'>
        Coming soon!
      </Typography>
    </Card>
  </section>
);
