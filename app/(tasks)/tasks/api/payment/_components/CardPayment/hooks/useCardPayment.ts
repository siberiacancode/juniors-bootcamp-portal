import { zodResolver } from '@hookform/resolvers/zod';
import { useMask } from '@siberiacancode/reactuse';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { usePostTransactionsPayMutation } from '@/generated/api/juniorsbootcamp/hooks.gen';

interface UseCardPaymentParams {
  cardId?: string;
  savedCard: boolean;
  transactionId: string;
}

interface CardPaymentFormValues {
  cardCvv: string;
  cardExpiry: string;
  cardNumber: string;
}

const cardPaymentFormSchema = z.object({
  cardCvv: z.string().trim().min(1, 'error.validation.required'),
  cardExpiry: z.string().trim().min(1, 'error.validation.required'),
  cardNumber: z.string().trim().min(1, 'error.validation.required')
});

const savedCardPaymentFormSchema = z.object({
  cardCvv: z.string().trim().min(1, 'error.validation.required'),
  cardExpiry: z.string(),
  cardNumber: z.string()
});

const useCardPayment = ({ cardId, savedCard, transactionId }: UseCardPaymentParams) => {
  const postTransactionsPayMutation = usePostTransactionsPayMutation();
  const cardPaymentForm = useForm<CardPaymentFormValues>({
    defaultValues: {
      cardCvv: '',
      cardExpiry: '',
      cardNumber: ''
    },
    mode: 'onChange',
    resolver: zodResolver(savedCard ? savedCardPaymentFormSchema : cardPaymentFormSchema)
  });

  const cardNumberMask = useMask('9999 9999 9999 9999', {
    onChangeRaw: (rawValue) =>
      cardPaymentForm.setValue('cardNumber', rawValue, {
        shouldDirty: true,
        shouldValidate: true
      }),
    showMask: 'never'
  });
  const cardExpiryMask = useMask('99/99', {
    onChangeRaw: (rawValue) =>
      cardPaymentForm.setValue('cardExpiry', rawValue, {
        shouldDirty: true,
        shouldValidate: true
      }),
    showMask: 'never'
  });
  const cardCvvMask = useMask('9999', {
    onChangeRaw: (rawValue) =>
      cardPaymentForm.setValue('cardCvv', rawValue, {
        shouldDirty: true,
        shouldValidate: true
      }),
    showMask: 'never'
  });

  const onPaySubmit = cardPaymentForm.handleSubmit(async (values) => {
    const postTransactionsPayResponse = await postTransactionsPayMutation.mutateAsync({
      body: {
        cvv: values.cardCvv,
        method: savedCard ? 'saved_card' : 'new_card',
        transactionId,
        ...(savedCard && { cardId }),
        ...(!savedCard && {
          expireDate: values.cardExpiry,
          pan: values.cardNumber
        })
      }
    });

    if (!postTransactionsPayResponse.data.success)
      throw new Error(postTransactionsPayResponse.data.reason ?? 'Payment failed');
  });

  return {
    features: {
      cardCvv: cardCvvMask,
      cardExpiry: cardExpiryMask,
      cardNumber: cardNumberMask
    },
    form: cardPaymentForm,
    state: {
      loading: postTransactionsPayMutation.isPending
    },
    functions: {
      onPaySubmit
    }
  };
};

export { useCardPayment };
