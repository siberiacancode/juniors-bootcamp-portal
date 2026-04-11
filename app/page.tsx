import { ChevronRightIcon, RocketIcon } from 'lucide-react';
import Link from 'next/link';

import { MatrixGridIcon, TelegramIcon, UnicStarIcon } from '@/components/icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  Marquee,
  Typography
} from '@/components/ui';
import { IntlText } from '@/intl';
import { intl } from '@/intl/server';
import { cn } from '@/lib/utils';

import { GradientBlur, OrbitingStack } from './_components';
import {
  FAQ_ITEMS,
  GUIDES,
  LEVELS,
  MARQUEE_TECHNOLOGIES,
  PROJECT_CARD_COLORS,
  REVIEWS
} from './_constants';

export const generateMetadata = () => ({
  title: intl.formatMessage({ id: 'page.home.metadata.title' }),
  description: intl.formatMessage({ id: 'page.home.metadata.description' })
});

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
          asChild
          className={cn(
            'relative h-16 w-full text-[32px]/12 md:w-5/12',
            'after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:border-2 after:border-primary after:bg-transparent',
            'after:-translate-x-1.5 after:translate-y-1.5 after:transition hover:after:translate-0'
          )}
          size='lg'
        >
          <Link href='/tasks'>
            <IntlText path='button.start' />
          </Link>
        </Button>
      </section>

      <section className='grid grid-cols-1 gap-4 lg:h-155 lg:grid-flow-col lg:grid-cols-12 lg:grid-rows-12'>
        <Card className='relative items-stretch overflow-hidden bg-(--color-violet-100) px-6 lg:col-span-5 lg:row-span-7 dark:bg-(--color-violet-900)/70'>
          <div className='z-1 flex flex-col gap-1'>
            <Typography variant='heading-lg'>Hello, user</Typography>
            <Typography as='p' variant='body-md'>
              <IntlText path='page.home.section.bento.col.1.card.up.text' />
            </Typography>
          </div>

          <div className='relative mb-6 flex-1 text-(--color-violet-500)'>
            <UnicStarIcon
              className='absolute -bottom-33 -left-6 size-33 animate-[spin_5s_linear_infinite] paused hover:running sm:-bottom-27 sm:left-0 sm:size-42'
              viewBox='4 4 24 24'
            />

            <UnicStarIcon
              className='absolute -right-8 -bottom-6 size-18 animate-[spin_3s_linear_infinite] paused hover:running sm:left-4/9 sm:size-26'
              viewBox='4 4 24 24'
            />
          </div>

          <Button asChild className='z-1 w-full self-end sm:max-w-48'>
            <Link href='/tasks'>Start</Link>
          </Button>
        </Card>

        <Card className='justify-end overflow-hidden px-6 lg:col-span-5 lg:row-span-5'>
          <div className='relative min-h-10 flex-1'>
            <OrbitingStack className='absolute top-1/2 left-1/2 -translate-1/2 mask-b-from-50% mask-b-to-65% sm:mask-b-to-80%' />
          </div>

          <div className='z-1 flex flex-col gap-1'>
            <Typography variant='title-md'>
              <IntlText path='page.home.section.bento.col.1.card.down.title' />
            </Typography>
            <Typography as='p' className='text-muted-fg' variant='caption'>
              <IntlText path='page.home.section.bento.col.1.card.down.description' />
            </Typography>
          </div>
        </Card>

        <Card className='gap-6 px-6 lg:col-span-3 lg:row-span-5'>
          <div className='flex flex-col gap-1'>
            <Typography variant='title-md'>
              <IntlText path='page.home.section.bento.col.2.card.up.title' />
            </Typography>
            <Typography as='p' className='text-muted-fg' variant='caption'>
              <IntlText path='page.home.section.bento.col.2.card.up.description' />
            </Typography>
          </div>

          <div className='grid h-full grid-cols-3 gap-4 select-none'>
            {LEVELS.map(({ color, name, icon: Icon }) => (
              <div
                key={name}
                className={cn(
                  'flex flex-col items-center justify-center rounded-8 border border-border-hard py-5 font-pixelify-sans text-[16px]/6 font-normal tracking-wide transition hover:scale-[1.1] lg:py-0',
                  color
                )}
              >
                <Icon />
                {name}
              </div>
            ))}
          </div>
        </Card>

        <Card className='relative overflow-hidden px-6 lg:col-span-3 lg:row-span-7'>
          <GradientBlur className='absolute -inset-x-1 -top-4' />

          <div className='z-1 min-h-40 flex-1 lg:min-h-0'>
            <div className='flex size-8 items-center justify-center rounded-full border border-white bg-white/40'>
              <RocketIcon className='size-4' stroke='black' />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <Typography variant='title-md'>
              <IntlText path='page.home.section.bento.col.2.card.down.title' />
            </Typography>
            <Typography as='p' className='text-muted-fg' variant='caption'>
              <IntlText path='page.home.section.bento.col.2.card.down.description' />
            </Typography>
          </div>
        </Card>

        <Card className='justify-between lg:col-span-4 lg:row-span-6'>
          <div className='relative h-40 overflow-hidden'>
            <div className='absolute top-1/2 left-1/2 flex w-160 -translate-1/2 flex-wrap justify-center gap-2 select-none'>
              {GUIDES.map(({ background, color, icon: Icon, label }, index) => (
                <div
                  key={label}
                  className={cn(
                    'flex flex-col items-center justify-center gap-2 rounded-14 border border-border-hard p-2',
                    background
                  )}
                >
                  <span className='text-[20px]/7 font-medium'>{`0${index + 1}`}</span>
                  <div className='flex items-center gap-1 rounded-full bg-background px-2 text-nowrap'>
                    <Icon className={cn('size-3', color)} />
                    <span className='text-[10px]/4.5 font-semibold'>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-2 px-6'>
            <Typography variant='title-md'>
              <IntlText path='page.home.section.bento.col.3.card.up.title' />
            </Typography>
            <Typography as='p' className='text-muted-fg' variant='caption'>
              <IntlText path='page.home.section.bento.col.3.card.up.description' />
            </Typography>
          </div>
        </Card>

        <Card className='relative items-center justify-center px-6 lg:col-span-4 lg:row-span-6'>
          <MatrixGridIcon
            matrix={[
              [0, 1],
              [0, 1],
              [1, 1]
            ]}
            className='text-(--color-orange-400)/50 blur-md'
            size={70}
          />
          <Typography className='absolute top-1/2 left-1/2 -translate-1/2' variant='title-md'>
            Coming soon!
          </Typography>
        </Card>
      </section>

      <section className='content-container flex flex-col gap-8 sm:gap-10'>
        <Typography pixelify as='h2' variant='display'>
          <IntlText path='page.home.section.reviewsAboutUs.title' />
        </Typography>

        <Carousel
          options={{
            loop: true,
            align: 'start'
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
      </section>

      {/* <section className='content-container flex flex-col gap-8 sm:gap-10'>
        <Typography pixelify as='h2' variant='display'>
          <IntlText path='page.home.section.studentsProjects.title' />
        </Typography>
      </section> */}

      <section className='content-container flex flex-col gap-8 sm:gap-10'>
        <Typography pixelify as='h2' variant='display'>
          <IntlText path='page.home.section.faq.title' />
        </Typography>

        <Accordion collapsible defaultValue={FAQ_ITEMS[0].question} type='single'>
          {FAQ_ITEMS.map(({ answer, question }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger>
                <IntlText path={question} />
              </AccordionTrigger>
              <AccordionContent>
                <IntlText path={answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>

    <div className='mb-18 sm:mb-22'>
      <Marquee className='py-10 select-none'>
        {MARQUEE_TECHNOLOGIES.map(({ icon, name }) => (
          <div key={name} className='flex items-center gap-6'>
            {icon}
            <Typography as='span' variant='heading-2xl'>
              {name}
            </Typography>
          </div>
        ))}
      </Marquee>

      <div className='content-container flex flex-col gap-4 md:flex-row'>
        {PROJECT_CARD_COLORS.map(({ background, icon }, index) => (
          <Card
            asChild
            key={index}
            className={cn('flex-1 gap-10 bg-[#FBE2FF] px-6 sm:px-10', background)}
          >
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
                className={icon}
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
