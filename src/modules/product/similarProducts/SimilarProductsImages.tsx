import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function SimilarProductsImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="xl:hidden absolute top-[82px] left-[-56px] -z-10"
      >
        <Image
          src="/images/productPage/similarProducts/figureLeftMob.svg"
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
        className="xl:hidden absolute top-[-108px] right-[-20px] -z-10"
      >
        <Image
          src="/images/productPage/similarProducts/figureRightMob.svg"
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
        className="hidden xl:block absolute top-[-258px] right-[-87px] -z-10"
      >
        <Image
          src="/images/productPage/similarProducts/figureRightDesk.svg"
          alt="background"
          width="235"
          height="232"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="hidden xl:block absolute top-[-98px] left-[-30px] -z-10"
      >
        <Image
          src="/images/productPage/similarProducts/figureLeftDesk.svg"
          alt="background"
          width="222"
          height="126"
        />
      </motion.div>
    </>
  );
}
