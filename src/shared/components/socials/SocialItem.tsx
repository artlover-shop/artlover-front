import Image from 'next/image';
import { ReactNode } from 'react';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import { listItemVariants } from '@/shared/utils/animationVariants';

interface SocialItemProps {
  social: {
    title: string;
    link: string;
    icon: ReactNode;
    bgImageMob: string;
    bgImageDesk: string;
    qty: string;
  };
}

export default function SocialItem({ social }: SocialItemProps) {
  const t = useTranslations('homePage.socials');
  const { title, link, icon, bgImageMob, bgImageDesk, qty } = social;

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className="relative z-10 w-[calc(50%-8px)] md:w-[calc(25%-12px)] xl:w-[calc(25%-15px)] text-black first:text-white last:text-white md:odd:text-white md:even:text-black 
     bg-white first:bg-orange last:bg-orange  md:odd:bg-orange md:even:bg-white shadow-social rounded-[12px] overflow-hidden"
    >
      <Image
        src={bgImageMob}
        alt="background"
        width={140}
        height={141}
        sizes="50vw"
        className="md:hidden absolute top-0 left-0 -z-20 w-full h-auto object-cover "
      />
      <Image
        src={bgImageDesk}
        alt="background"
        width={260}
        height={260}
        sizes="50vw"
        className="hidden md:block absolute top-0 left-0 -z-20 w-full h-auto object-cover "
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="text-inherit flex flex-col justify-center items-center h-[141px] md:h-auto md:aspect-square px-[31px] xl:px-7 py-[21px] xl:py-8 rounded-[12px] "
      >
        {icon}
        <h3 className="mt-1 lg:mt-3 xl:mt-4 mb-2 lg:mb-3 xl:mb-4 text-[14px] lg:text-[20px] font-semibold leading-[120%]">
          {title}
        </h3>
        <p className="text-[12px] lg:text-[18px] font-medium leading-[120%] text-center">
          {qty} {t('followers')}
        </p>
      </a>
    </motion.li>
  );
}
