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
        variants={fadeInAnimation({ delay: 0.8, duration: 2 })}
        className="md:hidden absolute -z-10 top-0 left-0"
      >
        <Image
          src="/images/contactsPage/hero/figureLeftMob.svg"
          alt="background"
          width="140"
          height="154"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({})}
        className="md:hidden absolute -z-10 top-0 right-0"
      >
        <Image
          src="/images/contactsPage/hero/figureRightMob.svg"
          alt="background"
          width="275"
          height="122"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 0.8, duration: 2 })}
        className="hidden md:block absolute -z-10 top-[14px] left-6"
      >
        <Image
          src="/images/contactsPage/hero/figureLeftDesk.svg"
          alt="background"
          width="418"
          height="277"
          className=" md:w-[300px] lg:w-[330px] xl:w-[418px] h-auto"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({})}
        className="hidden md:block absolute -z-10 top-0 right-0"
      >
        <Image
          src="/images/contactsPage/hero/figureRightDesk.svg"
          alt="background"
          width="671"
          height="236"
          className=" md:w-[460px] lg:w-[520px] xl:w-[671px] h-auto"
        />
      </motion.div>
    </>
  );
}
