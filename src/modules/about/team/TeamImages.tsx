import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function TeamImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ scale: 0.9, delay: 1.2 })}
        className="xl:hidden absolute -z-10 top-[-32px] left-[-69px]"
      >
        <Image
          src="/images/aboutPage/team/figureLeftMob.svg"
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
        variants={fadeInAnimation({ scale: 0.9, delay: 1.2 })}
        className="xl:hidden absolute -z-10 top-[209px] right-[-22px]"
      >
        <Image
          src="/images/aboutPage/team/figureRightMob.svg"
          alt="background"
          width="120"
          height="349"
        />
      </motion.div>
    </>
  );
}
