'use client';
import { Dispatch, SetStateAction } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
// import { useScreenWidth } from '@/shared/hooks/useScreenWidth';
import TabMenuItem from './TabMenuItem';

interface TabMenuProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function TabMenu({ activeTab, setActiveTab }: TabMenuProps) {
  const t = useTranslations('checkoutPage.tabMenu');

  const router = useRouter();
  const pathName = usePathname();

  // const screenWidth = useScreenWidth();

  const menuList = [
    {
      title: t('ukraineDesk'),
      value: 'ukraine',
    },
    // {
    //   title: screenWidth > 640 ? 'Доставка ПО СВІТУ' : 'ПО СВІТУ',
    //   value: 'worldwide',
    // },
  ];

  const handleTabClick = (menu: { title: string; value: string }) => {
    setActiveTab(menu?.value);
    if (pathName === '/checkout') {
      const params = new URLSearchParams(window.location.search);
      params.set('delivery', menu?.value);
      router.push(`?${params.toString()}`, { scroll: false });
    }
  };

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30, delay: 0.2 })}
      className="flex justify-center gap-4 lg:gap-[30px] lg:w-[620px] xl:w-[820px] lg:mx-auto mb-10 xl:mb-9"
    >
      {menuList.map((menuItem, idx) => (
        <TabMenuItem
          key={idx}
          menuItem={menuItem}
          activeTab={activeTab}
          handleTabClick={() => handleTabClick(menuItem)}
        ></TabMenuItem>
      ))}
    </motion.ul>
  );
}
