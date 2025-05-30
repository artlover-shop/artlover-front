import Image from 'next/image';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import DeliveryList from './DeliveryList';

export default function WorldwideDelivery() {
  const t = useTranslations('deliveryPage.deliveryWorldwide');

  return (
    <section className="pt-20 xl:pt-[150px] xl:pb-20">
      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
          className="hidden xl:block absolute -z-10 bottom-[-60px] right-[-70px]"
        >
          <Image
            src="/images/deliveryPage/worldwideDelivery/figureRightDesk.svg"
            alt="background"
            width="619"
            height="437"
          />
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ y: 30 })}
          className="mb-3 xl:mb-5 text-[20px] xl:text-[32px] font-medium leading-[120%] uppercase text-center"
        >
          {t('title')}
        </motion.h2>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ y: 30, delay: 0.4 })}
          className="mb-8 xl:mb-[30px] text-[14px] xl:text-[20px] font-medium leading-[120%] text-center"
        >
          {t('subtitle')}
        </motion.h3>
        <DeliveryList />
      </Container>
    </section>
  );
}
