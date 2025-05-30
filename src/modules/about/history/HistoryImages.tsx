import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function HistoryImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ scale: 0.9, delay: 1.2 })}
        className="xl:hidden absolute -z-10 bottom-[32px] left-[-59px]"
      >
        <Image
          src="/images/aboutPage/history/figureLeftMob.svg"
          alt="background"
          width="114"
          height="92"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ scale: 0.9, delay: 1.2 })}
        className="hidden xl:block absolute -z-10 top-[-152px] left-[-239px]"
      >
        <Image
          src="/images/aboutPage/history/figureLeftDesk.svg"
          alt="background"
          width="806"
          height="1344"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ scale: 0.9, delay: 1.2 })}
        className="hidden xl:block absolute -z-10 top-[-90px] right-[-139px]"
      >
        <Image
          src="/images/aboutPage/history/figureRightDesk.svg"
          alt="background"
          width="563"
          height="2054"
        />
      </motion.div>
    </>
  );
}
