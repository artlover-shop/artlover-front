import Container from '@/shared/components/container/Container';
import { Suspense } from 'react';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import SocialsList from './SocialsList';
import Loader from '../loader/Loader';

export default function Socials() {
  const t = useTranslations('homePage.socials');

  return (
    <section className="py-20 xl:pt-[70px] xl:pb-[140px]">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInAnimation({ y: 30 })}
          className="mb-8 xl:mb-10 text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase text-center"
        >
         {t("title")}
        </motion.h2>
        <Suspense fallback={<Loader />}>
          <SocialsList />
        </Suspense>
      </Container>
    </section>
  );
}
