import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function BlogListImages() {
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
          src="/images/blogPage/blogList/figureLeftTopMob.svg"
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
        className="xl:hidden absolute -z-10 top-[213px] right-[-20px]"
      >
        <Image
          src="/images/blogPage/blogList/figureRightMob.svg"
          alt="background"
          width="120"
          height="349"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="xl:hidden absolute -z-10 top-[722px] left-[-62px]"
      >
        <Image
          src="/images/blogPage/blogList/figureLeftBottomMob.svg"
          alt="background"
          width="114"
          height="92"
        />
      </motion.div>
    </>
  );
}
