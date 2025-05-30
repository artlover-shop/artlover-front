import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function UkraineDeliveryImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="xl:hidden absolute -z-10 top-[195px] left-[-59px]"
      >
        <Image
          src="/images/deliveryPage/ukraineDelivery/figureLeftMob.svg"
          alt="background"
          width="114"
          height="92"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="xl:hidden absolute -z-10 top-[-56px] right-[-20px]"
      >
        <Image
          src="/images/deliveryPage/ukraineDelivery/figureRightMob.svg"
          alt="background"
          width="114"
          height="92"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="hidden xl:block absolute -z-10 bottom-[-90px] right-[-120px]"
      >
        <Image
          src="/images/deliveryPage/ukraineDelivery/figureRightDesk.svg"
          alt="background"
          width="401"
          height="259"
        />
      </motion.div>
    </>
  );
}
