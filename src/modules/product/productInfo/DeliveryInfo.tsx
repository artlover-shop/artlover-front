'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function DeliveryInfo() {
  const t = useTranslations('productPage');

  const [isShownMore, setIsShownMore] = useState(false);
  const toggleShowMore = () => setIsShownMore(!isShownMore);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInAnimation({ x: 30, delay: 0.2 })}
      onClick={toggleShowMore}
      className="cursor-pointer mb-6 xl:mb-16 px-4 xl:p-7 py-6 rounded-[6px] xl:rounded-[8px] border border-dark"
    >
      <div className="flex items-center">
        <Image
          src="/images/productPage/productInfo/globe.svg"
          alt="clipboard icon"
          width={20}
          height={20}
          className="w-5 xl:w-[25px] h-auto"
        />
        <h3 className="ml-[14px] text-[16px] xl:text-[24px] font-medium leading-[120%]">
          {t('delivery.title')}
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
          isShownMore ? 'max-h-[1000px] ease-in' : 'max-h-0 ease-out'
        }`}
      >
        <p
          className={`pt-4 xl:pt-6 pb-3 text-[12px] xl:text-[14px] font-light leading-[120%] text-justify`}
        >
          {t('delivery.description')}
        </p>
        <h3 className="mb-3 xl:mb-4 text-[16px] xl:text-[20px] font-medium leading-[120%]">
          {t('delivery.conditions.title')}
        </h3>
        <h4 className="my-1 xl:my-2 text-[12px] xl:text-[16px] font-medium leading-[120%]">
          {t('delivery.conditions.ukraine.title')}
        </h4>
        <p
          className={`text-[12px] xl:text-[14px] font-light leading-[120%] text-justify`}
        >
          {t('delivery.conditions.ukraine.description')}
        </p>
        <h4 className="my-1 xl:my-2 text-[12px] xl:text-[16px] font-medium leading-[120%]">
          {t('delivery.conditions.worldwide.title')}
        </h4>
        <p
          className={`text-[12px] xl:text-[14px] font-light leading-[120%] text-justify`}
        >
          {t('delivery.conditions.worldwide.description')}
        </p>
        <h4 className="my-1 xl:my-2 text-[12px] xl:text-[16px] font-medium leading-[120%]">
          {t('delivery.conditions.shippingCost.title')}
        </h4>
        <p
          className={`text-[12px] xl:text-[14px] font-light leading-[120%] text-justify`}
        >
          {t('delivery.conditions.shippingCost.description')}
        </p>
        <h3 className="my-3 xl:my-4 text-[16px] xl:text-[20px] font-medium leading-[120%]">
          {t('delivery.returns.title')}
        </h3>
        <p
          className={`text-[12px] xl:text-[14px] font-light leading-[120%] text-justify`}
        >
          {t('delivery.returns.description')}
        </p>
        <h4 className="my-1 xl:my-2 text-[12px] xl:text-[16px] font-medium leading-[120%]">
          {t('delivery.returns.notRefundable.title')}
        </h4>
        <p
          className={`mb-1 text-[12px] xl:text-[14px] font-light leading-[120%] text-justify`}
        >
          {t('delivery.returns.notRefundable.partOne')}
        </p>
        <p
          className={`text-[12px] xl:text-[14px] font-light leading-[120%] text-justify`}
        >
          {t('delivery.returns.notRefundable.partTwo')}
        </p>

        <h4 className="my-1 xl:my-2 text-[12px] xl:text-[16px] font-medium leading-[120%]">
          {t('delivery.howToReturn.title')}
        </h4>
        <p
          className={`mb-1 text-[12px] xl:text-[14px] font-light leading-[120%] text-justify`}
        >
          {t('delivery.howToReturn.partOne')}
        </p>
        <p
          className={`text-[12px] xl:text-[14px] font-light leading-[120%] text-justify`}
        >
          {t('delivery.howToReturn.partTwo')}
        </p>
      </div>
    </motion.div>
  );
}
