import * as yup from 'yup';
import { useTranslations } from 'next-intl';
import { nameRegex, emailRegex, checkoutPhoneRegex } from '../regex/regex';

export const CheckoutValidation = (activeTab: string) => {
  const t = useTranslations('forms');

  const checkoutFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, t('errors.nameMinMaxSymbols'))
      .max(30, t('errors.nameMinMaxSymbols'))
      .matches(nameRegex, t('errors.nameAllowedSymbols'))
      .required(t('errors.required')),
    surname: yup
      .string()
      .min(2, t('errors.nameMinMaxSymbols'))
      .max(30, t('errors.nameMinMaxSymbols'))
      .matches(nameRegex, 'errors.nameAllowedSymbols')
      .required(t('errors.required')),
    email: yup
      .string()
      .matches(emailRegex, t('errors.required'))
      .required(t('errors.required')),
    phone: yup
      .string()
      .matches(checkoutPhoneRegex, t('errors.wrongPhone'))
      .test(
        'sixth-char-zero',
        t('errors.sixCharZero'),
        value => !!value && value.length >= 6 && value[5] === '0'
      )
      .required(t('errors.required')),
    deliveryService:
      activeTab === 'ukraine'
        ? yup.string().required(t('errors.chooseDelivery'))
        : yup.string().notRequired(),
    deliveryType: yup.string(),
    city: yup.string().when('deliveryType', {
      is: (val: string) =>
        val === 'Відділення' ||
        val === 'Поштомат' ||
        (val === 'Доставка кур’єром' && activeTab === 'ukraine'),
      then: schema => schema.required(t('errors.required')),
      otherwise: schema => schema.notRequired(),
    }),
    branchNumber: yup.string().when('deliveryType', {
      is: (val: string) => val === 'Відділення' || val === 'Поштомат',
      then: schema => schema.required(t('errors.required')),
      otherwise: schema => schema.notRequired(),
    }),
    address: yup.string().when('deliveryType', {
      is: (val: string) => val === 'Доставка кур’єром',
      then: schema => schema.required(t('errors.required')),
      otherwise: schema => schema.notRequired(),
    }),
    country: yup.string().when('deliveryType', {
      is: (val: string) =>
        val === 'Доставка кур’єром' && activeTab === 'worldwide',
      then: schema => schema.required(t('errors.required')),
      otherwise: schema => schema.notRequired(),
    }),
    payment: yup.string(),
    recipientOption: yup.string(),
    recipientName: yup.string().when('recipientOption', {
      is: (val: string) => val === 'Одержувач інша людина',
      then: schema => schema.required(t('errors.required')),
      otherwise: schema => schema.notRequired(),
    }),
    recipientSurname: yup.string().when('recipientOption', {
      is: (val: string) => val === 'Одержувач інша людина',
      then: schema => schema.required(t('errors.required')),
      otherwise: schema => schema.notRequired(),
    }),
    recipientPhone: yup.string().when('recipientOption', {
      is: (val: string) => val === 'Одержувач інша людина',
      then: () =>
        yup
          .string()
          .matches(checkoutPhoneRegex, 'Вкажіть правильний номер телефону')
          .test(
            'sixth-char-zero',
            'Після +38 має бути цифра 0',
            value => !!value && value.length >= 6 && value[5] === '0'
          )
          .required(t('errors.required')),
      otherwise: () => yup.string().notRequired(),
    }),

    message: yup.string(),
    postcard: yup.string(),
    promocode: yup.string(),
    tips: yup
      .number()
      .typeError('Допустимі тільки цифри')
      .min(0, 'Чайові не можуть бути менше 0'),
  });

  return checkoutFormValidationSchema;
};
