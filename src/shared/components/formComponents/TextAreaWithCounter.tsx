import { ErrorMessage, Field, FormikErrors, FormikTouched } from 'formik';
import { useFormikContext } from 'formik';

interface Values {
  [fieldName: string]: string;
}

interface TextareaWithCounterProps {
  fieldName: string;
  placeholder?: string;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  labelClassName?: string;
  fieldClassName?: string;
  maxSymbols?: number;
}

const labelStyles =
  'relative flex flex-col w-full pt-3 pb-7 xl:pb-8 pr-1 border rounded-[6px]';
const fieldStyles =
  'w-full pl-5 pr-4 text-[12px] xl:text-[16px] font-normal leading-none text-dark bg-white placeholder-placeholder outline-none resize-none transition duration-300 ease-out scrollbar scrollbar-w-[2px] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent';
const errorStyles =
  'absolute bottom-[-11px] left-2 text-[9px] font-normal leading-none text-red-500';

export default function TextareaWithCounter({
  fieldName,
  placeholder = '',
  errors,
  touched,
  labelClassName = '',
  fieldClassName = '',
  maxSymbols = 200,
}: TextareaWithCounterProps) {
  const { handleChange, values } = useFormikContext<Values>();

  const isError = (errors as Record<string, unknown>)[fieldName];
  const isTouched = (touched as Record<string, unknown>)[fieldName];

  return (
    <label className={`${labelStyles} ${labelClassName}`}>
      <Field
        as="textarea"
        name={fieldName}
        placeholder={placeholder}
        onChange={handleChange}
        maxLength={maxSymbols}
        className={`${fieldStyles} h-[58px] xl:h-[54px] ${
          isError && isTouched ? 'border-red-500' : 'border-dark'
        } ${fieldClassName}`}
      />

      <div className="absolute bottom-3 right-5 text-placeholder text-[11px] xl:text-[14px] font-normal leading-[120%] pointer-events-none">
        {values[fieldName]?.length || 0}/{maxSymbols}
      </div>

      <ErrorMessage name={fieldName} component="p" className={errorStyles} />
    </label>
  );
}
