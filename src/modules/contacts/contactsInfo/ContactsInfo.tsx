import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import {
  listVariants,
  listItemVariants,
} from '@/shared/utils/animationVariants';
import { contacts } from './mockedData';
import { headerPhoneRegex } from '@/shared/regex/regex';
import Container from '@/shared/components/container/Container';
import Image from 'next/image';
import ContactsInfoImages from './ContactsInfoImages';

export default function ContactsInfo() {
  const t = useTranslations('contactsPage.contactsInfo');

  const { phone, emails } = contacts;

  return (
    <section className="pt-16 xl:pt -[106px]">
      <Container className="relative">
        <ContactsInfoImages />
        <motion.ul
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={listVariants({ staggerChildren: 0.4, delayChildren: 0.8 })}
          className="md:flex md:gap-x-5 lg:gap-x-15 xl:gap-x-[110px] px-3 lg:px-8 xl:px-15 md:pb-10 md:pt-16 rounded-[8px] xl:rounded-[16px] bg-orange-light/12"
        >
          <motion.li
            viewport={{ once: true, amount: 0.2 }}
            variants={listItemVariants}
            className="relative md:w-[calc(33.33%-13.3px)] lg:w-[calc(33.33%-40px)] xl:w-[calc(33.33%-73.33px)] pt-[45px] pb-14 md:p-0"
          >
            <Image
              src="/images/contactsPage/contactsInfo/phone.svg"
              alt="phone"
              width={64}
              height={64}
              priority
              className="absolute -top-8 md:top-[-104px] left-[calc(50%-32px)] w-16 md:w-20 h-auto"
            />
            <h3 className="mb-3 xl:mb-5 text-[16px] xl:text-[20px] font-semibold leading-[160%] text-center">
              {t('phone')}
            </h3>
            {phone ? (
              <a
                href={`tel:+${phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="phone number"
                className="block mb-3 xl:mb-5 text-[14px] xl:text-[18px] font-medium leading-[120%] text-gray-light text-center xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
              >
                {phone.replace(headerPhoneRegex, '$1-$2-$3-$4-$5')}
              </a>
            ) : null}
            {/* <p className="mb-2 text-[12px] xl:text-[14px] font-medium leading-[120%] text-center xl:text-left text-gray-light">
              {t('lineOne')}
            </p>
            <p className="text-[12px] xl:text-[14px] font-medium leading-[120%] text-center xl:text-left text-gray-light">
              {t('lineTwo')}
            </p> */}
          </motion.li>
          <motion.li
            viewport={{ once: true, amount: 0.2 }}
            variants={listItemVariants}
            className="relative md:w-[calc(33.33%-13.3px)] lg:w-[calc(33.33%-40px)] xl:w-[calc(33.33%-73.33px)] pt-[45px] pb-14 md:p-0"
          >
            <Image
              src="/images/contactsPage/contactsInfo/email.svg"
              alt="email"
              width={64}
              height={64}
              priority
              className="absolute -top-8 md:top-[-104px] left-[calc(50%-32px)] w-16 md:w-20 h-auto"
            />
            <h3 className="mb-3 xl:mb-5 text-[16px] xl:text-[20px] font-semibold leading-[160%] text-center">
              {t('email')}
            </h3>
            {emails && emails.length ? (
              <ul className="flex flex-col gap-y-2 xl:gap-x-3 items-center mb-1 text-gray-light">
                {emails.map((email, idx) => (
                  <li key={idx}>
                    <a
                      href={`mailto:${email}`}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[14px] xl:text-[18px] font-medium leading-[120%] text-center xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
                      aria-label="email"
                    >
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
            {/* <p className="text-[14px] font-medium leading-[120%] text-center text-gray-light">
              {t('corporate')}
            </p> */}
          </motion.li>
          <motion.li
            viewport={{ once: true, amount: 0.2 }}
            variants={listItemVariants}
            className="relative md:w-[calc(33.33%-13.3px)] lg:w-[calc(33.33%-40px)] xl:w-[calc(33.33%-73.33px)] pt-[45px] pb-[30px] md:p-0"
          >
            <Image
              src="/images/contactsPage/contactsInfo/calendar.svg"
              alt="calendar"
              width={64}
              height={64}
              priority
              className="absolute -top-8 md:top-[-104px] left-[calc(50%-32px)] w-16 md:w-20 h-auto"
            />
            <h3 className="mb-3 xl:mb-5 text-[16px] xl:text-[20px] font-semibold leading-[160%] text-center">
              {t('hotline')}
            </h3>
            <p className="mb-2 xl:mb-3 text-[14px] xl:text-[18px] font-medium leading-[120%] text-center text-gray-light">
              {t('workingDays')}09:00-00:00
            </p>
            <p className="text-[14px] xl:text-[18px] font-medium leading-[120%] text-center text-gray-light">
              {t('weekend')}10:00-20:00
            </p>
          </motion.li>
        </motion.ul>
      </Container>
    </section>
  );
}
