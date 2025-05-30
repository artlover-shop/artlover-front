import Checkbox from '../../../../shared/components/formComponents/Checkbox/Checkbox';
import { useTranslations } from 'next-intl';
import FilterLayout from '../FilterLayout/FilterLayout';

interface ProfessionFilterProps {
  value: string[];
  onChange: (selected: string[]) => void;
  professions: { title: string; value: string }[];
}

const ProfessionFilter = ({
  value,
  onChange,
  professions,
}: ProfessionFilterProps) => {
  const t = useTranslations('catalogPage.filter');

  if (!professions) return null;

  const toggleProfession = (profession: { title: string; value: string }) => {
    if (value.includes(profession.value)) {
      onChange(value.filter(p => p !== profession.value));
    } else {
      onChange([...value, profession.value]);
    }
  };

  return (
    <FilterLayout title={t('profession')}>
      {professions?.map(profession => (
        <Checkbox
          key={profession.value}
          label={profession.title}
          checked={value.includes(profession.value)}
          onChange={() => toggleProfession(profession)}
        />
      ))}
    </FilterLayout>
  );
};

export default ProfessionFilter;
