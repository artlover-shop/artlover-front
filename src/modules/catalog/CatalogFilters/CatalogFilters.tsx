'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import TypeFilters from './TypeFilters/TypeFilters';
import PriceFilter from './PriceFilter/PriceFilter';
import ProfessionFilter from './ProfessionFilter/ProfessionFilter';
import AgeFilter from './AgeFilter/AgeFilter';
import MainButton from '@/shared/components/buttons/MainButton';
import { useTranslations } from 'next-intl';

interface CatalogFiltersProps {
  onApplyFilters: (filters: FiltersState) => void;
  professions: { title: string; value: string }[];
  activeTab: string;
  onClose?: () => void;
}

export interface FiltersState {
  type: string[];
  profession: string[];
  ageFrom?: number;
  ageTo?: number;
  priceFrom?: number;
  priceTo?: number;
}

const CatalogFilters = ({
  onApplyFilters,
  professions,
  activeTab,
  onClose,
}: CatalogFiltersProps) => {
  const t = useTranslations('catalogPage.filter');
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<FiltersState>({
    type: [],
    profession: [],
  });

  useEffect(() => {
    if (!searchParams) return;

    // Зчитуємо параметри з URL
    const typeParam = searchParams.get('type');
    const professionParam = searchParams.get('profession');
    const ageFromParam = searchParams.get('ageFrom');
    const ageToParam = searchParams.get('ageTo');
    const priceFromParam = searchParams.get('priceFrom');
    const priceToParam = searchParams.get('priceTo');

    setFilters({
      type: typeParam ? typeParam.split(',') : [],
      profession: professionParam ? professionParam.split(',') : [],
      ageFrom: ageFromParam ? Number(ageFromParam) : undefined,
      ageTo: ageToParam ? Number(ageToParam) : undefined,
      priceFrom: priceFromParam ? Number(priceFromParam) : undefined,
      priceTo: priceToParam ? Number(priceToParam) : undefined,
    });
  }, [searchParams]);

  return (
    <motion.div
      key={activeTab}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ x: -30 })}
      className="w-full rounded-[16px] shadow px-[20px] py-[32px] bg-white"
    >
      <TypeFilters
        value={filters.type}
        onChange={type => setFilters(f => ({ ...f, type }))}
      />
      <PriceFilter
        from={filters.priceFrom}
        to={filters.priceTo}
        onChange={(priceFrom, priceTo) =>
          setFilters(f => ({ ...f, priceFrom, priceTo }))
        }
      />
      <ProfessionFilter
        professions={professions}
        value={filters.profession}
        onChange={profession => setFilters(f => ({ ...f, profession }))}
      />
      <AgeFilter
        from={filters.ageFrom ?? 0}
        to={filters.ageTo ?? 99}
        onChange={(ageFrom, ageTo) =>
          setFilters(f => ({ ...f, ageFrom, ageTo }))
        }
      />

      <MainButton
        className="h-12 mt-4"
        textStyles="text-[14px] xl:text-[16px]"
        onClick={() => {
          onApplyFilters(filters);
          if (onClose) {
            onClose();
          }
        }}
      >
        {t('button')}
      </MainButton>
    </motion.div>
  );
};

export default CatalogFilters;
