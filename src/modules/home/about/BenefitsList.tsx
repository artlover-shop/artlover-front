import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import { listVariants } from '@/shared/utils/animationVariants';
import BenefitItem from './BenefitItem';

export default function BenefitsList() {
  const t = useTranslations('homePage.about.benefits');

  const benefitsList = [
    { value: '1000+', description: t('one') },
    { value: '900+', description: t('two') },
    { value: '1200+', description: t('three') },
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.4 }}
      variants={listVariants({ staggerChildren: 0.4, delayChildren: 0.8 })}
      className="flex gap-x-4"
    >
      {benefitsList.map((benefit, idx) => (
        <BenefitItem key={idx} benefit={benefit} />
      ))}
    </motion.ul>
  );
}
