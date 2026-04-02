import Link from 'next/link';

import { Button, Typography } from '@/components/ui';
import { intl, IntlText } from '@/intl';

export const generateMetadata = () => ({
  title: intl.formatMessage({ id: 'page.task.notFound.title' }),
  description: intl.formatMessage({ id: 'page.task.notFound.description' })
});

const NotFound = () => (
  <main className='flex flex-1 items-center justify-center'>
    <div className='flex flex-col items-center gap-6'>
      <Typography as='h2' variant='heading-md'>
        <IntlText path='page.task.notFound.title' />
      </Typography>
      <Typography as='p'>
        <IntlText path='page.task.notFound.description' />
      </Typography>
      <Button asChild>
        <Link href='/tasks'>
          <IntlText path='page.task.notFound.link' />
        </Link>
      </Button>
    </div>
  </main>
);

export default NotFound;
