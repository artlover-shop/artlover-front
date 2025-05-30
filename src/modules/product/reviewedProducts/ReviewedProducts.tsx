import { useTranslations } from 'next-intl';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import ReviewedProductsSlider from './ReviewedProductsSLider';

export default function ReviewedProducts() {
  const t = useTranslations('productPage.reviewedSection');

  return (
    <section className="pb-20 xl:pb-[140px]">
      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
          className="hidden xl:block absolute top-[-72px] right-[-37px]"
        >
          <Image
            src="/images/productPage/reviewedProducts/figureRightDesk.svg"
            alt="background"
            width="136"
            height="190"
          />
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInAnimation({ y: 30 })}
          className="mb-6 xl:mb-5 text-[18px] font-semibold leading-[140%] xl:text-[40px] xl:font-medium xl:leading-[120%] uppercase"
        >
          {t('title')}
        </motion.h2>
        <ReviewedProductsSlider />
      </Container>
    </section>
  );
}
