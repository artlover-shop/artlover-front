'use client';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import NavbarCatalogMenuMob from './navbarCatalogMob/NavbarCatalogMenuMob';
import NavbarCatalogMenuDesk from './navbarCatalogDesk/NavbarCatalogMenuDesk';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { allCategoriesQuery } from '@/shared/lib/queries';
import { Category } from '@/types/category';
import GiftIcon from '@/shared/components/icons/categoriesIcons/GiftIcon';
import DiscountsIcon from '@/shared/components/icons/categoriesIcons/DiscountsIcon';
import NewProductsIcon from '@/shared/components/icons/categoriesIcons/NewProductsIcon';

interface NavbarCatalogProps {
  isOpenCatalogMenu: boolean;
  setIsOpenBurgerMenu: Dispatch<SetStateAction<boolean>>;
  setIsOpenCatalogMenu: Dispatch<SetStateAction<boolean>>;
  setIsCartModalOpened: Dispatch<SetStateAction<boolean>>;
}

const SvgIcon = ({ svg }: { svg: string }) => (
  <span dangerouslySetInnerHTML={{ __html: svg }} />
);

const NavbarCatalog = ({
  isOpenCatalogMenu,
  setIsOpenBurgerMenu,
  setIsOpenCatalogMenu,
  setIsCartModalOpened,
}: NavbarCatalogProps) => {
  const t = useTranslations('header.catalogMenu');
  const locale = useLocale();

  const [categories, setCategories] = useState<Category[]>([]);

  const categoriesList = categories?.map(category => ({
    icon: <SvgIcon svg={category.icon} />,
    slug: category?.slug,
    title: category?.title,
    subcategories: category?.subcategories,
  }));

  const catalogList = [
    { icon: <GiftIcon />, slug: 'gifts', title: t('gifts') },
    ...categoriesList,
    { icon: <DiscountsIcon />, slug: 'discounts', title: t('discounts') },
    {
      icon: <NewProductsIcon />,
      slug: 'new-products',
      title: t('newProducts'),
    },
  ];

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchSanityData(allCategoriesQuery, {
        lang: locale,
      });
      setCategories(result);
    };

    loadData();
  }, [locale]);

  return (
    <div className="md:relative w-full h-full">
      <button
        type="button"
        onClick={() => {
          setIsOpenCatalogMenu(true);
          setIsOpenBurgerMenu(false);
          setIsCartModalOpened(false);
        }}
        className="cursor-pointer justify-center xl:justify-start xl:gap-x-[76px] bg-orange xl:hover:brightness-125 focus-visible:brightness-125 rounded-[20px] 
      xl:px-[27px] h-[32px] xl:h-[46px] w-[44px] xl:w-[264px] flex items-center gap-[32px] transition duration-300 ease-in-out"
      >
        <Image
          src="/images/navbar/catalogIcon.svg"
          alt="background"
          width="14"
          height="12"
        />
        <span className="text-[16px] font-semibold text-white hidden xl:block">
          {t('title')}
        </span>
      </button>
      <NavbarCatalogMenuMob
        catalogList={catalogList}
        isOpen={isOpenCatalogMenu}
        onClose={() => setIsOpenCatalogMenu(false)}
      />
      <NavbarCatalogMenuDesk
        catalogList={catalogList}
        isOpen={isOpenCatalogMenu}
        onClose={() => setIsOpenCatalogMenu(false)}
      />
    </div>
  );
};

export default NavbarCatalog;
