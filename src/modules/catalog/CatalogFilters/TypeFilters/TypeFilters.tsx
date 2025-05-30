import Checkbox from '../../../../shared/components/formComponents/Checkbox/Checkbox';
import { useTranslations } from 'next-intl';
import FilterLayout from '../FilterLayout/FilterLayout';

interface TypeFiltersProps {
  value: string[];
  onChange: (selected: string[]) => void;
}

const types = ['discounts', 'newProducts'] as const;

const TypeFilters = ({ value, onChange }: TypeFiltersProps) => {
  const t = useTranslations('catalogPage.filter');

  const toggleType = (type: string) => {
    if (value.includes(type)) {
      onChange(value.filter(t => t !== type));
    } else {
      onChange([...value, type]);
    }
  };

  return (
    <FilterLayout>
      {types.map(type => (
        <Checkbox
          key={type}
          label={t(type)}
          checked={value.includes(type)}
          onChange={() => toggleType(type)}
        />
      ))}
    </FilterLayout>
  );
};

export default TypeFilters;
