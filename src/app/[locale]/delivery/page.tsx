import Conditions from '@/modules/delivery/conditions/Conditions';
import Hero from '@/modules/delivery/hero/Hero';
import UkraineDelivery from '@/modules/delivery/ukraineDelivery/UkraineDelivery';
import WorldwideDelivery from '@/modules/delivery/worldwideDelivery/WorldwideDelivery';
import Socials from '@/shared/components/socials/Socials';

export default function DeliveryPage() {
  return (
    <>
      <Hero />
      <Conditions />
      <UkraineDelivery />
      <WorldwideDelivery />
      <Socials />
    </>
  );
}
