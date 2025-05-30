import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { useTranslations } from 'next-intl';
import { useFormikContext } from 'formik';
import { useCartStore } from '@/shared/store/cartStore';
import TextareaWithCounter from '../../formComponents/TextAreaWithCounter';

interface Values {
  [fieldName: string]: string;
}

interface PostcardBlockProps {
  isInputShown: boolean;
  setIsInputShown: Dispatch<SetStateAction<boolean>>;
}

export default function PostcardBlock({
  isInputShown,
  setIsInputShown,
}: PostcardBlockProps) {
  const t = useTranslations();
  const { additionalItems } = useCartStore();

  const isPostcardAdded = additionalItems.find(
    additional => additional.value === 'postcard'
  );

  const { errors, touched } = useFormikContext<Values>();

  const toggleIsInputShown = () => setIsInputShown(!isInputShown);

  return (
    <>
      <button
        type="button"
        disabled={!isPostcardAdded}
        onClick={toggleIsInputShown}
        className="enabled:cursor-pointer flex items-center justify-center w-full h-10 relative mt-5 xl:mt-6 xl:h-11 px-3 xl:px-6 py-[9px] xl:py-[12.5px] 
        rounded-full border border-orange enabled:xl:hover:brightness-125 enabled:focus-visible:brightness-125 transition duration-300 ease-in-out"
      >
        <p
          className="text-[11px] 
                  xl:text-[14px] font-medium leading-[120%] text-orange text-center"
        >
          {t('checkoutPage.form.signPostcard')}
        </p>
        <Image
          src="/images/checkoutPage/envelope.svg"
          alt="envelope"
          width="20"
          height="20"
          className="absolute top-[10px] xl:top-[12px] left-3 xl:left-6"
        />
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ${
          isInputShown ? 'max-h-[500px] ease-in' : 'max-h-0 ease-out'
        }`}
      >
        <TextareaWithCounter
          fieldName="postcard"
          placeholder={t('forms.postCardPlaceholder')}
          errors={errors}
          touched={touched}
          labelClassName="mt-4"
          maxSymbols={200}
        />
      </div>
    </>
  );
}
