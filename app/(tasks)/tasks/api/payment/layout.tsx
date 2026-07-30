import type { ReactNode } from 'react';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

interface PaymentLayoutProps {
  children: ReactNode;
}

const PaymentLayout = ({ children }: PaymentLayoutProps) => (
  <main className='fixed inset-0 z-100 overflow-y-auto bg-background'>{children}</main>
);

export default PaymentLayout;
