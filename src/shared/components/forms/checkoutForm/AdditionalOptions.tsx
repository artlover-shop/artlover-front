import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useCartStore } from '@/shared/store/cartStore';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { packagingQuery } from '@/shared/lib/queries';
import Image from 'next/image';
import SecondaryButton from '../../buttons/SecondaryButton';
import PlusIcon from '../../icons/PlusIcon';
import PostcardBlock from './PostcardBlock';

export default function AdditionalOptions() {
  const t = useTranslations('checkoutPage.form');
  const locale = useLocale();
  const [isInputShown, setIsInputShown] = useState(false);
  const { additionalItems, addAdditionalItem, removeAdditionalItem } =
    useCartStore();

  const [additionalOptions, setAdditionalOptions] = useState<
    { title: string; image: string; id: string; price: number; value: string }[]
  >([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchSanityData(packagingQuery, {
        lang: locale,
      });
      setAdditionalOptions(result);
    };

    loadData();
  }, [locale]);

  if (!additionalOptions) return null;

  const removeAdditionalOption = (id: string, value: string) => {
    removeAdditionalItem(id);
    if (value === 'postcard') {
      setIsInputShown(false);
    }
  };

  return (
    <>
      <ul
        className="flex flex-col gap-y-3 h-[262px] overflow-x-hidden overflow-y-auto scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent"
      >
        {additionalOptions.map(({ image, title, price, id, value }, idx) => (
          <li
            key={idx}
            className="flex gap-x-[25px] px-3 py-[11px] rounded-[8px] border border-gray-light"
          >
            <div className="relative shrink-0 aspect-[90/101] w-[90px] overflow-hidden rounded-[6px]">
              <Image
                src={image}
                alt={'product photo'}
                fill
                sizes="33vw"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p
                className={`mb-2 xl:mb-3 text-[12px] xl:text-[14px] font-medium leading-[120%] line-clamp-2 xl:line-clamp-1`}
              >
                {title}
              </p>
              <p
                className={`mb-[17px] text-[13px] xl:text-[16px] font-semibold leading-[120%]`}
              >
                {price}
                {t('hrn')}
              </p>
              <SecondaryButton
                onClick={
                  additionalItems.some(item => item.id === id)
                    ? () => removeAdditionalOption(id, value)
                    : () =>
                        addAdditionalItem({ image, title, price, id, value })
                }
                className="gap-x-[34px] w-[79px] xl:w-[132px] h-7 xl:h-[35px]"
                textStyles="text-[10px] xl:text-[12px] font-medium"
              >
                {additionalItems.some(item => item.id === id)
                  ? t('removeButton')
                  : t('addButton')}
                <PlusIcon className="hidden xl:block size-3.5" />
              </SecondaryButton>
            </div>
          </li>
        ))}
      </ul>
      <PostcardBlock
        isInputShown={isInputShown}
        setIsInputShown={setIsInputShown}
      />
    </>
  );
}
