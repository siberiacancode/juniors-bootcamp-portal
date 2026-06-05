import { BugIcon } from 'lucide-react';
import * as motion from 'motion/react-client';

import { MatrixGrid } from '@/components/common';
import { Button, Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

export const HeroSection = () => (
  <motion.section
    className={cn(
      'relative flex min-h-[401px] flex-col items-center justify-center gap-6 overflow-hidden rounded-24 bg-background p-6 text-center',
      'sm:min-h-[520px] sm:gap-10 sm:px-10 sm:py-20 lg:min-h-[639px] 2xl:min-h-[551px]'
    )}
    transition={{
      duration: 0.6
    }}
    animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: '10%' }}
  >
    <span className='font-pixelify-sans text-[29px]/9 font-bold tracking-wide'>
      juniorsbootcamp
    </span>

    <div className='flex max-w-300 flex-col items-center gap-6'>
      <Typography
        as='h1'
        className='text-[36px]/9 sm:text-[56px]/14 lg:text-[88px]/22 [&>span]:text-action-primary'
        variant='heading-2xl'
      >
        <IntlText path='page.testers.hero.title' />
      </Typography>

      <Typography as='p' className='max-w-225' variant='body-md'>
        <IntlText path='page.testers.hero.description' />
      </Typography>
    </div>

    <Button
      disabled
      className={cn(
        'relative h-16 w-full max-w-70 bg-action-primary text-[32px]/12 text-action-primary-fg opacity-100 sm:max-w-122.5',
        'after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:border-2 after:border-action-primary after:bg-background',
        'after:-translate-x-1.5 after:translate-y-1.5'
      )}
      size='lg'
    >
      <IntlText path='button.start' />
    </Button>

    <div aria-hidden className='pointer-events-none absolute inset-0 -z-1 select-none'>
      <MatrixGrid
        matrix={[
          [0, 1, 1],
          [1, 1, 0],
          [0, 1, 1]
        ]}
        className='absolute top-[10%] right-[7%] hidden text-(--color-olive-100) md:block'
        size={42}
      />
      <MatrixGrid
        matrix={[
          [1, 1, 1],
          [0, 1, 0]
        ]}
        className='absolute bottom-[13%] left-[8%] hidden rotate-12 text-(--color-blue-100) md:block'
        size={36}
      />
      <BugIcon className='absolute right-[10%] bottom-[10%] size-16 rotate-12 text-action-primary/20 sm:size-24' />
    </div>
  </motion.section>
);
