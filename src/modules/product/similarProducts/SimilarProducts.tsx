import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import SimilarProductsSlider from './SimilarProductsSlider';
import SimilarProductsImages from './SimilarProductsImages';
import { getLocale, getTranslations } from 'next-intl/server';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { allSimilarProductsQuery } from '@/shared/lib/queries';
import { Suspense } from 'react';
import Loader from '@/shared/components/loader/Loader';

interface SimilarProductsProps {
  categorySlug: string;
  excludeSlug: string;
}

export default async function SimilarProducts({
  categorySlug,
  excludeSlug,
}: SimilarProductsProps) {
  const locale = await getLocale();
  const t = await getTranslations('productPage.similarSection');

  const similarProductsList = await fetchSanityData(allSimilarProductsQuery, {
    lang: locale,
    excludeSlug,
    categorySlug,
  });

  if (!similarProductsList) return null;

  return (
    <section className="pb-20 xl:pb-30">
      <Container className="relative">
        <SimilarProductsImages />
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInAnimation({ y: 30 })}
          className="mb-6 xl:mb-5 text-[18px] font-semibold leading-[140%] xl:text-[40px] xl:font-medium xl:leading-[120%] uppercase"
        >
          {t('title')}
        </motion.h2>
        <Suspense fallback={<Loader />}>
          <SimilarProductsSlider similarProductsList={similarProductsList} />
        </Suspense>
      </Container>
    </section>
  );
}
