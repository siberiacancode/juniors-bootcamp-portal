import * as motion from 'motion/react-client';

import {
  Avatar,
  AvatarFallback,
  Card,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  Typography
} from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

import { REVIEWS } from './constants';

export const ReviewsSection = () => (
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
      className='text-[34px]/[42px] sm:text-[56px]/none lg:text-[88px]/24'
      variant='display'
    >
      <IntlText path='page.qa.reviews.title' />
    </Typography>

    <Carousel
      options={{
        align: 'start',
        loop: true
      }}
      plugins={{
        autoplay: {
          delay: 5000,
          stopOnInteraction: false,
          stopOnMouseEnter: true
        }
      }}
    >
      <CarouselContent>
        {REVIEWS.map((review) => (
          <CarouselItem key={review.name} className='md:basis-1/2 lg:basis-1/3'>
            <Card className='h-90 justify-between rounded-32 border-0 bg-secondary px-6 select-none sm:h-108 sm:px-10'>
              <div className='flex flex-col gap-4 sm:flex-row'>
                <Avatar size='lg'>
                  <AvatarFallback className={cn('font-pixelify-sans text-[24px]', review.color)}>
                    {review.fallback}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Typography as='h3' variant='body-lg'>
                    <IntlText path={review.name} />
                  </Typography>
                  <Typography as='p' variant='body-md'>
                    <IntlText path={review.role} />
                  </Typography>
                </div>
              </div>

              <Typography as='p' className='text-[24px]/8' variant='title-md'>
                <IntlText path={review.text} />
              </Typography>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots activeClassName='bg-action-primary' />
    </Carousel>
  </motion.section>
);
