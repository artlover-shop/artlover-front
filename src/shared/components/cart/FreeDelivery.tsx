import { useCartStore } from '@/shared/store/cartStore';
import { Progress } from '@heroui/react';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

const FREE_DELIVERY_SUM = 2000;

export default function FreeDelivery() {
  const t = useTranslations('cart');
  const { getCartTotal } = useCartStore();
  const total = getCartTotal();

  const needToOrderSum =
    FREE_DELIVERY_SUM >= total ? FREE_DELIVERY_SUM - total : 0;

  const percent = Math.round((total / FREE_DELIVERY_SUM) * 100);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInAnimation({ y: 30, delay: 0.9 })}
      className="py-[23px]"
    >
      <div className="flex items-center justify-between mb-3 text-white">
        <p className="max-w-[160px] xl:max-w-full text-[12px] xl:text-[14px] font-normal leading-[120%]">
          {t('freeDelivery')}
        </p>
        <p className="text-[12px] xl:text-[16px] font-normal leading-[120%]">
          {needToOrderSum} {t('hrn')}
        </p>
      </div>
      <Progress
        aria-label="Free delivery"
        classNames={{
          base: 'h-1 xl:h-3',
          indicator: 'bg-orange',
          track: 'bg-white',
        }}
        value={percent}
      />
    </motion.div>
  );
}
