import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function ConfirmationImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="lg:hidden absolute -z-10 top-[-32px] left-[-69px]"
      >
        <Image
          src="/images/confirmationPage/figureLeftMob.svg"
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
        className="lg:hidden absolute -z-10 top-[16px] right-[-34px]"
      >
        <Image
          src="/images/confirmationPage/figureRightMob.svg"
          alt="background"
          width="114"
          height="92"
        />
      </motion.div>
    </>
  );
}
