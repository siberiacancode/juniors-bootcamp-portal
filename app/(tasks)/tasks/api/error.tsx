'use client';

import { Empty, EmptyDescription, EmptyTitle } from '@/components/ui';
import { IntlText } from '@/intl';

const Error = () => (
  <main className='fixed inset-0 z-100 flex items-center justify-center bg-background p-6'>
    <Empty className='max-w-150'>
      <EmptyTitle>
        <IntlText path='page.payment.validationError' />
      </EmptyTitle>
      <EmptyDescription>
        <IntlText path='page.payment.validationErrorDescription' />
      </EmptyDescription>
    </Empty>
  </main>
);

export default Error;
