'use client';
import { useState, useRef, useEffect } from 'react';
import SearchIcon from '@/shared/components/icons/SearchIcon';

const NavbarSearchMob = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event: PointerEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('pointerdown', handleClickOutside);
      return () => {
        document.removeEventListener('pointerdown', handleClickOutside);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 500);
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={wrapperRef}
        className={`xl:hidden ${
          isOpen ? 'opacity-100 w-[242px]' : 'w-0 opacity-0 pointer-events-none'
        } absolute z-10 left-[calc(100%-242px-32px)] top-0.5 h-7 bg-white transition-all duration-500 ease-in`}
      >
        <input
          ref={inputRef}
          type="text"
          onFocus={() => setIsDropdownVisible(true)}
          onBlur={() => setIsDropdownVisible(false)}
          className={`w-full h-full pl-3 pr-8 rounded-full outline-none border-[1.5px] border-dark text-[14px] font-normal leading-[120%]`}
        />
        <button
          type="button"
          className={`cursor-pointer absolute size-5 top-[4px] right-[13px]`}
          aria-label="search"
        >
          <SearchIcon />
        </button>

        <div
          className={`${
            isDropdownVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } absolute -z-10 top-0 left-0 w-full h-[104px] overflow-auto scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent rounded-b-[8px] bg-white 
      shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] px-5 pt-10 pb-4 text-dark text-[16px] font-normal leading-[120%] transition-all duration-500 ease-in`}
        ></div>
      </div>
      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
          setIsDropdownVisible(true);
        }}
        className={`xl:hidden cursor-pointer`}
        aria-label="search"
      >
        <SearchIcon />
      </button>
    </>
  );
};

export default NavbarSearchMob;
