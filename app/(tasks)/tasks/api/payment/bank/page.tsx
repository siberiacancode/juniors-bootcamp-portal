import type { Metadata } from 'next';

import { z } from 'zod';

import { getTransactionById } from '@/generated/api/juniorsbootcamp/requests.gen';
import { intl } from '@/intl/server';

import { BankPayment } from '../_components/BankPayment';

export const metadata: Metadata = {
  title: intl.formatMessage({ id: 'page.payment.bank.metadata.title' }),
  description: intl.formatMessage({ id: 'page.payment.bank.metadata.description' })
};

const bankPaymentSearchSchema = z.object({
  transactionId: z.string().trim().min(1)
});

type BankPaymentSearchParams = z.input<typeof bankPaymentSearchSchema>;

interface BankPaymentPageProps {
  searchParams: Promise<BankPaymentSearchParams>;
}

const BankPaymentPage = async ({ searchParams }: BankPaymentPageProps) => {
  const paymentParamsResult = bankPaymentSearchSchema.safeParse(await searchParams);

  if (!paymentParamsResult.success) throw new Error('Payment params validation failed');

  const paymentParams = paymentParamsResult.data;
  const getTransactionByIdResponse = await getTransactionById({
    path: { id: paymentParams.transactionId }
  });

  if (!getTransactionByIdResponse.data.success)
    throw new Error('Payment transaction request failed');

  const { transaction } = getTransactionByIdResponse.data;

  return (
    <BankPayment
      amount={transaction.amount}
      taskId={transaction.orderType}
      transactionId={transaction._id}
    />
  );
};

export default BankPaymentPage;
