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
          src="/images/deliveryPage/hero/figureLeftMob.svg"
          alt="background"
          width="144"
          height="154"
          className=" w-auto h-full object-cover"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({})}
        className="md:hidden absolute -z-10 bottom-0 left-[calc(50%-132px)]"
      >
        <Image
          src="/images/deliveryPage/hero/figureCenterMob.svg"
          alt="background"
          width="264"
          height="113"
          className=" w-[264px] h-auto object-cover"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 0.8, duration: 2 })}
        className="md:hidden absolute -z-20 right-2 top-5"
      >
        <Image
          src="/images/deliveryPage/hero/figureRightMob.svg"
          alt="background"
          width="82"
          height="69"
          className=" object-cover"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 0.8, duration: 2 })}
        className="hidden md:block absolute -z-10 top-0 xl:top-[14px] left-0 "
      >
        <Image
          src="/images/deliveryPage/hero/figureLeftDesk.svg"
          alt="background"
          width="410"
          height="277"
          className="w-auto h-full xl:h-[277px] object-cover"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({})}
        className="hidden md:block absolute -z-10 bottom-0 md:left-[calc(50%-192px)] xl:left-[calc(50%-377px)]"
      >
        <Image
          src="/images/deliveryPage/hero/figureCenterDesk.svg"
          alt="background"
          width="754"
          height="218"
          className=" md:w-[384px] xl:w-[754px] h-auto object-cover"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ duration: 2, delay: 0.8 })}
        className="hidden md:block absolute -z-20 right-2 md:right-[18px] top-5 md:top-[18px]"
      >
        <Image
          src="/images/deliveryPage/hero/figureRightDesk.svg"
          alt="background"
          width="320"
          height="270"
          className=" md:w-[150px] xl:w-[320px] h-auto object-cover"
        />
      </motion.div>
    </>
  );
}
