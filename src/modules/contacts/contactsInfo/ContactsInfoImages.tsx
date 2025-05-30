import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function ContactsInfoImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="xl:hidden absolute -z-10 top-[-62px] left-[-69px]"
      >
        <Image
          src="/images/contactsPage/contactsInfo/figureLeftMob.svg"
          alt="background"
          width="127"
          height="533"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="xl:hidden absolute -z-10 top-[178px] right-[-24px]"
      >
        <Image
          src="/images/contactsPage/contactsInfo/figureRightMob.svg"
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
        className="hidden xl:block absolute -z-10 top-[-232px] left-[-169px]"
      >
        <Image
          src="/images/contactsPage/contactsInfo/figureLeftDesk.svg"
          alt="background"
          width="310"
          height="403"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="hidden xl:block absolute -z-10 top-[-210px] right-[-124px]"
      >
        <Image
          src="/images/contactsPage/contactsInfo/figureRightDesk.svg"
          alt="background"
          width="341"
          height="441"
        />
      </motion.div>
    </>
  );
}
