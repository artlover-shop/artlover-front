'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { routing } from '@/i18n/routing';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Locale } from '@/types/locale';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import LocaleSwitcherArrowIcon from '@/shared/components/icons/LocaleSwitcherArrowIcon';

export default function LocaleSwitcher() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const locales = routing.locales;
  const currentLocale = useLocale();
  const pathName = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: Locale) => {
    const hash = window.location.hash;

    const newPath = `${pathName}${hash}`;

    router.replace(newPath, { locale: newLocale });

    setIsOpen(false);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClickOutside, handleKeyDown]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center gap-[9px] outline-none xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
      >
        <span className="text-[14px] xl:text-[16px] font-bold leading-[125%] uppercase">
          {currentLocale === 'uk' ? 'UA' : currentLocale}
        </span>
        <LocaleSwitcherArrowIcon
          className={`size-3 xl:size-4 mb-[1px] ${
            isOpen ? 'rotate-180' : 'rotate-0'
          } transition duration-300 ease-in-out`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-1 w-[65px] bg-white shadow-social rounded-[8px] z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {locales.map(locale => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={`cursor-pointer w-full flex items-center px-4 py-2`}
              >
                <span
                  className={`uppercase xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out ${
                    currentLocale === locale
                      ? 'text-orange text-[14px] xl:text-[16px] font-bold'
                      : 'text-dark text-[14px] xl:text-[16px] font-medium'
                  }`}
                >
                  {locale === 'uk' ? 'UA' : locale}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
