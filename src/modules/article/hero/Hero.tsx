import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import { Article } from '@/types/article';
import Image from 'next/image';

interface HeroProps {
  article: Article;
}

export default function Hero({ article }: HeroProps) {
  const { title, subtitle } = article;
  return (
    <section>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({})}
          className="relative z-10 px-[21px] xl:px-[314px] py-[43px] md:py-[82px] bg-dark text-white rounded-[8px] xl:rounded-[16px] overflow-hidden"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ duration: 2 })}
            className='className="hidden xs:hidden absolute inset-0 -z-10"'
          >
            <Image
              src="/images/articlePage/hero/bgImagesMob.svg"
              alt="background"
              fill
              sizes="100vw"
              className="xs:hidden object-cover -z-10"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ duration: 2 })}
            className="hidden xs:block absolute inset-0 -z-10"
          >
            <Image
              src="/images/articlePage/hero/bgImagesDesk.svg"
              alt="background"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ y: 30 })}
            className="mb-2 text-[20px] md:text-[32px] xl:text-[40px] font-medium leading-[120%] uppercase text-center xl:text-left"
          >
            {title}
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ y: 30, delay: 0.4 })}
            className="text-[14px] md:text-[16px] font-light leading-[120%] text-center xl:text-justify"
          >
            {subtitle}
          </motion.h2>
        </motion.div>
      </Container>
    </section>
  );
}
