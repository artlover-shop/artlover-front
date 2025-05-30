'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  burgerMenuVariants,
  fadeInAnimation,
} from '@/shared/utils/animationVariants';
import CrossInCircleIcon from '@/shared/components/icons/CrossInCircleIcon';
import Image from 'next/image';
import NavBarCategoriesListMob from './NavBarCategoriesListMob';
import { CatalogItem } from '@/types/catalogItem';

interface NavbarCatalogMenuMobProps {
  isOpen: boolean;
  onClose: () => void;
  catalogList: CatalogItem[];
}

export default function NavbarCatalogMenuMob({
  catalogList,
  isOpen,
  onClose,
}: NavbarCatalogMenuMobProps) {
  const t = useTranslations('header.catalogMenu');

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={burgerMenuVariants}
          className={`${isOpen ? 'no-doc-scroll' : ''} md:hidden absolute -z-[10] top-0 md:top-0 right-0 w-[100vw] md:w-[495px] bg-white md:bg-dark h-dvh no-doc-scroll`}
        >
          <div className="relative -z-50 h-22 w-full md:hidden bg-white"></div>
          <div
            className="flex flex-col justify-between h-[calc(100%-88px)]  overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent"
          >
            <div>
              <div className="flex items-center justify-between w-full pl-8 pr-8 pt-4 pb-5">
                <h2 className="text-[20px] font-semibold leading-[120% text-orange">
                  {t('title')}
                </h2>
                <button
                  type="button"
                  onClick={onClose}
                  className="cursor-pointer flex md:hidden items-center justify-center size-[32px] p-1 md:p-0 text-orange  xl:hover:text-dark focus-visible:text-dark transition duration-300 ease-in-out"
                >
                  {<CrossInCircleIcon className="size-full" />}
                </button>
              </div>
              <NavBarCategoriesListMob
                onClose={onClose}
                catalogList={catalogList}
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInAnimation({ delay: 0.4, scale: 0.9 })}
              className="w-[360px] h-[131px] ml-auto -mt-[22px] pointer-events-none"
            >
              <Image
                src="/images/navbar/catalogMenuFigureMob.svg"
                width="360"
                height="131"
                alt="background"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
