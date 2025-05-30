import Image from 'next/image';
import Container from '@/shared/components/container/Container';
import BestsellersSlider from './BestsellersSlider';
import { Suspense } from 'react';
import { getLocale, getTranslations } from 'next-intl/server';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { allBestsellersQuery } from '@/shared/lib/queries';
import Loader from '@/shared/components/loader/Loader';

export default async function Bestsellers() {
  const locale = await getLocale();
  const t = await getTranslations('homePage.bestsellers');

  const bestsellersList = await fetchSanityData(
   allBestsellersQuery,
    {
      lang: locale,
    }
  );

  return (
    <section className="pt-20 xl:pt-[158px]">
      <Container className="relative flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 mb-6 xl:mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInAnimation({ scale: 0.9, delay: 1.2 })}
          className="xl:hidden absolute -top-4 -right-5"
        >
          <Image
            src="/images/homePage/bestsellers/figureMobile.svg"
            alt="figure background"
            width="94"
            height="113"
          />
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInAnimation({ x: -30 })}
          className="text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase"
        >
          {t('title')}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInAnimation({ x: 30 })}
          className="font-denistina text-[14px] xl:text-[36px] font-normal leading-[120%]"
        >
          {t('description')}
        </motion.p>
      </Container>
      <Suspense fallback={<Loader />}>
        <BestsellersSlider bestsellersList={bestsellersList}/>
      </Suspense>
    </section>
  );
}
