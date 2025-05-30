import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import HeroImages from './HeroImages';

export default function Hero() {
  const t = useTranslations('contactsPage.hero');

  return (
    <section>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({})}
          className="relative z-10 flex flex-col items-end justify-between py-2 md:pt-5 lg:pt-8 md:pb-5 lg:pb-7 px-3 md:px-20 lg:px-25 xl:px-[130.5px] bg-dark rounded-[8px] xl:rounded-[16px] text-white overflow-hidden"
        >
          <HeroImages />
          <div className="max-w-[245px] md:max-w-[345px] xl:max-w-[435px] mb-8 md:mb-[43px]">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInAnimation({ scale: 0.9, delay: 0.4 })}
              className="mb-2 md:mb-[13px] text-[20px] md:text-[32px] xl:text-[40px] font-medium leading-[120%] uppercase text-center"
            >
              {t('title')}
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInAnimation({ y: 30, delay: 0.8 })}
              className="mb-2 md:mb-3 text-[14px] md:text-[16px] xl:text-[20px] font-semibold leading-[120%] xl:leading-[160%] text-center"
            >
              {t('subtitle')}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInAnimation({ y: 30, delay: 1.2 })}
              className="md:max-w-[240px] xl:max-w-[311px] xl:mx-auto text-[14px] xl:text-[18px] font-light leading-[120%] xl:leading-[160%] text-center"
            >
              {t('description')}
            </motion.p>
          </div>
          <motion.p
            style={{ wordSpacing: '8px' }}
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ x: -30, delay: 1.6 })}
            className="lg:mx-auto font-denistina text-[16px] md:text-[24px] xl:text-[32px] font-normal leading-[120%] xl:text-center"
          >
            {t('slogan')}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
