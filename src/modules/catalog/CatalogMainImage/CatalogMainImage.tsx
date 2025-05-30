import Image from 'next/image';
import { Product } from '@/types/product';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

interface CatalogMainBannerProps {
  categoryProducts: {
    categorySlug: string;
    categoryTitle: string;
    categorySubtitle: string;
    bannerColor: 'dark' | 'light';
    bannerImages: {
      mobileLeft: {
        url: string;
        width: number;
        height: number;
      };
      mobileRight: {
        url: string;
        width: number;
        height: number;
      };
      desktopLeft: {
        url: string;
        width: number;
        height: number;
      };
      desktopRight: {
        url: string;
        width: number;
        height: number;
      };
    };
    subcategories?: [
      {
        subcategorySlug: string;
        subcategoryTitle: string;
        products: Product[];
      },
    ];
    products?: Product[];
  };
}

const CatalogMainBanner = ({ categoryProducts }: CatalogMainBannerProps) => {
  if (!categoryProducts) return null;

  const {
    categoryTitle,
    categorySubtitle,
    bannerColor,
    bannerImages,
    categorySlug,
  } = categoryProducts;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30 })}
      className={`relative flex flex-col justify-end p-3 xl:px-8 xl:py-7 z-10 mb-[24px] md:mb-[32px] h-25 xs:h-30 sm:h-40 xl:h-[196px] rounded-[8px] xl:rounded-[16px] border border-dark overflow-hidden ${bannerColor === 'dark' ? 'bg-dark' : 'bg-white'}`}
    >
      <Image
        src={bannerImages?.mobileLeft?.url}
        alt="background"
        style={{ width: bannerImages.mobileLeft?.width / 2 }}
        className={`absolute left-0 -z-10 md:hidden h-auto ${categorySlug === 'khudozhni-tovari' ? 'bottom-0' : 'top-0'}`}
        width={bannerImages?.mobileLeft?.width}
        height={bannerImages?.mobileLeft?.height}
      />
      <Image
        src={bannerImages.mobileRight.url}
        alt="background"
        className="absolute top-0 right-0 -z-10 md:hidden w-auto h-full"
        width={bannerImages.mobileRight?.width}
        height={bannerImages.mobileRight?.height}
      />
      <Image
        src={bannerImages.desktopLeft.url}
        alt="background"
        style={{ width: bannerImages.desktopLeft?.width / 2 }}
        className="absolute top-0 left-0 -z-10 hidden md:block h-auto"
        width={bannerImages.desktopLeft?.width}
        height={bannerImages.desktopLeft?.height}
      />
      <Image
        src={bannerImages.desktopRight?.url}
        alt="background"
        className="absolute top-0 right-0 -z-10 hidden md:block w-auto h-full"
        width={bannerImages.desktopRight?.width}
        height={bannerImages.desktopRight?.height}
      />
      <p
        style={{ wordSpacing: '8px' }}
        className={`mb-1 md:mb-6 font-denistina text-[14px] xs:text-[24px] xl:text-[32px] font-normal leading-[120%] xl:text-center ${bannerColor === 'dark' ? 'text-white' : 'text-dark'}`}
      >
        {categorySubtitle}
      </p>
      <h2
        className={`text-[14px] xs:text-[24px] xl:text-[40px] font-semibold xl:font-medium leading-[140%] xl:leading-[120%] uppercase ${bannerColor === 'dark' ? 'text-white' : 'text-dark'}`}
      >
        {categoryTitle}
      </h2>
    </motion.div>
  );
};

export default CatalogMainBanner;
