'use client';
import { useState } from 'react';
import SearchIcon from '@/shared/components/icons/SearchIcon';

const NavbarSearchDesk = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className={`hidden xl:block relative w-[266px] h-[34px] bg-white`}>
      <input
        type="text"
        onFocus={() => setIsDropdownVisible(true)}
        onBlur={() => setIsDropdownVisible(false)}
        className={`w-full h-full pl-4 pr-9 rounded-full outline-none border-[1.5px] border-dark text-[14px] font-normal leading-[120%]`}
      />
      <button
        type="button"
        className={`cursor-pointer absolute size-5 top-[7px] right-[13px] hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out`}
        aria-label="search"
      >
        <SearchIcon />
      </button>
      <div
        className={`${
          isDropdownVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } absolute -z-10 top-0 left-0 w-full h-[154px] overflow-auto scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent rounded-b-[8px] bg-white 
      shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] px-5 pt-10 pb-4 text-dark text-[16px] font-normal leading-[120%] transition-all duration-500 ease-in`}
      ></div>
    </div>
  );
};

export default NavbarSearchDesk;
