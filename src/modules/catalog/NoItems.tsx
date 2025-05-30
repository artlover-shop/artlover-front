import { useTranslations } from 'next-intl';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function NoItems() {
  const t = useTranslations('catalogPage');
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30 })}
      className="py-25 text-[14px] xl:text-[18px] text-light leading-[120%] text-center text-gray-light"
    >
      {t('noItems')}
    </motion.p>
  );
}
