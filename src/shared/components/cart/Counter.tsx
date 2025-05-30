'use client';
import { useState, useEffect } from 'react';
import { useCartStore } from '@/shared/store/cartStore';
import PlusIcon from '../icons/PlusIcon';
import MinusIcon from '../icons/MinusIcon';
import { CartItem } from '@/types/cartItem';

interface CounterProps {
  className?: string;
  variant?: 'dark' | 'white';
  cartItem: CartItem;
}

export default function Counter({
  className = '',
  variant = 'white',
  cartItem,
}: CounterProps) {
  const { increaseQuantity, decreaseQuantity, cartItems } = useCartStore();
  const [count, setCount] = useState(1);

  const getItemCount = (items: CartItem[], itemId: string): number => {
    return items.find(item => item.id === itemId)?.quantity || 0;
  };

  const { id } = cartItem;

  useEffect(() => {
    setCount(getItemCount(cartItems, id));
  }, [cartItems, id]);

  const onMinusClick = () => {
    decreaseQuantity(id);
    setCount(count - 1);
  };

  const onPlusClick = () => {
    increaseQuantity(id);
    setCount(count + 1);
  };

  return (
    <div
      className={`flex items-center gap-x-[14px] ${
        variant === 'white' ? 'text-white' : 'text-dark'
      } ${className}`}
    >
      <button
        type="button"
        className={`enabled:cursor-pointer flex items-center justify-center size-3 ${
          variant === 'white' ? 'text-white' : 'text-dark'
        }`}
        onClick={onMinusClick}
        disabled={count === 1}
        aria-label="minus"
      >
        <MinusIcon />
      </button>
      <div
        className={`flex items-center justify-center w-[29px] xl:w-[38px] h-[23px] xl:h-7 border ${
          variant === 'white' ? 'border-white' : 'border-dark'
        } rounded-[4px] text-[12px] xl:text-[]14px font-semibold leading-[120%]`}
      >
        {count}
      </div>
      <button
        type="button"
        className={`enabled:cursor-pointer flex items-center justify-center size-3 xl:size-4 ${
          variant === 'white' ? 'text-white' : 'text-dark'
        }`}
        onClick={onPlusClick}
        aria-label="plus"
      >
        <PlusIcon />
      </button>
    </div>
  );
}
