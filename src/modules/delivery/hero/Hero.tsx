import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import HeroImages from './HeroImages';

export default function Hero() {
  const t = useTranslations('deliveryPage.hero');

  return (
    <section>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({})}
          className="relative z-10 pt-[19px] pb-3 xl:pt-9 xl:pb-[54px] px-[18px] xl:px-[192px] rounded-[8px] xl:rounded-[16px] overflow-hidden bg-dark text-white"
        >
          <HeroImages />
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ x: 30, delay: 1.2 })}
            className="mb-[45px] xl:mb-[91px] text-right font-denistina text-[16px] xl:text-[32px] font-normal leading-[120%]"
          >
            {t('slogan')}
          </motion.p>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ scale: 0.9, delay: 0.4 })}
            className="mb-2 xl:mb-4 text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase text-center"
          >
            {t('title')}
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ y: 30, delay: 0.8 })}
            className="max-w-[206px] xl:max-w-full mx-auto text-[14px] xl:text-[18px] font-light leading-[120%] text-center"
          >
            {t('description')}
          </motion.h2>
        </motion.div>
      </Container>
    </section>
  );
}
