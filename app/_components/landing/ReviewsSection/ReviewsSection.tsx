import { MotionMatrixGrid } from '@/components/common/motion';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  Typography
} from '@/components/ui';
import { IntlText } from '@/intl';

import { REVIEWS } from './constants';

export const ReviewsSection = () => (
  <section className='relative flex flex-col gap-8 sm:gap-10'>
    <Typography pixelify as='h2' variant='display'>
      <IntlText path='page.home.section.reviewsAboutUs.title' />
    </Typography>

    <Carousel
      options={{
        loop: true,
        align: 'start',
        duration: 35
      }}
      plugins={{
        autoplay: {
          delay: 3000,
          stopOnInteraction: false
        }
      }}
    >
      <CarouselContent>
        {REVIEWS.map((review, index) => (
          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
            <Card className='h-108 justify-between px-6 select-none sm:px-10'>
              <div className='flex gap-4'>
                <Avatar size='lg'>
                  <AvatarImage
                    alt={`${review.name}'s profile picture`}
                    className='grayscale'
                    src='#'
                  />
                  <AvatarFallback>
                    {review.name
                      .split(' ')
                      .map((n) => n[0].toUpperCase())
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Typography as='h6' variant='body-lg'>
                    {review.name}
                  </Typography>
                  <Typography as='p' variant='body-md'>
                    {review.role}
                  </Typography>
                </div>
              </div>

              <Typography as='p' variant='title-md'>
                {review.review}
              </Typography>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselDots />
    </Carousel>

    <div aria-hidden className='absolute inset-0 -z-1'>
      <MotionMatrixGrid
        matrix={[
          [0, 0, 0, 0, 1, 1],
          [0, 0, 1, 1, 1, 1],
          [1, 1, 1, 1, 0, 0],
          [1, 1, 0, 0, 0, 0]
        ]}
        whileInView={{
          opacity: 1,
          top: '15%',
          left: '5%'
        }}
        className='absolute w-8 sm:w-12'
        fill='var(--color-sky-400)'
        initial={{ opacity: 0, top: '25%', left: '-1%' }}
        viewport={{ once: true }}
      />

      <MotionMatrixGrid
        matrix={[
          [0, 1, 0],
          [1, 1, 1],
          [0, 1, 0]
        ]}
        whileInView={{
          opacity: 1,
          top: 'var(--top)',
          right: '15%'
        }}
        className='absolute w-8 [--top:-8%] sm:w-12 sm:[--top:-5%]'
        fill='var(--color-purple-400)'
        initial={{ opacity: 0, top: '25%', right: '-1%' }}
        viewport={{ once: true }}
      />
    </div>
  </section>
);
