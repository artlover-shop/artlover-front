'use client';

import { SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import ReviewCard from './ReviewCard';
import { Review } from '@/types/review';

interface ReviewsSliderProps {
  reviewsList: Review[];
}

export default function ReviewsSlider({ reviewsList }: ReviewsSliderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30, delay: 0.4 })}
      className="md:max-w-[774px] lg:max-w-[1030px] xl:max-w-[1286px] md:px-8 xl:px-[90px] md:mx-auto"
    >
      <SwiperWrapper
        swiperClassName="reviews"
        loop
        breakpoints={{
          0: {
            spaceBetween: 16,
            centeredSlides: true,
          },
          768: { spaceBetween: 16, centeredSlides: false },
          1024: { spaceBetween: 20, centeredSlides: false },
          1280: {
            spaceBetween: 20,
            centeredSlides: false,
          },
        }}
      >
        {reviewsList.map((review, idx) => (
          <SwiperSlide key={idx}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </motion.div>
  );
}
