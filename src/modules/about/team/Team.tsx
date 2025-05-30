import { useTranslations } from 'next-intl';
import Container from '@/shared/components/container/Container';
import TeamList from './TeamList';
import { Suspense } from 'react';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Loader from '@/shared/components/loader/Loader';
import TeamImages from './TeamImages';

export default function Team() {
  const t = useTranslations('aboutPage.team');

  return (
    <section className="pt-8 xl:pt-14">
      <Container className="relative">
        <TeamImages />
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ y: 30 })}
          className="mb-6 xl:mb-10 text-[18px] xl:text-[32px] font-semibold xl:font-medium leading-[140%] uppercase"
        >
          {t('title')}
        </motion.h2>
        <Suspense fallback={<Loader />}>
          <TeamList />
        </Suspense>
      </Container>
    </section>
  );
}
