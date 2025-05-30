'use client';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import ProductCard from '@/shared/components/productCard/ProductCard';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import AddedToCartPopUp from '@/shared/components/pop-ups/AddedToCartPopUp';
import CartModal from '@/shared/components/cart/Cart';
import Backdrop from '@/shared/components/backdrop/Backdrop';
import { Product } from '@/types/product';

interface DiscountedProductsSLiderProps {
  discountedProductsList: Product[];
}

export default function DiscountedProductsSLider({
  discountedProductsList,
}: DiscountedProductsSLiderProps) {
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
        className="md:max-w-[774px] lg:max-w-[1030px] xl:max-w-[1286px] md:px-8 xl:px-[90px] md:mx-auto"
      >
        <SwiperWrapper
          swiperClassName="newProducts"
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
          {discountedProductsList.map((discountedProduct, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard
                setIsAddedToCartPopUpShown={setIsAddedToCartPopUpShown}
                product={discountedProduct}
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
