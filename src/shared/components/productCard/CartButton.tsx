import CartIcon from '../icons/CartIcon';

interface CartButtonProps {
  onClick: () => void;
  className?: string;
  disabled: boolean;
}

export default function CartButton({
  onClick,
  className,
  disabled,
}: CartButtonProps) {
  return (
    <>
      <button
        disabled={disabled}
        id="cart-button"
        onClick={onClick}
        className={`enabled:cursor-pointer relative flex items-center justify-center size-9 xl:w-[46px] xl:h-10 rounded-[8px] text-white bg-orange disabled:bg-orange/50
        enabled:xl:hover:brightness-110 enabled:focus-visible:brightness-110 enabled:active:scale-95 transition duration-300 ease-in-out ${className}`}
      >
        <CartIcon />
      </button>
    </>
  );
}
