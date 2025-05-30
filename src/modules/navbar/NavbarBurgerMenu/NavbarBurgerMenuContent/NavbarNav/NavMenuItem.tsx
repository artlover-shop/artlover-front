'use client';
import { Dispatch, SetStateAction } from 'react';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { listItemVariants } from '@/shared/utils/animationVariants';

interface NavMenuItemProps {
  menuItem: { title: string; link: string };
  onClose?: Dispatch<SetStateAction<boolean>>;
}

export default function NavMenuItem({ menuItem, onClose }: NavMenuItemProps) {
  const { title, link } = menuItem;

  return (
    <motion.li
      variants={listItemVariants}
      viewport={{ once: true, amount: 0.2 }}
      onClick={() => {
        if (onClose) {
          onClose(false);
        }
      }}
    >
      <Link
        href={link}
        className="block pt-[26px] md:pt-7 pb-[18px] md:pb-5 border-b border-white md:border-dark text-[16px] md:text-[20px] font-normal 
        leading-[120%] text-white md:text-dark md:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
      >
        {title}
      </Link>
    </motion.li>
  );
}
