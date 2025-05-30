import { useTranslations } from 'next-intl';
import { socials } from '@/shared/components/socials/mockedData';
import InstagramIcon from '@/shared/components/icons/InstagramIcon';
import FooterColumn from '../FooterColumn/FooterColumn';
import YoutubeIcon from '@/shared/components/icons/YoutubeIcon';
import TiktokIcon from '@/shared/components/icons/TiktokIcon';
import FacebookIcon from '@/shared/components/icons/FacebookIcon';
import MonoPayIcon from '@/shared/components/icons/MonoPayIcon';

const FooterSocial = () => {
  const t = useTranslations('footer');

  const { instagram, facebook, youtube, tiktok } = socials;

  return (
    <FooterColumn title={t('socials')}>
      <ul className="flex gap-[16px] items-center xl:block">
        <li className="xl:mb-[20px]">
          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center gap-[12px] text-white text-[14px] font-normal leading-[120%] xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
          >
            <InstagramIcon className="size-5 xl:size-[27px]" />
            <span className="hidden xl:block">Instagram</span>
          </a>
        </li>
        <li className="xl:mb-[20px]">
          <a
            href={youtube.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center gap-[12px] text-white text-[14px] font-normal leading-[120%] xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
          >
            <YoutubeIcon className="size-5 xl:size-[27px]" />
            <span className="hidden xl:block ">Youtube</span>
          </a>
        </li>
        <li className="xl:mb-[20px]">
          <a
            href={tiktok.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center gap-[12px] text-white text-[14px] font-normal leading-[120%] xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
          >
            <TiktokIcon className="size-5 xl:size-[27px]" />
            <span className="hidden xl:block">Tik Tok</span>
          </a>
        </li>
        <li className="xl:mb-[20px]">
          <a
            href={facebook.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center gap-[12px] text-white text-[14px] font-normal leading-[120%] xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
          >
            <FacebookIcon className="size-5 xl:size-[27px]" />
            <span className="hidden xl:block">Facebook</span>
          </a>
        </li>
        <li>
          <MonoPayIcon className="w-[70px] xl:w-[76px] h-auto text-white" />
        </li>
      </ul>
    </FooterColumn>
  );
};

export default FooterSocial;
