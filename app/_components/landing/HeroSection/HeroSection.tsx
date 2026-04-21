import { ChevronRightIcon } from 'lucide-react';
import * as motion from 'motion/react-client';
import Link from 'next/link';

import { MatrixGrid } from '@/components/common';
import { AvoidCursor } from '@/components/common/motion';
import { Button, Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

export const HeroSection = () => (
  <section
    className={cn(
      'relative flex flex-col items-center justify-center gap-16 p-6',
      'my-8 h-[calc(100dvh---spacing(35))] sm:my-10 sm:h-[calc(100dvh---spacing(48))]'
    )}
  >
    <motion.div
      transition={{
        duration: 0.6
      }}
      animate={{ opacity: 1, y: 0 }}
      className='flex flex-col items-center gap-6'
      initial={{ opacity: 0, y: '10%' }}
    >
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
    </motion.div>

    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className='flex w-full justify-center md:w-5/12'
      initial={{ opacity: 0, y: '10%' }}
      transition={{ delay: 0.6 }}
    >
      <Button
        asChild
        className={cn(
          'relative h-16 w-full text-[32px]/12',
          'after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:border-2 after:border-primary after:bg-transparent',
          'after:-translate-x-1.5 after:translate-y-1.5 after:transition hover:after:translate-0',
          'animate-[pulse-cta_2s_ease-in-out_infinite] hover:paused'
        )}
        size='lg'
      >
        <Link href='/tasks'>
          <IntlText path='button.start' />
        </Link>
      </Button>
    </motion.div>

    <div aria-hidden className='pointer-events-none absolute inset-0 -z-1 select-none'>
      <AvoidCursor
        transition={{
          delay: 0.9
        }}
        whileInView={{
          scale: 1,
          left: '4%',
          top: '4%'
        }}
        className='absolute -rotate-45'
        initial={{ scale: 0, left: 0, top: 0 }}
      >
        <MatrixGrid
          matrix={[
            [0, 0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 0]
          ]}
          className='h-fit w-10 sm:w-16'
          fill='var(--color-violet-400)'
        />
      </AvoidCursor>

      <AvoidCursor
        transition={{
          delay: 1
        }}
        whileInView={{
          scale: 1,
          right: '5%',
          top: '15%'
        }}
        className='absolute rotate-45'
        initial={{ scale: 0, right: '1%', top: '11%' }}
      >
        <MatrixGrid
          matrix={[
            [1, 1, 1],
            [0, 1, 0]
          ]}
          className='h-fit w-10 sm:w-16'
          fill='var(--color-green-400)'
        />
      </AvoidCursor>

      <AvoidCursor
        transition={{
          delay: 1.1
        }}
        whileInView={{
          scale: 1,
          left: '8%',
          bottom: 'var(--bottom)'
        }}
        className='absolute [--bottom:30%] md:[--bottom:26%]'
        initial={{ scale: 0, left: '4%', bottom: '21%' }}
      >
        <MatrixGrid
          matrix={[
            [0, 1],
            [0, 1],
            [1, 1]
          ]}
          className='h-10 w-fit sm:h-16'
          fill='var(--color-orange-400)'
        />
      </AvoidCursor>

      <AvoidCursor
        transition={{
          delay: 1.2
        }}
        whileInView={{
          scale: 1,
          right: '12%',
          bottom: '4%'
        }}
        className='absolute -rotate-45'
        initial={{ scale: 0, right: '8%', bottom: '0%' }}
      >
        <MatrixGrid
          matrix={[
            [0, 1, 1],
            [1, 1, 0],
            [0, 1, 1]
          ]}
          className='h-fit w-10 sm:w-16'
          fill='var(--color-pink-400)'
        />
      </AvoidCursor>
    </div>
  </section>
);
