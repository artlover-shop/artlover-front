import Image from 'next/image';
import * as motion from 'motion/react-client';
import { listItemVariants } from '@/shared/utils/animationVariants';

interface DeliveryItemProps {
  deliveryItem: {
    title: string;
    description: string;
    image: { url: string; alt: string };
  };
}

export default function DeliveryItem({ deliveryItem }: DeliveryItemProps) {
  const { title, description, image } = deliveryItem;

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className="w-full md:w-[calc(33.33%-13.33px)] py-5 xl:py-6 px-4 xl:px-[39px] rounded-[16px] shadow-social bg-white"
    >
      <div className="relative w-50 h-25 overflow-hidden mb-6 xl:mb-10 mx-auto">
        <Image
          src={image?.url}
          alt={image?.alt || 'post icon'}
          fill
          sizes="33vw"
          className="object-contain"
        />
      </div>
      <h3 className="mb-4 xl:mb-5 text-[16px] xl:text-[20px] font-semibold leading-[160%] text-center">
        {title}
      </h3>
      <p className="text-[13px] xl:text-[14px] font-light leading-[140%] text-gray-light text-justify">
        {description}
      </p>
    </motion.li>
  );
}
