import { Suspense } from 'react';
import Loader from '@/shared/components/loader/Loader';
import Checkout from '@/modules/checkout/Checkout';

export default function CheckoutPage() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Checkout />
      </Suspense>
    </>
  );
}
