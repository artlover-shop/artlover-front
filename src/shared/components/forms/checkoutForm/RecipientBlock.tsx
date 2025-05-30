import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useFormikContext, FormikErrors, FormikTouched } from 'formik';
import CustomizedInput from '../../formComponents/CustomizedInput';
import RadioButtonInput from '../../formComponents/RadioButtonInput';
import MaskedInput from 'react-text-mask';
import { phoneMask } from '@/shared/regex/regex';

interface Values {
  [fieldName: string]: string;
}

interface RecipientBlockProps {
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
}

export default function RecipientBlock({
  errors,
  touched,
}: RecipientBlockProps) {
  const t = useTranslations('forms');

  const { values, setFieldValue } = useFormikContext<Values>();
  const isOther = values.recipientOption === 'Одержувач інша людина';

  useEffect(() => {
    if (values.recipientOption === 'Я одержувач') {
      const timeout = setTimeout(() => {
        setFieldValue('recipientName', values.name);
        setFieldValue('recipientSurname', values.surname);
        setFieldValue('recipientPhone', values.phone);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [
    values.name,
    values.surname,
    values.phone,
    values.recipientOption,
    setFieldValue,
  ]);

  const autoFill = () => {
    setTimeout(() => {
      setFieldValue('recipientName', values.name);
      setFieldValue('recipientSurname', values.surname);
      setFieldValue('recipientPhone', values.phone);
    }, 500);
  };

  return (
    <>
      <div className="flex flex-col gap-3 xl:gap-y-6">
        <RadioButtonInput
          fieldName="recipientOption"
          value={'Я одержувач'}
          label={t('iAmRecipient')}
          onClick={autoFill}
        />
        <RadioButtonInput
          fieldName="recipientOption"
          value="Одержувач інша людина"
          label={t('anotherPersonRecipient')}
          onClick={() => {
            setFieldValue('recipientName', '');
            setFieldValue('recipientSurname', '');
            setFieldValue('recipientPhone', '');
          }}
        />
      </div>

      <div
        className={` pb-3 overflow-hidden transition-[max-height] duration-500 ${
          isOther ? 'max-h-[500px] ease-in' : 'max-h-0 ease-out'
        }`}
      >
        <div className="flex flex-col gap-3 xl:gap-3.5 mt-4 xl:mt-6 ">
          {' '}
          <CustomizedInput
            fieldName="recipientName"
            placeholder={t('namePlaceholder')}
            errors={errors}
            touched={touched}
            isRequired
          />
          <CustomizedInput
            fieldName="recipientSurname"
            placeholder={t('surnamePlaceholder')}
            errors={errors}
            touched={touched}
            isRequired
          />
          <CustomizedInput
            fieldName="recipientPhone"
            inputType="tel"
            placeholder={t('phonePlaceholder')}
            errors={errors}
            touched={touched}
            as={MaskedInput}
            mask={phoneMask}
            isRequired
          />
        </div>
      </div>
    </>
  );
}
