'use client';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import * as motion from 'motion/react-client';
import { useScroll, useMotionValueEvent } from 'framer-motion';

import { headerVariants } from '@/shared/utils/animationVariants';

import Container from '@/shared/components/container/Container';
import Logo from '@/shared/components/Logo/Logo';
import MobileLogo from '@/shared/components/MobileLogo/MobileLogo';

import NavbarCatalog from '@/modules/navbar/NavbarCatalog/NavbarCatalog';
import NavbarFavorite from '@/modules/navbar/NavbarFavorite/NavbarFavorite';
import NavbarCart from '@/modules/navbar/NavbarCart/NavbarCart';
import NavbarBurgerMenu from '@/modules/navbar/NavbarBurgerMenu/NavbarBurgerMenu';

import styles from './Navbar.module.scss';
import LocaleSwitcher from './localeSwitcher/LocaleSwitcher';

const Navbar = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const [isOpenCatalogMenu, setIsOpenCatalogMenu] = useState(false);
  const [isCartModalOpened, setIsCartModalOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    setIsScrolled(latest > 20);
  });

  return (
    <header className={`fixed top-0 left-0 z-50 w-dvw pt-4 pb-2 xl:py-[14px]`}>
      <nav className="">
        <Container className="relative">
          <div
            className={`absolute top-0 left-0 w-full h-16 xl:h-17 rounded-full z-[-20] transition duration-500 ease-in-out ${
              isScrolled
                ? 'bg-white/40 backdrop-blur-sm shadow-social'
                : 'bg-transparent'
            }`}
          />
        </Container>
        <Container className="py-4 xl:py-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={headerVariants}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-[10px] xl:gap-[24px] flex-row-reverse xl:flex-row">
              <Link
                href="/"
                aria-label="logo home page link"
                onClick={() => {
                  setIsOpenBurgerMenu(false);
                  setIsOpenCatalogMenu(false);
                  setIsCartModalOpened(false);
                }}
                className="xl:hover:brightness-125 focus-visible:brightness-125 transition duration-300 ease-in-out"
              >
                <Logo className={`${styles.logo} hidden xl:block`} />
                <MobileLogo className={`${styles.logo} xl:hidden`} />
              </Link>
              <NavbarCatalog
                isOpenCatalogMenu={isOpenCatalogMenu}
                setIsOpenCatalogMenu={setIsOpenCatalogMenu}
                setIsOpenBurgerMenu={setIsOpenBurgerMenu}
                setIsCartModalOpened={setIsCartModalOpened}
              />
            </div>
            <div className="flex items-center gap-[10px] xl:gap-4">
              <LocaleSwitcher />
              <NavbarFavorite
                onClick={() => {
                  setIsOpenBurgerMenu(false);
                  setIsOpenCatalogMenu(false);
                  setIsCartModalOpened(false);
                }}
              />
              <NavbarCart
                isCartModalOpened={isCartModalOpened}
                setIsCartModalOpened={setIsCartModalOpened}
                setIsOpenBurgerMenu={setIsOpenBurgerMenu}
                setIsOpenCatalogMenu={setIsOpenCatalogMenu}
              />
              <NavbarBurgerMenu
                isOpenBurgerMenu={isOpenBurgerMenu}
                setIsOpenBurgerMenu={setIsOpenBurgerMenu}
                setIsOpenCatalogMenu={setIsOpenCatalogMenu}
                setIsCartModalOpened={setIsCartModalOpened}
              />
            </div>
          </motion.div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
