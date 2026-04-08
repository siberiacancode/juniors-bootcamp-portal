import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import { MatrixGridIcon, TelegramIcon } from '@/components/icons';
import { Button, Card, Marquee, Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { intl } from '@/intl/server';
import { cn } from '@/lib/utils';

export const generateMetadata = () => ({
  title: intl.formatMessage({ id: 'page.home.metadata.title' }),
  description: intl.formatMessage({ id: 'page.home.metadata.description' })
});

const marqueeItems = [
  {
    name: 'react',
    icon: (
      <MatrixGridIcon
        matrix={[
          [0, 0, 0, 0, 1, 1],
          [0, 0, 1, 1, 1, 1],
          [1, 1, 1, 1, 0, 0],
          [1, 1, 0, 0, 0, 0]
        ]}
        fill='#FF8EEA'
        size={12}
      />
    )
  },
  {
    name: 'vue',
    icon: (
      <MatrixGridIcon
        matrix={[
          [0, 1],
          [0, 1],
          [1, 1]
        ]}
        fill='#42BC58'
      />
    )
  },
  {
    name: 'angular',
    icon: (
      <MatrixGridIcon
        matrix={[
          [1, 1, 1],
          [0, 1, 0]
        ]}
        fill='#C58EFF'
      />
    )
  },
  {
    name: 'svelte',
    icon: (
      <MatrixGridIcon
        matrix={[
          [0, 1, 0],
          [1, 1, 1],
          [0, 1, 0]
        ]}
        fill='#FFB08E'
      />
    )
  }
];

const HomePage = () => (
  <>
    <main className='content-container mt-3 flex flex-col gap-18 sm:mt-6 sm:gap-22'>
      <section className='flex flex-col items-center gap-6 p-4'>
        <Button asChild size='sm' variant='outline'>
          <Link href='/tasks'>
            <span className='font-pixelify-sans text-[20px]/7 font-bold tracking-wide'>jb</span>
            getting started
            <ChevronRightIcon />
          </Link>
        </Button>

        <h1 className='inline-flex flex-col gap-2 select-none'>
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
          className={cn(
            'relative h-16 w-full text-[32px]/12 md:w-5/12',
            'after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:border-2 after:border-primary after:bg-transparent',
            'after:-translate-x-1.5 after:translate-y-1.5 after:transition hover:after:translate-0'
          )}
          size='lg'
        >
          <IntlText path='button.start' />
        </Button>
      </section>

      <section>BENTO</section>

      <section>отзывы о нас</section>

      {/* <section>Проекты учеников</section> */}

      <section>Частые вопросы</section>
    </main>

    <div className='mb-18 sm:mb-22'>
      <Marquee className='py-10 select-none'>
        {marqueeItems.map(({ icon, name }) => (
          <div key={name} className='flex items-center gap-6'>
            {icon}
            <Typography as='span' variant='heading-2xl'>
              {name}
            </Typography>
          </div>
        ))}
      </Marquee>

      <div className='content-container flex flex-col gap-4 md:flex-row'>
        {Array.from({ length: 3 }).map((_, index) => (
          <Card asChild key={index} className='flex-1 gap-10 bg-[#FBE2FF] px-6 sm:px-10'>
            <a href='#' rel='noopener noreferrer' target='_blank'>
              <div className='flex items-center justify-between gap-4'>
                <Typography as='span' variant='body-lg'>
                  <IntlText path='page.home.projectCard.title' />
                </Typography>

                <TelegramIcon className='size-6' />
              </div>
              <MatrixGridIcon
                matrix={[
                  [1, 1, 1],
                  [0, 1, 1],
                  [0, 0, 1]
                ]}
                fill='#E85BFE'
                size={30}
                stroke='var(--color-border-hard)'
                strokeWidth={1}
              />
              <Typography as='p' variant='body-sm'>
                <IntlText path='page.home.projectCard.description' />
              </Typography>
            </a>
          </Card>
        ))}
      </div>
    </div>
  </>
);

export default HomePage;
