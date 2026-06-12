import * as motion from 'motion/react-client';

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
    <Typography
      pixelify
      as='h2'
      className='text-[34px]/[42px] sm:text-[56px]/[56px] lg:text-[88px]/24'
      variant='display'
    >
      <IntlText path='page.qa.practice.title' />
    </Typography>

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
              <div className='relative h-40 w-full max-w-163 overflow-hidden rounded-16 bg-background shadow-inner sm:h-80 lg:h-115'>
                {/* Место под пикчу */}
                {/* <Image
                  fill
                  alt=''
                  aria-hidden='true'
                  className='object-cover'
                  sizes='(min-width: 1024px) 652px, calc(100vw - 96px)'
                  src={slide.image}
                /> */}
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
