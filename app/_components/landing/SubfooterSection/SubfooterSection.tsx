import * as motion from 'motion/react-client';

import { MatrixGrid } from '@/components/common';
import { TelegramIcon } from '@/components/icons';
import { Card, Marquee, Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

import { MARQUEE_TECHNOLOGIES, PROJECT_CARD_COLORS } from './constants';

export const SubfooterSection = () => (
  <section className='mb-18 sm:mb-22'>
    <Marquee className='py-10 select-none' speed={60}>
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
      {PROJECT_CARD_COLORS.map(({ background, icon, key }, index) => (
        <Card
          asChild
          key={key}
          className={cn('flex-1 gap-10 bg-[#FBE2FF] px-6 sm:px-10', background)}
        >
          <motion.a
            href='#'
            initial={{ opacity: 0, y: '20%' }}
            rel='noopener noreferrer'
            target='_blank'
            transition={{ delay: (index + 1) * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className='flex items-center justify-between gap-4'>
              <Typography as='span' variant='body-lg'>
                <IntlText path='page.home.projectCard.title' />
              </Typography>

              <TelegramIcon className='size-6' />
            </div>
            <MatrixGrid
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
          </motion.a>
        </Card>
      ))}
    </div>
  </section>
);
