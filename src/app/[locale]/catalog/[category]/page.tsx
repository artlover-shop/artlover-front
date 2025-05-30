import Catalog from '@/modules/catalog/Catalog';
import { Locale } from '@/types/locale';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { getTranslations } from 'next-intl/server';
import {
  allDiscountedProductsQuery,
  allGiftsByGenderQuery,
  allNewProductsQuery,
  allProductsByCategoryQuery,
  allProfessionsQuery,
} from '@/shared/lib/queries';
import { Suspense } from 'react';
import Loader from '@/shared/components/loader/Loader';

interface CategoryPageProps {
  params: Promise<{ category: string; locale: Locale }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category } = await params;
  const t = await getTranslations('header.catalogMenu');

  const professions = await fetchSanityData(allProfessionsQuery, {
    lang: locale,
  });

  const res =
    category === 'gifts'
      ? await fetchSanityData(allGiftsByGenderQuery, {
          lang: locale,
        })
      : category === 'discounts'
        ? await fetchSanityData(allDiscountedProductsQuery, {
            lang: locale,
          })
        : category === 'new-products'
          ? await fetchSanityData(allNewProductsQuery, {
              lang: locale,
            })
          : await fetchSanityData(allProductsByCategoryQuery, {
              lang: locale,
              categorySlug: category,
            });

  const categoryProducts =
    category === 'gifts'
      ? {
          categorySlug: 'gifts',
          categoryTitle: t('gifts'),
          categorySubtitle: t('giftsDescription'),
          bannerColor: 'dark',
          bannerImages: {
            mobileLeft: {
              url: '/images/catalog/gifts/imageLeftMob.webp',
              width: 154,
              height: 62,
            },
            mobileRight: {
              url: '/images/catalog/gifts/imageRightMob.webp',
              width: 402,
              height: 200,
            },
            desktopLeft: {
              url: '/images/catalog/gifts/imageLeftDesk.webp',
              width: 471,
              height: 154,
            },
            desktopRight: {
              url: '/images/catalog/gifts/imageRightDesk.webp',
              width: 958,
              height: 392,
            },
          },
          subcategories: [
            {
              subcategoryTitle: t('women'),
              subcategorySlug: 'women',
              products: res.female,
            },
            {
              subcategoryTitle: t('men'),
              subcategorySlug: 'men',
              products: res.male,
            },
          ],
        }
      : category === 'discounts'
        ? {
            categorySlug: 'discounts',
            categoryTitle: t('discounts'),
            categorySubtitle: t('discountsDescription'),
            bannerColor: 'dark',
            bannerImages: {
              mobileLeft: {
                url: '/images/catalog/discounts/imageLeftMob.webp',
                width: 212,
                height: 200,
              },
              mobileRight: {
                url: '/images/catalog/discounts/imageRightMob.webp',
                width: 404,
                height: 200,
              },
              desktopLeft: {
                url: '/images/catalog/discounts/imageLeftDesk.webp',
                width: 939,
                height: 392,
              },
              desktopRight: {
                url: '/images/catalog/discounts/imageRightDesk.webp',
                width: 622,
                height: 392,
              },
            },
            products: res,
          }
        : category === 'new-products'
          ? {
              categorySlug: 'newProducts',
              categoryTitle: t('newProducts'),
              categorySubtitle: t('newProductsDescription'),
              bannerColor: 'light',
              bannerImages: {
                mobileLeft: {
                  url: '/images/catalog/newProducts/imageLeftMob.webp',
                  width: 184,
                  height: 85,
                },
                mobileRight: {
                  url: '/images/catalog/newProducts/imageRightMob.webp',
                  width: 268,
                  height: 200,
                },
                desktopLeft: {
                  url: '/images/catalog/newProducts/imageLeftDesk.webp',
                  width: 450,
                  height: 231,
                },
                desktopRight: {
                  url: '/images/catalog/newProducts/imageRightDesk.webp',
                  width: 1086,
                  height: 392,
                },
              },
              products: res,
            }
          : res;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Catalog
          categoryProducts={categoryProducts}
          professions={professions}
        />
      </Suspense>
    </>
  );
}
