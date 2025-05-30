'use client';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useFormikContext, ErrorMessage } from 'formik';
import CustomizedInput from '../../formComponents/CustomizedInput';
import RadioButtonInput from '../../formComponents/RadioButtonInput';

interface Values {
  [fieldName: string]: string;
}

const deliveryServices = [
  {
    label: 'Укрпошта',
    logo: '/images/checkoutPage/ukrPost.svg',
  },
  {
    label: 'Нова Пошта',
    logo: '/images/checkoutPage/novaPost.svg',
  },
];

export default function DeliveryBlockUkraine() {
  const t = useTranslations();

  const deliveryTypes = [
    { label: t('forms.postOffice'), value: 'Відділення' },
    { label: t('forms.courier'), value: 'Доставка кур’єром' },
    { label: t('forms.poshtomat'), value: 'Поштомат' },
  ];

  const cities = [
    { label: t('checkoutPage.form.kyiv'), value: 'Київ' },
    { label: t('checkoutPage.form.dnipro'), value: 'Дніпро' },
    { label: t('checkoutPage.form.kharkiv'), value: 'Харків' },
    { label: t('checkoutPage.form.odesa'), value: 'Одеса' },
    { label: t('checkoutPage.form.lviv'), value: 'Львів' },
  ];

  const { values, setFieldValue, errors, touched } = useFormikContext<Values>();

  useEffect(() => {
    setFieldValue('deliveryType', 'Відділення');
  }, [setFieldValue]);

  const isDeliveryChecked = !!values.deliveryService;

  return (
    <>
      {/* Служби доставки */}
      <div className="relative">
        <div className="flex gap-4">
          {deliveryServices.map(service => (
            <button
              type="button"
              key={service.label}
              onClick={() => setFieldValue('deliveryService', service.label)}
              className={`cursor-pointer w-1/2 h-14 xl:h-[125px] border rounded-[6px] p-3 flex items-center justify-center ${
                values.deliveryService === service.label
                  ? 'border-orange'
                  : 'border-gray-light'
              }`}
            >
              <Image
                src={service.logo}
                alt={service.label}
                width={92}
                height={36}
                className="w-[92px] xl:w-[207px] h-auto object-contain"
              />
            </button>
          ))}
        </div>
        <ErrorMessage
          name={'deliveryService'}
          component="p"
          className="absolute bottom-[-11px] left-2 text-[9px] font-normal leading-none text-red-500"
        />
      </div>

      <div
        className={`pb-3 overflow-hidden transition-[max-height] duration-500 ${
          isDeliveryChecked ? 'max-h-[500px] ease-in' : 'max-h-0 ease-out'
        }`}
      >
        {/* Тип доставки */}
        <div className="flex flex-col gap-3 xl:gap-6 mb-6 mt-5 xl:mt-7 ">
          {deliveryTypes.map((type, idx) => (
            <RadioButtonInput
              key={idx}
              fieldName="deliveryType"
              value={type.value}
              onClick={() => setFieldValue('deliveryType', type)}
              label={type.label}
            />
          ))}
        </div>
        {values.deliveryService === 'Укрпошта' ? (
          <p className="mb-3 text-[14px] xl:text-[16px] font-light leading-[120%]">
            {t('checkoutPage.form.choosePostOfficeUkrPoshta')}
          </p>
        ) : (
          <p className="mb-3 text-[14px] xl:text-[16px] font-light leading-[120%]">
            {t('checkoutPage.form.choosePostOfficeNP')}
          </p>
        )}
        <div className="flex flex-wrap gap-2 xl:gap-3 mb-5 xl:mb-3">
          {cities.map(city => (
            <button
              key={city.value}
              type="button"
              onClick={() => setFieldValue('city', city.label)}
              className="cursor-pointer text-[12px] xl:text-[16px] font-medium leading-[120%] text-black xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
            >
              {city.label}
            </button>
          ))}
        </div>
        {/* Інпути */}
        <div className="flex flex-col gap-3 xl:gap-3.5">
          <CustomizedInput
            fieldName="city"
            placeholder={t('forms.cityPlaceholder')}
            isRequired
            errors={errors}
            touched={touched}
          />
          {values.deliveryType !== 'Доставка кур’єром' ? (
            <CustomizedInput
              fieldName="branchNumber"
              placeholder={
                values.deliveryType === 'Відділення'
                  ? t('forms.postOfficeNumberPlaceholder')
                  : t('forms.poshtomatNumberPlaceholder')
              }
              isRequired
              errors={errors}
              touched={touched}
              labelClassName="mb-0"
            />
          ) : (
            <CustomizedInput
              fieldName="address"
              placeholder={t('forms.addressPlaceholder')}
              isRequired
              errors={errors}
              touched={touched}
            />
          )}
        </div>
      </div>
    </>
  );
}
