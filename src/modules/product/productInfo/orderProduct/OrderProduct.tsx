'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import * as motion from 'motion/react-client';
import { useCartStore } from '@/shared/store/cartStore';
import { useReviewedProductsStore } from '@/shared/store/reviewedProductsStore';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { Rating } from 'react-simple-star-rating';
import IconButton from '@/shared/components/buttons/IconButton';
import MainButton from '@/shared/components/buttons/MainButton';
import StarFilledIcon from '@/shared/components/icons/StarFilledIcon';
import StarEmptyIcon from '@/shared/components/icons/StarEmptyIcon';
import { Product } from '@/types/product';
import { getAverageRating } from '@/shared/utils/getAverageRating';
import Image from 'next/image';
import AddonsList from './AddonsList';
import ColorPicker from './ColorPicker';
import Counter from './Counter';
import AddedToCartPopUp from '@/shared/components/pop-ups/AddedToCartPopUp';
import CartModal from '@/shared/components/cart/Cart';
import Backdrop from '@/shared/components/backdrop/Backdrop';
import FavoriteIcon from './FavoriteIcon';

interface OrderProductProps {
  currentProduct: Product;
}

export default function OrderProduct({ currentProduct }: OrderProductProps) {
  const t = useTranslations('productPage');
  const { addReviewedProduct } = useReviewedProductsStore();

  const [isAddedToCartPopUpShown, setIsAddedToCartPopUpShown] = useState(false);
  const [isCartModalShown, setIsCartModalShown] = useState(false);
  const [count, setCount] = useState(1);
  const { addToCart, getItemFinalPrice } = useCartStore();

  const {
    id,
    title,
    description,
    inStock,
    addons,
    colors,
    price,
    mainImage,
    categorySlug,
    slug,
    discountedPrice,
    reviews,
  } = currentProduct;

  const [selectedColor, setSelectedColor] = useState({
    title: colors && colors?.length ? colors[0]?.title : '',
    hex: colors && colors?.length ? colors[0]?.hex : '',
  });

  const defaultAddons = addons
    ? addons.map(addon => ({ ...addon, checked: false }))
    : [];

  const [selectedAddons, setSelectedAddons] = useState(defaultAddons);

  const rating = getAverageRating(reviews);

  const handleAddToCartClick = () => {
    addToCart({
      id: `${id}${selectedColor.hex}`,
      cmsId: id,
      title,
      price,
      discountedPrice,
      mainImage,
      categorySlug,
      slug,
      quantity: count,
      color: selectedColor,
      addons: selectedAddons,
    });
    setIsAddedToCartPopUpShown(true);
  };

  const [isCopiedShareLink, setIsCopiedShareLink] = useState(false);

  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopiedShareLink(true);
      setTimeout(() => setIsCopiedShareLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  useEffect(() => {
    if (currentProduct) {
      addReviewedProduct(currentProduct);
    }
  }, [currentProduct, addReviewedProduct]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="mb-20 md:mb-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ y: 30, delay: 0.2 })}
        className="flex items-center justify-between mb-4"
      >
        <h1 className="text-[16px] xl:text-[32px] font-semibold leading-[120%] uppercase">
          {title}
        </h1>
        <IconButton handleClick={handleShareClick}>
          <Image
            src="/images/productPage/orderProduct/share.svg"
            alt="share icon"
            width={20}
            height={20}
            className="size-5 xl:size-8"
          />
        </IconButton>

        <div
          className={`${
            isCopiedShareLink ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } fixed -top-5 right-0 bg-orange text-white px-4 py-2 rounded-[8px] text-sm shadow-social z-50 transition-opacity duration-300`}
        >
          {t('linkCopied')}
        </div>
      </motion.div>
      <motion.p
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ y: 30, delay: 0.4 })}
        className="mb-6 xl:mb-[25.5px] text-[14px] xl:text-[16px] font-light leading-[120%] text-justify"
      >
        {description}
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ y: 30, delay: 0.6 })}
        className="flex justify-between items-center"
      >
        <p
          className={`text-[12px] xl:text-[16px] font-normal leading-[120%] ${
            inStock === 'in_stock'
              ? 'text-green'
              : inStock === 'on_order'
                ? 'text-orange'
                : 'text-red-500'
          }`}
        >
          {inStock === 'in_stock'
            ? t('inStock')
            : inStock === 'on_order'
              ? t('onOrder')
              : t('outOfStock')}
        </p>
        <Rating
          initialValue={rating}
          allowFraction
          readonly
          className="mb-1"
          emptyIcon={
            <StarEmptyIcon className="inline-block mx-0.5 size-4 xl:size-5" />
          }
          fillIcon={
            <StarFilledIcon className="inline-block mx-0.5 size-4 xl:size-5" />
          }
        />
      </motion.div>
      <motion.p
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ y: 30, delay: 0.6 })}
        className="mb-6 xl:mb-[26.5px] text-right text-[10px] xl:text-[14px] font-light leading-[120%]"
      >
        ({t('reviews', { count: (reviews && reviews?.length) || 0 })})
      </motion.p>
      {isClient &&
        (!addons || !addons.length || inStock === 'out_of_stock' ? null : (
          <AddonsList
            selectedAddons={selectedAddons}
            setSelectedAddons={setSelectedAddons}
          />
        ))}
      {!colors || !colors.length || inStock === 'out_of_stock' ? null : (
        <ColorPicker
          colors={colors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      )}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ y: 30, delay: 1.2 })}
        className={`${inStock === 'out_of_stock' ? 'hidden' : 'flex'}  items-center justify-between mb-4 xl:mb-5`}
      >
        <Counter count={count} setCount={setCount} />
        {isClient &&
          ((discountedPrice && discountedPrice < price) ||
          getItemFinalPrice(currentProduct) < price ? (
            <div>
              <span className="text-[16px] xl:text-[24px] font-semibold leading-[120%] text-orange">
                {getItemFinalPrice(currentProduct)}
                {t('hrn')}
              </span>
              &nbsp;&nbsp;
              <span className="text-[12px] xl:text-[16px] font-normal leading-[120%] line-through">
                {price}
                {t('hrn')}
              </span>
            </div>
          ) : (
            <span className="text-[16px] xl:text-[24px] font-semibold leading-[120%]">
              {getItemFinalPrice(currentProduct)}
              {t('hrn')}
            </span>
          ))}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ y: 30, delay: 1.4 })}
        className="flex items-center gap-x-4"
      >
        <MainButton
          disabled={inStock === 'out_of_stock'}
          onClick={handleAddToCartClick}
          className="h-[49px] xl:h-[58px]"
          textStyles="text-[14px] xl:text-[16px]"
        >
          {t('button')}
        </MainButton>
        <FavoriteIcon currentProduct={currentProduct} />
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
    </div>
  );
}
