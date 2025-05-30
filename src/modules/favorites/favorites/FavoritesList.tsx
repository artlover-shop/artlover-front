'use client';
import { useState, Suspense } from 'react';
import * as motion from 'motion/react-client';
import {
  listVariants,
  listItemVariants,
} from '@/shared/utils/animationVariants';
import Loader from '@/shared/components/loader/Loader';
import ProductCard from '@/shared/components/productCard/ProductCard';
import Pagination from '@/shared/components/pagination/Pagination';
import { Product } from '@/types/product';
import AddedToCartPopUp from '@/shared/components/pop-ups/AddedToCartPopUp';
import CartModal from '@/shared/components/cart/Cart';
import Backdrop from '@/shared/components/backdrop/Backdrop';

interface FavoritesListProps {
  favoritesList: Product[];
}

const SECTION_ID = 'favorites-page-list';
const ITEMS_PER_PAGE = 4;

export default function FavoritesList({ favoritesList }: FavoritesListProps) {
  const [isAddedToCartPopUpShown, setIsAddedToCartPopUpShown] = useState(false);
  const [isCartModalShown, setIsCartModalShown] = useState(false);

  return (
    <Suspense fallback={<Loader />}>
      <Pagination
        items={favoritesList}
        scrollTargetId={SECTION_ID}
        useItemsPerPage={() => ITEMS_PER_PAGE}
        renderItems={currentItems => (
          <motion.ul
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.4 }}
            variants={listVariants({
              staggerChildren: 0.3,
              delayChildren: 0.4,
            })}
            className="flex flex-wrap gap-4 xl:gap-5"
          >
            {currentItems.map((favoriteItem, idx) => (
              <motion.li
                viewport={{ once: true, amount: 0.2 }}
                variants={listItemVariants}
                key={idx}
                className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] xl:w-[calc(25%-15px)]"
              >
                <ProductCard
                  setIsAddedToCartPopUpShown={setIsAddedToCartPopUpShown}
                  product={favoriteItem}
                />
              </motion.li>
            ))}
          </motion.ul>
        )}
      />
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
    </Suspense>
  );
}
