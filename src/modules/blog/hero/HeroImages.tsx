import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function HeroImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({})}
        className="md:hidden absolute -z-10 top-0 left-0 h-full"
      >
        <Image
          src="/images/blogPage/hero/figureLeftMob.svg"
          alt="background"
          width="224"
          height="152"
          className="w-auto h-full"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 0.8, duration: 2 })}
        className="md:hidden absolute -z-20 top-0 right-0 h-full"
      >
        <Image
          src="/images/blogPage/hero/figureRightMob.svg"
          alt="background"
          width="296"
          height="154"
          className="w-auto h-full"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({})}
        className="hidden md:block absolute -z-10 top-0 md:left-[-120px] lg:left-[-70px] xl:left-0 h-full"
      >
        <Image
          src="/images/blogPage/hero/figureLeftDesk.svg"
          alt="background"
          width="550"
          height="305"
          className="w-auto h-full"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 0.8, duration: 2 })}
        className="hidden md:block absolute -z-20 top-[14px] right-0 h-full"
      >
        <Image
          src="/images/blogPage/hero/figureRightDesk.svg"
          alt="background"
          width="1100"
          height="279"
          className="w-auto h-full object-cover"
        />
      </motion.div>
    </>
  );
}
