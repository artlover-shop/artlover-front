'use client';
import { Dispatch, SetStateAction } from 'react';

interface CounterProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export default function Counter({ count, setCount }: CounterProps) {
  const onMinusClick = () => {
    setCount(count - 1);
  };

  const onPlusClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex items-center justify-between w-[93px] xl:w-[103px] px-3 py-2 rounded-[12px] border border-gray">
      <button
        className="enabled:cursor-pointer group flex items-center justify-center size-5"
        onClick={onMinusClick}
        disabled={count === 1}
        aria-label="minus"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          className="size-[13px] xl:size-[18px]"
        >
          <path
            d="M7.52539 10.2813L4.26539 7.02133C3.56539 6.32133 3.56539 6.32133 4.26539 5.62133L7.52539 2.36133"
            stroke="#A1A1AA"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <span className="text-[13px] xl:text-[20px] font-normal leading-[123%] text-gray">
        {count}
      </span>
      <button
        className="enabled:cursor-pointer flex items-center justify-center size-5"
        onClick={onPlusClick}
        aria-label="plus"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          className="size-[13px] xl:size-[18px]"
        >
          <path
            d="M4.47461 2.36125L7.73461 5.62125C8.43461 6.32125 8.43461 6.32125 7.73461 7.02125L4.47461 10.2812"
            stroke="#A1A1AA"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
