'use client';
import { SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import HeroSlideOne from './HeroSlideOne';

export default function HeroSlider() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30 })}
    >
      <SwiperWrapper
        swiperClassName="hero"
        breakpoints={{
          0: {
            slidesPerView: 'auto',
            centeredSlides: true,
          },
        }}
      >
        <SwiperSlide>
          <HeroSlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlideOne />
        </SwiperSlide>
      </SwiperWrapper>
    </motion.div>
  );
}
