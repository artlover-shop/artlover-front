'use client';
import { useState, useEffect } from 'react';
import EmptyHeartIcon from '@/shared/components/icons/EmptyHeartIcon';
import { useFavoritesStore } from '@/shared/store/favoritesStore';
import { Product } from '@/types/product';

interface FavoriteIconProps {
  currentProduct: Product;
}

export default function FavoriteIcon({ currentProduct }: FavoriteIconProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const toggleFavorite = () => {
    if (isFavorite(currentProduct.slug)) {
      removeFavorite(currentProduct.slug);
    } else {
      addFavorite(currentProduct);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      aria-label="add to favorites"
      className="group cursor-pointer flex items-center justify-center shrink-0 size-12 xl:w-[63px] xl:h-[58px] rounded-[8px] bg-dark xl:hover:brightness-125 
      focus-visible:brightness-125 active:scale-95 transition duration-300 ease-in-out"
    >
      <EmptyHeartIcon
        className={`size-6 xl:size-[34px] ${
          isFavorite(currentProduct.slug) ? 'text-orange' : 'text-white'
        } transition duration-300 ease-in-out`}
      />
    </button>
  );
}
