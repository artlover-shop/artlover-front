import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { CatalogItem } from '@/types/catalogItem';

interface CategorySlideOneDeskProps {
  categories: CatalogItem[];
}

export default function CategorySlideOneDesk({
  categories,
}: CategorySlideOneDeskProps) {
  return (
    <div className="hidden md:flex gap-5">
      <Link
        href={`/catalog/${categories[0]?.slug}`}
        className="flex flex-col justify-end relative z-10 w-[45.5%] p-5 aspect-square md:rounded-[12px] lg:rounded-[16px] overflow-hidden"
      >
        <Image
          src="/images/homePage/categories/slideOneDesk/imageOne.webp"
          alt="background"
          fill
          sizes="50vw"
          className="-z-10"
        />
        <p className="mb-2 lg:mb-3 xl:mb-5 ml-8 font-denistina text-[20px] lg:text-[32px] leading-none text-white">
          {categories[0]?.description}
        </p>
        <h3 className="text-[17px] lg:text-[28px] font-semibold leading-none uppercase text-white">
          {categories[0]?.title}
        </h3>
      </Link>
      <div className="flex flex-col gap-y-4 lg:gap-y-5 w-[18.7%]">
        <Link
          href={`/catalog/${categories[1]?.slug}`}
          className="flex flex-col justify-end items-end relative z-10 md:ml-[-150px] lg:ml-[-207px] xl:ml-[-239px] md:w-[221%] lg:w-[217%] p-5 md:aspect-[447/158] lg:aspect-[447/151] border-2 border-dark bg-white md:rounded-[12px] lg:rounded-[16px] overflow-hidden"
        >
          <Image
            src="/images/homePage/categories/slideOneDesk/imageTwo.webp"
            alt="background"
            className="-z-10 object-cover"
            fill
            sizes="50vw"
          />
          <p className="mb-1 font-denistina text-[20px] lg:text-[32px] leading-none text-dark">
            {categories[1]?.description}
          </p>
          <h3 className="text-[17px] lg:text-[28px] font-semibold leading-none uppercase text-dark">
            {categories[1]?.title}
          </h3>
        </Link>
        <Link
          href={`/catalog/${categories[2]?.slug}`}
          className="block relative z-10 md:ml-[-150px] lg:ml-[-207px] xl:ml-[-239px] md:w-[312.5%] lg:w-[307.3%] p-5 md:aspect-[633/161] lg:aspect-[633/165] bg-dark md:rounded-[12px] lg:rounded-[16px] overflow-hidden"
        >
          <Image
            src="/images/homePage/categories/slideOneDesk/imageThree.webp"
            alt="background"
            className="-z-10 object-cover"
            fill
            sizes="50vw"
          />
          <h3 className="text-[17px] lg:text-[28px] font-semibold leading-none uppercase text-white">
            {categories[2]?.title}
          </h3>
          <p className="ml-[140px] lg:ml-[214px] font-denistina text-[20px] lg:text-[32px] leading-none text-white">
            {categories[2]?.description}
          </p>
        </Link>
        <Link
          href={`/catalog/${categories[3]?.slug}`}
          className="block relative z-10 md:ml-[-2px] lg:ml-[2px] xl:ml-0 md:w-[292%] lg:w-[281%] p-5 md:aspect-[579/150] lg:aspect-[579/145] border-2 border-dark bg-white md:rounded-[12px] lg:rounded-[16px] overflow-hidden"
        >
          <Image
            src="/images/homePage/categories/slideOneDesk/imageFour.webp"
            alt="background"
            className="-z-10 object-cover"
            fill
            sizes="50vw"
          />
          <h3 className="mb-1 text-[17px] lg:text-[28px] font-semibold leading-none uppercase text-dark">
            {categories[3]?.title}
          </h3>
          <p className="ml-[39px] font-denistina text-[20px] lg:text-[32px] leading-none text-dark">
            {categories[3]?.description}
          </p>
        </Link>
      </div>
      <div className="md:w-[36%] lg:w-[32%] md:rounded-[12px] lg:rounded-[16px] overflow-hidden">
        <Link
          href={`/catalog/${categories[4]?.slug}`}
          className="block relative z-10 p-5 aspect-[353/336]"
        >
          <Image
            src="/images/homePage/categories/slideOneDesk/imageFive.webp"
            alt="background"
            className="-z-10 object-cover"
            fill
            sizes="50vw"
          />
          <h3 className="mb-2 text-[17px] lg:text-[28px] font-semibold leading-none uppercase text-white">
            {categories[4]?.title}
          </h3>
          <p className="font-denistina text-[20px] lg:text-[32px] leading-none text-white">
            {categories[4]?.description?.split(' ')[0]}
          </p>
          <p className="ml-7 font-denistina text-[20px] lg:text-[32px] leading-none text-white">
            {categories[4]?.description?.split(' ')[1]}
          </p>
        </Link>
      </div>
    </div>
  );
}
