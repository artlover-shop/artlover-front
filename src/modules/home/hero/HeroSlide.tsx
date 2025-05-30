import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { Banner } from '@/types/banner';
import MainButton from '@/shared/components/buttons/MainButton';
import { Link } from '@/i18n/navigation';

interface HeroSlideProps {
  banner: Banner;
}

export default function HeroSlide({ banner }: HeroSlideProps) {
  const { title, slogan, description, button, image } = banner;

  return (
    <div className="relative z-10 h-full pb-6 md:pb-12 bg-dark text-white overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({
          scale: 0.9,
          delay: 1.2,
          duration: 1.5,
        })}
        className="hidden md:block mb-12 md:ml-[calc(50%-139px)] lg:ml-[calc(50%-247px)] md:mt-[117px]"
      >
        <Image
          src="/images/homePage/hero/logo.svg"
          alt="logo"
          priority
          width="171"
          height="145"
          className="md:w-[258px] lg:w-[395px] xl:w-[495px] h-auto"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ x: 30, delay: 0.4 })}
          className="md:absolute md:bottom-[38px] lg:bottom-[88px] xl:bottom-[108px] md:left-[220px] lg:left-[320px] xl:left-[400px] max-w-[480px] xl:max-w-[322px] mx-auto px-8 md:px-0"
        >
          <p className="max-w-[160px] md:max-w-[250px] lg:max-w-[320px] mb-3 md:mb-[17px] font-denistina text-[16px] md:text-[24px] lg:text-[32px] font-normal leading-[120%]">
            {slogan}
          </p>
          <p className="max-w-[212px] md:max-w-[250px] lg:max-w-[320px] mb-[35px] md:mb-6 text-[12px] md:text-[14px] xl:text-[16px] font-light leading-[120%] text-justify">
            {description}
          </p>
          <Link
            href={
              button.subcategorySlug
                ? `/catalog/${button.categorySlug}?subcategory=${button.subcategorySlug}`
                : `/catalog/${button.categorySlug}`
            }
            className="hidden lg:block w-full"
          >
            <MainButton className="h-[50px] text-[16px] font-normal">
              {button?.label}
            </MainButton>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ scale: 0.9 })}
        className="md:hidden w-full max-w-[480px] h-[274px] mx-auto mb-15 md:mb-0 rounded-b-[24px] md:rounded-l-none md:rounded-r-[44px] overflow-hidden"
      >
        <div className="absolute inset-0 z-20 hero-gradient"> </div>
        <Image
          src={image}
          alt="hero image"
          priority
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover -z-10 object-[center_74%] w-full h-auto"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ x: 30, delay: 0.4 })}
        className="md:hidden max-w-[480px] mx-auto px-8"
      >
        <p className="max-w-[160px] md:max-w-[250px] lg:max-w-[320px] mb-3 md:mb-[17px] font-denistina text-[16px] md:text-[24px] lg:text-[32px] font-normal leading-[120%]">
          {slogan}
        </p>
        <p className="max-w-[212px] md:max-w-[250px] lg:max-w-[320px] mb-7 md:mb-6 text-[12px] md:text-[14px] xl:text-[16px] font-light leading-[120%] text-justify">
          {description}
        </p>
        <Link
          href={
            button.subcategorySlug
              ? `/catalog/${button.categorySlug}?subcategory=${button.subcategorySlug}`
              : `/catalog/${button.categorySlug}`
          }
          className="hidden lg:block w-full"
        >
          <MainButton className="h-[50px] text-[16px] font-normal">
            {button?.label}
          </MainButton>
        </Link>
      </motion.div>
      <div className="absolute md:-z-10 top-0 left-0 h-full w-full md:w-[43%]">
        <div className="relative max-w-[480px] md:max-w-full h-full mx-auto md:mx-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({
              scale: 0.9,
              delay: 0.8,
              duration: 1.5,
            })}
            className="md:hidden absolute z-10 top-[176px] left-[calc(50%-86px)]"
          >
            <Image
              src="/images/homePage/hero/logo.svg"
              alt="logo"
              priority
              width="171"
              height="145"
              className="md:w-[358px] xl:w-[495px] h-auto"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ scale: 0.9 })}
            className="hidden md:block w-full h-full mb-15 md:mb-0 rounded-b-[24px] md:rounded-l-none md:rounded-r-[44px] overflow-hidden"
          >
            <div className="absolute inset-0 z-20 hero-gradient"> </div>
            <Image
              src={image}
              alt="hero image"
              priority
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover -z-10 w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ y: 30, delay: 1.6 })}
        className="mb-6 lg:mb-0 md:ml-[calc(50%-202px)] max-w-[240px] md:max-w-[396px] mx-auto text-[16px] md:text-[32px] font-medium leading-[120%] uppercase text-center"
      >
        {title}
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ y: 30, delay: 1.6 })}
        className="lg:hidden w-full"
      >
        <Link
          href={
            button.subcategorySlug
              ? `/catalog/${button.categorySlug}?subcategory=${button.subcategorySlug}`
              : `/catalog/${button.categorySlug}`
          }
          className="block max-w-[296px] mx-auto"
        >
          <MainButton className="h-[50px] text-[16px] font-normal">
            {button?.label}
          </MainButton>
        </Link>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.6, duration: 2 })}
        className="md:hidden absolute -z-10 bottom-[-22px] right-[-76px]"
      >
        <Image
          src="/images/homePage/hero/figuresRightMob.svg"
          priority
          alt="background figures"
          width="170"
          height="298"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.6, duration: 2 })}
        className="md:hidden absolute -z-10 bottom-[-31px] left-[-97px]"
      >
        <Image
          src="/images/homePage/hero/figureLeftMob.svg"
          priority
          alt="background figure"
          width="164"
          height="104"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.6, duration: 2 })}
        className="hidden md:block absolute -z-10 md:bottom-[-88px] lg:bottom-[-108px] right-[-110px] md:w-[388px] lg:w-[468px]"
      >
        <Image
          src="/images/homePage/hero/figuresRightDesk.svg"
          priority
          alt="background figures"
          width="468"
          height="927"
          className="md:w-[388px] lg:w-[468px] h-auto"
        />
      </motion.div>
    </div>
  );
}
