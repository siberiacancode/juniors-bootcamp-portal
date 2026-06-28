import * as motion from 'motion/react-client';
import Link from 'next/link';

import { Button, Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

export const HeroSection = () => (
  <motion.section
    className={
      'relative flex flex-col items-center justify-center gap-6 overflow-hidden p-4 text-center sm:gap-10 lg:py-10 xl:py-20'
    }
    transition={{
      duration: 0.6
    }}
    animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: '10%' }}
  >
    <span className='font-pixelify-sans text-[29px]/9 font-bold tracking-wide'>
      juniorsbootcamp
    </span>

    <div className='flex flex-col items-center gap-6'>
      <Typography
        as='h1'
        className='text-[28px]/9 sm:text-[50px]/14 md:text-[72px]/18 xl:text-[80px]/20 2xl:text-[88px]/22 [&>span]:text-action-primary'
        variant='body-lg'
      >
        <IntlText path='page.qa.hero.title' />
      </Typography>

      <Typography as='p' className='text-[16px]/6 font-normal tracking-[0.005em]' variant='body-md'>
        <IntlText path='page.qa.hero.description' />
      </Typography>
    </div>
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className='flex w-full justify-center md:w-5/12'
      initial={{ opacity: 0, y: '10%' }}
      transition={{ delay: 0.6 }}
    >
      <Button
        asChild
        className={cn(
          'relative h-16 w-full bg-action-primary text-[32px]/12 font-bold tracking-normal text-action-primary-fg hover:bg-action-primary-hover',
          'after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:border-2 after:border-action-primary after:bg-transparent hover:after:border-action-primary-hover',
          'after:-translate-x-1.5 after:translate-y-1.5 after:transition hover:after:translate-0',
          'animate-[pulse-cta_2s_ease-in-out_infinite] hover:paused'
        )}
        size='lg'
      >
        <Link href='#skills'>
          <IntlText path='button.start' />
        </Link>
      </Button>
    </motion.div>
  </motion.section>
);
