import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import {
  fadeInAnimation,
  listItemVariants,
  listVariants,
} from '@/shared/utils/animationVariants';
import { Product } from '@/types/product';

interface IdealForProps {
  currentProduct: Product;
}

export default function IdealFor({ currentProduct }: IdealForProps) {
  const t = useTranslations('productPage');

  if (!currentProduct?.idealFor || !currentProduct?.idealFor.length)
    return null;

  const { idealFor } = currentProduct;

  return (
    <div className="pb-20 md:pb-14 xl:pb-[70px]">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ y: 30 })}
        className="mb-6 xl:mb-8 text-[18px] xl:text-[32px] font-medium leading-[120%] uppercase"
      >
        {t('idealFor')}
      </motion.h2>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.4 }}
        variants={listVariants({ staggerChildren: 0.2, delayChildren: 0.2 })}
        className="flex gap-3 flex-wrap"
      >
        {idealFor.map((item, idx) => (
          <motion.li
            viewport={{ once: true, amount: 0.2 }}
            variants={listItemVariants}
            key={idx}
            className="flex items-center justify-center w-[calc(50%-8px)] px-1 py-2 xl:px-3 xl:py-[11px] rounded-full border border-orange 
            text-[10px] xl:text-[14px] font-normal leading-[120%] text-orange text-center"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
