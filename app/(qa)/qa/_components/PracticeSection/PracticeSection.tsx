import * as motion from 'motion/react-client';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Typography
} from '@/components/ui';
import { IntlText } from '@/intl';

import { PracticeTasksLink } from './components';
import { PRACTICE_SLIDES } from './constants';

export const PracticeSection = () => (
  <motion.section
    transition={{
      duration: 0.6
    }}
    className='flex flex-col gap-8 sm:gap-10'
    initial={{ opacity: 0, y: '20%' }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div className='flex flex-col items-start gap-3'>
      <Typography
        pixelify
        as='h2'
        className='text-[34px]/[42px] sm:text-[56px]/[56px] lg:text-[88px]/24'
        variant='display'
      >
        <IntlText path='page.qa.practice.title' />
      </Typography>

      <Typography as='p' variant='body-lg'>
        <IntlText
          values={{
            link: PracticeTasksLink
          }}
          path='page.qa.practice.description'
        />
      </Typography>
    </div>

    <Carousel
      options={{
        align: 'start',
        loop: true
      }}
      plugins={{
        autoplay: {
          delay: 5000,
          stopOnInteraction: true,
          stopOnMouseEnter: true
        }
      }}
    >
      <CarouselContent>
        {PRACTICE_SLIDES.map((slide) => (
          <CarouselItem key={slide.title}>
            <div className='flex flex-col items-center gap-6 rounded-44 bg-secondary p-6 sm:gap-8 sm:p-12 lg:px-25 lg:py-16'>
              <div className='relative aspect-1920/996 w-full max-w-300 overflow-hidden rounded-2 bg-background shadow-inner'>
                <Image
                  fill
                  unoptimized
                  alt={slide.title}
                  aria-hidden='true'
                  className='object-cover'
                  sizes='(min-width: 1024px) 652px, calc(100vw - 96px)'
                  src={slide.image}
                />
              </div>
              <div className='flex max-w-260 flex-col items-center gap-3 text-center sm:px-0'>
                <Typography as='h3' className='text-[24px]/8 sm:text-[32px]/10' variant='title-lg'>
                  <IntlText path={slide.title} />
                </Typography>
                <Typography as='p' className='text-[16px]/5.5 sm:text-[18px]/6.5' variant='body-md'>
                  <IntlText path={slide.description} />
                </Typography>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden lg:inline-flex' />
      <CarouselNext className='hidden lg:inline-flex' />
      <CarouselDots activeClassName='bg-action-primary' />
    </Carousel>
  </motion.section>
);
