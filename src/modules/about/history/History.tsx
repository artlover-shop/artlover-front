import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import Image from 'next/image';
import HistoryImages from './HistoryImages';

export default function History() {
  const t = useTranslations('aboutPage.history');

  return (
    <section className="pt-20 xl:pt-30 xl:pb-[50px]">
      <Container className="relative">
        <HistoryImages />
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ y: 30 })}
          className="mb-6 xl:mb-16 text-[18px] xl:text-[32px] font-semibold xl:font-medium leading-[140%] uppercase"
        >
          {t('title')}
        </motion.h2>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-18 xl:gap-[114px] mb-6 md:mb-10 xl:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInAnimation({
              scale: 0.9,
              delay: 0.4,
              duration: 1.5,
            })}
            className="relative w-full md:w-[calc(45%-16px)] lg:w-[calc(45%-36px)] xl:w-[calc(46.3%-57px)] h-[212px] sm:h-[280px] md:h-[212px] xl:h-[320px] rounded-[8px] xl:rounded-[16px] overflow-hidden"
          >
            <Image
              src="/images/aboutPage/history/imageOne.webp"
              alt="picture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInAnimation({ y: 30, delay: 0.4 })}
            className="w-full md:w-[calc(55%-16px)] lg:w-[calc(55%-36px)] xl:lg:w-[calc(53.7%-57px)] text-[12px] xl:text-[18px] font-normal leading-[160%] text-justify"
          >
            {t('descriptionOne')}
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-4 md:gap-8 lg:gap-18 xl:gap-[114px] mb-6 md:mb-10 xl:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInAnimation({
              scale: 0.9,
              delay: 0.4,
              duration: 1.5,
            })}
            className="relative w-full md:w-[calc(45%-16px)] lg:w-[calc(45%-36px)] xl:w-[calc(46.3%-57px)] h-[212px] sm:h-[280px] md:h-[212px] xl:h-[320px] rounded-[8px] xl:rounded-[16px] overflow-hidden"
          >
            <Image
              src="/images/aboutPage/history/imageTwo.webp"
              alt="picture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInAnimation({ y: 30, delay: 0.4 })}
            className="w-full md:w-[calc(55%-16px)] lg:w-[calc(55%-36px)] xl:lg:w-[calc(53.7%-57px)] text-[12px] xl:text-[18px] font-normal leading-[160%] text-justify"
          >
            {t('descriptionTwo')}
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-18 xl:gap-[114px] mb-8 md:mb-12 xl:mb-25">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInAnimation({
              scale: 0.9,
              delay: 0.4,
              duration: 1.5,
            })}
            className="relative w-full md:w-[calc(45%-16px)] lg:w-[calc(45%-36px)] xl:w-[calc(46.3%-57px)] h-[212px] sm:h-[280px] md:h-[212px] xl:h-[320px] rounded-[8px] xl:rounded-[16px] overflow-hidden"
          >
            <Image
              src="/images/aboutPage/history/imageThree.webp"
              alt="picture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInAnimation({ y: 30, delay: 0.4 })}
            className="w-full md:w-[calc(55%-16px)] lg:w-[calc(55%-36px)] xl:lg:w-[calc(53.7%-57px)] text-[12px] xl:text-[18px] font-normal leading-[160%] text-justify"
          >
            {t('descriptionThree')}
          </motion.p>
        </div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInAnimation({ y: 30, delay: 0.4 })}
          className="text-[12px] xl:text-[18px] font-semibold leading-[160%]"
        >
          {t('thankYouOne')}
          <br /> {t('thankYouTwo')}
        </motion.p>
      </Container>
    </section>
  );
}
