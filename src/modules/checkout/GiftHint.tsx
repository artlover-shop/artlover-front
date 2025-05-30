import Image from 'next/image';

export default function GiftHint() {
  return (
    <div className="relative z-10 flex justify-between p-4 xl:py-[26px] xl:px-6 mt-6 xl:mt-3 rounded-[8px] bg-dark text-white overflow-hidden">
      <div>
        <h3 className="mb-2 text-[14px] xl:text-[24px] font-medium leading-[120%] uppercase">
          Відправити натяк
        </h3>
        <p className="mb-4 xl:mb-0 max-w-[154px] text-[12px] xl:text-[14px] font-light leading-[120%]">
          Відправ посилання на кошик друзям
        </p>
      </div>
      <button
        type="button"
        className="cursor-pointer flex items-center justify-center size-12 xl:size-[58px] rounded-[10px] bg-white xl:hover:brightness-125 focus-visible:brightness-125 transition duration-300 ease-in-out"
      >
        <Image
          src={`/images/checkoutPage/share.svg`}
          alt="icon"
          width={20}
          height={20}
          className="size-5 xl:size-7"
        />
      </button>
      <Image
        src={`/images/checkoutPage/giftHint/figureMob.svg`}
        alt="background"
        width="197"
        height="48"
        className="xl:hidden absolute -z-10 bottom-0 right-[27px]"
      />
      <Image
        src={`/images/checkoutPage/giftHint/figureDesk.svg`}
        alt="background"
        width="253"
        height="74"
        className="hidden xl:block absolute -z-10 bottom-0 right-0"
      />
    </div>
  );
}
