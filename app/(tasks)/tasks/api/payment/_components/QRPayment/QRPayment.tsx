'use client';

import { CheckIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { QRCodeSVG } from 'qrcode.react';

import { Button, Typography } from '@/components/ui';
import { useGetTransactionByIdQuery } from '@/generated/api/juniorsbootcamp/hooks.gen';
import { IntlText } from '@/intl';

import type { PaymentTaskId } from '../../_constants';

import { PAYMENT_TASKS } from '../../_constants';
import { formatMoney } from '../../_helpers';
import { QrMascotIcon } from './QrMascotIcon';

interface QRPaymentProps {
  amount: number;
  backUrl: string;
  taskId: PaymentTaskId;
  transactionId: string;
}

const QRPaymentContent = ({ amount, taskId, transactionId }: QRPaymentProps) => {
  const service = PAYMENT_TASKS[taskId];
  const getTransactionByIdQuery = useGetTransactionByIdQuery({
    params: {
      refetchInterval: (query) => {
        const transaction = query.state.data?.data.transaction;
        return transaction?.status === 'paid' && transaction.accessToken ? false : 2000;
      },
      refetchIntervalInBackground: false
    },
    request: {
      path: { id: transactionId }
    }
  });

  const transaction = getTransactionByIdQuery.data?.data.transaction;

  if (transaction?.status === 'paid' && transaction.accessToken)
    return (
      <section className='mx-auto flex min-h-full w-full flex-col items-center bg-background px-4 py-6 sm:bg-secondary sm:px-[92px] sm:py-16'>
        <div className='flex w-full max-w-[1256px] flex-col items-center'>
          <div className='flex w-full max-w-104.5 flex-col items-start gap-6 bg-background sm:bg-transparent'>
            <div className='flex w-full items-start gap-2'>
              <span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white'>
                <CheckIcon className='size-5' strokeWidth={3} />
              </span>
              <Typography as='h1' className='text-[24px]/8 tracking-normal' variant='title-md'>
                <IntlText path='page.payment.result.title' />
              </Typography>
            </div>

            <div className='flex w-full flex-col items-start gap-6'>
              <div className='flex w-full flex-col items-start gap-4'>
                <div className='flex w-full flex-col'>
                  <Typography as='p' className='text-muted-fg' variant='caption'>
                    <IntlText path='page.payment.serviceLabel' />
                  </Typography>
                  <div className='flex items-center gap-1'>
                    <span className='text-[22px]/[22px]'>{service.emoji}</span>
                    <Typography as='span' className='font-extrabold uppercase' variant='caption'>
                      {service.title}
                    </Typography>
                  </div>
                </div>

                <div className='flex w-full flex-col'>
                  <Typography as='p' className='text-muted-fg' variant='caption'>
                    <IntlText path='page.payment.amountLabel' />
                  </Typography>
                  <Typography as='p' variant='body-lg'>
                    {formatMoney(amount)}
                  </Typography>
                </div>

                <div className='flex w-full flex-col'>
                  <Typography as='p' className='text-muted-fg' variant='caption'>
                    <IntlText path='page.payment.orderNumberLabel' />
                  </Typography>
                  <Typography as='p' className='break-all' variant='body-sm'>
                    {transactionId}
                  </Typography>
                </div>
              </div>

              <Button className='w-full' size='lg' type='button'>
                <IntlText path='button.downloadReceipt' />
              </Button>

              <Typography as='p' className='text-muted-fg' variant='caption'>
                <IntlText path='page.payment.disclaimer' />
              </Typography>
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section className='mx-auto flex min-h-full w-full flex-col items-center bg-background px-4 py-6 sm:bg-secondary sm:px-[92px] sm:py-12'>
      <div className='flex w-full max-w-[1256px] flex-col items-center'>
        <div className='flex w-full max-w-90 flex-col items-center gap-6 bg-background sm:rounded-24 sm:p-10'>
          <Typography
            as='h1'
            className='w-full max-w-70 text-[24px]/8 tracking-normal'
            variant='title-md'
          >
            <IntlText path='page.payment.qr.title' />
          </Typography>

          <div className='flex w-full max-w-70 flex-col items-center gap-6'>
            <div className='flex w-full flex-col items-start gap-4'>
              <div className='flex w-full flex-col'>
                <Typography as='p' className='text-muted-fg' variant='caption'>
                  <IntlText path='page.payment.amountLabel' />
                </Typography>
                <Typography as='p' variant='body-lg'>
                  {formatMoney(amount)}
                </Typography>
              </div>

              <div className='flex w-full flex-col'>
                <Typography as='p' className='text-muted-fg' variant='caption'>
                  <IntlText path='page.payment.serviceLabel' />
                </Typography>
                <div className='flex items-center gap-1'>
                  <span className='text-[22px]/[22px]'>{service.emoji}</span>
                  <Typography as='span' className='font-extrabold uppercase' variant='caption'>
                    {service.title}
                  </Typography>
                </div>
              </div>

              <div className='flex w-full flex-col'>
                <Typography as='p' className='text-muted-fg' variant='caption'>
                  <IntlText path='page.payment.orderNumberLabel' />
                </Typography>
                <Typography as='p' className='break-all' variant='body-sm'>
                  {transactionId}
                </Typography>
              </div>

              <Typography as='p' variant='body-sm'>
                <IntlText path='page.payment.qr.description' />
              </Typography>
            </div>

            <div
              aria-hidden='true'
              className='relative size-70 overflow-hidden bg-white leading-none'
            >
              <QRCodeSVG
                imageSettings={{
                  excavate: true,
                  height: 80,
                  src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
                  width: 80
                }}
                value={`${window.location.origin}/tasks/api/payment/bank?transactionId=${encodeURIComponent(
                  transactionId
                )}`}
                bgColor='#FFFFFF'
                className='block size-full'
                fgColor='#000000'
                level='H'
                marginSize={0}
                size={280}
              />

              <div className='absolute top-1/2 left-1/2 flex size-20 -translate-1/2 items-center justify-center bg-white'>
                <QrMascotIcon className='h-[65px] w-[73px]' />
              </div>
            </div>

            <Typography as='p' className='w-70 text-muted-fg' variant='caption'>
              <IntlText path='page.payment.disclaimer' />
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

const QRPayment = dynamic(async () => QRPaymentContent, { ssr: false });

export { QRPayment };
