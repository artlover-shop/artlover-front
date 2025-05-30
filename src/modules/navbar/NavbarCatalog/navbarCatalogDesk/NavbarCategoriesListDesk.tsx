'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import NavBarCategoryItemDesk from './NavbarCategoryItemDesk';
import { Link } from '@/i18n/navigation';
import { CatalogItem } from '@/types/catalogItem';

interface NavBarCategoriesListDeskProps {
  catalogList: CatalogItem[];
  onClose: () => void;
}

export default function NavBarCategoriesListDesk({
  catalogList,
  onClose,
}: NavBarCategoriesListDeskProps) {
  const [activeCategorySlug, setActiveCategorySlug] = useState<string | null>(
    null
  );

  const activeCategory = catalogList.find(
    cat => cat.slug === activeCategorySlug
  );

  return (
    <div className="relative z-10 flex">
      {/* LEFT COLUMNS */}
      <div className="bg-dark rounded-[6px] shadow-social">
        <ul className="flex flex-col gap-3 px-[23px] md:pt-8 md:w-[342px] text-white">
          {catalogList.map((category, idx) => (
            <li key={idx} className="group">
              <NavBarCategoryItemDesk
                category={category}
                onClose={onClose}
                isActive={activeCategorySlug === category.slug}
                onClick={() => setActiveCategorySlug(category.slug)}
              />
            </li>
          ))}
        </ul>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 0.4, scale: 0.9 })}
          className="w-[313px] h-[70px] mt-2"
        >
          <Image
            src="/images/navbar/catalogMenuFigureDesk.svg"
            width="313"
            height="70"
            alt="background"
          />
        </motion.div>
      </div>

      {/* RIGHT SUBCATEGORY PANEL */}
      <div
        className={`relative h-auto overflow-hidden ${activeCategory ? 'w-[284px]' : ''}`}
      >
        <AnimatePresence mode="wait">
          {activeCategory &&
            activeCategory.subcategories &&
            activeCategory.subcategories.length > 0 && (
              <motion.div
                key={activeCategory.slug}
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                exit={{ opacity: 0, x: 0, transition: { duration: 0.1 } }}
                className={`absolute left-0 top-0  flex flex-col min-h-full bg-white text-dark pt-[76px] pb-10 pl-8 pr-6 
            rounded-tr-[6px] rounded-br-[6px] shadow-social ${!activeCategory ? 'pointer-events-none' : ''}`}
              >
                <h3 className="text-orange text-[16px] font-medium leading-[120%] mb-5">
                  {activeCategory.title}
                </h3>
                <ul
                  className="flex flex-col gap-4 h-[330px] pr-2 overflow-y-auto scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
              scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent popup-scroll"
                >
                  {activeCategory?.subcategories.map((sub, idx) => (
                    <li key={idx}>
                      <Link
                        href={`/catalog/${activeCategory.slug}?subcategory=${sub.slug}`}
                        className="flex items-center gap-x-3 text-[14px] font-light leading-[120%] xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
                        onClick={onClose}
                      >
                        <div className="size-2 rounded-full bg-current shrink-0"></div>
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
}
