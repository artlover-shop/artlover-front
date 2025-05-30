import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { CatalogItem } from '@/types/catalogItem';

interface CategorySlideTwoDeskProps {
  categories: CatalogItem[];
}

export default function CategorySlideTwoDesk({
  categories,
}: CategorySlideTwoDeskProps) {
  return (
    <div className="hidden md:flex gap-5">
      <Link
        href={`/catalog/${categories[0]?.slug}`}
        className="flex flex-col justify-between relative z-10 w-[45.5%] p-5 aspect-square md:rounded-[12px] lg:rounded-[16px] overflow-hidden"
      >
        <Image
          src="/images/homePage/categories/slideTwoDesk/imageOne.webp"
          alt="background"
          fill
          sizes="50vw"
          className="-z-10"
        />
        <h3 className="max-w-[120px] lg:max-w-[159px] text-[17px] lg:text-[28px] font-semibold leading-none uppercase text-white">
          {categories[0]?.title}
        </h3>
        <div className="ml-auto xl:mr-6">
          <p className="mb-2 lg:mb-4 font-denistina text-[20px] lg:text-[32px] leading-none text-white">
            {categories[0]?.description?.split(' ')[0]}
          </p>
          <p className="ml-10 xl:ml-[69px] font-denistina text-[20px] lg:text-[32px] leading-none text-white">
            {categories[0]?.description?.split(' ')[1]}
            &nbsp; &nbsp;
            <span>{categories[0]?.description?.split(' ')[2]}</span>
          </p>
        </div>
      </Link>
      <div className="flex flex-col gap-y-4 lg:gap-y-5 w-[18.7%]">
        <Link
          href={`/catalog/${categories[1]?.slug}`}
          className="flex flex-col relative z-10 md:ml-[-150px] lg:ml-[-207px] xl:ml-[-239px] md:w-[221%] lg:w-[217%] p-5 md:aspect-[447/158] lg:aspect-[447/151] border-2 border-dark bg-white md:rounded-[12px] lg:rounded-[16px] overflow-hidden"
        >
          <Image
            src="/images/homePage/categories/slideTwoDesk/imageTwo.webp"
            alt="background"
            className="-z-10 object-cover"
            fill
            sizes="50vw"
          />
          <h3 className="mb-6 text-[17px] lg:text-[28px] font-semibold leading-none uppercase text-dark">
            {categories[1]?.title}
          </h3>
          <p
            style={{ wordSpacing: '8px' }}
            className="font-denistina text-[20px] lg:text-[32px] leading-none text-dark"
          >
            {categories[1]?.description}
          </p>
        </Link>
        <Link
          href={`/catalog/${categories[2]?.slug}`}
          className="block relative z-10 md:ml-[-150px] lg:ml-[-207px] xl:ml-[-239px] md:w-[312.5%] lg:w-[307.3%] p-5 md:aspect-[633/161] lg:aspect-[633/165] bg-dark md:rounded-[12px] lg:rounded-[16px] overflow-hidden"
        >
          <Image
            src="/images/homePage/categories/slideTwoDesk/imageThree.webp"
            alt="background"
            className="-z-10 object-contain object-right"
            fill
            sizes="50vw"
          />
          <h3 className="max-w-[176px] mb-5 text-[17px] lg:text-[28px] font-semibold leading-none uppercase text-white">
            {categories[2]?.title}
          </h3>
          <p
            style={{ wordSpacing: '8px' }}
            className="font-denistina text-[20px] lg:text-[32px] leading-none text-white"
          >
            {categories[2]?.description}
          </p>
        </Link>
        <Link
          href={`/catalog/${categories[3]?.slug}`}
          className="block relative z-10 md:ml-[-2px] lg:ml-[2px] xl:ml-0 md:w-[291%] lg:w-[281%] p-5 md:aspect-[579/150] lg:aspect-[579/145] border-2 border-dark bg-white md:rounded-[12px] lg:rounded-[16px] overflow-hidden"
        >
          <Image
            src="/images/homePage/categories/slideTwoDesk/imageFour.webp"
            alt="background"
            className="-z-10 object-cover"
            fill
            sizes="50vw"
          />
          <h3 className="xl:max-w-[240px] mb-5 text-[17px] lg:text-[28px] font-semibold leading-none uppercase text-dark">
            {categories[3]?.title}
          </h3>
          <p className="font-denistina text-[20px] lg:text-[32px] leading-none text-dark">
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
            src="/images/homePage/categories/slideTwoDesk/imageFive.webp"
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
            <span>{categories[4]?.description?.split(' ')[1]}</span>
            &nbsp; &nbsp;
            <span>{categories[4]?.description?.split(' ')[2]}</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
