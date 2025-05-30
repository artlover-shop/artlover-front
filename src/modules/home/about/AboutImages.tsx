import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function AboutImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="xl:hidden absolute -z-10 top-[90px] left-[-56px]"
      >
        <Image
          src="/images/homePage/about/figureLeftMob.svg"
          alt="background"
          width="121"
          height="79"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="xl:hidden absolute -z-10 top-[-60px] right-[-35px]"
      >
        <Image
          src="/images/homePage/about/figureRightMob.svg"
          alt="background"
          width="93"
          height="114"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="hidden xl:block absolute -z-10 top-[78px] left-[calc(50%-857px)]"
      >
        <Image
          src="/images/homePage/about/figureLeftDesk.svg"
          alt="background"
          width="412"
          height="356"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="hidden xl:block absolute -z-10 top-[-85px] right-[calc(50%-730px)]"
      >
        <Image
          src="/images/homePage/about/figureRightDesk.svg"
          alt="background"
          width="350"
          height="366"
        />
      </motion.div>
    </>
  );
}
