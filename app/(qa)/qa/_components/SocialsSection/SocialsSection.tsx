import * as motion from 'motion/react-client';
import Link from 'next/link';

import { TelegramIcon } from '@/components/icons';
import { MascotHappyIllustration } from '@/components/illustrations';
import { Card, IconButton, Typography } from '@/components/ui';
import { LINKS } from '@/constants';
import { IntlText } from '@/intl';

export const SocialsSection = () => (
  <section className='mb-22 flex flex-col gap-8 sm:gap-10'>
    <Typography
      pixelify
      as='h2'
      className='text-[34px]/[42px] sm:text-[56px]/none lg:text-[88px]/24'
      variant='display'
    >
      <IntlText path='page.qa.finalCards.title' />
    </Typography>

    <div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_394px]'>
      <Card className='min-h-142 justify-end rounded-24 border-0 bg-(--color-olive-100) px-6 py-10 text-action-primary sm:px-8 lg:min-h-107'>
        <div className='flex max-w-213.5 flex-col gap-4'>
          <Typography as='p' className='font-extrabold' variant='caption'>
            <IntlText path='page.qa.finalCards.manual.eyebrow' />
          </Typography>
          <Typography as='h3' className='text-[32px]/10 sm:text-[48px]/12' variant='heading-md'>
            <IntlText path='page.qa.finalCards.manual.title' />
          </Typography>
        </div>
      </Card>

      <Card className='relative min-h-91 overflow-hidden rounded-24 border-0 bg-(--color-olive-100) px-6 py-10 text-action-primary sm:px-8 lg:min-h-107'>
        <div className='relative z-10 flex flex-col gap-1'>
          <Typography as='p' className='font-extrabold' variant='caption'>
            <IntlText path='page.qa.finalCards.community.eyebrow' />
          </Typography>
          <Typography as='h3' className='text-[32px]/10 sm:text-[48px]/12' variant='heading-md'>
            <IntlText path='page.qa.finalCards.community.title' />
          </Typography>
        </div>

        <motion.div
          aria-hidden
          transition={{
            delay: 0.25,
            type: 'spring',
            stiffness: 130,
            damping: 18,
            mass: 0.8
          }}
          className='pointer-events-none absolute -bottom-18 left-1/2 h-82 w-auto -translate-x-1/2 select-none lg:-bottom-17 lg:h-68'
          initial={{ opacity: 1, scale: 0.88, y: 125 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1.2, y: 0 }}
        >
          <MascotHappyIllustration className='h-full w-auto' />
        </motion.div>

        <IconButton
          asChild
          rounded
          className='absolute right-4 bottom-4 z-10 bg-background text-action-primary hover:bg-background sm:right-6 sm:bottom-6'
        >
          <Link href={LINKS.SOCIAL.TELEGRAM} rel='noopener noreferrer' target='_blank'>
            <TelegramIcon className='size-7 dark:fill-(--color-olive-100)' />
          </Link>
        </IconButton>
      </Card>
    </div>
  </section>
);
