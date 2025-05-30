import Image from 'next/image';
import { Suspense } from 'react';
import * as motion from 'motion/react-client';
import { getLocale, getTranslations } from 'next-intl/server';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import NewProductsSlider from './NewProductsSlider';
import Loader from '@/shared/components/loader/Loader';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { allNewProductsQuery } from '@/shared/lib/queries';

export default async function NewProducts() {
  const locale = await getLocale();
  const t = await getTranslations('homePage.newProducts');

  const newProductsList = await fetchSanityData(allNewProductsQuery, {
    lang: locale,
  });

  if (!newProductsList || !newProductsList.length) return null;

  return (
    <section className="pt-20 xl:pt-[158px]">
      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInAnimation({ scale: 0.9, delay: 1.2 })}
          className="xl:hidden absolute top-[-96px] right-[-54px]"
        >
          <Image
            src="/images/homePage/newProducts/figureRightMob.svg"
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
          className="xl:hidden absolute bottom-[-384px] left-[-62px]"
        >
          <Image
            src="/images/homePage/newProducts/figureLeftMob.svg"
            alt="figure background"
            width="120"
            height="69"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInAnimation({ scale: 0.9, delay: 1.2 })}
          className="hidden xl:block -z-10 absolute top-[-33px] left-[calc(50%-267px)]"
        >
          <Image
            src="/images/homePage/newProducts/figureCenterDesk.svg"
            alt="figure background"
            width="470"
            height="313"
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
        <NewProductsSlider newProductsList={newProductsList} />
      </Suspense>
    </section>
  );
}
