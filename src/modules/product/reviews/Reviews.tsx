import Container from '@/shared/components/container/Container';
import ReviewsSlider from './ReviewsSlider';
import { Product } from '@/types/product';

interface ReviewsProps {
  currentProduct: Product;
}

export default function Reviews({ currentProduct }: ReviewsProps) {
  return (
    <section className="pb-20 xl:pb-30">
      <Container>
        <ReviewsSlider currentProduct={currentProduct} />
      </Container>
    </section>
  );
}
