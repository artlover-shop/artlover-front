import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function CallbackImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="md:hidden absolute -z-10 top-[50px] left-[-59px]"
      >
        <Image
          src="/images/contactsPage/callback/figureLeftMob.svg"
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
        className="hidden xl:block absolute -z-10 top-[302px] left-[-100px]"
      >
        <Image
          src="/images/contactsPage/callback/figureLeftDesk.svg"
          alt="background"
          width="422"
          height="268"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="hidden xl:block absolute -z-10 top-[300px] right-[-14px]"
      >
        <Image
          src="/images/contactsPage/callback/figureRightDesk.svg"
          alt="background"
          width="422"
          height="268"
        />
      </motion.div>
    </>
  );
}
