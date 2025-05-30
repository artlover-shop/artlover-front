import { fadeInAnimation } from '@/shared/utils/animationVariants';
import * as motion from 'motion/react-client';

import styles from './FooterColumn.module.scss';

const FooterColumn = ({ title, children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30, delay: 0.4 })}
      className="mb-[32px] xl:mb-0"
    >
      <p className={`${styles.title} mb-[24px] xl:mb-[32px]`}>{title}</p>
      {children}
    </motion.div>
  );
};

export default FooterColumn;
