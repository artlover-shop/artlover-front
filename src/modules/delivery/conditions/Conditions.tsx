import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import { listVariants } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import ConditionItem from './ConditionItem';
import ConditionImages from './ConditionImages';

export default function Conditions() {
  const t = useTranslations('deliveryPage.conditions');

  const conditionsList = [t('one'), t('two'), t('three'), t('four'), t('five')];
  return (
    <section className="pt-8 xl:pt-20">
      <Container className="relative">
        <ConditionImages />
        <motion.ul
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.4 }}
          variants={listVariants({ staggerChildren: 0.4, delayChildren: 0.8 })}
          className="flex flex-col md:flex-wrap justify-between gap-y-6 xl:gap-y-10 gap-x-20 md:h-[216px] lg:h-[166px] xl:h-[335px]"
        >
          {conditionsList.map((condition, idx) => (
            <ConditionItem key={idx} condition={condition} />
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
