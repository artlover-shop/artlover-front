'use client';
import { SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import HeroSlide from './HeroSlide';
import { Banner } from '@/types/banner';

interface HeroSliderProps {
  banners: Banner[];
}

export default function HeroSlider({ banners }: HeroSliderProps) {
  if (!banners) return null;

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
        {banners?.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <HeroSlide banner={banner} />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </motion.div>
  );
}
