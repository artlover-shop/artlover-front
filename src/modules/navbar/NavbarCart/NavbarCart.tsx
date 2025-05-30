'use client';
import { Dispatch, SetStateAction } from 'react';
import { useCartStore } from '@/shared/store/cartStore';
import CartModal from '@/shared/components/cart/Cart';
import Backdrop from '@/shared/components/backdrop/Backdrop';
import CartIconFilled from '@/shared/components/icons/CartIconFilled';

interface NavbarCartProps {
  isCartModalOpened: boolean;
  setIsOpenBurgerMenu: Dispatch<SetStateAction<boolean>>;
  setIsOpenCatalogMenu: Dispatch<SetStateAction<boolean>>;
  setIsCartModalOpened: Dispatch<SetStateAction<boolean>>;
}

const NavbarCart = ({
  isCartModalOpened,
  setIsCartModalOpened,
  setIsOpenBurgerMenu,
  setIsOpenCatalogMenu,
}: NavbarCartProps) => {
  const { cartItems } = useCartStore();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIsCartModalOpened(true);
          setIsOpenBurgerMenu(false);
          setIsOpenCatalogMenu(false);
        }}
        aria-label="cart button"
        className="relative cursor-pointer outline-none xl:hover:text-orange focus-visible:text-orange active:scale-95 transition duration-300 ease-in-out"
      >
        <CartIconFilled className="size-5 xl:size-[34px]" />
        {cartItems.length > 0 ? (
          <div className="absolute bottom-0 right-0 flex items-center justify-center size-2.5 xl:size-4 leading-none text-white rounded-full bg-orange">
            <p className="text-[6px] xl:text-[10px] font-semibold leading-[112%]">
              {cartItems.length}
            </p>
          </div>
        ) : null}
      </button>
      <CartModal
        isPopUpShown={isCartModalOpened}
        setIsPopUpShown={setIsCartModalOpened}
      />
      <Backdrop
        isVisible={isCartModalOpened}
        onClick={() => setIsCartModalOpened(false)}
      />
    </>
  );
};

export default NavbarCart;
