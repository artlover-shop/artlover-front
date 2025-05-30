import About from '@/modules/home/about/About';
import Bestsellers from '@/modules/home/bestsellers/Bestsellers';
import Categories from '@/modules/home/categories/Categories';
import DiscountedProducts from '@/modules/home/discountedProducts/DiscountedProducts';
import HelpChooseGift from '@/modules/home/helpChooseGift/HelpChooseGift';
import Hero from '@/modules/home/hero/Hero';
import NewProducts from '@/modules/home/newProducts/NewProducts';
import Reviews from '@/modules/home/reviews/Reviews';
import Socials from '@/shared/components/socials/Socials';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { allCategoriesQuery } from '@/shared/lib/queries';
import { Locale } from '@/types/locale';

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const categories = await fetchSanityData(allCategoriesQuery, {
    lang: locale,
  });

  return (
    <>
      <Hero />
      <Categories categories={categories} />
      <HelpChooseGift />
      <Bestsellers />
      <NewProducts />
      <DiscountedProducts />
      <About />
      <Reviews />
      <Socials />
    </>
  );
}
