'use client';

import { Dispatch, SetStateAction } from 'react';
import { useTranslations } from 'next-intl';
import { useCartStore } from '@/shared/store/cartStore';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

interface Option {
  title: string;
  price: number;
  id: string;
  checked: boolean;
}

interface AddonsListProps {
  selectedAddons: Option[];
  setSelectedAddons: Dispatch<SetStateAction<Option[]>>;
}

export default function AddonsList({
  selectedAddons,
  setSelectedAddons,
}: AddonsListProps) {
  const t = useTranslations('productPage');

  const { getAddonFinalPrice } = useCartStore();

  const toggleOption = (selectedId: string) => {
    setSelectedAddons(prev =>
      prev.map(opt =>
        opt.id === selectedId ? { ...opt, checked: !opt.checked } : opt
      )
    );
  };

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInAnimation({ y: 30, delay: 0.8 })}
      className="relative flex flex-col gap-y-3 py-6 xl:py-5 mb-6 xl:mb-[25.5px] before:content-[''] before:absolute before:top-0 
  before:left-0 before:h-[0.5px] before:w-full before:bg-dark before:opacity-50 after:content-[''] after:absolute after:bottom-0 
  after:left-0 after:h-[0.5px] after:w-full after:bg-dark after:opacity-50"
    >
      {selectedAddons.map(addon => {
        return (
          <li key={addon.id}>
            <label className="cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-x-5">
                <span className="relative inline-block w-5 xl:w-6 h-5 xl:h-6">
                  <input
                    type="checkbox"
                    checked={addon.checked}
                    onChange={() => toggleOption(addon?.id)}
                    className="peer appearance-none w-full h-full border border-orange rounded-[6px] bg-white checked:bg-orange checked:border-orange transition duration-300 ease-in-out"
                  />
                  <svg
                    className="absolute left-1/2 top-1/2 w-3 xl:w-4 h-3 xl:h-4 text-white transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity duration-300 ease-in-out"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[14px] xl:text-[16px] font-light leading-[120%]">
                  {addon?.title}
                </span>
              </div>
              <span className="text-[14px] xl:text-[16px] font-semibold leading-[120%] text-orange">
                + {getAddonFinalPrice(addon?.price)}
                {t('hrn')}
              </span>
            </label>
          </li>
        );
      })}
    </motion.ul>
  );
}
