import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

import FooterColumn from '../FooterColumn/FooterColumn';

const FooterAboutCompany = () => {
  const t = useTranslations('footer');

  const items = [
    {
      href: '/about',
      text: t('navMenu.about'),
    },
    {
      href: '/blog',
      text: t('navMenu.blog'),
    },
    {
      href: '/contacts',
      text: t('navMenu.contacts'),
    },
    {
      href: '/delivery',
      text: t('navMenu.payment'),
    },
    {
      href: '/public-contract',
      text: t('navMenu.publicContract'),
    },
  ];

  const elements = items.map(({ href, text }) => (
    <li key={text} className="mb-[16px] xl:mb-[20px]">
      <Link
        href={href}
        className="text-white text-[14px] font-normal leading-[120%] xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
      >
        {text}
      </Link>
    </li>
  ));

  return (
    <FooterColumn title={t('about')}>
      <ul>{elements}</ul>
    </FooterColumn>
  );
};

export default FooterAboutCompany;
