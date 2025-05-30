import { Link } from '@/i18n/navigation';
import FooterColumn from '../FooterColumn/FooterColumn';
import { getTranslations, getLocale } from 'next-intl/server';
import { allCategoriesQuery } from '@/shared/lib/queries';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { Category } from '@/types/category';

const FooterCatalog = async () => {
  const t = await getTranslations();
  const locale = await getLocale();

  const categories = await fetchSanityData(allCategoriesQuery, {
    lang: locale,
  });

  const categoriesList = categories.map((category: Category) => ({
    href: `/catalog/${category.slug}`,
    text: category.title,
  }));

  const items = [
    {
      href: '/catalog/gifts',
      text: t('header.catalogMenu.gifts'),
    },
    ...categoriesList,
  ];

  const elements = items.map(({ href, text }) => (
    <li key={text} className="mb-[16px] xl:mb-[20px]">
      <Link
        href={href}
        className="text-white text-[14px] font-normal leading-[120%] xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
      >
        {text}
      </Link>
    </li>
  ));

  return (
    <FooterColumn title={t('footer.catalog')}>
      <ul>{elements}</ul>
    </FooterColumn>
  );
};

export default FooterCatalog;
