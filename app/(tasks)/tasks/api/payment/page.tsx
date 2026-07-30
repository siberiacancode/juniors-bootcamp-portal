import type { Metadata } from 'next';

import { z } from 'zod';

import { getTransactionById } from '@/generated/api/juniorsbootcamp/requests.gen';
import { intl } from '@/intl/server';

import { CardPayment, QRPayment } from './_components';

export const metadata: Metadata = {
  title: intl.formatMessage({ id: 'page.payment.metadata.title' }),
  description: intl.formatMessage({ id: 'page.payment.metadata.description' })
};

const paymentSearchSchema = z
  .object({
    backUrl: z.string().trim().min(1),
    cardId: z.string().trim().min(1).optional(),
    panmask: z.string().trim().min(1).optional(),
    transactionId: z.string().trim().min(1),
    type: z.enum(['card', 'qr'])
  })
  .superRefine((params, context) => {
    if (params.cardId && !params.panmask)
      context.addIssue({
        code: 'custom',
        message: 'panmask is required for saved card',
        path: ['panmask']
      });
  });

type PaymentSearchParams = z.input<typeof paymentSearchSchema>;

interface PaymentPageProps {
  searchParams: Promise<PaymentSearchParams>;
}

const PaymentPage = async ({ searchParams }: PaymentPageProps) => {
  const paymentPageSearchParamsResult = paymentSearchSchema.safeParse(await searchParams);

  if (!paymentPageSearchParamsResult.success) throw new Error('Payment params validation failed');

  const paymentPageSearchParams = paymentPageSearchParamsResult.data;
  const getTransactionByIdResponse = await getTransactionById({
    path: { id: paymentPageSearchParams.transactionId }
  });

  if (!getTransactionByIdResponse.data.success)
    throw new Error('Payment transaction request failed');

  const transaction = getTransactionByIdResponse.data.transaction;

  switch (paymentPageSearchParams.type) {
    case 'card':
      return (
        <main className='fixed inset-0 z-100 overflow-y-auto bg-background'>
          <CardPayment
            amount={transaction.amount}
            backUrl={paymentPageSearchParams.backUrl}
            cardId={paymentPageSearchParams.cardId}
            panmask={paymentPageSearchParams.panmask}
            taskId={transaction.orderType}
            transactionId={transaction._id}
          />
        </main>
      );

    case 'qr':
      return (
        <main className='fixed inset-0 z-100 overflow-y-auto bg-background'>
          <QRPayment
            amount={transaction.amount}
            backUrl={paymentPageSearchParams.backUrl}
            taskId={transaction.orderType}
            transactionId={transaction._id}
          />
        </main>
      );
  }
};

export default PaymentPage;
