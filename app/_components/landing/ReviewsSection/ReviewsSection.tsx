import * as motion from 'motion/react-client';

import { MatrixGrid } from '@/components/common';
import { AvoidCursor } from '@/components/common/motion';
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
  <motion.section
    transition={{
      duration: 0.6
    }}
    className='relative flex flex-col gap-8 sm:gap-10'
    initial={{ opacity: 0, y: '20%' }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <Typography pixelify as='h2' variant='display'>
      <IntlText path='page.home.section.reviewsAboutUs.title' />
    </Typography>

    <Carousel
      options={{
        loop: true,
        align: 'start',
        duration: 50
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
    <div aria-hidden className='pointer-events-none absolute inset-0 -z-1 select-none'>
      <AvoidCursor
        whileInView={{
          scale: 1,
          top: '18%',
          left: '7%'
        }}
        className='absolute'
        initial={{ scale: 0, top: '14%', left: '3%' }}
        transition={{ delay: 0.7 }}
      >
        <MatrixGrid
          matrix={[
            [0, 0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 0]
          ]}
          className='h-fit w-10 sm:w-16'
          fill='var(--color-sky-400)'
        />
      </AvoidCursor>

      <AvoidCursor
        whileInView={{
          scale: 1,
          top: 'var(--top)',
          right: '15%'
        }}
        className='absolute [--top:-8%] sm:[--top:-5%]'
        initial={{ scale: 0, top: '-9%', right: '11%' }}
        transition={{ delay: 0.8 }}
      >
        <MatrixGrid
          matrix={[
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0]
          ]}
          className='h-fit w-10 sm:w-16'
          fill='var(--color-purple-400)'
        />
      </AvoidCursor>
    </div>
  </motion.section>
);
