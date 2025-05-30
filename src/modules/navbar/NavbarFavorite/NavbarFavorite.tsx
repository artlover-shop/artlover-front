'use client';

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import HeartIcon from '@/shared/components/icons/HeartIcon';
import { Link } from '@/i18n/navigation';

interface NavbarFavoriteProps {
  onClick: () => void;
}

const NavbarFavorite = ({ onClick }: NavbarFavoriteProps) => {
  const pathname = usePathname();
  const locale = useLocale();
  const isActive =
    pathname === `/${locale}/favorites` || pathname === '/favorites';

  return (
    <Link
      href="/favorites"
      onClick={onClick}
      className={`cursor-pointer outline-none active:scale-95 transition duration-300 ease-in-out 
        xl:hover:text-orange focus-visible:text-orange ${
          isActive ? 'text-orange' : ''
        }`}
    >
      <HeartIcon className="size-5 xl:size-[34px]" />
    </Link>
  );
};

export default NavbarFavorite;
