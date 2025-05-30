'use client';
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import TabMenuItem from './TabMenuItem';
import { Product } from '@/types/product';

interface TabMenuProps {
  categoryProducts: {
    categorySlug: string;
    categoryTitle: string;
    categorySubtitle: string;
    subcategories?: [
      {
        subcategorySlug: string;
        subcategoryTitle: string;
        products: Product[];
      },
    ];
    products?: Product[];
  };
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function TabMenu({ activeTab, categoryProducts }: TabMenuProps) {
  const router = useRouter();
  const { subcategories } = categoryProducts;

  if (!subcategories) return null;

  const handleTabClick = (menu: { title: string; value: string }) => {
    const params = new URLSearchParams(window.location.search);
    params.set('subcategory', menu.value);
    params.set('page', '1');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30, delay: 0.2 })}
      className="flex flex-wrap items-center gap-3 mb-4 xl:mb-8"
    >
      {subcategories.map((subcategory, idx) => (
        <TabMenuItem
          key={idx}
          menuItem={{
            title: subcategory.subcategoryTitle,
            value: subcategory.subcategorySlug,
          }}
          activeTab={activeTab}
          handleTabClick={() =>
            handleTabClick({
              title: subcategory.subcategoryTitle,
              value: subcategory.subcategorySlug,
            })
          }
        ></TabMenuItem>
      ))}
    </motion.ul>
  );
}
