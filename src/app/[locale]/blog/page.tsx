import { Suspense } from 'react';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import BlogList from '@/modules/blog/blogList/BlogList';
import Hero from '@/modules/blog/hero/Hero';
import Loader from '@/shared/components/loader/Loader';
import { allPostsQuery } from '@/shared/lib/queries';
import { Locale } from '@/types/locale';

interface BlogPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const articlesList = await fetchSanityData(allPostsQuery, {
    lang: locale,
  });

  return (
    <>
      <Hero />
      <Suspense fallback={<Loader />}>
        <BlogList articlesList={articlesList} />
      </Suspense>
    </>
  );
}
