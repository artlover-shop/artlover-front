'use client';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useCartStore } from '@/shared/store/cartStore';
import { Product } from '@/types/product';
import Image from 'next/image';
import SecondaryButton from '../buttons/SecondaryButton';
import CartButton from './CartButton';
import { Link } from '@/i18n/navigation';

interface ProductCardProps {
  product: Product;
  setIsAddedToCartPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function ProductCard({
  product,
  setIsAddedToCartPopUpShown,
}: ProductCardProps) {
  const t = useTranslations('productCard');
  const locale = useLocale();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { addToCart, getItemFinalPrice } = useCartStore();

  const {
    id,
    title,
    price,
    discountedPrice,
    inStock,
    mainImage,
    slug,
    categorySlug,
    colors,
    addons,
  } = product;

  const updatedAddons = addons?.map(addon => ({ ...addon, checked: false }));

  const handleClick = () => {
    setIsAddedToCartPopUpShown(true);
    addToCart({
      id: `${id}${colors && colors?.length ? colors[0].hex : ''}`,
      cmsId: id,
      title,
      price,
      discountedPrice,
      mainImage,
      categorySlug,
      slug,
      quantity: 1,
      color: colors && colors?.length ? colors[0] : undefined,
      addons: updatedAddons,
    });
  };

  return (
    <div className="relative flex flex-col justify-between h-full p-3 xl:px-5 xl:py-4 bg-white rounded-[8px] xl:rounded-[16px] shadow-social overflow-hidden">
      {discountedPrice && discountedPrice < price ? (
        <Image
          src={`/images/icons/promotion-${locale}.svg`}
          alt="promotion label"
          width="169"
          height="109"
          priority
          className="absolute z-10 top-0 right-0 pointer-events-none"
        />
      ) : null}
      <Link href={`/catalog/${categorySlug}/${slug}`}>
        <div className="relative h-[120px] md:h-[180px] lg:h-[200px] xl:h-[300px] mb-3 xl:mb-4 rounded-[8px] xl:rounded-[16px] overflow-hidden">
          <Image
            src={mainImage}
            alt={'product'}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-between mb-4 xl:mb-[18px]">
          {isClient &&
            ((discountedPrice && discountedPrice < price) ||
            getItemFinalPrice(product) < price ? (
              <p className="mb-1.5 xl:mb-2 h-auto leading-none">
                <span className="text-[13px] xl:text-[16px] font-medium leading-[120%] text-orange">
                  {getItemFinalPrice(product)}
                  {t('hrn')}
                </span>
                <span className="text-[13px] xl:text-[16px] font-medium leading-[120%]">
                  &nbsp;
                </span>
                <span className="text-[9px] xl:text-[14px] font-normal leading-[120%] line-through">
                  {price} {t('hrn')}
                </span>
              </p>
            ) : (
              <p className="mb-1.5 xl:mb-2 text-[14px] xl:text-[16px] font-medium leading-[120%]">
                {getItemFinalPrice(product)} {t('hrn')}
              </p>
            ))}
          <h3 className="text-[13px] xl:text-[18px] font-medium leading-[120%] line-clamp-2">
            {title}
          </h3>
        </div>
      </Link>
      <div className="flex justify-between gap-x-0.5 xs:gap-x-3 xl:gap-x-2">
        <Link
          href={`/catalog/${categorySlug}/${slug}`}
          className="block w-full"
        >
          <SecondaryButton className="w-full max-w-[102px] xs:max-w-full h-9 xl:h-10">
            {t('button')}
          </SecondaryButton>
        </Link>
        <CartButton
          disabled={inStock === 'out_of_stock'}
          onClick={handleClick}
          className="shrink-0"
        />
      </div>
    </div>
  );
}
