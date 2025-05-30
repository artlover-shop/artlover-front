import { useTranslations } from 'next-intl';
import Container from '@/shared/components/container/Container';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function Hero() {
  const t = useTranslations('favoritesPage');

  return (
    <section>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({})}
          className="relative z-10 flex flex-col md:flex-col-reverse justify-end items-end md:items-start p-3 md:p-8 bg-dark text-white 
        rounded-[8px] xl:rounded-[16px] overflow-hidden"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ duration: 2 })}
            className="md:hidden absolute -z-10 top-0 left-0"
          >
            <Image
              src="/images/favoritesPage/hero/figureMob.svg"
              alt="background"
              width="197"
              height="81"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ duration: 2 })}
            className="hidden md:block absolute -z-10 top-0 md:right-[-240px] lg:right-[-100px] xl:right-0"
          >
            <Image
              src="/images/favoritesPage/hero/figureDesk.svg"
              alt="background"
              width="786"
              height="196"
              className="h-full w-auto object-cover"
            />
          </motion.div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ x: -30 })}
            className="mt-[83px] md:mt-0 mb-3 md:mb-0 text-[20px] md:text-[32px] xl:text-[40px] font-medium leading-[120%] uppercase"
          >
            {t('title')}
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ x: 30 })}
            className="md:pt-[57px] md:mb-2 text-[14px] xl:text-[16px] font-light leading-[120%]"
          >
            {t('description')}
          </motion.h2>
        </motion.div>
      </Container>
    </section>
  );
}
