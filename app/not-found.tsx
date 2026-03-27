import Link from 'next/link';

import { IntlText } from '@/components/intl';
import { Button, Typography } from '@/components/ui';

const NotFound = () => (
  <main className='flex flex-1 flex-col items-center justify-center gap-6 text-center'>
    <Typography as='h1' variant='heading-md'>
      <IntlText path='notFound.title' />
    </Typography>
    <Button asChild variant='ghost'>
      <Link href='/'>
        <IntlText path='notFound.backHome' />
      </Link>
    </Button>
  </main>
);

export default NotFound;
