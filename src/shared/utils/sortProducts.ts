import { Product } from '@/types/product';
import { getAverageRating } from '@/shared/utils/getAverageRating';

export const sortProducts = (
  products: Product[],
  sortParam: string
): Product[] => {
  switch (sortParam) {
    case 'price-ascending':
      return [...products].sort((a, b) => {
        const priceA = a.discountedPrice ?? a.price;
        const priceB = b.discountedPrice ?? b.price;
        return priceA - priceB;
      });

    case 'price-descending':
      return [...products].sort((a, b) => {
        const priceA = a.discountedPrice ?? a.price;
        const priceB = b.discountedPrice ?? b.price;
        return priceB - priceA;
      });
    case 'rating':
      const sortedByRating = [...products].sort(
        (a, b) => getAverageRating(b.reviews) - getAverageRating(a.reviews)
      );
      return sortedByRating;
    case 'popularity':
      return [...products].sort((a, b) => {
        const aIsBestseller = a.isBestseller ? 1 : 0;
        const bIsBestseller = b.isBestseller ? 1 : 0;
        return bIsBestseller - aIsBestseller;
      });
    case 'discount':
      return [...products].sort((a, b) => {
        const discountA = a.discountedPrice ? a.price - a.discountedPrice : 0;
        const discountB = b.discountedPrice ? b.price - b.discountedPrice : 0;
        return discountB - discountA;
      });
    case 'availability':
      return [...products].sort((a, b) => {
        const inStockValue = (stock: string) => (stock === 'in_stock' ? 1 : 0);
        return inStockValue(b.inStock) - inStockValue(a.inStock);
      });
    default:
      return products;
  }
};
