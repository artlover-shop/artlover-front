import * as motion from 'motion/react-client';
import { listItemVariants } from '@/shared/utils/animationVariants';

interface BenefitItemProps {
  benefit: { value: string; description: string };
}

export default function BenefitItem({ benefit }: BenefitItemProps) {
  const { value, description } = benefit;

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className="flex flex-col items-center justify-center w-[calc(33.3%-10.67px)] h-[88px] xl:h-[124px] py-4 px-2 rounded-[8px] xl:rounded-[12px] bg-orange text-white"
    >
      <p className="mb-1 text-[16px] xl:text-[32px] font-semibold leading-[120%] text-center">
        {value}
      </p>
      <p className="max-w-[106px] text-[10px] xl:text-[14px] font-normal leading-[120%] text-center">
        {description}
      </p>
    </motion.li>
  );
}
