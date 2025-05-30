import Image from 'next/image';

interface CheckoutSubTitleProps {
  icon: string;
  title: string;
  description?: string;
}

export default function CheckoutSubTitle({
  icon,
  title,
  description,
}: CheckoutSubTitleProps) {
  return (
    <div className="flex items-center justify-between mb-5 xl:mb-7">
      <div className="flex items-center gap-x-[14px]">
        <Image
          src={`/images/checkoutPage/${icon}.svg`}
          alt="icon"
          width={20}
          height={20}
          className="size-5 xl:size-[29px]"
        />
        <h2 className="text-[16px] xl:text-[24px] font-medium leading-[120%]">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="text-[14px] xl:text-[24px] font-medium leading-[120%]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
