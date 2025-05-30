import { getTranslations } from 'next-intl/server';
import Breadcrumbs from '@/modules/product/breadcrumbs/Breadcrumbs';
import ProductInfo from '@/modules/product/productInfo/ProductInfo';
import ReviewedProducts from '@/modules/product/reviewedProducts/ReviewedProducts';
import Reviews from '@/modules/product/reviews/Reviews';
import SimilarProducts from '@/modules/product/similarProducts/SimilarProducts';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { singleProductQuery } from '@/shared/lib/queries';
import { Locale } from '@/types/locale';
import { Suspense } from 'react';
import Loader from '@/shared/components/loader/Loader';
import type { Metadata } from 'next';
import { getDefaultMetadata } from '@/shared/utils/generateDefaultMetadata';

interface ProductPageProps {
  params: Promise<{ category: string; product: string; locale: Locale }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { product, locale } = await params;
  const t = await getTranslations('metaData');

  const currentProduct = await fetchSanityData(singleProductQuery, {
    slug: product,
    lang: locale,
  });

  return {
    title: currentProduct?.seoTitle || getDefaultMetadata(t, locale).title,
    description:
      currentProduct?.seoDescription ||
      getDefaultMetadata(t, locale).description,
    openGraph: {
      images: [
        {
          url:
            currentProduct?.seoImage ||
            currentProduct?.mainImage ||
            '/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Art Lover',
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const t = await getTranslations('productPage');

  const { product, locale } = await params;

  const currentProduct = await fetchSanityData(singleProductQuery, {
    slug: product,
    lang: locale,
  });

  if (!currentProduct) return null;

  const crumbs = [
    { label: t('home'), href: '/' },
    {
      label: currentProduct?.categoryTitle || '',
      href: `/catalog/${currentProduct?.categorySlug}`,
    },
    {
      label: currentProduct?.title || '',
      href:
        `/catalog/${currentProduct?.categorySlug}/${currentProduct?.slug}` ||
        '',
    },
  ];

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Breadcrumbs crumbs={crumbs} />
        <ProductInfo currentProduct={currentProduct} />
        <Reviews currentProduct={currentProduct} />
        <SimilarProducts
          categorySlug={currentProduct?.categorySlug}
          excludeSlug={currentProduct?.slug}
        />
      </Suspense>
      <ReviewedProducts />
    </>
  );
}
