import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function CatalogImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="xl:hidden absolute -z-10 top-[-35px] left-[-99px]"
      >
        <Image
          src="/images/catalog/figureLeftMob.svg"
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
        className="xl:hidden absolute -z-10 bottom-[-105px] left-[-85px]"
      >
        <Image
          src="/images/catalog/figureLeftBottomMob.svg"
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
        className="xl:hidden absolute -z-10 bottom-[32px] right-[-58px]"
      >
        <Image
          src="/images/catalog/figureRightMob.svg"
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
        className="hidden xl:block absolute -z-10 top-[-320px] left-[-450px]"
      >
        <Image
          src="/images/catalog/figureTopLeftDesk.svg"
          alt="background"
          width="371"
          height="379"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="hidden xl:block absolute -z-10 top-[590px] left-[-160px]"
      >
        <Image
          src="/images/catalog/figureMiddleDesk.svg"
          alt="background"
          width="371"
          height="379"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="hidden xl:block absolute -z-10 top-[120px] right-[-400px]"
      >
        <Image
          src="/images/catalog/figureRightTopDesk.svg"
          alt="background"
          width="371"
          height="379"
        />
      </motion.div>
    </>
  );
}
