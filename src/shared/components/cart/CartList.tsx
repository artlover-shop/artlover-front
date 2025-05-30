import { Dispatch, SetStateAction } from 'react';
import CartListItem from './CartItem';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useCartStore } from '@/shared/store/cartStore';
import {
  fadeInAnimation,
  cartItemVariants,
} from '@/shared/utils/animationVariants';

interface CartListProps {
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function CartList({ setIsPopUpShown }: CartListProps) {
  const t = useTranslations('cart');
  const { cartItems } = useCartStore();

  return (
    <AnimatePresence mode="wait">
      {cartItems.length > 0 ? (
        <motion.ul
          layout
          initial="hidden"
          animate="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ y: 30, delay: 0.9, duration: 1 })}
          className="flex flex-col gap-y-4 h-[calc(100dvh-320px)] xl:h-[calc(100dvh-390px)] pr-1 overflow-x-hidden overflow-y-auto scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent"
        >
          <AnimatePresence mode="sync">
            {cartItems.map(cartItem => (
              <motion.li
                variants={cartItemVariants}
                key={cartItem.id}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="border border-white rounded-[8px]"
              >
                <CartListItem
                  cartItem={cartItem}
                  setIsPopUpShown={setIsPopUpShown}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.4 },
          }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
          className="h-[calc(100dvh-320px)] xl:h-[calc(100dvh-390px)] text-[16px] xl:text-[18px] font-normal leading-[120%] text-center py-[140px] text-white/50"
        >
          {t('empty')}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
