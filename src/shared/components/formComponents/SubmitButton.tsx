import { useTranslations } from 'next-intl';
import MainButton from '../buttons/MainButton';

interface SubmitButtonProps {
  dirty: boolean;
  isValid: boolean;
  isLoading: boolean;
  text: string;
  variant?: 'red' | 'black';
  className?: string;
}

export default function SubmitButton({
  dirty,
  isValid,
  isLoading,
  text,
  className = 'w-full',
}: SubmitButtonProps) {
  const t = useTranslations('forms');

  return (
    <MainButton
      type="submit"
      disabled={!(dirty && isValid) || isLoading}
      isLoading={isLoading}
      className={className}
    >
      {isLoading ? t('sending') : text}
    </MainButton>
  );
}
