'use client';

import { Loader2Icon } from 'lucide-react';
import { Controller } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Button, Card, Input, Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

import type { PaymentTaskId } from '../../_constants';

import { PAYMENT_TASKS } from '../../_constants';
import { formatMoney } from '../../_helpers';
import { useCardPayment } from './hooks';

const SAVED_CARD_CLASS_NAME =
  'bg-[linear-gradient(249.7deg,#472187_3.25%,rgba(93,44,178,0.733649)_54.67%,rgba(124,58,237,0.37)_97.32%)]';

interface CardPaymentProps {
  amount: number;
  cardId?: string;
  panmask?: string;
  taskId: PaymentTaskId;
  transactionId: string;
}

const CardPayment = ({ amount, cardId, panmask, taskId, transactionId }: CardPaymentProps) => {
  const intl = useIntl();
  const savedCard = Boolean(cardId);
  const { features, form, functions, state } = useCardPayment({ cardId, savedCard, transactionId });
  const theme = PAYMENT_TASKS[taskId];

  return (
    <section className='mx-auto flex min-h-full w-full flex-col items-center bg-background sm:px-0 sm:pt-14 sm:pb-10'>
      <div className='flex h-20 w-full items-center bg-background px-4 sm:hidden'>
        <Typography as='h1' className='text-[24px]/8 tracking-normal' variant='title-md'>
          <IntlText path='page.payment.card.title' />
        </Typography>
      </div>

      <div className='flex w-full max-w-104.5 flex-col items-start gap-6 px-4 pt-6 pb-4 sm:p-0'>
        <Typography
          as='h1'
          className='hidden text-[24px]/8 tracking-normal sm:block'
          variant='title-md'
        >
          <IntlText path='page.payment.card.title' />
        </Typography>

        <form className='flex w-full flex-col items-start gap-6' onSubmit={functions.onPaySubmit}>
          <div className='flex w-full flex-col items-start gap-4 rounded-24 bg-secondary p-6 sm:bg-transparent sm:p-0'>
            <div className='flex w-full flex-col'>
              <Typography as='p' className='text-foreground/50' variant='caption'>
                <IntlText path='page.payment.serviceLabel' />
              </Typography>
              <div className='flex items-center gap-1'>
                <span className='text-[22px]/[22px]'>{theme.emoji}</span>
                <Typography as='span' className='font-extrabold uppercase' variant='caption'>
                  {theme.title}
                </Typography>
              </div>
            </div>

            <div className='flex w-full flex-col'>
              <Typography as='p' className='text-foreground/50' variant='caption'>
                <IntlText path='page.payment.amountLabel' />
              </Typography>
              <Typography as='p' variant='body-lg'>
                {formatMoney(amount)}
              </Typography>
            </div>

            <div className='flex w-full flex-col'>
              <Typography as='p' className='text-foreground/50' variant='caption'>
                <IntlText path='page.payment.orderNumberLabel' />
              </Typography>
              <Typography as='p' className='break-all' variant='body-sm'>
                {transactionId}
              </Typography>
            </div>
          </div>

          {savedCard && (
            <div className='flex w-full flex-col items-start gap-4'>
              <div className='flex w-full flex-col items-start gap-4'>
                <Typography as='h2' className='font-normal' variant='body-md'>
                  <IntlText path='page.payment.card.savedTitle' />
                </Typography>

                <Controller
                  render={({ field, fieldState }) => (
                    <label className='flex w-full flex-col gap-1' htmlFor='savedCardCvv'>
                      <Typography as='span' variant='caption'>
                        <IntlText path='field.cvv.label' />
                      </Typography>
                      <Input
                        {...features.cardCvv.register({
                          onBlur: field.onBlur
                        })}
                        aria-invalid={fieldState.invalid}
                        autoComplete='cc-csc'
                        className='w-[104px]'
                        id='savedCardCvv'
                        inputMode='numeric'
                        name={field.name}
                        placeholder={intl.formatMessage({ id: 'field.cvv.placeholder' })}
                      />
                      {fieldState.error?.message && (
                        <Typography as='p' className='text-danger' variant='caption'>
                          <IntlText path={fieldState.error.message as MessagePath} />
                        </Typography>
                      )}
                    </label>
                  )}
                  control={form.control}
                  name='cardCvv'
                />
              </div>

              <div
                className={cn(
                  'relative isolate flex h-[230px] w-full flex-col justify-between overflow-hidden rounded-24 p-6 text-white',
                  SAVED_CARD_CLASS_NAME
                )}
              >
                <span className='pointer-events-none absolute top-[33px] left-[15px] z-0 font-pixelify-sans text-[96px]/[82px] font-bold tracking-wide text-white/13 lowercase'>
                  juniors
                </span>
                <span className='pointer-events-none absolute top-[100px] -left-1 z-0 font-pixelify-sans text-[80px]/[82px] font-bold tracking-wide text-white/13 lowercase'>
                  Bootcamp
                </span>

                <div className='relative z-10 flex h-6 items-center'>
                  <span className='inline-flex h-6 items-center rounded-full bg-black px-3 font-pixelify-sans text-[20px]/7 font-bold tracking-wide text-white lowercase'>
                    jB
                  </span>
                </div>

                <div className='relative z-10 flex w-full items-center justify-between gap-4'>
                  <Typography as='span' variant='body-sm'>
                    <IntlText path='page.payment.card.label' />
                  </Typography>
                  <Typography as='span' variant='body-sm'>
                    {panmask}
                  </Typography>
                </div>
              </div>
            </div>
          )}

          {!savedCard && (
            <Card className='w-full items-center gap-4 border-0 bg-secondary p-6'>
              <Controller
                render={({ field, fieldState }) => (
                  <label className='flex w-full flex-col gap-1' htmlFor={field.name}>
                    <Typography as='span' variant='caption'>
                      <IntlText path='field.cardNumber.label' />
                    </Typography>
                    <Input
                      {...features.cardNumber.register({
                        onBlur: field.onBlur
                      })}
                      aria-invalid={fieldState.invalid}
                      autoComplete='cc-number'
                      id={field.name}
                      inputMode='numeric'
                      name={field.name}
                      placeholder={intl.formatMessage({ id: 'field.cardNumber.placeholder' })}
                    />
                    {fieldState.error?.message && (
                      <Typography as='p' className='text-danger' variant='caption'>
                        <IntlText path={fieldState.error.message as MessagePath} />
                      </Typography>
                    )}
                  </label>
                )}
                control={form.control}
                name='cardNumber'
              />

              <div className='grid w-full grid-cols-2 gap-6'>
                <Controller
                  render={({ field, fieldState }) => (
                    <label className='flex min-w-0 flex-col gap-1' htmlFor={field.name}>
                      <Typography as='span' variant='caption'>
                        <IntlText path='field.cardExpiry.label' />
                      </Typography>
                      <Input
                        {...features.cardExpiry.register({
                          onBlur: field.onBlur
                        })}
                        aria-invalid={fieldState.invalid}
                        autoComplete='cc-exp'
                        id={field.name}
                        inputMode='numeric'
                        name={field.name}
                        placeholder={intl.formatMessage({ id: 'field.cardExpiry.placeholder' })}
                      />
                      {fieldState.error?.message && (
                        <Typography as='p' className='text-danger' variant='caption'>
                          <IntlText path={fieldState.error.message as MessagePath} />
                        </Typography>
                      )}
                    </label>
                  )}
                  control={form.control}
                  name='cardExpiry'
                />

                <Controller
                  render={({ field, fieldState }) => (
                    <label className='flex min-w-0 flex-col gap-1' htmlFor={field.name}>
                      <Typography as='span' variant='caption'>
                        <IntlText path='field.cvv.label' />
                      </Typography>
                      <Input
                        {...features.cardCvv.register({
                          onBlur: field.onBlur
                        })}
                        aria-invalid={fieldState.invalid}
                        autoComplete='cc-csc'
                        id={field.name}
                        inputMode='numeric'
                        name={field.name}
                        placeholder={intl.formatMessage({ id: 'field.cvv.placeholder' })}
                      />
                      {fieldState.error?.message && (
                        <Typography as='p' className='text-danger' variant='caption'>
                          <IntlText path={fieldState.error.message as MessagePath} />
                        </Typography>
                      )}
                    </label>
                  )}
                  control={form.control}
                  name='cardCvv'
                />
              </div>
            </Card>
          )}

          <Button aria-busy={state.loading} className='w-full' size='lg' type='submit'>
            {state.loading && <Loader2Icon className='animate-spin' />}
            <IntlText path='page.payment.card.payAmount' values={{ amount: formatMoney(amount) }} />
          </Button>

          <Typography as='p' className='text-foreground/50' variant='caption'>
            <IntlText path='page.payment.card.disclaimer' />
          </Typography>
        </form>
      </div>
    </section>
  );
};

export { CardPayment };
