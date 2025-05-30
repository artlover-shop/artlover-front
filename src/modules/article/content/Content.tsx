import Image from 'next/image';
import * as motion from 'motion/react-client';
import {
  fadeInAnimation,
  listVariants,
  listItemVariants,
} from '@/shared/utils/animationVariants';
import { Article } from '@/types/article';
import Container from '@/shared/components/container/Container';
import ContentImages from './ContentImages';

interface ContentProps {
  article: Article;
}

export default function Content({ article }: ContentProps) {
  const { description, text, images } = article;
  return (
    <section className="pt-8 xl:pt-12 pb-20 xl:pb-35">
      <Container className="relative">
        <ContentImages />
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ y: 30 })}
          className="mb-4 xl:pb-6 text-[14px] xl:text-[16px] font-semibold leading-[120%]"
        >
          {description}
        </motion.h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.4 }}
          variants={listVariants({
            staggerChildren: 0.4,
            delayChildren: 0.8,
          })}
          className="flex flex-col gap-4 xl:gap-6 mb-8 xl:mb-12"
        >
          {text.map((paragraph, idx) => (
            <motion.li
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              key={idx}
              className="text-[12px] xl:text-[16px] font-normal leading-[160%] text-justify"
            >
              {paragraph}
            </motion.li>
          ))}
        </motion.ul>
        <div className="flex flex-col md:flex-row gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ x: -30, delay: 0.4 })}
            className="relative w-full md:w-[calc(50%-12px)] h-[181px] md:h-[229px] xl:h-[329px] rounded-[16px] overflow-hidden shadow-social"
          >
            <Image
              src={images[0]}
              alt={'article image'}
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ x: 30, delay: 0.4 })}
            className="relative md:w-[calc(50%-12px)] h-[181px] md:h-[229px] xl:h-[329px] rounded-[16px] overflow-hidden shadow-social"
          >
            <Image
              src={images[1]}
              alt={'article image'}
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
