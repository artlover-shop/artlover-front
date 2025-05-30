'use client';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import ProductCard from '@/shared/components/productCard/ProductCard';
import AddedToCartPopUp from '@/shared/components/pop-ups/AddedToCartPopUp';
import CartModal from '@/shared/components/cart/Cart';
import Backdrop from '@/shared/components/backdrop/Backdrop';
import { Product } from '@/types/product';

interface SimilarProductsSliderProps {
  similarProductsList: Product[];
}

export default function SimilarProductsSlider({
  similarProductsList,
}: SimilarProductsSliderProps) {
  const [isAddedToCartPopUpShown, setIsAddedToCartPopUpShown] = useState(false);
  const [isCartModalShown, setIsCartModalShown] = useState(false);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ y: 30, delay: 0.4 })}
      >
        <SwiperWrapper
          swiperClassName="similar-products"
          loop
          breakpoints={{
            0: {
              spaceBetween: 16,
              slidesPerView: 2,
            },
            574: { spaceBetween: 16, slidesPerView: 3 },
            1024: {
              spaceBetween: 16,
              slidesPerView: 4,
            },
            1280: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
          }}
        >
          {similarProductsList.map((similarProduct, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard
                setIsAddedToCartPopUpShown={setIsAddedToCartPopUpShown}
                product={similarProduct}
              />
            </SwiperSlide>
          ))}
        </SwiperWrapper>
      </motion.div>
      <AddedToCartPopUp
        isPopUpShown={isAddedToCartPopUpShown}
        setIsPopUpShown={setIsAddedToCartPopUpShown}
        setIsCartModalShown={setIsCartModalShown}
      />
      <CartModal
        isPopUpShown={isCartModalShown}
        setIsPopUpShown={setIsCartModalShown}
      />
      <Backdrop
        isVisible={isAddedToCartPopUpShown || isCartModalShown}
        onClick={() => {
          setIsAddedToCartPopUpShown(false);
          setIsCartModalShown(false);
        }}
      />
    </>
  );
}
