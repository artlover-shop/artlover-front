import { Field } from 'formik';
import { ReactNode } from 'react';

interface CustomizedInputProps {
  fieldName: string;
  label: string | ReactNode;
  value: string;
  fieldClassName?: string;
  onClick?: () => void;
}

const labelStyles =
  'relative cursor-pointer flex items-center gap-x-[19px] text-[12px] xl:text-[16px] font-medium leading-[120%]';
const fieldStyles =
  'relative cursor-pointer appearance-none size-[19px] rounded-full outline-none transition duration-300 ease-out';

export default function RadioButtonInput({
  fieldName,
  label = '',
  value = '',
  fieldClassName = '',
  onClick,
}: CustomizedInputProps) {
  return (
    <label className={labelStyles}>
      <Field
        name={fieldName}
        type="radio"
        onClick={onClick}
        value={value}
        autoComplete="on"
        className={`${fieldStyles} ${fieldClassName} shrink-0 border border-dark checked:bg-orange checked:border-orange transition duration-300 ease-in-out`}
      ></Field>
      <p>{label}</p>
    </label>
  );
}
