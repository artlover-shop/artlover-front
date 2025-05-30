import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import * as motion from 'motion/react-client';
import {
  listVariants,
  listItemVariants,
} from '@/shared/utils/animationVariants';
import { CatalogItem } from '@/types/catalogItem';

interface CategorySlideTwoMobProps {
  categories: CatalogItem[];
}

export default function CategorySlideTwoMob({
  categories,
}: CategorySlideTwoMobProps) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.4 }}
      variants={listVariants({ staggerChildren: 0.4, delayChildren: 0.8 })}
      className="flex md:hidden flex-col gap-y-4"
    >
      <motion.li
        viewport={{ once: true, amount: 0.2 }}
        variants={listItemVariants}
      >
        <Link
          href={`/catalog/${categories[0]?.slug}`}
          className="relative block z-10 w-full h-[100px] sm:h-[150px] border border-dark rounded-[8px] p-3 bg-dark overflow-hidden"
        >
          <Image
            src="/images/homePage/categories/slideTwoMob/categoryOne/figuresLeft.svg"
            alt="background figures"
            width="185"
            height="100"
            className="absolute -z-10 top-0 left-0 h-[100px] sm:h-[150px] w-auto"
          />
          <Image
            src="/images/homePage/categories/slideTwoMob/categoryOne/imageRight.webp"
            alt="background figures"
            width="246"
            height="200"
            className="absolute -z-10 top-0 right-0 h-[100px] sm:h-[150px] w-auto"
          />
          <h3 className="max-w-[76px] mb-1 text-[14px] sm:text-[18px] font-semibold leading-[140%] text-white uppercase">
            {categories[0]?.title}
          </h3>
          <p className="ml-9 font-denistina text-[14px] sm:text-[18px] font-normal leading-[120%] text-white">
            {categories[0]?.description?.split(' ')[0]}
          </p>
          <p className="ml-[87px] font-denistina text-[14px] sm:text-[18px] font-normal leading-[120%] text-white">
            {categories[0]?.description?.split(' ')[1]}
            &nbsp; &nbsp;
            <span>{categories[0]?.description?.split(' ')[2]}</span>
          </p>
        </Link>
      </motion.li>
      <motion.li
        viewport={{ once: true, amount: 0.2 }}
        variants={listItemVariants}
      >
        <Link
          href={`/catalog/${categories[1]?.slug}`}
          className="relative z-10 flex flex-col justify-end items-end h-[100px] sm:h-[150px] border border-dark rounded-[8px] p-3 bg-white overflow-hidden"
        >
          <Image
            src="/images/homePage/categories/slideTwoMob/categoryTwo/imageLeft.webp"
            alt="background figures"
            width="327"
            height="200"
            className="absolute -z-10 top-0 left-0 h-[100px] sm:h-[150px] w-auto"
          />
          <Image
            src="/images/homePage/categories/slideTwoMob/categoryTwo/figuresRight.svg"
            alt="background figures"
            width="124"
            height="100"
            className="absolute -z-10 top-0 right-0 h-[100px] sm:h-[150px] w-auto"
          />
          <p className="mr-[30px] mb-1 font-denistina text-[14px] sm:text-[18px] font-normal leading-[120%] text-dark">
            {categories[1]?.description}
          </p>
          <h3 className="text-[14px] sm:text-[18px] font-semibold leading-[140%] text-dark uppercase">
            {categories[1]?.title}
          </h3>
        </Link>
      </motion.li>
      <motion.li
        viewport={{ once: true, amount: 0.2 }}
        variants={listItemVariants}
      >
        <Link
          href={`/catalog/${categories[2]?.slug}`}
          className="relative z-10 block h-[100px] sm:h-[150px] border border-dark rounded-[8px] p-3 bg-dark overflow-hidden"
        >
          <Image
            src="/images/homePage/categories/slideTwoMob/categoryThree/figuresLeft.svg"
            alt="background figures"
            width="36"
            height="61"
            className="absolute -z-10 bottom-0 left-0 h-[61px] sm:h-[91px] w-auto"
          />
          <Image
            src="/images/homePage/categories/slideTwoMob/categoryThree/imageRight.webp"
            alt="background figures"
            width="410"
            height="200"
            className="absolute -z-10 top-0 right-0 h-[100px] sm:h-[150px] w-auto"
          />
          <h3 className="mb-[10px] text-[14px] sm:text-[18px] font-semibold leading-[140%] text-white uppercase">
            {categories[2]?.title}
          </h3>
          <p className="ml-[26px] font-denistina text-[14px] sm:text-[18px] font-normal leading-[120%] text-white">
            {categories[2]?.description}
          </p>
        </Link>
      </motion.li>
      <motion.li
        viewport={{ once: true, amount: 0.2 }}
        variants={listItemVariants}
      >
        <Link
          href={`/catalog/${categories[3]?.slug}`}
          className="relative z-10 flex flex-col justify-end items-end h-[100px] sm:h-[150px] border border-dark rounded-[8px] p-3 bg-white overflow-hidden"
        >
          <Image
            src="/images/homePage/categories/slideTwoMob/categoryFour/imageLeft.webp"
            alt="background figures"
            width="345"
            height="200"
            className="absolute -z-10 top-0 left-0 h-[100px] sm:h-[150px] w-auto"
          />
          <Image
            src="/images/homePage/categories/slideTwoMob/categoryFour/figuresRight.svg"
            alt="background figures"
            width="169"
            height="50"
            className="absolute -z-10 top-0 right-0 h-[50px] sm:h-[75px] w-auto"
          />
          <p className="mb-1 font-denistina text-[16px] sm:text-[18px] font-normal leading-[120%] text-dark">
            {categories[3]?.description}
          </p>
          <h3 className="text-[14px] sm:text-[18px] font-semibold leading-[140%] text-dark uppercase">
            {categories[3]?.title}
          </h3>
        </Link>
      </motion.li>
      <motion.li
        viewport={{ once: true, amount: 0.2 }}
        variants={listItemVariants}
      >
        <Link
          href={`/catalog/${categories[4]?.slug}`}
          className="relative z-10 flex flex-col justify-end h-[100px] sm:h-[150px] border border-dark rounded-[8px] p-3 bg-dark overflow-hidden"
        >
          <Image
            src="/images/homePage/categories/slideTwoMob/categoryFive/figuresLeft.svg"
            alt="background figures"
            width="136"
            height="100"
            className="absolute -z-10 top-0 left-0 h-[100px] sm:h-[150px] w-auto"
          />
          <Image
            src="/images/homePage/categories/slideTwoMob/categoryFive/imageRight.webp"
            alt="background figures"
            width="404"
            height="200"
            className="absolute -z-10 top-0 right-0 h-[100px] sm:h-[150px] w-auto"
          />
          <div className="ml-16 mb-[21px]">
            <p className="font-denistina text-[14px] sm:text-[18px] font-normal leading-[100%] text-white">
              {categories[4]?.description?.split(' ')[0]}
            </p>
            <p className="ml-[30px] font-denistina text-[14px] sm:text-[18px] font-normal leading-[100%] text-white">
              <span>{categories[4]?.description?.split(' ')[1]}</span>
              &nbsp;
              <span> {categories[4]?.description?.split(' ')[2]}</span>
            </p>
          </div>
          <h3 className="text-[14px] sm:text-[18px] font-semibold leading-[140%] text-white uppercase">
            {categories[4]?.title}
          </h3>
        </Link>
      </motion.li>
    </motion.ul>
  );
}
