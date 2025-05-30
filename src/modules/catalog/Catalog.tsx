'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { sortProducts } from '@/shared/utils/sortProducts';
import CatalogFilters from './CatalogFilters/CatalogFilters';
import CatalogMainImage from './CatalogMainImage/CatalogMainImage';
import CatalogProducts from './CatalogProducts/CatalogProducts';
import Container from '@/shared/components/container/Container';
import { Product } from '@/types/product';
import TabMenu from './CatalogCategories/TabMenu';
import NoItems from './NoItems';
import CatalogSorting from './CatalogSorting/CatalogSorting';
import { filterProducts } from '@/shared/utils/filterProducts';
import { parseFiltersFromSearchParams } from '@/shared/utils/parseFiltersFromSearchParams';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Image from 'next/image';
import CatalogFiltersModal from './CatalogFilters/CatalogFiltersModal';

export interface FiltersState {
  type?: string[];
  profession?: string[];
  ageFrom?: number;
  ageTo?: number;
  priceFrom?: number;
  priceTo?: number;
}

interface CatalogProps {
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
  professions: { title: string; value: string }[];
}

const SECTION_ID = 'catalog-page-products-list';

const Catalog = ({ categoryProducts, professions }: CatalogProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const subcategories = categoryProducts?.subcategories || [];

  const hasSubcategories = subcategories?.length > 0;

  const defaultSubcategory = hasSubcategories
    ? subcategories[0]?.subcategorySlug
    : '';

  const [activeTab, setActiveTab] = useState(defaultSubcategory || '');

  const handleApplyFilters = (filters: FiltersState) => {
    const params = new URLSearchParams(searchParams.toString());

    if (filters.type && filters.type.length > 0)
      params.set('type', filters.type.join(','));
    else params.delete('type');

    if (filters.profession && filters.profession.length > 0) {
      params.set('profession', filters.profession.join(','));
    } else {
      params.delete('profession');
    }

    if (filters.ageFrom !== undefined && filters.ageFrom !== null) {
      params.set('ageFrom', String(filters.ageFrom));
    } else {
      params.delete('ageFrom');
    }

    if (filters.ageTo !== undefined && filters.ageTo !== null) {
      params.set('ageTo', String(filters.ageTo));
    } else {
      params.delete('ageTo');
    }

    if (filters.priceFrom !== undefined && filters.priceFrom !== null) {
      params.set('priceFrom', String(filters.priceFrom));
    } else {
      params.delete('priceFrom');
    }

    if (filters.priceTo !== undefined && filters.priceTo !== null) {
      params.set('priceTo', String(filters.priceTo));
    } else {
      params.delete('priceTo');
    }
    params.set('page', '1');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    if (!hasSubcategories) return;

    const currentParam = searchParams.get('subcategory');
    if (currentParam && currentParam !== activeTab) {
      setActiveTab(currentParam);
    }
  }, [searchParams, activeTab, hasSubcategories]);

  useEffect(() => {
    if (!hasSubcategories) return;

    const currentParam = searchParams.get('subcategory');
    if (!currentParam && defaultSubcategory) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('subcategory', defaultSubcategory);
      router.replace(`?${params.toString()}`, { scroll: false });
    }
  }, [searchParams, defaultSubcategory, router, hasSubcategories]);

  const currentSubcategory = subcategories.find(
    subcategory => subcategory.subcategorySlug === activeTab
  );

  const currentProducts =
    currentSubcategory?.products || categoryProducts?.products;

  const sortParam = searchParams.get('sort') || 'rating';

  const filters = parseFiltersFromSearchParams(searchParams);
  const filteredProducts = currentProducts
    ? filterProducts(currentProducts, filters)
    : [];

  const sortedProducts = filteredProducts
    ? sortProducts(filteredProducts, sortParam)
    : [];

  return (
    <section className="relative pb-20 xl:pb-[140px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="hidden xl:block absolute -z-10 bottom-[430px] right-[0px]"
      >
        <Image
          src="/images/catalog/figureRightBottomDesk.svg"
          alt="background"
          width="371"
          height="379"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="hidden xl:block absolute -z-10 bottom-[-120px] left-[-15px]"
      >
        <Image
          src="/images/catalog/figureLeftBottomDesk.svg"
          alt="background"
          width="371"
          height="379"
        />
      </motion.div>
      <Container className="flex gap-[20px] items-start">
        <div className="hidden lg:block w-1/4 min-w-[260px]">
          <CatalogFilters
            activeTab={activeTab}
            onApplyFilters={handleApplyFilters}
            professions={professions}
          />
        </div>
        <div id={SECTION_ID} className="w-full lg:w-3/4">
          <CatalogMainImage categoryProducts={categoryProducts} />
          {hasSubcategories && (
            <TabMenu
              categoryProducts={categoryProducts}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ y: 30, delay: 0.2 })}
            className="flex items-center gap-4 mb-8 relative z-20"
          >
            <button
              type="button"
              onClick={() => setIsOpenFilter(true)}
              className="lg:hidden cursor-pointer outline-none"
            >
              <Image
                src="/images/catalog/filter.svg"
                alt="sorting icon"
                width={32}
                height={32}
              />
            </button>
            <CatalogSorting />
          </motion.div>
          {sortedProducts?.length ? (
            <CatalogProducts
              activeTab={activeTab}
              currentProducts={sortedProducts}
              categorySlug={categoryProducts.categorySlug}
            />
          ) : (
            <NoItems />
          )}
        </div>
      </Container>
      <CatalogFiltersModal
        activeTab={activeTab}
        handleApplyFilters={handleApplyFilters}
        professions={professions}
        isOpen={isOpenFilter}
        onClose={() => setIsOpenFilter(false)}
      />
    </section>
  );
};

export default Catalog;
