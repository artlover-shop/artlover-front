import Image from 'next/image';
import Container from '@/shared/components/container/Container';
import DiscountedProductsSLider from './DiscountedProductsSLider';
import { Suspense } from 'react';
import * as motion from 'motion/react-client';
import { getLocale, getTranslations } from 'next-intl/server';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Loader from '@/shared/components/loader/Loader';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { allDiscountedProductsQuery } from '@/shared/lib/queries';

export default async function DiscountedProducts() {
  const locale = await getLocale();
  const t = await getTranslations('homePage.discountedProducts');

  const discountedProductsList = await fetchSanityData(
    allDiscountedProductsQuery,
    {
      lang: locale,
    }
  );

  if (!discountedProductsList || !discountedProductsList.length) return null;

  return (
    <section className="pt-20 xl:pt-[158px]">
      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ scale: 0.9, delay: 1.2 })}
          className="xl:hidden absolute top-[-49px] right-[-84px]"
        >
          <Image
            src="/images/homePage/discountedProducts/figureRightMob.svg"
            alt="figure background"
            width="125"
            height="179"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ scale: 0.9, delay: 1.2 })}
          className="xl:hidden absolute bottom-[-340px] left-[-82px]"
        >
          <Image
            src="/images/homePage/discountedProducts/figureLeftMob.svg"
            alt="figure background"
            width="120"
            height="69"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ scale: 0.9, delay: 1.2 })}
          className="hidden xl:block absolute -z-10 top-[-106px] right-[26px]"
        >
          <Image
            src="/images/homePage/discountedProducts/figureDesk.svg"
            alt="figure background"
            width="456"
            height="389"
          />
        </motion.div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 mb-6 xl:mb-12">
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
        </div>
      </Container>
      <Suspense fallback={<Loader />}>
        <DiscountedProductsSLider
          discountedProductsList={discountedProductsList}
        />
      </Suspense>
    </section>
  );
}
