import { Dispatch, SetStateAction } from 'react';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import NavMenuItem from './NavMenuItem';

interface NavMenuProps {
  onClose?: Dispatch<SetStateAction<boolean>>;
}

export default function NavMenu({ onClose }: NavMenuProps) {
  const t = useTranslations('footer.navMenu');

  const navMenuList = [
    { title: t('about'), link: '/about' },
    { title: t('blog'), link: '/blog' },
    { title: t('contacts'), link: '/contacts' },
    { title: t('payment'), link: '/delivery' },
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30, delay: 0.8 })}
      className="flex flex-col"
    >
      {navMenuList.map((menuItem, idx) => (
        <NavMenuItem key={idx} menuItem={menuItem} onClose={onClose} />
      ))}
    </motion.ul>
  );
}
