'use client';
import { Form, Formik, FormikHelpers } from 'formik';
import axios from 'axios';
import { Dispatch, SetStateAction, useState } from 'react';
import { useTranslations } from 'next-intl';

import { CallBackValidation } from '@/shared/schemas/callbackFormValidation';

import CustomizedInput from '../formComponents/CustomizedInput';
import SubmitButton from '../formComponents/SubmitButton';

export interface ValuesCallBackFormType {
  name: string;
  surname: string;
  email: string;
  message: string;
}

interface CallBackFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  setIsPopUpShown?: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export default function CallBackForm({
  setIsError,
  setIsNotificationShown,
  className = '',
}: CallBackFormProps) {
  const t = useTranslations('forms');
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: '',
    surname: '',
    email: '',
    message: '',
  };

  const validationSchema = CallBackValidation();

  const submitForm = async (
    values: ValuesCallBackFormType,
    formikHelpers: FormikHelpers<ValuesCallBackFormType>
  ) => {
    const { resetForm } = formikHelpers;
    const data =
      `<b>Заявка "Форма зворотнього зв'язку"</b>\n` +
      `<b>Ім'я:</b> ${values.name.trim()}\n` +
      `<b>Прізвище:</b> ${values.surname.trim()}\n` +
      `<b>Email:</b> ${values.email.trim()}\n` +
      `<b>Повідомлення:</b> ${values.message.trim()}\n`;
    try {
      setIsLoading(true);

      await axios({
        method: 'post',
        url: '/api/telegram',
        data,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      resetForm();
      setIsNotificationShown(true);
    } catch (error) {
      setIsError(true);
      setIsNotificationShown(true);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({ errors, touched, dirty, isValid }) => (
        <Form className={`${className}`}>
          <div className="flex flex-col w-full gap-y-3 md:gap-y-5 mb-3 md:mb-5">
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-5">
              <CustomizedInput
                fieldName="name"
                placeholder={t('namePlaceholder')}
                isRequired
                errors={errors}
                touched={touched}
                labelClassName="md:w-[calc(50%-10px)]"
                fieldClassName="md:h-[46px]"
              />
              <CustomizedInput
                fieldName="surname"
                placeholder={t('surnamePlaceholder')}
                isRequired
                errors={errors}
                touched={touched}
                labelClassName="md:w-[calc(50%-10px)]"
                fieldClassName="md:h-[46px]"
              />
            </div>
            <CustomizedInput
              fieldName="email"
              inputType="email"
              placeholder={t('email')}
              isRequired
              errors={errors}
              touched={touched}
              fieldClassName="md:h-[46px]"
            />
            <CustomizedInput
              fieldName="message"
              as="textarea"
              placeholder={t('shareOpinion')}
              isRequired
              errors={errors}
              touched={touched}
              fieldClassName="h-[99px] md:h-[150px] py-3"
            />
          </div>
          <SubmitButton
            dirty={dirty}
            isValid={isValid}
            isLoading={isLoading}
            text={t('submitButton')}
            className="h-10 md:h-12"
          />
        </Form>
      )}
    </Formik>
  );
}
