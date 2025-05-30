import { Dispatch, SetStateAction } from 'react';
import { useTranslations } from 'next-intl';
import SecondaryButton from '../buttons/SecondaryButton';
import MainButton from '../buttons/MainButton';
import Image from 'next/image';

interface ModalProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
  setIsCartModalShown: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export default function AddedToCartPopUp({
  isPopUpShown,
  setIsPopUpShown,
  setIsCartModalShown,
  className = '',
}: ModalProps) {
  const t = useTranslations('popUps.addedToCart');

  return (
    <>
      <div
        className={`${
          isPopUpShown
            ? ' -translate-y-[calc(50dvh-50%)] opacity-100 scale-100'
            : 'pointer-events-none opacity-0 scale-90'
        } fixed left-1/2 bottom-0 transform -translate-x-1/2 transition duration-[600ms] ease-out z-[70] w-[275px] xl:w-[562px] max-h-[calc(100dvh-90px)] 
  xl:max-h-[calc(100dvh-188px)] p-5 xl:px-[75px] xl:py-[43px] overflow-y-auto bg-white rounded-[6px] xl:rounded-[8px] scrollbar scrollbar-w-[3px] scrollbar-thumb-rounded-full 
  scrollbar-track-rounded-full scrollbar-thumb-transparent scrollbar-track-main popup-scroll ${className}`}
      >
        <Image
          src="/images/popUps/addedToCart/figureLeftDesk.svg"
          alt="background"
          width="137"
          height="65"
          className="hidden xl:block absolute top-0 left-0"
        />
        <Image
          src="/images/popUps/addedToCart/figureRightDesk.svg"
          alt="background"
          width="57"
          height="57"
          className="hidden xl:block absolute bottom-0 right-0"
        />
        <h3 className="mb-1.5 text-[20px] xl:text-[28px] font-medium leading-[120%] text-center text-orange">
          {t('title')}
        </h3>
        <p className="xl:max-w-[204px] xl:mx-auto mb-6 xl:mb-7 text-[12px] font-light leading-[120%] text-center">
          {t('description')}
        </p>
        <div className="flex flex-col gap-3 xl:gap-4 xl:flex-row">
          <SecondaryButton
            onClick={() => setIsPopUpShown(false)}
            textStyles="text-[12px] font-normal"
            className="w-full h-10 xl:w-[calc(50%-8px)]"
          >
            {t('continueShopping')}
          </SecondaryButton>

          <MainButton
            onClick={() => {
              setIsPopUpShown(false);
              setIsCartModalShown(true);
            }}
            textStyles="text-[12px] font-normal"
            className="xl:w-[calc(50%-8px)] h-10"
          >
            {t('checkout')}
          </MainButton>
        </div>
      </div>
    </>
  );
}
