'use client';
import { useTranslations } from 'next-intl';
import { Product } from '@/types/product';
import { useState } from 'react';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Image from 'next/image';

interface FullDescriptionProps {
  currentProduct: Product;
}

export default function FullDescription({
  currentProduct,
}: FullDescriptionProps) {
  const t = useTranslations('productPage');

  const [isShownMore, setIsShownMore] = useState(false);
  const toggleShowMore = () => setIsShownMore(!isShownMore);
  if (!currentProduct?.fullDescription) return null;

  const { fullDescription } = currentProduct;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInAnimation({ x: 30 })}
      onClick={toggleShowMore}
      className="cursor-pointer mb-6 px-4 xl:p-7 py-6 rounded-[6px] xl:rounded-[8px] border border-dark"
    >
      <div className="flex items-center gap-x-[14px]">
        <Image
          src="/images/productPage/productInfo/clipboard.svg"
          alt="clipboard icon"
          width={20}
          height={20}
          className="w-5 xl:w-[25px] h-auto"
        />
        <h3 className="text-[16px] xl:text-[24px] font-medium leading-[120%]">
          {t('fullDescription')}
        </h3>
        <Image
          src="/images/productPage/productInfo/arrow.svg"
          alt="arrow icon"
          width={16}
          height={16}
          className={`w-4 xl:w-[22px] h-auto ml-auto transition duration-500 ease-in-out ${
            isShownMore ? 'rotate-0' : '-rotate-90'
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-700 ${
          isShownMore ? 'max-h-[600px] ease-in' : 'max-h-0 ease-out'
        }`}
      >
        <p
          className={`pt-4 xl:pt-6 xl:pb-3 text-[12px] xl:text-[14px] font-light leading-[120%] text-justify`}
        >
          {fullDescription}
        </p>
      </div>
    </motion.div>
  );
}
