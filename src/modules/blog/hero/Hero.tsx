import { useTranslations } from 'next-intl';
import Container from '@/shared/components/container/Container';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import HeroImages from './HeroImages';

export default function Hero() {
  const t = useTranslations('blogPage');

  return (
    <section>
      <Container>
        <div className="relative z-10 px-3 md:px-10 py-7 md:py-[82px] bg-dark text-white rounded-[8px] xl:rounded-[16px] overflow-hidden">
          <HeroImages />
          <motion.h1
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ y: 30 })}
            className="mb-2 xl:mb-3 text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] font-medium leading-[120%] uppercase"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ scale: 0.9, delay: 0.4 })}
            className="max-w-[179px] md:max-w-[260px] text-[12px] md:text-[16px] font-light leading-[120%] xl:leading-[126%] md:text-justify"
          >
            {t('description')}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
