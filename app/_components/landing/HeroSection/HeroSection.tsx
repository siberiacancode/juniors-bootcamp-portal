import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import { MotionMatrixGrid } from '@/components/common/motion';
import { Button, Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

export const HeroSection = () => (
  <section className='relative flex flex-col items-center gap-6 p-4'>
    <Button asChild size='sm' variant='outline'>
      <Link href='/tasks'>
        <span className='font-pixelify-sans text-[20px]/7 font-bold tracking-wide'>jb</span>
        getting started
        <ChevronRightIcon />
      </Link>
    </Button>

    <h1 className='inline-flex flex-col gap-2 pt-10 select-none'>
      <span className='font-parisienne text-[clamp(48px,calc(-44px+14.5vw),140px)] leading-0 font-normal'>
        juniors
      </span>
      <span className='font-pixelify-sans text-[clamp(56px,calc(-88px+22.5vw),200px)] leading-none font-bold'>
        BOOTCAMP
      </span>
    </h1>

    <Typography
      as='p'
      className='w-full text-center text-muted-fg md:w-7/10 [&>span]:text-foreground'
      variant='body-lg'
    >
      <IntlText path='page.home.description' />
    </Typography>

    <Button
      asChild
      className={cn(
        'relative h-16 w-full text-[32px]/12 md:w-5/12',
        'after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:border-2 after:border-primary after:bg-transparent',
        'after:-translate-x-1.5 after:translate-y-1.5 after:transition hover:after:translate-0'
      )}
      size='lg'
    >
      <Link href='/tasks'>
        <IntlText path='button.start' />
      </Link>
    </Button>

    <div aria-hidden className='absolute inset-0 -z-1'>
      <MotionMatrixGrid
        animate={{
          scale: 1,
          left: '2%',
          top: 0
        }}
        matrix={[
          [0, 0, 0, 0, 1, 1],
          [0, 0, 1, 1, 1, 1],
          [1, 1, 1, 1, 0, 0],
          [1, 1, 0, 0, 0, 0]
        ]}
        transition={{
          delay: 0.1
        }}
        className='absolute w-8 rotate-135 sm:w-12'
        fill='var(--color-violet-400)'
        initial={{ scale: 0, left: '-30%', top: '-10%' }}
      />

      <MotionMatrixGrid
        animate={{
          scale: 1,
          right: '12%',
          top: '15%'
        }}
        matrix={[
          [1, 1, 1],
          [0, 1, 0]
        ]}
        className='absolute w-8 rotate-45 sm:w-12'
        fill='var(--color-green-400)'
        initial={{ scale: 0, right: '-30%', top: '-10%' }}
      />

      <MotionMatrixGrid
        animate={{
          scale: 1,
          left: '5%',
          bottom: 'var(--bottom)'
        }}
        matrix={[
          [0, 1],
          [0, 1],
          [1, 1]
        ]}
        className='absolute h-8 [--bottom:20%] sm:h-12 md:[--bottom:10%]'
        fill='var(--color-orange-400)'
        initial={{ scale: 0, left: '-20%', bottom: '-10%' }}
      />

      <MotionMatrixGrid
        animate={{
          scale: 1,
          right: 'var(--right)',
          bottom: 'var(--bottom)'
        }}
        matrix={[
          [0, 1, 1],
          [1, 1, 0],
          [0, 1, 1]
        ]}
        transition={{
          delay: 0.2
        }}
        className='absolute w-8 -rotate-45 [--bottom:-11%] [--right:2%] sm:size-12 md:[--bottom:0%] md:[--right:20%]'
        fill='var(--color-pink-400)'
        initial={{ scale: 0, right: '-20%', bottom: '-10%' }}
      />
    </div>
  </section>
);
