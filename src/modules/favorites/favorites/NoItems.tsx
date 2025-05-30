import { useTranslations } from 'next-intl';

export default function NoItems() {
  const t = useTranslations('favoritesPage');
  return (
    <p className="py-25 text-[16px] xl:text-[20px] text-light leading-[120%] text-center text-gray-light">
      {t('noItems')}
    </p>
  );
}
