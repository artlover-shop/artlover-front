import Hero from '@/modules/about/hero/Hero';
import History from '@/modules/about/history/History';
import Team from '@/modules/about/team/Team';
import Socials from '@/shared/components/socials/Socials';

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Team />
      <History />
      <Socials />
    </>
  );
}
