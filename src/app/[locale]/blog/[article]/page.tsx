import Content from '@/modules/article/content/Content';
import Hero from '@/modules/article/hero/Hero';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { singlePostQuery } from '@/shared/lib/queries';
import { Locale } from '@/types/locale';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { getDefaultMetadata } from '@/shared/utils/generateDefaultMetadata';

interface ArticlePageProps {
  params: Promise<{ article: string; locale: Locale }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { article, locale } = await params;
  const t = await getTranslations('metaData');

  const currentArticle = await fetchSanityData(singlePostQuery, {
    slug: article,
    lang: locale,
  });

  return {
    title: currentArticle?.seoTitle || getDefaultMetadata(t, locale).title,
    description:
      currentArticle?.seoDescription ||
      getDefaultMetadata(t, locale).description,
    openGraph: {
      images: [
        {
          url: currentArticle?.images[0] || '/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Art Lover',
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { article, locale } = await params;
  const currentArticle = await fetchSanityData(singlePostQuery, {
    slug: article,
    lang: locale,
  });

  if (!currentArticle) return null;

  return (
    <>
      <Hero article={currentArticle} />
      <Content article={currentArticle} />
    </>
  );
}
