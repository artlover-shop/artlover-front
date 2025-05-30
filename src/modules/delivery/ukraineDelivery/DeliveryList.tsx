import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import { listVariants } from '@/shared/utils/animationVariants';
import DeliveryItem from './DeliveryItem';

export default function DeliveryList() {
  const t = useTranslations('deliveryPage.deliveryUkraine.deliveryMethods');

  const deliveryList = [
    {
      title: t('one.title'),
      description: t('one.description'),
      image: { url: '/images/deliveryPage/icons/courier.svg', alt: 'courier' },
    },
    {
      title: t('two.title'),
      description: t('two.description'),
      image: {
        url: '/images/deliveryPage/icons/novaPost.svg',
        alt: 'nova poshta',
      },
    },
    {
      title: t('three.title'),
      description: t('three.description'),
      image: {
        url: '/images/deliveryPage/icons/novaPost.svg',
        alt: 'nova poshta',
      },
    },
    {
      title: t('four.title'),
      description: t('four.description'),
      image: {
        url: '/images/deliveryPage/icons/novaPost.svg',
        alt: 'nova poshta',
      },
    },
    {
      title: t('five.title'),
      description: t('five.description'),
      image: {
        url: '/images/deliveryPage/icons/ukrPost.svg',
        alt: 'ukrposhta',
      },
    },
    {
      title: t('six.title'),
      description: t('six.description'),
      image: {
        url: '/images/deliveryPage/icons/ukrPost.svg',
        alt: 'ukrposhta',
      },
    },
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={listVariants({ staggerChildren: 0.4, delayChildren: 0.8 })}
      className="flex flex-col md:flex-row md:flex-wrap gap-y-6 md:gap-5"
    >
      {deliveryList.map((deliveryItem, idx) => (
        <DeliveryItem key={idx} deliveryItem={deliveryItem} />
      ))}
    </motion.ul>
  );
}
