import { Typography } from '@/components/ui';
import { IntlText } from '@/intl';

export const HeroSection = () => (
  <section className='flex flex-col gap-6 sm:gap-8'>
    <Typography pixelify as='h1' variant='display'>
      <IntlText path='page.projects.title' />
    </Typography>
    <Typography as='p' className='max-w-190 text-muted-fg' variant='body-lg'>
      <IntlText path='page.projects.description' />
    </Typography>
  </section>
);
