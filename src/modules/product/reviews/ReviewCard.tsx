import { Rating } from 'react-simple-star-rating';
import StarFilledIcon from '@/shared/components/icons/StarFilledIcon';
import StarEmptyIcon from '@/shared/components/icons/StarEmptyIcon';

interface ReviewCardProps {
  review: { author: string; rating: number; text: string };
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const { author, text, rating } = review;
  return (
    <div>
      <div className="flex items-center gap-x-2 mb-3 xl:mb-4 leading-0">
        <h3 className="text-[14px] xl:text-[16px] font-semibold leading-[170%] xl:leading-[150%]">
          {author}
        </h3>
        <Rating
          initialValue={rating}
          allowFraction
          readonly
          emptyIcon={<StarEmptyIcon className="inline-block mx-0.5 size-4" />}
          fillIcon={<StarFilledIcon className="inline-block mx-0.5 size-4" />}
        />
      </div>
      <p className="text-[12px] xl:text-[14px] font-light leading-[140%] xl:leading-[120%] text-justify">
        {text}
      </p>
    </div>
  );
}
