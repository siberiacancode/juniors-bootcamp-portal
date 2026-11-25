'use client';

import Image from 'next/image';

import { Button, Typography } from '@/components/ui';
import { LINKS } from '@/constants';
import { IntlText } from '@/intl';

import { useSubfooterSection } from './hooks/useSubfooterSection';

export const SubfooterSection = () => {
  const { functions } = useSubfooterSection();

  return (
    <section className='relative isolate mt-4 flex min-h-100 flex-col overflow-hidden rounded-32 bg-foreground px-7 pt-10 text-white sm:mt-8 sm:px-12 lg:mt-64 lg:min-h-110 lg:justify-center lg:overflow-visible lg:rounded-44 lg:p-16 dark:bg-secondary'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 overflow-hidden rounded-32 lg:rounded-44'
        style={{ backgroundImage: 'url(/images/textures/projects-subfooter.svg)' }}
      />

      <div className='relative z-10 flex max-w-160 flex-col items-start gap-6'>
        <Typography
          as='h2'
          className='text-[36px]/10 sm:text-[48px]/12 lg:text-[60px]/17'
          variant='heading-lg'
        >
          <IntlText path='page.projects.banner.title' />
        </Typography>
        <Typography as='p' className='max-w-120 text-white/75' variant='body-md'>
          <IntlText path='page.projects.banner.description' />
        </Typography>
        <Button
          asChild
          className='w-full bg-white text-black hover:bg-white/90 sm:w-auto'
          size='lg'
          onClick={functions.onContributeClick}
        >
          <a href={LINKS.PROJECTS.CONTRIBUTING} rel='noopener noreferrer' target='_blank'>
            <IntlText path='button.submitProject' />
          </a>
        </Button>
      </div>

      <div className='pointer-events-none relative z-0 mx-auto mt-6 -mb-5 w-70 max-w-full sm:w-85 lg:absolute lg:inset-x-0 lg:bottom-0 lg:my-0 lg:h-[calc(100%+8rem)] lg:w-full lg:overflow-hidden'>
        <Image
          alt=''
          className='w-full object-contain lg:absolute lg:right-0 lg:-bottom-2 lg:w-[40%] lg:max-w-120 lg:-rotate-2'
          height={1346}
          src='/illustrations/mascot/indiana-jones.webp'
          width={1168}
        />
      </div>
    </section>
  );
};
