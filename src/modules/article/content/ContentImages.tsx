import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function ContentImages() {
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
          src="/images/articlePage/content/figureLeftTopMob.svg"
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
        className="xl:hidden absolute -z-10 top-[423px] right-[-20px]"
      >
        <Image
          src="/images/articlePage/content/figureRightMob.svg"
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
        className="xl:hidden absolute -z-10 top-[488px] left-[-54px]"
      >
        <Image
          src="/images/articlePage/content/figureLeftBottomMob.svg"
          alt="background"
          width="114"
          height="92"
        />
      </motion.div>
    </>
  );
}
