'use client';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import MainButton from '../buttons/MainButton';
import { motion } from 'framer-motion';
import { useCartStore } from '@/shared/store/cartStore';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { CartItem } from '@/types/cartItem';

interface CartTotalProps {
  cartItems: CartItem[];
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function CartTotal({
  setIsPopUpShown,
  cartItems,
}: CartTotalProps) {
  const t = useTranslations('cart');
  const [total, setTotal] = useState(0);
  const { getCartTotal } = useCartStore();

  const sum = getCartTotal();

  useEffect(() => {
    setTotal(sum);
  }, [sum]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30, delay: 1.1 })}
      className="absolute bottom-0 right-0 w-full max-w-[515px] px-8 xl:px-9 py-4 xl:py-[26px] bg-white rounded-tr-[16px] rounded-tl-[16px]"
    >
      <div className="flex flex-row items-center justify-between mb-2 xl:mb-3">
        <p className="text-[12px] xl:text-[16px] font-normal leading-[120%]">
          {t('quantity')}
        </p>
        <p className="text-[12px] xl:text-[20px] font-normal xl:font-medium leading-[120%]">
          {cartItems?.length}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between mb-3 xl:mb-6">
        <p className="text-[12px] xl:text-[16px] font-medium xl:font-normal leading-[120%]">
          {t('total')}
        </p>
        <p className="text-[12px] xl:text-[24px] font-medium leading-[120%]">
          {total}&nbsp;{t('hrn')}
        </p>
      </div>
      <Link href="/checkout" onClick={() => setIsPopUpShown(false)}>
        <MainButton
          disabled={!cartItems?.length}
          className="w-full h-9 xl:h-12"
          textStyles="text-[12px] xl:text-[14px] font-medium"
        >
          {t('button')}
        </MainButton>
      </Link>
    </motion.div>
  );
}
