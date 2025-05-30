import { useTranslations } from 'next-intl';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import PublicContractBlock from './PublicContractBlock';

export default function PublicContract() {
  const t = useTranslations('publicContractPage');

  const listOne = [
    t('partOne.list.one'),
    t('partOne.list.two'),
    t('partOne.list.three'),
    t('partOne.list.four'),
    t('partOne.list.five'),
  ];

  const listTwo = [t('partTwo.list.one'), t('partTwo.list.two')];

  const listThree = [
    t('partThree.list.one'),
    t('partThree.list.two'),
    t('partThree.list.three'),
    t('partThree.list.four'),
    t('partThree.list.five'),
    t('partThree.list.six'),
    t('partThree.list.seven'),
    t('partThree.list.eight'),
    t('partThree.list.nine'),
    t('partThree.list.ten'),
    t('partThree.list.eleven'),
    t('partThree.list.twelve'),
    t('partThree.list.thirteen'),
    t('partThree.list.fourteen'),
  ];

  const listFour = [
    t('partFour.list.one'),
    t('partFour.list.two'),
    t('partFour.list.three'),
    t('partFour.list.four'),
    t('partFour.list.five'),
    t('partFour.list.six'),
    t('partFour.list.seven'),
    t('partFour.list.eight'),
    t('partFour.list.nine'),
    t('partFour.list.ten'),
    t('partFour.list.eleven'),
    t('partFour.list.twelve'),
  ];

  const listFive = [
    t('partFive.list.one'),
    t('partFive.list.two'),
    t('partFive.list.three'),
    t('partFive.list.four'),
    t('partFive.list.five'),
    t('partFive.list.six'),
    t('partFive.list.seven'),
    t('partFive.list.eight'),
    t('partFive.list.nine'),
    t('partFive.list.ten'),
    t('partFive.list.eleven'),
    t('partFive.list.twelve'),
    t('partFive.list.thirteen'),
    t('partFive.list.fourteen'),
    t('partFive.list.fifteen'),
    t('partFive.list.sixteen'),
    t('partFive.list.seventeen'),
    t('partFive.list.eighteen'),
    t('partFive.list.nineteen'),
    t('partFive.list.twenty'),
  ];

  const listSix = [
    t('partSix.list.one'),
    t('partSix.list.two'),
    t('partSix.list.three'),
    t('partSix.list.four'),
    t('partSix.list.five'),
  ];

  const listSeven = [
    t('partSeven.list.one'),
    t('partSeven.list.two'),
    t('partSeven.list.three'),
    t('partSeven.list.four'),
  ];

  const listEight = [
    t('partEight.list.one'),
    t('partEight.list.two'),
    t('partEight.list.three'),
  ];

  const listNine = [
    t('partNine.list.one'),
    t('partNine.list.two'),
    t('partNine.list.three'),
    t('partNine.list.four'),
    t('partNine.list.five'),
  ];

  const sellerData = [
    t('sellerDetails.details.name'),
    t('sellerDetails.details.phone'),
    t('sellerDetails.details.email'),
  ];

  return (
    <section className="pt-13 xl:pt-[59px] pb-20 xl:pb-[140px]">
      <Container>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ y: 30 })}
          className="mb-6 xl:mb-8 text-[22px] xl:text-[32px] font-medium leading-[120%] uppercase text-center"
        >
          {t('title')}
        </motion.h1>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ y: 30, delay: 0.3 })}
          className="mb-10 xl:mb-14"
        >
          <p className="mb-2 xl:mb-3 text-[14px] xl:text-[18px] font-medium leading-[120%] uppercase text-center">
            {t('subtitleOne')}
          </p>
          <p className="text-[12px] xl:text-[16px] font-medium leading-[120%] text-center">
            {t('subtitleTwo')}
          </p>
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ y: 30, delay: 0.3 })}
          className="mb-7 xl:mb-10 text-[14px] xl:text-[16px] font-normal leading-[160%]"
        >
          {t('description')}
        </motion.p>
        <div className="flex flex-col gap-6">
          <PublicContractBlock title={t('partOne.title')} list={listOne} />
          <PublicContractBlock title={t('partTwo.title')} list={listTwo} />
          <PublicContractBlock title={t('partThree.title')} list={listThree} />
          <PublicContractBlock title={t('partFour.title')} list={listFour} />
          <PublicContractBlock title={t('partFive.title')} list={listFive} />
          <PublicContractBlock title={t('partSix.title')} list={listSix} />
          <PublicContractBlock title={t('partSeven.title')} list={listSeven} />
          <PublicContractBlock title={t('partEight.title')} list={listEight} />
          <PublicContractBlock title={t('partNine.title')} list={listNine} />
          <PublicContractBlock
            title={t('sellerDetails.title')}
            list={sellerData}
          />
        </div>
      </Container>
    </section>
  );
}
