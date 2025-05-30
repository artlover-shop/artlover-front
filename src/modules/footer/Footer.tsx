import { useTranslations } from 'next-intl';
import Container from '@/shared/components/container/Container';
import Logo from '@/shared/components/Logo/Logo';
import FooterCatalog from '@/modules/footer/FooterCatalog/FooterCatalog';
import FooterAboutCompany from '@/modules/footer/FooterAboutCompany/FooterAboutCompany';
import FooterSocial from '@/modules/footer/FooterSocial/FooterSocial';
import FooterContacts from '@/modules/footer/FooterContacts/FooterContacts';

import {
  fadeInAnimation,
  headerVariants,
} from '@/shared/utils/animationVariants';
import * as motion from 'motion/react-client';

import styles from './Footer.module.scss';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={headerVariants}
      className={`${styles.footer} pt-[40px] xl:pt-[64px] pb-[8px] xl:pb-[79px]`}
    >
      <Container>
        <div className="hidden md:flex justify-between mb-[76px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInAnimation({ x: -30 })}
          >
            <Logo />
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInAnimation({ x: 30 })}
            className="font-denistina text-[32px] font-normal leading-[100%] text-white"
          >
            {t('description')}
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
          <div className="lg:flex justify-between lg:w-[44%]">
            <FooterContacts />
            <FooterCatalog />
          </div>
          <div className="lg:flex justify-between lg:w-[44%]">
            <FooterAboutCompany />
            <FooterSocial />
          </div>
        </div>
      </Container>
    </motion.footer>
  );
};

export default Footer;
