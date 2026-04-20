'use client';

import { motion } from 'motion/react';

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
  <section className='relative flex flex-col gap-8 sm:gap-10'>
    <Typography asChild pixelify variant='display'>
      <motion.h2
        transition={{
          duration: 0.6
        }}
        initial={{ opacity: 0, x: '-10%' }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <IntlText path='page.home.section.reviewsAboutUs.title' />
      </motion.h2>
    </Typography>

    <Carousel
      asChild
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
      <motion.div
        transition={{
          delay: 0.6,
          duration: 0.6
        }}
        initial={{ opacity: 0, y: '10%' }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
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
      </motion.div>
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
        transition={{ delay: 0.5 }}
      >
        <MatrixGrid
          matrix={[
            [0, 0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 0]
          ]}
          className='h-fit w-8 sm:w-12'
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
        transition={{ delay: 0.4 }}
      >
        <MatrixGrid
          matrix={[
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0]
          ]}
          className='h-fit w-8 sm:w-12'
          fill='var(--color-purple-400)'
        />
      </AvoidCursor>
    </div>
  </section>
);
