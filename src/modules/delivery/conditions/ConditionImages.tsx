import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function ConditionImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="xl:hidden absolute -z-10 top-[-32px] left-[-69px]"
      >
        <Image
          src="/images/deliveryPage/conditions/figureLeftMob.svg"
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
        className="xl:hidden absolute -z-10 bottom-[142px] right-[-14px]"
      >
        <Image
          src="/images/deliveryPage/conditions/figureRightMob.svg"
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
        className="hidden xl:block absolute -z-10 bottom-[-277px] left-[-168px]"
      >
        <Image
          src="/images/deliveryPage/conditions/figureLeftDesk.svg"
          alt="background"
          width="276"
          height="420"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="hidden xl:block absolute -z-10 bottom-[-340px] right-[-218px]"
      >
        <Image
          src="/images/deliveryPage/conditions/figureRightDesk.svg"
          alt="background"
          width="331"
          height="392"
        />
      </motion.div>
    </>
  );
}
