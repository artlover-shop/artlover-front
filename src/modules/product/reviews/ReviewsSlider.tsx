'use client';

import { useTranslations } from 'next-intl';
import { SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import ReviewCard from './ReviewCard';
import { Product } from '@/types/product';

interface ReviewsSliderProps {
  currentProduct: Product;
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunked: T[][] = [];
  for (let i = 0; i < arr?.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
}

export default function ReviewsSlider({ currentProduct }: ReviewsSliderProps) {
  const t = useTranslations('productPage.reviewsSection');

  const { reviews } = currentProduct;

  const chunkedReviews = chunkArray(reviews, 3);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30, delay: 0.4 })}
      className="relative"
    >
      <div className="absolute top-0 left-0 flex items-center gap-x-6 w-[calc(100%-72px-24px)] xl:w-[calc(100%-96px-24px)]">
        <div className="flex items-center gap-x-3">
          <h2 className="text-[16px] xl:text-[32px] font-medium leading-[120%] uppercase">
            {t('title')}
          </h2>
          <p className="mt-[1px] text-[10px] xl:text-[16px] font-normal leading-none">
            ({(reviews && reviews?.length) || 0})
          </p>
        </div>
        {reviews && reviews?.length ? (
          <div className="w-[calc(100%-105px-24px)] h-[0.5px] opacity-50 bg-dark"></div>
        ) : null}
      </div>
      {reviews && reviews?.length ? (
        <SwiperWrapper
          swiperClassName="product-reviews"
          loop
          isPagination={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
          }}
        >
          {chunkedReviews.map((group, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col gap-y-4 xl:gap-y-5">
                {group.map((review, idx) => (
                  <ReviewCard key={idx} review={review} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </SwiperWrapper>
      ) : null}
    </motion.div>
  );
}
