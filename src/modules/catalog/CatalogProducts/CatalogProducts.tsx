'use client';
import { useState } from 'react';

import Pagination from '@/shared/components/pagination/Pagination';
import ProductCard from '../../../shared/components/productCard/ProductCard';
import AddedToCartPopUp from '@/shared/components/pop-ups/AddedToCartPopUp';
import CartModal from '@/shared/components/cart/Cart';
import Backdrop from '@/shared/components/backdrop/Backdrop';
import { Product } from '@/types/product';
import * as motion from 'motion/react-client';
import { AnimatePresence } from 'framer-motion';
import {
  listVariants,
  listItemVariants,
} from '@/shared/utils/animationVariants';
import { useCatalogItemsPerPage } from '@/shared/hooks/useCatalogItemsPerPage';
import CatalogImages from './CatalogImages';

interface CatalogProductsProps {
  currentProducts: Product[];
  activeTab: string;
  categorySlug: string;
}

const SECTION_ID = 'catalog-page-products-list';

const CatalogProducts = ({
  currentProducts,
  activeTab,
  categorySlug,
}: CatalogProductsProps) => {
  const [isAddedToCartPopUpShown, setIsAddedToCartPopUpShown] = useState(false);
  const [isCartModalShown, setIsCartModalShown] = useState(false);

  return (
    <div className="relative" key={categorySlug}>
      <CatalogImages />
      <Pagination
        items={currentProducts}
        scrollTargetId={SECTION_ID}
        useItemsPerPage={useCatalogItemsPerPage}
        renderItems={currentItems => (
          <motion.ul
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={listVariants({
              staggerChildren: 0.3,
              delayChildren: 0.3,
            })}
            className="flex flex-wrap gap-4 xl:gap-5"
          >
            <AnimatePresence mode="wait">
              {currentItems.map(item => (
                <motion.li
                  layout
                  variants={listItemVariants}
                  key={item.id}
                  className="w-[calc(50%-8px)] md:w-[calc(33.33%-10.67px)] xl:w-[calc(33.33%-13.33px)]"
                >
                  <ProductCard
                    setIsAddedToCartPopUpShown={setIsAddedToCartPopUpShown}
                    product={item}
                  />
                </motion.li>
              ))}
            </AnimatePresence>
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
    </div>
  );
};

export default CatalogProducts;
