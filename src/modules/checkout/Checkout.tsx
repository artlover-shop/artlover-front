'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import TabMenu from './TabMenu';
import CheckoutFormWithNotifications from './CheckoutFormWithNotifications';
import Loader from '@/shared/components/loader/Loader';

export default function Checkout() {
  const t = useTranslations('checkoutPage');

  const router = useRouter();
  const searchParams = useSearchParams();
  const menu = searchParams.get('delivery') || 'ukraine';
  const [activeTab, setActiveTab] = useState(menu);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (!params.get('delivery')) {
      params.set('delivery', 'ukraine');
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  return (
    <section className="xl:pt-5 pb-20 xl:pb-[140px]">
      {isClient ? (
        <Container>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ y: 30 })}
            className="mb-5 xl:mb-7 text-[18px] xl:text-[32px] font-semibold leading-[140%] xl:leading-[120%] uppercase text-center"
          >
            {t('title')}
          </motion.h1>
          <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
          <CheckoutFormWithNotifications activeTab={activeTab} />
        </Container>
      ) : (
        <Loader />
      )}
    </section>
  );
}
