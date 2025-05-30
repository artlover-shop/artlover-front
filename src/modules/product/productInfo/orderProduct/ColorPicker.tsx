'use client';

import { Dispatch, SetStateAction } from 'react';
import { useTranslations } from 'next-intl';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

interface ColorPickerProps {
  colors: { title: string; hex: string }[];
  selectedColor: { title: string; hex: string };
  setSelectedColor: Dispatch<SetStateAction<{ title: string; hex: string }>>;
}

export default function ColorPicker({
  colors,
  selectedColor,
  setSelectedColor,
}: ColorPickerProps) {
  const t = useTranslations('productPage');

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInAnimation({ y: 30, delay: 1 })}
      className="mb-6 xl:mb-[25.5px]"
    >
      <h3 className="mb-3 text-[14px] xl:text-[16px] font-medium leading-[120%] uppercase">
        {t('color')}
      </h3>
      <ul className="flex flex-wrap gap-x-[7px] xl:gap-x-[14px]">
        {colors.map(color => (
          <li key={color?.hex}>
            <button
              onClick={() =>
                setSelectedColor({ title: color?.title, hex: color?.hex })
              }
              style={{ color: color?.hex }}
              className="cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M11 1.07129C16.6609 1.07129 21.25 5.66037 21.25 11.3213C21.25 16.9822 16.6609 21.5713 11 21.5713C5.33908 21.5713 0.75 16.9822 0.75 11.3213C0.75 5.66037 5.33908 1.07129 11 1.07129Z"
                  stroke={`${
                    selectedColor.title === color?.title
                      ? 'currentColor'
                      : 'transparent'
                  } `}
                  className="transition duration-300 ease-in-out"
                  strokeWidth="0.5"
                />
                <circle cx="11" cy="11.3213" r="8" fill="currentColor" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
