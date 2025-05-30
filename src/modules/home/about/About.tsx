import Container from '@/shared/components/container/Container';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import BenefitsList from './BenefitsList';
import AboutImages from './AboutImages';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function About() {
  const t = useTranslations('homePage.about');

  return (
    <section className="relative pt-20 xl:pt-[138px]">
      <Container className="relative md:flex gap-x-5">
        <AboutImages />
        <div className="md:w-[57.5%] flex flex-col justify-between">
          <div>
            <div className="flex justify-between gap-x-4 xl:gap-x-9 mb-0.5 xl:mb-5">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInAnimation({ y: 30 })}
                className="text-[24px] xl:text-[48px] font-medium leading-[120%] uppercase"
              >
                {t('title')}
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInAnimation({ y: 30, delay: 0.4 })}
                className="text-[14px] xl:text-[20px] font-light leading-[120%] text-justify"
              >
                {t('description')}
              </motion.p>
            </div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInAnimation({ x: -30, delay: 0.8 })}
              className="mb-5 font-denistina text-[14px] xl:text-[36px] font-normal leading-[120%] text-orange text-right"
            >
              {t('cta')}
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({
              scale: 0.9,
              delay: 0.8,
              duration: 1.5,
            })}
            className="relative aspect-[296/169] mb-3 md:mb-0 rounded-[10px] xl:rounded-[16px] overflow-hidden shadow-social"
          >
            <Image
              src="/images/homePage/about/imageOne.webp"
              alt="background"
              fill
              className="object-cover object-[center_63%]"
            />
          </motion.div>
        </div>
        <div className="md:w-[calc(42.5%-20px)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({
              scale: 0.9,
              delay: 0.8,
              duration: 1.5,
            })}
            className="hidden md:block relative mb-5 aspect-[447/385] xl:aspect-[447/445] rounded-[10px] xl:rounded-[16px] shadow-social overflow-hidden"
          >
            <Image
              src="/images/homePage/about/imageTwo.webp"
              alt="background"
              fill
              className="object-cover"
            />
          </motion.div>
          <BenefitsList />
        </div>
      </Container>
    </section>
  );
}
