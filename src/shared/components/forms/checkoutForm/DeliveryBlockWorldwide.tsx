'use client';
import { useFormikContext } from 'formik';
import CustomizedInput from '../../formComponents/CustomizedInput';
import RadioButtonInput from '../../formComponents/RadioButtonInput';
import { useEffect } from 'react';

interface Values {
  [fieldName: string]: string;
}

export default function DeliveryBlockWorldwide() {
  const { setFieldValue, errors, touched } = useFormikContext<Values>();

  useEffect(() => {
    setFieldValue('deliveryType', 'Доставка кур’єром');
  }, [setFieldValue]);

  return (
    <div className="flex flex-col gap-5 xl:gap-6 pb-3">
      <div className="flex flex-col gap-3 xl:gap-3.5">
        <CustomizedInput
          fieldName="country"
          placeholder="Оберіть країну"
          isRequired
          errors={errors}
          touched={touched}
        />
        <CustomizedInput
          fieldName="address"
          placeholder="Введіть адресу"
          isRequired
          errors={errors}
          touched={touched}
        />
      </div>
      <RadioButtonInput
        fieldName="deliveryType"
        value="Доставка кур’єром"
        onClick={() => setFieldValue('deliveryType', 'Доставка кур’єром')}
        label="Доставка кур’єром"
      />
    </div>
  );
}
