'use client';

import { ArrowRightIcon } from 'lucide-react';
import { useIntl } from 'react-intl';
import ReactMarkdown from 'react-markdown';

import { IntlText } from '@/components/intl';
import { Button, Link } from '@/components/ui';

export const AuthenticationSection = () => {
  const intl = useIntl();

  return (
    <section className='flex flex-col gap-5 rounded-lg border bg-card p-6'>
      <div className='flex items-center justify-between'>
        <h2 className='font-pixelify-sans text-5xl font-bold'>
          <IntlText path='page.tasksApi.authentication.title' />
        </h2>

        <Button asChild variant='surface'>
          <Link href='/api/otps'>
            <IntlText path='link.otpCodes' />
            <ArrowRightIcon className='size-4' />
          </Link>
        </Button>
      </div>

      <div className='prose prose-sm max-w-none text-lg text-pretty dark:prose-invert'>
        <ReactMarkdown>
          {intl.formatMessage({ id: 'page.tasksApi.authentication.description' })}
        </ReactMarkdown>
      </div>
    </section>
  );
};
