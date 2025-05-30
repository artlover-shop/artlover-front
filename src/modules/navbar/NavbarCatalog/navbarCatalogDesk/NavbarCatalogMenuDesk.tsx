'use client';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { catalogMenuVariants } from '@/shared/utils/animationVariants';
import Backdrop from '@/shared/components/backdrop/Backdrop';
import NavBarCategoriesListDesk from './NavbarCategoriesListDesk';
import { CatalogItem } from '@/types/catalogItem';

interface NavbarCatalogMenuDeskProps {
  catalogList: CatalogItem[];
  isOpen: boolean;
  onClose: () => void;
}

export default function NavbarCatalogMenuDesk({
  catalogList,
  isOpen,
  onClose,
}: NavbarCatalogMenuDeskProps) {
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }

    return () => body.classList.remove('no-scroll');
  }, [isOpen]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={catalogMenuVariants}
            style={{ scrollbarGutter: 'stable' }}
            className={`hidden md:block absolute z-[100] w-fit top-11 xl:top-14 left-0 p-1 rounded-[6px] overflow-y-auto oveflow-x-hidden scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent popup-scroll`}
          >
            <NavBarCategoriesListDesk
              onClose={onClose}
              catalogList={catalogList}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <Backdrop
        className="hidden md:block"
        transparent
        isVisible={isOpen}
        onClick={onClose}
      />
    </>
  );
}
