import DoubleRangeSlider from '../../../../shared/components/formComponents/DoubleRangeSlider/DoubleRangeSlider';
import { useTranslations } from 'next-intl';

import FilterLayout from '../FilterLayout/FilterLayout';

interface PriceFilterProps {
  from?: number;
  to?: number;
  onChange: (from: number, to: number) => void;
}

const PriceFilter = ({ from, to, onChange }: PriceFilterProps) => {
  const t = useTranslations('catalogPage.filter');

  return (
    <FilterLayout title={t('price')}>
      <DoubleRangeSlider
        min={50}
        max={8000}
        from={from}
        to={to}
        onChange={onChange}
      />
    </FilterLayout>
  );
};

export default PriceFilter;
