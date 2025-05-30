'use client';

import DoubleRangeSlider from '../../../../shared/components/formComponents/DoubleRangeSlider/DoubleRangeSlider';
import { useTranslations } from 'next-intl';
import FilterLayout from '../FilterLayout/FilterLayout';

interface AgeFilterProps {
  from: number;
  to: number;
  onChange: (from: number, to: number) => void;
}

const AgeFilter = ({ from, to, onChange }: AgeFilterProps) => {
  const t = useTranslations('catalogPage.filter');

  return (
    <FilterLayout title={t('age')}>
      <DoubleRangeSlider
        min={0}
        max={99}
        from={from}
        to={to}
        maxSuffix="+"
        onChange={onChange}
      />
    </FilterLayout>
  );
};

export default AgeFilter;
