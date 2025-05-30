import { CatalogItem } from '@/types/catalogItem';
import NavBarCategoryItemMob from './NavBarCategoryItemMob';

interface NavBarCategoriesListMobProps {
  catalogList: CatalogItem[];
  onClose: () => void;
}

export default function NavBarCategoriesListMob({
  catalogList,
  onClose,
}: NavBarCategoriesListMobProps) {
  return (
    <ul className="flex flex-col gap-3 px-8 md:px-[23px] md:pt-8">
      {catalogList.map((category, idx) => (
        <li key={idx} className="group">
          <NavBarCategoryItemMob category={category} onClose={onClose} />
        </li>
      ))}
    </ul>
  );
}
