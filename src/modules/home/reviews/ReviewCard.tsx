import { Rating } from 'react-simple-star-rating';
import Image from 'next/image';
import { formatDate } from '@/shared/utils/formatDate';
import { Review } from '@/types/review';
import StarFilledIcon from '@/shared/components/icons/StarFilledIcon';
import StarEmptyIcon from '@/shared/components/icons/StarEmptyIcon';
import { Link } from '@/i18n/navigation';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const {
    productMainImage,
    productTitle,
    author,
    text,
    rating,
    createdAt,
    productCategorySlug,
    productSlug,
  } = review;

  const formattedDate = formatDate(createdAt);

  return (
    <div className="relative flex flex-col justify-between h-full p-3 xl:py-5 xl:px-[26px] rounded-[8px] xl:rounded-[16px] shadow-social">
      <Image
        src="/images/homePage/reviews/figuresDesk.svg"
        alt="background figures"
        width="280"
        height="98"
        className="hidden xl:block absolute top-0 right-0"
      />
      <div>
        <Link href={`/catalog/${productCategorySlug}/${productSlug}`}>
          <div className="relative h-[85px] xl:h-[95px] mb-3 xl:mb-5 rounded-[8px]  xl:rounded-[16px] overflow-hidden">
            <Image
              src={productMainImage}
              alt={'product photo'}
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
          <p className="mb-1.5 text-[12px] xl:text-[16px] font-normal leading-[120%]">
            Товар:
          </p>
          <h3 className="mb-3 xl:mb-[14px] text-[14px] xl:text-[18px] font-medium leading-[120%] line-clamp-1">
            {productTitle}
          </h3>
        </Link>
        <p className="mb-2 xl:mb-5 text-[12px] xl:text-[16px] font-normal xl:font-light leading-[125%] text-justify">
          &quot;{text}&quot;
        </p>
      </div>

      <div>
        <Rating
          initialValue={rating}
          allowFraction
          readonly
          className="mb-3 xl:mb-[38px]"
          emptyIcon={
            <StarEmptyIcon className="inline-block mx-0.5 size-5 xl:size-7" />
          }
          fillIcon={
            <StarFilledIcon className="inline-block mx-0.5 size-5 xl:size-7" />
          }
        />

        <div className="flex items-center justify-between">
          <p className="font-denistina text-[20px] xl:text-[32px] font-normal leading-[120%] xl:leading-none text-orange">
            {author}
          </p>
          <p className="text-[12px] xl:text-[16px] font-normal leading-[120%]">
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
}
