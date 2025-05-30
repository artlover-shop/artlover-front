import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import { listVariants } from '@/shared/utils/animationVariants';
import TeamCard from './TeamCard';

export default function TeamList() {
  const t = useTranslations('aboutPage.team.teamList');

  const teamList = [
    {
      name: t('one.name'),
      role: t('one.role'),
      image: { url: '/images/mockedData/teamOne.webp', alt: '' },
    },
    {
      name: t('two.name'),
      role: t('two.role'),
      image: { url: '/images/mockedData/teamTwo.webp', alt: '' },
    },
    {
      name: t('three.name'),
      role: t('three.role'),
      image: { url: '/images/mockedData/teamThree.webp', alt: '' },
    },
  ];

  if (!teamList || !teamList.length) return null;

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.4 }}
      variants={listVariants({ staggerChildren: 0.4, delayChildren: 0.8 })}
      className="flex flex-col md:flex-row gap-6 md:gap-4 xl:gap-5"
    >
      {teamList.slice(0, 3).map((teammate, idx) => (
        <TeamCard key={idx} teammate={teammate} />
      ))}
    </motion.ul>
  );
}
