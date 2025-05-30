'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import * as motion from 'motion/react-client';
import CartModal from '@/shared/components/cart/Cart';
import Backdrop from '@/shared/components/backdrop/Backdrop';
import CartIcon from '@/shared/components/icons/CartIcon';

const FooterContacts = () => {
  const [isCartModalOpened, setIsCartModalOpened] = useState(false);
  const t = useTranslations('footer');

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ y: 30, delay: 0.4 })}
      >
        <a
          href="tel:+380963931988"
          className="text-orange text-[14px] xl:text-[16px] font-semibold mb-[8px] xl:hover:brightness-125 focus-visible:brightness-125 transition duration-300 ease-in-out"
        >
          +380 (96) 393 19 88
        </a>
        <p className="text-white text-[12px] xl:text-[14px] mb-[32px]">
          {t('free')}
        </p>
        <p className="text-white text-[14px] xl:text-[16px] font-semibold mb-[8px]">
          Пн-Пт: 09:00-00:00
        </p>
        <p className="text-white text-[14px] xl:text-[16px] font-semibold mb-[32px] xl:mb[40px]">
          Сб-Нд: 10:00-20:00
        </p>
        <button
          type="button"
          onClick={() => setIsCartModalOpened(true)}
          className="hidden xl:flex cursor-pointer bg-white w-[167px] py-[8px] px-[14px] rounded-[20px] gap-[25px] items-center 
          xl:hover:bg-orange xl:hover:text-white focus-visible:bg-orange focus-visible:text-white transition duration-300 ease-in-out"
        >
          <CartIcon className="w-6 h-auto" strokeWidth="1" />
          <span className="text-[14px] font-semibold">{t('button')}</span>
        </button>
      </motion.div>
      <CartModal
        isPopUpShown={isCartModalOpened}
        setIsPopUpShown={setIsCartModalOpened}
      />
      <Backdrop
        isVisible={isCartModalOpened}
        onClick={() => setIsCartModalOpened(false)}
      />
    </>
  );
};

export default FooterContacts;
