import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useCartStore } from '@/shared/store/cartStore';
import { cartItemVariants } from '@/shared/utils/animationVariants';
import CartListItem from '../../cart/CartItem';

export default function CartItemsList() {
  const t = useTranslations('checkoutPage.form');

  const { cartItems } = useCartStore();

  return (
    <AnimatePresence mode="wait">
      {cartItems.length > 0 ? (
        <ul
          className="flex flex-col gap-y-3 max-h-[262px] pr-1 mb-5 xl:mb-7 overflow-x-hidden overflow-y-auto scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
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
                className="border border-dark rounded-[8px]"
              >
                <CartListItem cartItem={cartItem} variant="dark" />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.1 },
          }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
          className="text-[16px] xl:text-[18px] font-normal leading-[120%] text-center pt-5 pb-12 text-dark/50"
        >
          {t('emptyCart')}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
