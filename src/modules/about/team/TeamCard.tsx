import * as motion from 'motion/react-client';
import { listItemVariants } from '@/shared/utils/animationVariants';
import { Teammate } from '@/types/teammate';
import Image from 'next/image';

interface TeamCardProps {
  teammate: Teammate;
}

export default function TeamCard({ teammate }: TeamCardProps) {
  const { name, role, image } = teammate;

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className="group relative z-10 max-w-[412px] mx-auto md:max-w-full w-full md:mx-0 md:w-[calc(33.33%-10.67px)] 
    xl:md:w-[calc(33.33%-13.33px)] rounded-[8px] xl:rounded-[16px] odd:bg-white even:bg-orange shadow-social overflow-hidden"
    >
      <Image
        src="/images/aboutPage/team/figureEvenMob.svg"
        alt="background"
        fill
        priority
        sizes="33vw"
        className="hidden group-even:block group-even:xl:hidden absolute -z-10 top-0 left-0 w-full h-full object-cover"
      />
      <Image
        src="/images/aboutPage/team/figureFirstMob.svg"
        alt="background"
        fill
        priority
        sizes="33vw"
        className="hidden group-first:block group-first:xl:hidden absolute -z-10 top-0 left-0 w-full h-full object-cover"
      />
      <Image
        src="/images/aboutPage/team/figureLastMob.svg"
        alt="background"
        fill
        sizes="33vw"
        className="hidden group-last:block group-last:xl:hidden absolute -z-10 top-0 left-0 w-full h-full object-cover"
      />
      <Image
        src="/images/aboutPage/team/figureEvenDesk.svg"
        alt="background"
        fill
        sizes="33vw"
        className="hidden group-even:xl:block absolute -z-10 object-cover"
      />
      <Image
        src="/images/aboutPage/team/figureFirstDesk.svg"
        alt="background"
        fill
        sizes="33vw"
        className="hidden group-first:xl:block absolute -z-10 object-contain object-top"
      />
      <Image
        src="/images/aboutPage/team/figureLastDesk.svg"
        alt="background"
        fill
        sizes="33vw"
        className="hidden group-last:xl:block absolute -z-10 object-contain object-top"
      />
      <div className=" p-4 xl:p-6">
        <div className="relative aspect-[264/168] xs:aspect-auto xs:h-[264px] md:h-[194px] mb-4 xl:mb-6 rounded-[8px] xl:rounded-[16px] overflow-hidden">
          <Image
            src={image?.url}
            alt={image?.alt || 'teammate'}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
        <h3 className="mb-3 text-[16px] xl:text-[20px] font-semibold leading-[120%] group-odd:text-dark group-even:text-white">
          {name}
        </h3>
        <p className="text-[14px] xl:text-[16px] font-normal leading-[120%] group-odd:text-orange group-even:text-white">
          {role}
        </p>
      </div>
    </motion.li>
  );
}
