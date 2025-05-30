import * as yup from 'yup';
import { useTranslations } from 'next-intl';
import { nameRegex, emailRegex } from '../regex/regex';

export const CallBackValidation = () => {
  const t = useTranslations('forms.errors');

  const callBackFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, t('nameMinMaxSymbols'))
      .max(30, t('nameMinMaxSymbols'))
      .matches(nameRegex, t('nameAllowedSymbols'))
      .required(t('required')),
    surname: yup
      .string()
      .min(2, t('nameMinMaxSymbols'))
      .max(30, t('nameMinMaxSymbols'))
      .matches(nameRegex, t('nameAllowedSymbols'))
      .required(t('required')),
    email: yup
      .string()
      .matches(emailRegex, t('wrongEmail'))
      .required(t('required')),
    message: yup.string().max(200, t('max200Symbols')).required(t('required')),
  });

  return callBackFormValidationSchema;
};
