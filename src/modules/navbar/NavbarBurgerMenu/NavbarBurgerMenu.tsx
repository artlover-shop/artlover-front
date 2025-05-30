'use client';
import { Dispatch, SetStateAction, useRef, useEffect } from 'react';

import NavbarBurgerMenuButton from './NavbarBurgerMenuButton/NavbarBurgerMenuButton';
import NavbarBurgerMenuContent from './NavbarBurgerMenuContent/NavbarBurgerMenuContent';

interface NavbarBurgerMenuProps {
  isOpenBurgerMenu: boolean;
  setIsOpenBurgerMenu: Dispatch<SetStateAction<boolean>>;
  setIsOpenCatalogMenu: Dispatch<SetStateAction<boolean>>;
  setIsCartModalOpened: Dispatch<SetStateAction<boolean>>;
}

const NavbarBurgerMenu = ({
  isOpenBurgerMenu,
  setIsOpenBurgerMenu,
  setIsOpenCatalogMenu,
  setIsCartModalOpened,
}: NavbarBurgerMenuProps) => {
  const modalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    modalRef.current = document?.getElementById('modal');
  }, []);

  return (
    <>
      <NavbarBurgerMenuButton
        onOpen={() => {
          setIsOpenBurgerMenu(true);
          setIsOpenCatalogMenu(false);
          setIsCartModalOpened(false);
        }}
      />
      <NavbarBurgerMenuContent
        isOpen={isOpenBurgerMenu}
        onClose={() => setIsOpenBurgerMenu(false)}
      />
    </>
  );
};

export default NavbarBurgerMenu;
