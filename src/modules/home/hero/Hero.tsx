import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import HeroSlider from './HeroSlider';
import { Banner } from '@/types/banner';
import { Suspense } from 'react';
import Loader from '@/shared/components/loader/Loader';

interface HeroProps {
  banners: Banner[];
}

export default function Hero({ banners }: HeroProps) {
  return (
    <section className="relative">
      <Suspense fallback={<Loader />}>
        <HeroSlider banners={banners} />
      </Suspense>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 0.7, scale: 0.9 })}
        className="hidden xl:block z-10 absolute top-[-99px] right-[calc(50%-135px)] h-[99px] overflow-hidden"
      >
        <Image
          src="/images/navbar/figureCenterDesk.svg"
          alt="figure background"
          width="227"
          height="109"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1 })}
        className="hidden xl:block absolute -z-10 xl:bottom-[15px] right-[0px]"
      >
        <Image
          src="/images/homePage/hero/figureRightBottomDesk.svg"
          priority
          alt="background figures"
          width="348"
          height="322"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1 })}
        className="hidden xl:block absolute -z-10 xl:bottom-[-78px] left-0"
      >
        <Image
          src="/images/homePage/hero/figureLeftBottomDesk.svg"
          priority
          alt="background figures"
          width="222"
          height="464"
        />
      </motion.div>
    </section>
  );
}
