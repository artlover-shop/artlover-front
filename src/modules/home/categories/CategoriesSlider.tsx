'use client';
import { useTranslations } from 'next-intl';
import { SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { Category } from '@/types/category';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import CategorySlideOneMob from './categoriesSlidesMob/CategorySlideOneMob';
import CategorySlideTwoMob from './categoriesSlidesMob/CategorySlideTwoMob';
import CategorySlideOneDesk from './categoriesSlidesDesk/CategorySlideOneDesk';
import CategorySlideTwoDesk from './categoriesSlidesDesk/CategorySlideTwoDesk';

interface CategoriesSliderProps {
  categories: Category[];
}

export default function CategoriesSlider({
  categories,
}: CategoriesSliderProps) {
  const t = useTranslations('header.catalogMenu');

  if (!categories) return null;

  const categoriesPartOne = [
    {
      title: categories[0].title,
      slug: categories[0].slug,
      description: categories[0].subtitle,
    },
    {
      title: categories[4].title,
      slug: categories[4].slug,
      description: categories[4].subtitle,
    },
    { slug: 'gifts', title: t('gifts'), description: t('giftsDescription') },
    {
      slug: 'new-products',
      title: t('newProducts'),
      description: t('newProductsDescription'),
    },
    {
      slug: 'discounts',
      title: t('discounts'),
      description: t('discountsDescription'),
    },
  ];
  const categoriesPartTwo = [
    {
      title: categories[1].title,
      slug: categories[1].slug,
      description: categories[1].subtitle,
    },
    {
      title: categories[6].title,
      slug: categories[6].slug,
      description: categories[6].subtitle,
    },
    {
      title: categories[2].title,
      slug: categories[2].slug,
      description: categories[2].subtitle,
    },
    {
      title: categories[3].title,
      slug: categories[3].slug,
      description: categories[3].subtitle,
    },
    {
      title: categories[5].title,
      slug: categories[5].slug,
      description: categories[5].subtitle,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30 })}
    >
      <SwiperWrapper
        swiperClassName="categories"
        breakpoints={{
          0: {
            slidesPerView: 'auto',
            spaceBetween: 16,
            centeredSlides: true,
          },
        }}
      >
        <SwiperSlide>
          <CategorySlideOneMob categories={categoriesPartOne} />
          <CategorySlideOneDesk categories={categoriesPartOne} />
        </SwiperSlide>
        <SwiperSlide>
          <CategorySlideTwoMob categories={categoriesPartTwo} />
          <CategorySlideTwoDesk categories={categoriesPartTwo} />
        </SwiperSlide>
      </SwiperWrapper>
    </motion.div>
  );
}
