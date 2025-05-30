import { Dispatch, ReactNode, SetStateAction } from 'react';

interface SecondaryButtonProps {
  children: string | ReactNode;
  className?: string;
  textStyles?: string;
  onClick?: () => void | Dispatch<SetStateAction<boolean>>;
}

export default function SecondaryButton({
  children,
  className = '',
  textStyles = 'text-[10px] xl:text-[14px] font-normal',
  onClick,
}: SecondaryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer flex items-center justify-center px-[10px] py-[5.5px] rounded-full border-[1.5px] border-black bg-white 
         leading-none xl:hover:text-white xl:hover:bg-dark focus-visible:text-white focus-visible:bg-dark transition 
        duration-300 ease-in-out ${className} ${textStyles}`}
    >
      {children}
    </button>
  );
}
