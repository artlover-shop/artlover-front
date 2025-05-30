import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Article } from '@/types/article';
import { calculateReadingTime } from '@/shared/utils/calculateReadingTime';
import Image from 'next/image';

interface BlogCardProps {
  article: Article;
}

export default function BlogCard({ article }: BlogCardProps) {
  const t = useTranslations('blogPage');

  const { title, subtitle, description, images, slug } = article;

  const readingTime = calculateReadingTime(article);

  return (
    <div className="p-4 bg-white rounded-[8px] shadow-social h-full">
      <Link href={`/blog/${slug}`}>
        <div className="relative h-[116px] xs:h-[180px] lg:h-[213px] mb-4 rounded-[8px] xl:rounded-[16px] overflow-hidden">
          <Image
            src={images[0]}
            alt={'blog photo'}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center"
          />
        </div>

        <h2 className="mb-2 text-[14px] xl:text-[18px] font-medium leading-[120%] text-orange line-clamp-1">
          {title}: {subtitle.toLowerCase()}
        </h2>
      </Link>
      <p className="mb-5 xl:mb-7 text-[12px] xl:text-[16px] font-medium leading-[120%] line-clamp-1">
        {description}
      </p>
      <div className="flex gap-x-4 xl:gap-x-6">
        <div className="relative flex items-center justify-center shrink-0 w-[calc(100%-44px-16px)] xl:w-[calc(100%-59px-24px)] border border-gray-light py-3 xl:py-5 px-4 xl:px-8 rounded-full">
          <Image
            src="/images/blogPage/blogList/clock.svg"
            alt="clock"
            width="20"
            height="20"
            className="absolute left-4 xl:left-8 size-5 xl:size-6"
          />
          <p className="text-[12px] xl:text-[16px] font-normal leading-[120%] text-gray-light">
            {readingTime}
            {t('readingTime')}
          </p>
        </div>
        <Link href={`/blog/${slug}`}>
          <button className="cursor-pointer group flex items-center justify-center size-[44px] xl:size-[59px] rounded-[10px] xl:rounded-[14px] bg-orange xl:hover:brightness-125 focus-visible:brightness-125 transition duration-300 ease-in-out">
            <Image
              src="/images/blogPage/blogList/arrow.svg"
              alt="arrow"
              width="28"
              height="28"
              className="translate-x-0 group-active:scale-95 group-[focus-visible]:translate-x-1 xl:group-hover:translate-x-1 transition duration-300 ease-out will-change-transform"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
