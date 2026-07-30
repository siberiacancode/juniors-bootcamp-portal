'use client';

import { CheckIcon, Loader2Icon } from 'lucide-react';
import { useState } from 'react';

import { Button, Typography } from '@/components/ui';
import { usePostTransactionByIdPayQrMutation } from '@/generated/api/juniorsbootcamp/hooks.gen';
import { IntlText } from '@/intl';

import type { PaymentTaskId } from '../../../payment/_constants';

import { PAYMENT_TASKS } from '../../../payment/_constants';
import { formatMoney } from '../../../payment/_helpers';
import { BankMascotIcon } from './BankMascotIcon';

interface BankPaymentProps {
  amount: number;
  taskId: PaymentTaskId;
  transactionId: string;
}

const BankLogo = () => (
  <div className='flex h-6 w-12 items-center justify-center rounded-full bg-foreground px-3 py-0.5 text-background'>
    <span className='font-pixelify-sans text-[20px]/7 font-bold tracking-wide lowercase'>jB</span>
  </div>
);

const BankPayment = ({ amount, taskId, transactionId }: BankPaymentProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const postTransactionByIdPayQrMutation = usePostTransactionByIdPayQrMutation();
  const service = PAYMENT_TASKS[taskId];
  const onPayClick = async () => {
    const postTransactionByIdPayQrResponse = await postTransactionByIdPayQrMutation.mutateAsync({
      path: { id: transactionId }
    });

    if (!postTransactionByIdPayQrResponse.data.success)
      throw new Error(postTransactionByIdPayQrResponse.data.reason ?? 'Payment failed');

    const { accessToken } = postTransactionByIdPayQrResponse.data.transaction;

    if (accessToken) setAccessToken(accessToken);
  };

  if (accessToken)
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
    <section className='mx-auto flex min-h-full w-full flex-col items-center bg-background sm:px-[92px] sm:py-12'>
      <div className='flex w-full max-w-[1256px] flex-col items-center'>
        <div className='flex w-full max-w-90 flex-col items-start gap-4'>
          <header className='hidden w-full items-center gap-2 sm:flex'>
            <BankLogo />
            <Typography as='h1' className='text-[24px]/8 tracking-normal' variant='title-md'>
              <IntlText path='page.payment.bank.title' />
            </Typography>
          </header>

          <header className='flex h-20 w-full flex-col bg-background sm:hidden'>
            <div className='flex h-14 w-full items-center gap-2 px-4'>
              <BankLogo />
              <Typography as='h1' className='text-[24px]/8 tracking-normal' variant='title-md'>
                <IntlText path='page.payment.bank.title' />
              </Typography>
            </div>
          </header>

          <div className='flex w-full flex-col items-center gap-10'>
            <div className='relative h-[171px] w-full overflow-hidden rounded-20 bg-[#F3F3F3]'>
              <BankMascotIcon
                aria-hidden='true'
                className='absolute bottom-[-2px] left-1/2 h-[136px] w-[123px] -translate-x-1/2'
              />
            </div>

            <div className='flex w-full flex-1 flex-col justify-between gap-16 sm:gap-16'>
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
              </div>

              <div className='flex w-full flex-col items-start gap-6'>
                <Button
                  aria-busy={postTransactionByIdPayQrMutation.isPending}
                  className='w-full'
                  size='lg'
                  type='button'
                  onClick={onPayClick}
                >
                  {postTransactionByIdPayQrMutation.isPending && (
                    <Loader2Icon className='animate-spin' />
                  )}
                  <IntlText
                    path='page.payment.bank.payAmount'
                    values={{ amount: formatMoney(amount) }}
                  />
                </Button>

                <Typography as='p' className='text-muted-fg' variant='caption'>
                  <IntlText path='page.payment.disclaimer' />
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { BankPayment };
