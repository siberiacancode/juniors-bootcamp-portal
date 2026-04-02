import Link from 'next/link';

import { LOCALE } from '@/app/(constants)';
import { getDictionary } from '@/app/(contexts)/intl/helpers/getDictionary';
import { IntlText } from '@/components/intl';
import { Button, Typography } from '@/components/ui';

export const generateMetadata = async () => {
  const messages = await getDictionary(LOCALE);

  return {
    title: messages['page.task.notFound.title'],
    description: messages['page.task.notFound.description']
  };
};

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
