'use client';

import { useFormikContext, FormikErrors, FormikTouched } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import CustomizedInput from '../../formComponents/CustomizedInput';
import { useCartStore } from '@/shared/store/cartStore';

interface Values {
  [fieldName: string]: string;
}

interface TipsInputBlockProps {
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
}

const tipOptions = [10, 15, 20];

export default function TipsInputBlock({
  errors,
  touched,
}: TipsInputBlockProps) {
  const t = useTranslations('forms');
  const { setTips } = useCartStore();

  const { setFieldValue, values } = useFormikContext<Values>();
  const [selectedTip, setSelectedTip] = useState<number | null>(null);

  const handleTipClick = (tip: number) => {
    setSelectedTip(tip);
    setFieldValue('tips', tip.toString());
    setTips(tip); // оновлення Zustand
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedTip(null);
    setFieldValue('tips', value);
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setTips(numericValue);
    } else {
      setTips(0);
    }
  };

  useEffect(() => {
    const numericTips = parseFloat(values.tips);
    if (tipOptions.includes(numericTips)) {
      setSelectedTip(numericTips);
    }
  }, [values.tips]);

  return (
    <div className="flex flex-col gap-4 xl:gap-5">
      <div className="flex gap-4 xl:gap-x-2.5">
        {tipOptions.map(tip => (
          <button
            type="button"
            key={tip}
            className={clsx(
              'cursor-pointer xl:w-[calc(33%-6.67px)] px-[25px] py-[11px] xl:py-4.5 rounded-[6px] border text-[14px] xl:text-[20px] font-medium leading-[120%] transition',
              selectedTip === tip
                ? 'bg-orange-light text-white border-orange-light'
                : 'bg-white text-dark border-orange-light xl:hover:bg-orange-light/60 xl:hover:text-white focus-visible:bg-orange-light/60 focus-visible:text-white'
            )}
            onClick={() => handleTipClick(tip)}
          >
            {tip}%
          </button>
        ))}
      </div>

      <CustomizedInput
        fieldName="tips"
        placeholder={t('tipsPlaceholder')}
        errors={errors}
        touched={touched}
        onChange={handleInputChange}
      />
    </div>
  );
}
