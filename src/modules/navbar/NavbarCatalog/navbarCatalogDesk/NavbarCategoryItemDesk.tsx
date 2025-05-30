'use client';

import ArrowIcon from '@/shared/components/icons/ArrowIcon';
import { Link } from '@/i18n/navigation';
import { CatalogItem } from '@/types/catalogItem';

interface NavBarCategoryItemDeskProps {
  category: CatalogItem;
  onClose: () => void;
  isActive: boolean;
  onClick: () => void;
}

export default function NavBarCategoryItemDesk({
  category,
  onClose,
  isActive,
  onClick,
}: NavBarCategoryItemDeskProps) {
  const { icon, title, subcategories } = category;

  const hasSub = subcategories && subcategories?.length > 0;

  return (
    <div
      className={`relative hidden md:flex items-center gap-2 group-not-last:pb-[11px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] group-last:after:hidden after:bg-white after:opacity-[24%] cursor-pointer ${
        isActive ? 'text-orange' : 'text-grey-light'
      } xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out`}
      onClick={hasSub ? onClick : undefined}
    >
      {hasSub ? (
        <>
          {icon}
          <span className="text-[16px] font-medium leading-[120%]">
            {title}
          </span>
          <ArrowIcon
            className={`ml-auto transition ${isActive ? 'text-orange' : ''}`}
          />
        </>
      ) : (
        <Link
          href={`/catalog/${category.slug}`}
          onClick={onClose}
          className="flex gap-x-[9px] items-center w-full"
        >
          {icon}
          <span className="text-[16px] font-medium leading-[120%]">
            {title}
          </span>
        </Link>
      )}
    </div>
  );
}
